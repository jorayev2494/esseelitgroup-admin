import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useStatus from "../../useCases/useStatus";
import { useDate } from "@/views/pages/utils/helpers";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useCreate() {

  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const { protectPermission } = useACLProtection();
  const { uuid } = route.params

  const { dateTimeFromTimestamp } = useDate();
  const { statusSelectedPreview, statuses, loadStatusList } = useStatus();

  const inputs = useInputs();

  const form = ref(null);

  const getData = () => form.value;

  const itemMapper = item => {
    item.start_time = dateTimeFromTimestamp(item.start_time);

    if (item.end_time) {
      item.end_time = dateTimeFromTimestamp(item.end_time);
    }

    statusSelectedPreview.value = statuses.value.find(i => i.value === item.for)

    return item;
  }

  const loadItem = () => {
    store.dispatch('announcement/showAnnouncementAsync', { uuid })
      .then(response => {
        form.value = itemMapper(response.data)
      })
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('announcement/updateAnnouncementAsync', { uuid, data: getData() })
        .then(() => {
          router.push({ name: 'announcements' });
        })
    })
  }

  onMounted(() => {
    loadItem()
    loadStatusList()
  })

  return {
    form,
    inputs,
    statusSelectedPreview,
    statuses,

    update,
  }
}
