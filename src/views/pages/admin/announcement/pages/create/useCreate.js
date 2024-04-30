import { onMounted, ref, getCurrentInstance } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useStatus from "../../useCases/useStatus";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { statusSelectedPreview, statuses, loadStatusList } = useStatus();

  const inputs = useInputs();

  const form = ref({
    for: '',
    start_time: '',
    end_time: '',
    translations: {

    },
    is_active: '',
  });

  const getData = () => {

    return form.value;
  };

  const create = () => {
    store.dispatch('announcement/createAnnouncementAsync', { data: getData() })
      .then(() => {
        router.push({ name: 'announcements' });
      })
  }

  onMounted(() => {
    loadStatusList()
  })

  return {
    form,
    inputs,
    statusSelectedPreview,
    statuses,

    create,
  }
}
