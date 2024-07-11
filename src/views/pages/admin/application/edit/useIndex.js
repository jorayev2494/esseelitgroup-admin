import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useAlias, useCountry, useLanguage, useDegree, useUniversity, useFaculty, useDepartment } from '../useCases/usePartials'
import { useStatusInputs, getStatusStyle } from "../useCases/usePartials";
import Tr from '@/services/translations/translation'

export default () => {

  const router = useRouter();
  const store = useStore();
  const route = useRoute();

  const { uuid } = route.params;

  const { aliases, loadAliases } = useAlias()
  const { languages, loadLanguages } = useLanguage()
  const { degrees, loadDegrees } = useDegree()
  const { universities, loadUniversities } = useUniversity()
  const { departments, loadDepartments } = useDepartment()
  const { faculties, loadFaculties } = useFaculty()
  const { countries, loadCountries } = useCountry()

  const statuses = ref([]);
  const statusInputs = useStatusInputs();

  const form = ref({
    // student_uuid: '',
    // alias_uuid: '',
    // language_uuid: '',
    // degree_uuid: '',
    // country_uuid: '',
    // university_uuid: '',
  });

  // #region Department
  const studentUuid = ref(null);
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

  const makeSelectedDepartments = () => {
    form.value.departments = Array.isArray(form.value.departments) ? form.value.departments : [];

    selectedDepartments.value = form.value.departments.map(depart => ({
      uuid: depart.uuid,
      name: depart.name.value, 
    }));
  }

  const loadData = changed => {
    const params = {
      filters: {
        alias_uuids: form.value.alias_uuid?.length ? [form.value.alias_uuid] : [],
        country_uuids: form.value.country_uuid?.length ? [form.value.country_uuid] : [],
        language_uuids: form.value.language_uuid?.length ? [form.value.language_uuid] : [],
        university_uuids: form.value.university_uuid?.length ? [form.value.university_uuid] : [],
        degree_uuids: form.value.degree_uuid?.length ? [form.value.degree_uuid] : [],
      },
    }

    Promise.all(makePromiseValues(changed, params)).then(() => {
      setTimeout(makeDepartmentOptions, 1000);
      // makeDepartmentOptions()
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

    form.value.department_uuids = selectedDepartments.value.map(({ uuid }) => uuid);

    return form.value;
  };

  const mapApplication = application => {
    const { student_uuid, departments } = application;

        studentUuid.value = student_uuid;

    // loadCountries(company_uuid);
    // loadUniversities(company_uuid);
    // loadFaculties(university_uuid);

    if (Array.isArray(application.status.translations)) {
      application.status.translations = {};
    }

    // Promise.all([
    //   loadFaculties(university_uuid),
    //   loadDepartments(university_uuid),
    // ]).then(values => {
    //   setTimeout(() => {
    //     makeDepartmentOptions();
    //     makeSelectedDepartments(departments);
    //   }, 1000);
    // });

    return application;
  }

  const loadApplication = () => {
    return store.dispatch('application/showApplicationAsync', { uuid })
      .then(response => {
        form.value = mapApplication(response.data);

        return response;
      })
  }

  const update = () => {
    store.dispatch('application/updateApplicationAsync', { uuid: uuid, data: getData() })
      .then(() => {
        // const { uuid } = response.data
        router.push(Tr.makeRoute({ name: 'student-show', params: { uuid: studentUuid.value} }))
      })
  }

  const loadStatuses = () => {
    store.dispatch('application/loadApplicationStatusesListAsync').then(response => {
      statuses.value = response.data;
    })
  }

  const clear = () => {
    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {

        if (['status', 'student_uuid'].includes(key)) {
          continue;
        }

        form.value[key] = '';
      }
    }

    loadAliases()
    loadLanguages()
    loadDegrees()
    loadCountries()
    loadUniversities()
    makeSelectedDepartments()
  }

  onMounted(() => {
    loadApplication().then(() => {
      loadAliases()
      loadData()
      loadStatuses()
      setTimeout(makeSelectedDepartments, 1500);
    })
  })

  return {
    form,
    aliases,
    languages,
    degrees,
    countries,
    universities,
    faculties,
    statuses,
    statusInputs,

    selectedDepartments,
    departmentOptions,

    loadData,
    loadFaculties,
    clear,
    update,
    getStatusStyle,
  }
}
