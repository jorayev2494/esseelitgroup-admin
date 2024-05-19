import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { getStatusStyle } from "../useCases/usePartials";

export default function useIndex() {
  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'student', title: t('application.form.student') },
    { field: 'language', title: t('application.form.language') },
    { field: 'company', title: t('application.form.company') },
    { field: 'degree.value', title: t('application.form.degree') },
    { field: 'country', title: t('application.form.country') },
    { field: 'university', title: t('application.form.university') },
    { field: 'status', title: t('application.form.status') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadApplications();
  }

  const applicationMapper = application => {
    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const loadApplications = () => {
    loading.value = true;

    store.dispatch('application/loadApplicationsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(applicationMapper);
        console.log('Department data: ', data.data)
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the department '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('application/deleteApplicationAsync', { uuid: data.value.uuid }).then(reloadData);
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
    getStatusStyle,
  }
}
