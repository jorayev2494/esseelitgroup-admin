import { ref } from "vue";
import { useStore } from "vuex";

export const useCompany = () => {

  const companyPreview = ref(null);
  const store = useStore()
  
  const companies = ref([]);

  const loadCompanies = (params = {}) => {
    store.dispatch('company/loadCompanyListAsync', { params }).then(response => {
      companies.value = response.data
    })
  }

  return {
    companyPreview,
    companies,

    loadCompanies,
  }
}

export const useNationality = () => {
  const store = useStore()
  
  const nationalityPreview = ref(null);
  const nationalities = ref([]);

  const loadNationalities = (params = {}) => {
    store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      nationalities.value = response.data
    })
  }

  return {
    nationalityPreview,
    nationalities,

    loadNationalities,
  }
}

export const useCountryOfResidence = () => {
  const store = useStore()
  
  const countryOfResidencePreview = ref(null);
  const countryOfResidences = ref([]);

  const loadCountryOfResidences = (params = {}) => {
    store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      countryOfResidences.value = response.data
    })
  }

  return {
    countryOfResidencePreview,
    countryOfResidences,

    loadCountryOfResidences,
  }
}

export const useHighSchoolCountry = () => {
  const store = useStore()
  
  const highSchoolCountryPreview = ref(null);
  const highSchoolCountries = ref([]);

  const loadHighSchoolCountries = (params = {}) => {
    store.dispatch('country/loadCountryListAsync', { params }).then(response => {
      highSchoolCountries.value = response.data
    })
  }

  return {
    highSchoolCountryPreview,
    highSchoolCountries,

    loadHighSchoolCountries,
  }
}

export const useLanguage = () => {
  const store = useStore()
  
  const languagePreview = ref(null);
  const languages = ref([]);

  const loadLanguages = (params = {}) => {
    store.dispatch('language/loadLanguagesListAsync', { params }).then(response => {
      languages.value = response.data
    })
  }

  return {
    languagePreview,
    languages,

    loadLanguages,
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
