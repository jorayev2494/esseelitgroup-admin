import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useDate } from "@/views/pages/utils/helpers";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function userEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { separator, dateFromTimestamp, formatDate } = useDate();
  const { d } = useI18n()
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const facultiesAndDepartments = ref([]);

  const form = ref(null);
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const mapApplication = application => {
    const { birthday } = application;

    application.birthday = d(dateFromTimestamp(birthday), 'short');

    buildFacultiesAndDepartments(application);

    return application
  }

  const buildFacultiesAndDepartments = ({ departments }) => {
    const res = [];

    departments.forEach(({ faculty }) => {
      if (res.filter(f => f.uuid === faculty.uuid).length === 0) {
        res.push({
          uuid: faculty.uuid,
          name: faculty.name,
          departments: departments.filter(d => d.faculty_uuid === faculty.uuid).map(({ uuid, name }) => ({ uuid, name })),
        })
      }
    });

    facultiesAndDepartments.value = res;
  }

  const showApplication = () => {
    store.dispatch('application/showApplicationAsync', { uuid }).then(response => {
      form.value = mapApplication(response.data);
    })
  }

  const getData = () => form.value;

  const update = () => {
    store.dispatch('application/updateApplicationAsync', { uuid: form.value.uuid, data: getData() })
      .then(() => {
        // router.push({ name: 'applications' });
      })
  }

  onMounted(() => {
    showApplication()
  })

  return {
    form,
    // detailColumns,
    activityOptions,
    facultiesAndDepartments,

    update,
  }
}
