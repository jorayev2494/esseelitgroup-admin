import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { toast } from "vue3-toastify";
import { rowBgClass } from '../../useCases/useTable'

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();
  const route = useRoute();
  const { uuid } = route.params;

  const table = ref(null)
  const form = reactive({
    permission_ids: [],
  })
  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'label', title: t('permission.form.label') },
    { field: 'resource', title: t('permission.form.resource') },
    { field: 'action', title: t('permission.form.action') },
    { field: 'is_active', title: t('permission.form.is_active') },
    { field: 'created_at', title: t('system.created_at'), type: 'date', rowClass: 'text-bg-danger' },
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

    store.dispatch('permission/loadPermissionsListAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.total.value = data.length;
        // items.value = data.map(roleMapper);

        items.value = Object.groupBy(data.map(roleMapper), ({ resource }) => resource);

        loadRolePermissionsList()
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const loadRolePermissionsList = () => {
    store.dispatch('permission/loadRolePermissionsListAsync', { roleUuid: uuid })
      .then(response => {
        const { data } = response;

        rolePermissions(data)
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  }

  const getData = () => {
    form.permission_ids = form.permission_ids.map(({ id }) => id);

    return form;
  }

  const updatePermissions = () => {
    store.dispatch('role/updatePermissionsAsync', { uuid, data: getData() })
      .then(response => {
        toast.success('Updated')
      })
      .catch(error => error);
  }

  const selectedRows = selectedItems => {
    form.permission_ids = selectedItems
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  /**
   * @param {Array} rolePermissions
   */
  const rolePermissions = rolePermissions => {
    rolePermissions.forEach(({ id }) => {
      table.value.selectRow(
        items.value.findIndex(p => p.id === id)
      )
    });
  }

  onMounted(() => {
    reloadData();
    // loadRolePermissionsList()
    
  });

  return {
    table,
    items,
    columns,
    loading,

    paginator,
    updatePermissions,
    rowBgClass,

    changeServer,
    selectedRows,
  }
}
