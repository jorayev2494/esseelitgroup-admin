import { ref } from "vue";
import { useStore } from "vuex";

export const useStatusInputs = () => [
  {
    field: 'note',
    tLabel: null,
    type: 'textarea',
    required: true,
  },
]

export const getStatusClassName = status => {
  const statusClasses = {
    new: 'bg-success-light',
    pending: 'bg-primary-light',
    viewed: 'bg-warning-light'
  }

  return statusClasses[status] ?? 'badge-primary';
}

export const useCompany = () => {
  const store = useStore();

  const companies = ref([]);

  const loadCompanies = () => {
    companies.value = []
    store.dispatch('company/loadCompanyListAsync', {}).then(response => {
      companies.value = response.data;
    })
  }

  return {
    companies,

    loadCompanies,
  }
}

export const useAlias = () => {
  const store = useStore();

  const aliases = ref([]);

  const loadAliases = (params = {}) => {
    aliases.value = []
    store.dispatch('alias/loadAliasListAsync', { params }).then(response => {
      aliases.value = response.data
    });
  }

  return {
    aliases,

    loadAliases
  }
}

export const useLanguage = () => {
  const store = useStore();

  const languages = ref([]);

  const loadLanguages = (params= {}) => {
    languages.value = []
    store.dispatch('language/loadLanguagesListAsync', { params }).then(response => {
      languages.value = response.data;
    })
  }

  return {
    languages,

    loadLanguages,
  }
}

export const useDegree = () => {
  const store = useStore();

  const degrees = ref([]);

  const loadDegrees = (params= {}) => {
    degrees.value = []
    store.dispatch('degree/loadDegreeListAsync', { params }).then(response => {
      degrees.value = response.data;
    })
  }

  return {
    degrees,

    loadDegrees,
  }
}

export const useCountry = () => {
  const store = useStore();

  const countries = ref([]);

  const loadCountries = (params = {}) => {
    countries.value = []
    store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      countries.value = response.data;
    })
  }

  return {
    countries,

    loadCountries,
  }
}

export const useUniversity = () => {
  const store = useStore();

  const universities = ref([]);

  const loadUniversities = (params = {}) => {
    universities.value = []
    store.dispatch('university/loadUniversityListAsync', { params }).then(response => {
      universities.value = response.data.map(({ uuid, name }) => ({ uuid, name }));
    })
  }

  return {
    universities,

    loadUniversities,
  }
}

export const useFaculty = () => {
  const store = useStore();

  const faculties = ref([]);

  const loadFaculties = (params = {}) => {
    faculties.value = []
    store.dispatch('faculty/loadFacultyListAsync', { params }).then(response => {
      faculties.value = response.data;
    })
  }

  return {
    faculties,

    loadFaculties,
  }
}

export const useDepartment = () => {
  const store = useStore();

  const departments = ref([]);

  const loadDepartments = (params = {}) => {
    departments.value = []
    store.dispatch('department/loadDepartmentListAsync', { params }).then(response => {
      departments.value = response.data.map(({ uuid, name, faculty_uuid }) => ({
        uuid,
        name,
        faculty_uuid,
      }));
    })
  }

  return {
    departments,

    loadDepartments,
  }
}
