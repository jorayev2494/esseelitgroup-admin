import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import Tr from '@/services/translations/translation'

export default () => {

  const router = useRouter();
  const store = useStore();
  const route = useRoute();
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const companies = ref([]);
  const universities = ref([]);
  const departments = ref([]);
  const faculties = ref([]);
  const countries = ref([]);
  const statuses = ref([]);
  const additionalDocuments = reactive([]);

  const form = ref({
    full_name: '',
    birthday: '',
    father_name: '',
    mother_name: '',
    passport_number: '',
    phone: '',
    friend_phone: '',
    home_address: '',
    email: '',
    company_uuid: '',
    country_uuid: '',
    university_uuid: '',
    faculty_uuid: '',
    status: '',
    note: '',
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const loadFaculties = universityUuid => {
    store.dispatch('faculty/loadFacultyListAsync', { params: { filter_by_university_uuid: universityUuid } }).then(response => {
      faculties.value = response.data;
    })
  }

  const loadUniversities = companyUuid => {
    store.dispatch('university/loadUniversityListAsync', {
      params: {
        filter_by_company_uuid: companyUuid,
      },
    }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({ uuid, name }));
    })
  }

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', {}).then(response => {
      companies.value = response.data;
    })
  }

  const loadCountries = companyUuid => {
    store.dispatch('country/loadCountryListAsync', {
      params: {
        filter_by_company_uuid: companyUuid,
      }
    }).then(response => {
      countries.value = response.data;
    })
  }

  const loadStatuses = () => {
    store.dispatch('application/loadApplicationStatusesListAsync').then(response => {
      statuses.value = response.data;
    })
  }

  // #region Department
  const selectedDepartments = ref([]);
  const departmentOptions = ref([]);

  const makeDepartmentOptions = () => {
    const res = [];

    faculties.value.forEach(faculty => {
      departments.value.filter
      res.push({
        faculty: faculty.name,
        departments: departments.value.filter(dep => dep.faculty_uuid === faculty.uuid).map(d => ({
          uuid: d.uuid,
          name: d.name,
          category: 'category',
        }))
      })
    });

    departmentOptions.value = res;
  }
  // #endregion

  const loadDepartments = universityUuid => {
    store.dispatch('department/loadDepartmentListAsync', { params: { filter_by_university_uuid: universityUuid } }).then(response => {
      departments.value = response.data.map(({ uuid, name, faculty_uuid }) => ({
        uuid,
        name,
        faculty_uuid,
      }));
    })
  }

  const universityWasChanged = event => {
    const { name, value } = event.target;

    Promise.all([
      loadFaculties(value),
      loadDepartments(value),
    ]).then(values => {
      setTimeout(makeDepartmentOptions, 1000);
    });
  }

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        formData.append(key, value);
      }
    }

    selectedDepartments.value.forEach(({ uuid }, idx) => {
      formData.append(`department_uuids[${idx}]`, uuid);
    });

    formData.append(`additional_documents[]`, []);
    additionalDocuments.forEach(({ document, description }, idx) => {
      formData.append(`additional_documents[${idx}][document]`, document);
      formData.append(`additional_documents[${idx}][description]`, description);
    });

    return formData;
  };

  const clearSelects = () => {
    form.value.country_uuid = null;
    form.value.university_uuid = null;
    form.value.faculty_uuid = null;
  }

  const companyWasChanged = event => {
    const uuid = event.target.value;

    clearSelects()
    universities.value = [];
    faculties.value = [];

    loadCountries(uuid);
    loadUniversities(uuid);
  }

  const create = () => {
    store.dispatch('application/createApplicationAsync', { uuid: form.value.uuid, data: getData() })
      .then(response => {
        const { uuid } = response.data
        router.push(Tr.makeRoute({ name: 'application-show', params: { uuid } }))
      })
  }

  onMounted(() => {
    // loadFaculties()
    loadCompanies()
    // loadCountries()
    // loadUniversities()
    loadStatuses()
  })

  return {
    form,
    activityOptions,
    companies,
    countries,
    universities,
    faculties,
    statuses,
    additionalDocuments,

    selectedDepartments,
    departmentOptions,

    companyWasChanged,
    universityWasChanged,
    loadFaculties,
    create,
  }
}
