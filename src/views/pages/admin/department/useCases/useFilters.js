import { onMounted, ref } from "vue"
import { useUniversity } from "./useUniversity"
import { useFaculty } from "./useFaculty"
import useDegree from "./useDegree"
import { useLanguage } from "./useLanguage"

export default () => {

  const { universities, loadUniversities } = useUniversity();
  const { faculties, loadFaculties } = useFaculty();
  const { degrees, loadDegrees } = useDegree();
  const { languages, loadLanguages } = useLanguage();

  const facultyOptions = ref([]);

  const filters = ref([
    {
      visibleSelectBox: false,
      label: 'department.form.university',
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
    {
      visibleSelectBox: false,
      label: 'department.form.faculty',
      name: 'faculty_uuids',
      type: 'checkbox',
      // icon: 'fa-university',
      searchable: false,
      searchLabel: 'Faculty',
      labelKey: 'label',
      valueKey: 'value',
      value: [],
      items: facultyOptions,
    },
    {
      visibleSelectBox: false,
      label: 'department.form.degree',
      name: 'degree_uuids',
      type: 'checkbox',
      // icon: 'fa-university',
      searchable: false,
      searchLabel: 'Degree',
      labelKey: 'value',
      valueKey: 'uuid',
      value: [],
      items: degrees,
    },
    {
      visibleSelectBox: false,
      label: 'department.form.language',
      name: 'language_uuids',
      type: 'checkbox',
      // icon: 'fa-university',
      searchable: false,
      searchLabel: 'Language',
      labelKey: 'value',
      valueKey: 'uuid',
      value: [],
      items: languages,
    },
  ])

  const makeFacultyOptions = () => {
    faculties.value.forEach(faculty => {
      facultyOptions.value.push({
        label: faculty.name?.value,
        value: faculty.uuid,
      });
    });
  }

  onMounted(() => {
    loadUniversities()
    loadFaculties()
    loadDegrees()
    loadLanguages()

    setTimeout(makeFacultyOptions, 2200);
  })

  return {
    filters,
  }
}
