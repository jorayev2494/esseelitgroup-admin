import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useInputs } from '../useCases/usePartials';
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
  const route = useRoute();
  const { nameSelectedPreview, names, loadNamesList, makeNameSelectedPreview } = useName();
  const { aliasesPreview, aliases, loadAliases } = useAlias();
  const { universitiesPreview, universities, loadUniversities } = useUniversity();
  const { facultiesPreview, faculties, loadFaculties } = useFaculty();
  const { languagesPreview, languages, loadLanguages } = useLanguage();
  const { degrees, loadDegrees } = useDegree();
  const { currenciesPreviews, currencies, loadCurrencies } = useCurrency();

  const { uuid } = route.params;

  const inputs = useInputs();

  const translations = {
    name: '',
    description: '',
  }

  const form = ref({
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
    const { name_uuid, university_uuid } = department;

    loadFaculties({
      filters: {
        university_uuids: [university_uuid],
      }
    })
    makeNameSelectedPreview(item => item.uuid === name_uuid)

    return department;
  }

  const loadDepartment = () => {
    store.dispatch('department/showDepartmentAsync', { uuid }).then(response => {
      form.value = mapDepartment(response.data)
    })
  }

  const universityWasChanged = ({ uuid }) => {
    form.value.university_uuid = uuid
    form.value.faculty_uuid = null
    form.value.faculty = null;

    loadFaculties({
      filters: {
        university_uuids: [uuid],
      }
    })
  }

  const getData = () => {
    form.value.is_filled = form.value.is_filled === true ? 1 : 0;

    return form.value;
  };

  const update = () => {
    store.dispatch('department/updateDepartmentAsync', { uuid: route.params.uuid, data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadDepartment()
    loadNamesList()
    loadAliases()
    loadUniversities()
    loadLanguages()
    loadCurrencies()
    loadDegrees()
  })

  return {
    form,
    names,
    aliases,
    inputs,
    universitiesPreview,
    universities,
    facultiesPreview,
    faculties,
    activityOptions,
    languages,
    translations,
    currenciesPreviews,
    currencies,
    nameSelectedPreview,
    degrees,

    universityWasChanged,
    update,
  }
}
