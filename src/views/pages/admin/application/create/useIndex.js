import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useAlias, useCountry, useLanguage, useDegree, useUniversity, useFaculty, useDepartment } from '../useCases/usePartials'
import Tr from '@/services/translations/translation'

export default () => {

  const router = useRouter();
  const store = useStore();
  const route = useRoute();

  const { student_uuid } = route.params;

  const { aliases, loadAliases } = useAlias()
  const { languages, loadLanguages } = useLanguage()
  const { degrees, loadDegrees } = useDegree()
  const { universities, loadUniversities } = useUniversity()
  const { departments, loadDepartments } = useDepartment()
  const { faculties, loadFaculties } = useFaculty()
  const { countries, loadCountries } = useCountry()

  const form = ref({
    student_uuid: '',
    alias_uuid: '',
    language_uuid: '',
    degree_uuid: '',
    country_uuid: '',
    university_uuid: '',
  });

  // #region Department
  const selectedDepartments = ref([]);
  const departmentOptions = ref([]);

  const makeDepartmentOptions = () => {
    const res = [];
    selectedDepartments.value = [];

    faculties.value.forEach(faculty => {
      departments.value.filter
      res.push({
        faculty: faculty.name?.value,
        departments: departments.value.filter(dep => dep.faculty_uuid === faculty.uuid).map(d => {


          return {
            uuid: d.uuid,
            name: d.name?.value,
            category: 'category',
          }
        })
      })
    });

    departmentOptions.value = res;
  }
  // #endregion

  const makePromiseValues = (changed, params) => {
    const value = [];

    value.push(loadCountries(params));
    value.push(loadLanguages(params));
    value.push(loadDegrees(params));
    value.push(loadUniversities(params));
    value.push(loadFaculties(params));
    value.push(loadDepartments(params));

    // switch (changed) {
    //   case 'alias':
    //     value.push(loadCountries(params));
    //     value.push(loadLanguages(params));
    //     value.push(loadDegrees(params));
    //     value.push(loadUniversities(params));
    //     value.push(loadFaculties(params));
    //     value.push(loadDepartments(params));
    //     break;
    //   case 'country':
    //     value.push(loadLanguages(params));
    //     value.push(loadDegrees(params));
    //     value.push(loadUniversities(params));
    //     value.push(loadFaculties(params));
    //     value.push(loadDepartments(params));
    //     break;
    //   case 'language':
    //     value.push(loadDegrees(params));
    //     value.push(loadUniversities(params));
    //     value.push(loadFaculties(params));
    //     value.push(loadDepartments(params));
    //     break;
    //     case 'degree':
    //     value.push(loadUniversities(params));
    //     value.push(loadFaculties(params));
    //     value.push(loadDepartments(params));
    //     break;
    //   case 'university':
    //     value.push(loadFaculties(params));
    //     value.push(loadDepartments(params));
    //     break;
    // }

    return value;
  }

  const loadData = changed => {
    const params = {
      filters: {
        alias_uuids: form.value.alias_uuid.length ? [form.value.alias_uuid] : [],
        country_uuids: form.value.country_uuid.length ? [form.value.country_uuid] : [],
        language_uuids: form.value.language_uuid.length ? [form.value.language_uuid] : [],
        university_uuids: form.value.university_uuid.length ? [form.value.university_uuid] : [],
        degree_uuids: form.value.degree_uuid.length ? [form.value.degree_uuid] : [],
      },
    }

    Promise.all(makePromiseValues(changed, params)).then(() => {
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

    return formData;
  };

  const create = () => {
    store.dispatch('application/createApplicationAsync', { uuid: form.value.uuid, data: getData() })
      .then(response => {
        const { uuid } = response.data
        router.push(Tr.makeRoute({ name: 'student-show', params: { uuid: student_uuid } }))
      })
  }

  const clear = () => {
    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        form.value[key] = '';
      }
    }

    form.value.student_uuid = student_uuid

    loadAliases()
    loadLanguages()
    loadDegrees()
    loadCountries()
    loadUniversities()
  }

  onMounted(() => {
    form.value.student_uuid = student_uuid
    clear()
  })

  return {
    form,
    aliases,
    languages,
    degrees,
    countries,
    universities,
    faculties,

    selectedDepartments,
    departmentOptions,

    loadData,
    loadFaculties,
    clear,
    create,
  }
}
