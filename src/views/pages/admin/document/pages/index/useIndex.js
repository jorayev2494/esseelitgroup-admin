import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image, defaultImage } = useUrlPattern();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate()

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'title', title: t('document.form.title') },
    { field: 'type', title: t('document.form.type') },
    { field: 'is_active', title: t('document.form.is_active') },
    { field: 'file.downloaded_count', title: t('document.form.downloaded_count') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const itemMapper = company => {
    company.created_at = d(dateFromTimestamp(company.created_at), 'short');

    return company;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('document/loadDocumentsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(itemMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    console.log('Remove data: ', data);

    const confirmed = confirm(`Do you want delete the document '${data.value.name}'`);

    if (confirmed) {
      store.dispatch('document/deleteDocumentAsync', data.value.uuid).then(response => {
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
