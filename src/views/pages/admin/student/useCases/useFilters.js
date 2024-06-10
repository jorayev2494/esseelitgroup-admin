import { onMounted, ref } from "vue"
import { 
  useUniversity,
  // useDegree,
  // useFaculty,
  // useDepartment,
} from "./usePartials"

export default () => {

  const { universities, loadUniversities } = useUniversity();
  // const { degrees, loadDegrees } = useDegree();
  // const { faculties, loadFaculties } = useFaculty();
  // const { departments, loadDepartments } = useDepartment();

  const selectedDepartments = ref([]);
  const departmentOptions = ref([]);

  const filters = ref([
    {
      visibleSelectBox: false,
      label: 'University',
      name: 'university_uuids',
      type: 'checkbox',
      // icon: 'fa-university',
      searchable: false,
      searchLabel: 'University Search',
      labelKey: 'name',
      valueKey: 'uuid',
      value: [],
      items: universities,
    },
    // {
    //   visibleSelectBox: false,
    //   label: 'Degree',
    //   name: 'degree_uuids',
    //   type: 'checkbox',
    //   // icon: 'fa-university',
    //   searchable: false,
    //   searchLabel: 'Degree Search',
    //   labelKey: 'value',
    //   valueKey: 'uuid',
    //   value: [],
    //   items: degrees,
    // },
    // {
    //   visibleSelectBox: false,
    //   label: 'Faculty & Department',
    //   name: 'uuids',
    //   type: 'group-checkbox',
    //   // icon: 'fa-university',
    //   searchable: false,
    //   searchLabel: 'Group Degree Search',
    //   labelKey: 'label',
    //   valueKey: 'value',
    //   value: [],
    //   items: departmentOptions,
    // },
  ])

  // const makeDepartmentOptions = () => {
  //   const res = [];
  //   selectedDepartments.value = [];

  //   faculties.value.forEach(faculty => {
  //     res.push({
  //       label: faculty.name?.value,
  //       value: faculty.uuid,
  //       selected: false,
  //       items: departments.value.filter(dep => dep.faculty_uuid === faculty.uuid).map(d => {
  //         return {
  //           label: d.name?.value,
  //           value: d.uuid,
  //         }
  //       }),
  //     });
  //   });

  //   departmentOptions.value = res;
  // }

  onMounted(() => {
    loadUniversities()
    // loadDegrees()
    // loadFaculties()
    // loadDepartments()

    // setTimeout(makeDepartmentOptions, 2200);
  })

  return {
    filters,
  }
}
