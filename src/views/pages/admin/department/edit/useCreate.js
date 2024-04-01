import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useInputs } from '../useCases/usePartials';
import useDegree from "../useCases/useDegree";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
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
    const { degrees } = department;

    degreesPreviews.value = degrees.map(({ uuid, value }) => ({ uuid, value }))

    return department;
  }

  const loadDepartment = () => {
    store.dispatch('department/showDepartmentAsync', { uuid }).then(response => {
      form.value = mapDepartment(response.data)
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
    loadDegrees()
  })

  return {
    form,
    inputs,
    activityOptions,
    translations,
    universities,
    faculties,
    degreesPreviews,
    degrees,

    update,
  }
}
