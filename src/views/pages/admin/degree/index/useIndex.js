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
    { field: 'value', title: t('degree.form.name') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadDegrees();
  }

  const degreeMapper = degree => {
    degree.created_at = d(dateFromTimestamp(degree.created_at), 'short');

    return degree;
  }

  const loadDegrees = () => {
    loading.value = true;

    store.dispatch('degree/loadDegreesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(degreeMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the degree '${data.value.value}'`);

    if (confirmed) {
      store.dispatch('degree/deleteDegreeAsync', { uuid: data.value.uuid })
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
