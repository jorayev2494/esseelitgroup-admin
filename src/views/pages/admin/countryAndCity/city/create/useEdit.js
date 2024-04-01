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
    country_uuid: '',
    value: '',
    translations: {},
    // is_active: true,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('city/createCityAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'countries' });
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
