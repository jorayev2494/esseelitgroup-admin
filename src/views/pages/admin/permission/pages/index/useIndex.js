import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { rowBgClass } from '../../useCases/useTable'
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();
  const { checkPermissions, protectPermission } = useACLProtection();

  const table = ref(null)
  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'label', title: t('permission.form.label') },
    { field: 'resource', title: t('permission.form.resource') },
    { field: 'action', title: t('permission.form.action') },
    { field: 'is_active', title: t('permission.form.is_active') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_UPDATE]), headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadPermissions();
  }

  const roleMapper = role => {
    role.created_at = d(dateFromTimestamp(role.created_at), 'short');

    return role;
  }

  const loadPermissions = () => {
    loading.value = true;

    store.dispatch('permission/loadPermissionsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data)
        items.value = data.data.map(roleMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();    
  });

  return {
    RESOURCE_ACTIONS,

    table,
    items,
    columns,
    loading,

    paginator,
    rowBgClass,

    changeServer,
  }
}
