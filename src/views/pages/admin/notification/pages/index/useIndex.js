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
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();
  const { checkPermissions, protectPermission } = useACLProtection();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'content', title: t('notification.context_title'), cellClass: 'notification-list' },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    // { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_UPDATE, RESOURCE_ACTIONS.RESOURCE_DELETE]), headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadDegrees();
  }

  const degreeMapper = degree => {
    degree.created_at = d(dateFromTimestamp(degree.created_at), 'long');

    return degree;
  }

  const loadDegrees = () => {
    loading.value = true;

    store.dispatch('notification/loadNotificationsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(degreeMapper);
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

    items,
    columns,
    loading,

    paginator,

    changeServer,
  }
}
