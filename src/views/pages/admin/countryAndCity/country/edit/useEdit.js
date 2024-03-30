import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;

  const form = ref({});
  const companies = ref([])

  const loadUniversity = () => {
    store.dispatch('country/showCountryAsync', uuid)
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', { params: {} }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }))
    })
  }

  const update = () => {
    store.dispatch('country/updateCountryAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'countries' });
      })
  }

  onMounted(() => {
    loadUniversity()
    loadCompanies()
  })

  return {
    form,
    companies,

    update,
  }
}
