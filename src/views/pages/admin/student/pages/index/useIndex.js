import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useApplicationStatusStyle } from "../../../../useCases/useApplicationStatusStyle";
import useFilters from "../../useCases/useFilters";
import useSearch from "@/views/pages/utils/useSearch";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from 'vue3-toastify';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { filters } = useFilters();
  const { image } = useUrlPattern();
  const { form: searchForm, toQueryParams } = useSearch('full_name');
  const { checkPermissions, protectPermission } = useACLProtection();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'full_name', title: t('student.form.full_name') },
    { field: 'application_language', title: t('student.application.language') },
    { field: 'application_degree', title: t('student.application.degree') },
    { field: 'application_country', title: t('student.application.country') },
    { field: 'application_university', title: t('student.application.university') },
    { field: 'application_departments', title: t('student.application.departments') },
    { field: 'application_status', title: t('student.application.status') },
    // { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_SHOW, RESOURCE_ACTIONS.RESOURCE_UPDATE, RESOURCE_ACTIONS.RESOURCE_DELETE]), headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = (params = {}) => {
    items.value = [];
    loadStudents(params);
  }

  const loadFilters = filters => {
    reloadData({ filters })
  }

  const studentMapper = student => {
    student.avatar = image(student.avatar);
    student.applications.forEach(application => {
      application.university.logo = image(application.university.logo);
    });

    // if (student.avatar?.url === undefined) {
    //   student.avatar = {
    //     url: defaultImage('avatar'),
    //   };
    // }

    student.created_at = d(new Date(student.created_at * 1000), 'short');

    return student;
  }

  const statusSelected = ({ uuid }) => {
    reloadData({
      filters: {
        status_value_uuids: [uuid],
      },
    })
  }

  const clearSelected = () => reloadData()

  const loadStudents = (params = {}) => {
    loading.value = true;

    store.dispatch('student/loadStudentsAsync', { params: { ...paginator.toQueryParams(), ...toQueryParams(), ...params } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(studentMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the student '${data.value.full_name}'`);

    if (confirmed) {
      protectPermission(RESOURCE_ACTIONS.RESOURCE_DELETE).then(() => {
        store.dispatch('student/deleteStudentAsync', { uuid: data.value.uuid }).then(() => {
          toast.success(t('student.flash_messages.success.student_was_deleted'));
          reloadData();
        });
      })
    }
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
  });

  return {
    RESOURCE_ACTIONS,

    searchForm,
    items,
    columns,
    loading,
    filters,
    remove,

    paginator,

    changeServer,
    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    loadFilters,
  }
}
