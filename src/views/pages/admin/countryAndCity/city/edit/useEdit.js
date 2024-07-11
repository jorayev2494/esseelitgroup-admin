import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../useCases/useCountry";
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { countries, loadCountries } = useCountry();
  const { uuid } = route.params;

  const form = ref({});
  const inputs = useInput();

  const loadCity = () => {
    store.dispatch('city/showCityAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    store.dispatch('city/updateCityAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'countries' });
      })
  }

  onMounted(() => {
    loadCity();
    loadCountries();
  })

  return {
    form,
    inputs,
    countries,

    update,
  }
}
