import { ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const form = ref({
    value: '',
    iso: '',
    is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('country/createCountryAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'countries' });
      })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  return {
    form,

    create,
  }
}
