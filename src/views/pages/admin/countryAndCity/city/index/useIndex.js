import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
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
    { field: 'value', title: t('city.form.name') },
    { field: 'country.value', title: t('city.form.country') },
    // { field: 'company.name', title: t('city.form.company') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadCountries();
  }

  const countryMapper = country => {
    country.created_at = d(dateFromTimestamp(country.created_at), 'short');

    return country;
  }

  const loadCountries = () => {
    loading.value = true;

    store.dispatch('city/loadCitiesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(countryMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the city '${data.value.value}'`);

    if (confirmed) {
      store.dispatch('city/deleteCityAsync', { uuid: data.value.uuid })
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
