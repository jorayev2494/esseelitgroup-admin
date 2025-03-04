import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useStatus from "../../useCases/useStatus";
import { useDate } from "@/views/pages/utils/helpers";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { dateTimeFromTimestamp } = useDate();
  const { statusSelectedPreview, statuses, loadStatusList } = useStatus();

  const inputs = useInputs();
  const { protectPermission } = useACLProtection();

  const form = ref({
    for: '',
    start_time: '',
    end_time: '',
    translations: {

    },
    is_active: true,
  });

  const getData = () => {

    return form.value;
  };

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(() => {
      store.dispatch('announcement/createAnnouncementAsync', { data: getData() })
        .then(() => {
          router.push({ name: 'announcements' });
        })
    })
  }

  onMounted(() => {
    loadStatusList();

    if ('start_time' in form.value) {
      form.value.start_time = dateTimeFromTimestamp(Math.floor(Date.now() / 1000));
    }
  })

  return {
    RESOURCE_ACTIONS,
  
    form,
    inputs,
    statusSelectedPreview,
    statuses,

    create,
  }
}
