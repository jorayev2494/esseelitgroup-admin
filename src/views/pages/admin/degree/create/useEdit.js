import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany } from "../useCases/useCompany";
import { useInput } from "../useCases/useInput";


export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const { companies, loadCompanies } = useCompany();
  const inputs = useInput();

  const form = ref({
    company_uuid: '',
    value: '',
    translations: {},
    // is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('degree/createDegreeAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'degrees' });
      })
  }

  onMounted(() => {
    loadCompanies()
  })

  return {
    form,
    inputs,
    companies,

    create,
  }
}
