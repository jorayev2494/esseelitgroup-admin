import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function userEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const universities = ref([]);
  const faculties = ref([]);
  const countries = ref([]);
  const statuses = ref([]);

  const form = ref(null);
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const showApplication = () => {
    store.dispatch('application/showApplicationAsync', { uuid }).then(response => {
      const { university_uuid, company_uuid } = response.data;

      form.value = response.data
      loadUniversities(company_uuid)
      loadFaculties(university_uuid)
    })
  }

  const loadFaculties = uuid => {
    store.dispatch('faculty/loadFacultyListAsync', { params: { filter_by_university_uuid: uuid } }).then(response => {
      faculties.value = response.data;
    })
  }

  const loadUniversities = uuid => {
    store.dispatch('university/loadUniversityListAsync', { params: { filter_by_company_uuid: uuid } }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({ uuid, name }));
    })
  }

  const loadCountries = () => {
    store.dispatch('country/loadCountryListAsync').then(response => {
      countries.value = response.data;
    })
  }


  const loadStatuses = () => {
    store.dispatch('application/loadApplicationStatusesListAsync').then(response => {
      statuses.value = response.data;
    })
  }

  const getData = () => form.value;

  const update = () => {
    store.dispatch('application/updateApplicationAsync', { uuid: form.value.uuid, data: getData() })
      .then(() => {
        // router.push({ name: 'applications' });
      })
  }

  onMounted(() => {
    showApplication()
    loadFaculties()
    loadStatuses()
    // loadUniversities()
  })

  return {
    form,
    activityOptions,
    universities,
    faculties,
    statuses,

    update,
  }
}
