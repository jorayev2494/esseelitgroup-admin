import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useName } from "../useCases/useName";
import { useAlias } from "../useCases/useAlias";
import { useUniversity } from "../useCases/useUniversity";
import { useFaculty } from "../useCases/useFaculty";
import { useLanguage } from "../useCases/useLanguage";
import useDegree from "../useCases/useDegree";
import useCurrency from "../useCases/useCurrency";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();
  const { nameSelectedPreview, names, loadNamesList } = useName();
  const { aliasesPreview, aliases, loadAliases } = useAlias();
  const { universitiesPreview, universities, loadUniversities } = useUniversity();
  const { facultiesPreview, faculties, loadFaculties } = useFaculty();
  const { languagesPreview, languages, loadLanguages } = useLanguage();
  const { degreesPreviews, degrees, loadDegrees } = useDegree();
  const { currenciesPreviews, currencies, loadCurrencies } = useCurrency();

  const logoPreview = ref(null);

  const inputs = useInputs();

  const translations = {
    description: '',
  }

  const form = reactive({
    name_uuid: '',
    alias_uuid: '',
    university_uuid: '',
    faculty_uuid: '',
    language_uuid: '',
    degree_uuid: '',
    translations: {},
    price: '',
    price_currency_uuid: '',
    is_filled: false,
    is_active: '',
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const makeTranslationsForm = (form, translations) => {
    const clientSupportedLocales = getCurrentInstance().appContext.config.globalProperties.$clientSupportedLocales;

    clientSupportedLocales.forEach(locale => {
      form.translations[locale] = { ...translations };
    });
  }

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const universityWasChanged = ({ uuid }) => {
    form.university_uuid = uuid
    form.faculty_uuid = null
    form.faculty = null;
    facultiesPreview.value = null;

    loadFaculties({
      filters: {
        university_uuids: [uuid],
      }
    })
  }

  const getData = () => {
    form.is_filled = form.is_filled === true ? 1 : 0;

    return form;
  };

  const create = () => {
    store.dispatch('department/createDepartmentAsync', { data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadNamesList()
    loadAliases()
    loadUniversities()
    loadFaculties()
    loadLanguages()
    loadDegrees()
    loadCurrencies()
    logoPreview.value = image(logoPreview.value)
    makeTranslationsForm(form, translations)
  })

  return {
    form,
    names,
    aliasesPreview,
    aliases,
    inputs,
    universitiesPreview,
    universities,
    facultiesPreview,
    faculties,
    languages,
    languagesPreview,
    activityOptions,
    translations,
    logoPreview,
    degrees,
    degreesPreviews,
    currenciesPreviews,
    currencies,
    nameSelectedPreview,
    
    uploadLogo,
    create,
    universityWasChanged,
  }
}
