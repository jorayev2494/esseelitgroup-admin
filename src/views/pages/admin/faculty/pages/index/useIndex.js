import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();
  const { checkPermissions, protectPermission } = useACLProtection();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'name', title: t('faculty.form.name') },
    { field: 'university', title: t('faculty.form.name') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_UPDATE, RESOURCE_ACTIONS.RESOURCE_DELETE]), headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadFaculties();
  }

  const facultyMapper = faculty => {
    faculty.logo = image(faculty.logo);

    faculty.created_at = d(dateFromTimestamp(faculty.created_at), 'short');

    return faculty;
  }

  const loadFaculties = () => {
    loading.value = true;

    store.dispatch('faculty/loadFacultiesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(facultyMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the faculty '${data.value.name}'`);

    if (confirmed) {
      protectPermission(RESOURCE_ACTIONS.RESOURCE_DELETE).then(() => {
        store.dispatch('faculty/deleteFacultyAsync', { uuid: data.value.uuid }).then(reloadData);
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

    items,
    columns,
    loading,
    remove,

    paginator,
    loadFaculties,

    changeServer,
  }
}
