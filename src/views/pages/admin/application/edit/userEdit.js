import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useDate } from "@/views/pages/utils/helpers";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { toast } from "vue3-toastify";

export default function userEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { separator, dateFromTimestamp, formatDate } = useDate();
  const { image } = useUrlPattern();
  const { d } = useI18n();

  const { uuid } = route.params;

  const companies = ref([]);
  const universities = ref([]);
  const faculties = ref([]);
  const countries = ref([]);
  const departments = ref([]);
  const statuses = ref([]);

  const form = ref(null);
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const mapApplication = application => {
    const { university_uuid, company_uuid, birthday, departments } = application;

    application.birthday = formatDate(dateFromTimestamp(birthday));
    
    loadCountries(company_uuid);
    loadUniversities(company_uuid)
    loadFaculties(university_uuid)

    Promise.all([
      loadFaculties(university_uuid),
      loadDepartments(university_uuid),
    ]).then(values => {
      setTimeout(() => {
        makeDepartmentOptions();
        makeSelectedDepartments(departments);
      }, 1000);
    });

    return application;
  }

  const showApplication = () => {
    store.dispatch('application/showApplicationAsync', { uuid }).then(response => {
      form.value = mapApplication(response.data);
    })
  }

  const loadFaculties = universityUuid => {
    store.dispatch('faculty/loadFacultyListAsync', { params: { filter_by_university_uuid: universityUuid } }).then(response => {
      faculties.value = response.data;
    })
  }

  const loadUniversities = uuid => {
    store.dispatch('university/loadUniversityListAsync', { params: { filter_by_company_uuid: uuid } }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({ uuid, name }));
    })
  }

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', {}).then(response => {
      companies.value = response.data;
    })
  }

  const clearSelects = () => {
    form.value.country_uuid = null;
    form.value.university_uuid = null;
    form.value.faculty_uuid = null;
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

  // #region Departments
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

  const universityWasChanged = event => {
    const { name, value } = event.target;

    Promise.all([
      loadFaculties(value),
      loadDepartments(value),
    ]).then(values => {
      setTimeout(makeDepartmentOptions, 1000);
    });
  }

  const loadDepartments = universityUuid => {
    store.dispatch('department/loadDepartmentListAsync', { params: { filter_by_university_uuid: universityUuid } }).then(response => {
      departments.value = response.data.map(({ uuid, name, faculty_uuid }) => ({
        uuid,
        name,
        faculty_uuid,
      }));
    })
  }

  const makeSelectedDepartments = selectedDeps => {
    console.log('makeSelectedDepartments departments departments: ', departments.value)
    selectedDeps.forEach(({ uuid, name }) => {
      selectedDepartments.value.push({
        uuid,
        // name: name ?? uuid ?? 'name name',
        name: departments.value.find(dep => dep.uuid === uuid)?.name,
        category: "category",
      });
    })
  }
  // #endregoin

  const companyWasChanged = event => {
    const uuid = event.target.value;

    console.log('CompanyWasChanged Uuid: ', uuid)

    clearSelects();
    // companies.value = [];
    universities.value = [];
    faculties.value = [];

    loadCountries(uuid);
    loadUniversities(uuid);
  }

  const loadStatuses = () => {
    store.dispatch('application/loadApplicationStatusesListAsync').then(response => {
      statuses.value = response.data;
    })
  }

  const getData = () => {
    form.value.department_uuids = [];

    selectedDepartments.value.forEach(({ uuid }) => {
      form.value.department_uuids.push(uuid);
    });

    return form.value
  };

  const update = () => {
    store.dispatch('application/updateApplicationAsync', { uuid: form.value.uuid, data: getData() })
      .then(() => {
        // router.push({ name: 'applications' });
        toast.success('Success updated');
      })
  }

  onMounted(() => {
    showApplication()
    loadCompanies()
    // loadFaculties()
    loadStatuses()
    // loadUniversities()
    // makeDepartmentOptions()
  })

  return {
    form,
    activityOptions,
    companies,
    countries,
    universities,
    faculties,
    statuses,
    universityWasChanged,

    selectedDepartments,
    departmentOptions,

    companyWasChanged,
    loadFaculties,
    update,
  }
}
