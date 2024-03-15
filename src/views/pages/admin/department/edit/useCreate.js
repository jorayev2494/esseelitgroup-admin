import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useInputs } from '../useCases/usePartials';
import useCompany from '../../globalUseCases/useCompany';

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { companies, loadCompanies } = useCompany()

  const { uuid } = route.params;

  const universities = ref([]);
  const faculties = ref([]);

  const inputs = useInputs();

  const translations = {
    name: '',
    description: '',
  }

  const form = ref({
    company_uuid: '',
    university_uuid: '',
    faculty_uuid: '',
    is_active: true,
    translations: {},
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const mapDepartment = department => {
    const { company_uuid, university_uuid } = department;

    loadUniversities({
      filter_by_company_uuid: company_uuid,
    });

    loadFaculties({
      filter_by_university_uuid: university_uuid,
    })

    return department;
  }

  const loadDepartment = () => {
    store.dispatch('department/showDepartmentAsync', { uuid }).then(response => {
      form.value = mapDepartment(response.data)
    })
  }

  const loadUniversities = (params = {}) => {
    store.dispatch('university/loadUniversityListAsync', { params }).then(response => {
      universities.value = response.data;
    })
  }

  const loadFaculties = (params) => {
    store.dispatch('faculty/loadFacultyListAsync', { params }).then(response => {
      faculties.value = response.data;
    })
  }

  const companyWasChanged = event => {
    const uuid = event.target.value;
    
    form.value.university_uuid = null;
    form.value.faculty_uuid = null;

    universities.value = [];
    faculties.value = [];

    loadUniversities({
      filter_by_company_uuid: uuid,
    });
  }

  const universityWasChanged = event => {
    const uuid = event.target.value;

    form.value.faculty_uuid = null;

    faculties.value = [];

    loadFaculties({
      filter_by_university_uuid: uuid,
    })
  }

  const getData = () => form.value;

  const update = () => {
    store.dispatch('department/updateDepartmentAsync', { uuid: route.params.uuid, data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadDepartment()
    loadCompanies()
  })

  return {
    form,
    companies,
    inputs,
    activityOptions,
    translations,
    universities,
    faculties,

    companyWasChanged,
    universityWasChanged,
    update,
    loadFaculties,
  }
}
