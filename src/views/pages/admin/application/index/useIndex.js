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
  const { defaultImage } = useUrlPattern();

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

  const reloadData = (params = {}) => {
    items.value = [];
    loadApplications(params);
  }

  const applicationMapper = application => {
    if (application.student.avatar?.url === undefined) {
      application.student.avatar = {
        url: defaultImage('avatar'),
      };
    }

    application.created_at = d(new Date(application.created_at * 1000), 'short');

    return application;
  }

  const statusSelected = ({ uuid }) => {
    reloadData({
      filters: {
        status_value_uuids: [uuid],
      },
    })
  }

  const clearSelected = () => reloadData()

  const loadApplications = (params = {}) => {
    loading.value = true;

    store.dispatch('application/loadApplicationsAsync', { params: { ...paginator.toQueryParams(), ...params } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(applicationMapper);
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
    statusSelected,
    clearSelected,
  }
}
