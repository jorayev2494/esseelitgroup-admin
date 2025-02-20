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
    permission_ids: {},
  })
  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'label', title: t('permission.form.label') },
    // { field: 'resource', title: t('permission.form.resource') },
    { field: 'action', title: t('permission.form.action') },
    { field: 'is_active', title: t('permission.form.is_active') },
    // { field: 'created_at', title: t('system.created_at'), type: 'date', rowClass: 'text-bg-danger' },
  ];

  const reloadData = () => {
    items.value = [];
    loadPermissions();
  }

  const permissionMapper = permission => {
    console.log('permission :>> ', permission);
    // permission.created_at = d(dateFromTimestamp(permission.created_at), 'short');
    permission.isRowSelected = () => true;
    // permission.isRowSelected = true;

    return permission;
  }

  const loadPermissions = () => {
    loading.value = true;

    store.dispatch('permission/loadPermissionsListAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.total.value = data.length;
        // items.value = data.map(permissionMapper);

        items.value = Object.groupBy(data.map(permissionMapper), ({ resource }) => resource);

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
    let permissionIds = [];

    for (const res in form.permission_ids) {
      if (Object.prototype.hasOwnProperty.call(form.permission_ids, res)) {
        const perIds = form.permission_ids[res];
        permissionIds = [...permissionIds, ...perIds.map(({ id }) => id)];
      }
    }

    // form.permission_ids = form.permission_ids.map(({ id }) => id);
    form.permission_ids = permissionIds;

    return form;
  }

  const updatePermissions = () => {
    store.dispatch('role/updatePermissionsAsync', { uuid, data: getData() })
      .then(response => {
        toast.success('Updated')
      })
      .catch(error => error);
  }

  const selectedRows = (resource, selectedItems) => {
    form.permission_ids[resource] = selectedItems
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  /**
   * @param {Array} rolePermissions
   */
  const rolePermissions = rolePermissions => {
    rolePermissions.forEach(item => {
      selectedRowss.value.push(item);
    });

    // rolePermissions.forEach(({ id }) => {
    //   table.value.selectRow(
    //     items.value.findIndex(p => p.id === id)
    //   )
    // });
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
