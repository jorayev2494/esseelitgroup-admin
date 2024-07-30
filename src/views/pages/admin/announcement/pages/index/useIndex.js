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
    { field: 'author', title: t('announcement.form.author') },
    { field: 'title', title: t('announcement.form.title') },
    { field: 'start_time', title: t('announcement.form.start_time') },
    { field: 'end_time', title: t('announcement.form.end_time') },
    { field: 'for', title: t('announcement.form.for') },
    { field: 'is_active', title: t('announcement.form.is_active') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_UPDATE, RESOURCE_ACTIONS.RESOURCE_DELETE]), headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const announcementMapper = announcement => {
    announcement.author.avatar = image(announcement.author.avatar)
    announcement.start_time = d(dateFromTimestamp(announcement.start_time), 'long')
    if (announcement.end_time) {
      announcement.end_time = d(dateFromTimestamp(announcement.end_time), 'long')
    }
    announcement.created_at = d(dateFromTimestamp(announcement.created_at), 'short')

    return announcement;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('announcement/loadAnnouncementsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(announcementMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the announcement '${data.value.title}'`);

    if (confirmed) {
      protectPermission(RESOURCE_ACTIONS.RESOURCE_DELETE).then(() => {
        store.dispatch('announcement/deleteAnnouncementAsync', { uuid: data.value.uuid }).then(reloadData);
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
    loadItems,

    changeServer,
  }
}
