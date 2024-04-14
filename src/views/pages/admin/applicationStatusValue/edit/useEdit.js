import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  const { uuid } = route.params;

  const form = ref({
    // color: '',
    // is_required_note: true,
    // translations: {},
    // // is_active: true,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const loadStatus = () => {
    store.dispatch('applicationStatusValue/showStatusAsync', { uuid })
      .then(response => {
        form.value = response.data
      })
  }

  const update = () => {
    store.dispatch('applicationStatusValue/updateStatusAsync', { uuid, data: decorateData() })
      .then(() => {
        router.push({ name: 'application-statuses' });
      })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadStatus()
  })

  return {
    form,
    inputs,

    update,
  }
}
