import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const universities = ref([]);
  const faculties = ref([]);

  const translations = {
    name: '',
    description: '',
  }

  const form = ref({
    faculty_uuid: '',
    is_active: '',
    translations: {},
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const loadDepartment = () => {
    store.dispatch('department/showDepartmentAsync', { uuid }).then(response => {
      form.value = response.data
    })
  }

  const loadUniversities = () => {
    store.dispatch('university/loadUniversityListAsync', {
      params: {
        
      }
    }).then(response => {
      universities.value = response.data;
    })
  }

  const loadFaculties = ({ target }) => {
    const universityUuid = target.value;

    store.dispatch('faculty/loadFacultyListAsync', {
      params: {
        filter_by_university_uuid: universityUuid,
      }
    }).then(response => {
      faculties.value = response.data;
    })
  }

  const getData = () => form.value;

  const create = () => {
    store.dispatch('department/createDepartmentAsync', { data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadUniversities()
    loadDepartment()

    store.dispatch('faculty/loadFacultyListAsync', {
      params: {
        
      }
    }).then(response => {
      faculties.value = response.data;
    })
  })

  return {
    form,
    activityOptions,
    translations,
    universities,
    faculties,

    create,
    loadFaculties,
  }
}
