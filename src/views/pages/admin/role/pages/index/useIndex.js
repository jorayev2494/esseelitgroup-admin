import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'name', title: t('role.form.name') },
    // { field: 'is_admin', title: t('role.form.is_admin') },
    { field: 'is_active', title: t('role.form.is_active') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadRoles();
  }

  const roleMapper = role => {
    role.created_at = d(dateFromTimestamp(role.created_at), 'short');

    return role;
  }

  const loadRoles = () => {
    loading.value = true;

    store.dispatch('role/loadRolesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(roleMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the role '${data.value.name}'`);

    if (confirmed) {
      store.dispatch('role/deleteRoleAsync', { uuid: data.value.uuid })
        .then(() => {
          reloadData()
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
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
  }
}
