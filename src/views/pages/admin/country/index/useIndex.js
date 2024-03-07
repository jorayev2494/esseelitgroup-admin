import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t } = useI18n();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'value', title: t('country.form.name') },
    { field: 'iso', title: t('country.form.iso') },
    { field: 'company.name', title: t('country.form.company') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadCountries();
  }

  const countryMapper = company => {
    return company;
  }

  const loadCountries = () => {
    loading.value = true;

    store.dispatch('country/loadCountriesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(countryMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the country '${data.value.slug}'`);

    if (confirmed) {
      store.dispatch('country/deleteCountryAsync', { uuid: data.value.uuid })
        .then(response => {
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
