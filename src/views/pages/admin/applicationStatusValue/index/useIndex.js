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
    { field: 'value', title: t('applicationStatusValue.form.value') },
    { field: 'text_color', title: t('applicationStatusValue.form.text_color') },
    { field: 'background_color', title: t('applicationStatusValue.form.background_color') },
    { field: 'is_required_note', title: t('applicationStatusValue.form.is_required_note') },
    { field: 'is_first', title: t('applicationStatusValue.form.is_first') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadApplicationStatuses();
  }

  const applicationStatusMapper = applicationStatus => {
    applicationStatus.created_at = d(dateFromTimestamp(applicationStatus.created_at), 'short');

    return applicationStatus;
  }

  const loadApplicationStatuses = () => {
    loading.value = true;

    store.dispatch('applicationStatusValue/loadStatusesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(applicationStatusMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the city '${data.value.value}'`);

    if (confirmed) {
      store.dispatch('applicationStatusValue/deleteStatusAsync', { uuid: data.value.uuid })
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
