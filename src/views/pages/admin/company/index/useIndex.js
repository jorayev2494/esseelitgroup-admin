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
    { field: 'logo', title: t('company.form.logo') },
    { field: 'name', title: t('company.form.name') },
    { field: 'is_main', title: t('company.form.is_main') },
    // { field: 'status.value', title: t('company.form.status') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadCompanies();
  }

  const companyMapper = company => {
    // company.logo = image(company.logo, 60, 60);
    company.logo = company?.logo?.url ?? defaultImage('logo');
    company.created_at = d(dateFromTimestamp(company.created_at), 'short');

    return company;
  }

  const loadCompanies = () => {
    loading.value = true;

    store.dispatch('company/loadCompaniesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(companyMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    console.log('Remove data: ', data);

    const confirmed = confirm(`Do you want delete the company '${data.value.name}'`);

    if (confirmed) {
      store.dispatch('company/deleteCompanyAsync', data.value.uuid).then(response => {
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
    loadCompanies,

    changeServer,
  }
}
