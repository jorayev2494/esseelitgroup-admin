import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useInputs } from '../useCases/usePartials';
import useCompany from '../../globalUseCases/useCompany';
import useDegree from "../useCases/useDegree";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { companies, loadCompanies } = useCompany()
  const { degreesPreviews, degrees, loadDegrees } = useDegree();

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
    const { company_uuid, university_uuid, degrees } = department;

    const params = {
      filters: {
        company_uuid: company_uuid,
      }
    };

    loadFaculties({
      filters: {
        university_uuids: [university_uuid],
      }
    })

    loadUniversities(params);
    loadDegrees(params);

    degreesPreviews.value = degrees.map(({ uuid, value }) => ({ uuid, value }))

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

    const params = {
      filters: {
        company_uuid: uuid,
      }
    };

    loadUniversities(params);
    loadDegrees(params);    
  }

  const universityWasChanged = event => {
    const uuid = event.target.value;

    form.value.faculty_uuid = null;

    faculties.value = [];

    loadFaculties({
      filters: {
        university_uuid: uuid,
      }
    })
  }

  const getData = () => {
    form.value.is_filled = form.value.is_filled === true ? 1 : 0;

    form.value.degree_uuids = degreesPreviews.value.map(({ uuid }) => uuid)
                                                  .filter((v, i, self) => i == self.indexOf(v));

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
    degreesPreviews,
    degrees,

    companyWasChanged,
    universityWasChanged,
    update,
    loadFaculties,
  }
}
