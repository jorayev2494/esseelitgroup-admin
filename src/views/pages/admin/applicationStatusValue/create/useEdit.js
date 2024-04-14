import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../useCases/useCountry";
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { countries, loadCountries } = useCountry();

  const form = ref({
    text_color: '',
    background_color: '',
    is_required_note: true,
    translations: {},
    // is_active: true,
    is_first: false,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('applicationStatusValue/createStatusAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'application-statuses' });
      })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadCountries()
  })

  return {
    form,
    inputs,
    countries,

    create,
  }
}
