import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany } from "../useCases/useCompany";
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { companies, loadCompanies } = useCompany();
  const { uuid } = route.params;

  const form = ref({});
  
  const inputs = useInput();

  const loadCity = () => {
    store.dispatch('degree/showDegreeAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    store.dispatch('degree/updateDegreeAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'degrees' });
      })
  }

  onMounted(() => {
    loadCity();
    loadCompanies();
  })

  return {
    form,
    inputs,
    companies,

    update,
  }
}
