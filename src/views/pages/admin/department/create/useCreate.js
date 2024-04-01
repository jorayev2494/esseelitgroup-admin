import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import useDegree from "../useCases/useDegree";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const { degreesPreviews, degrees, loadDegrees } = useDegree();

  const logoPreview = ref(null);

  const inputs = useInputs();

  const translations = {
    name: '',
    description: '',
  }

  const form = reactive({
    degree_uuids: [],
    translations: {},
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

  const getData = () => {
    form.is_filled = form.is_filled === true ? 1 : 0;

    form.degree_uuids = degreesPreviews.value.map(({ uuid }) => uuid)
                                            .filter((v, i, self) => i == self.indexOf(v));

    return form;
  };

  const create = () => {
    store.dispatch('department/createDepartmentAsync', { data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadDegrees()
    logoPreview.value = image(logoPreview.value)
    makeTranslationsForm(form, translations)
  })

  return {
    form,
    inputs,
    activityOptions,
    translations,
    logoPreview,
    degrees,
    degreesPreviews,

    uploadLogo,
    create,
  }
}
