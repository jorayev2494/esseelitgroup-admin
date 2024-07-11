import { ref } from "vue";
import { useStore } from "vuex"

export const useInputs = () => [
  // {
  //   field: 'name',
  //   tLabel: 'faculty.form.name',
  //   type: 'text',
  // },
  // {
  //   field: 'label',
  //   tLabel: 'faculty.form.label',
  //   type: 'text',
  // },
  {
    field: 'description',
    tLabel: 'faculty.form.description',
    type: 'ckeditor',
  },
];

export const useCompanies = () => {
  const store = useStore();

  const companies = ref([]);

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', { params: {} }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }))
    })
  }

  return {
    companies,
    loadCompanies,
  }
}

