import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate()

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'logo', title: t('university.form.logo') },
    // { field: 'name', title: t('university.form.name') },
    // { field: 'label', title: t('university.form.label') },
    // { field: 'description', title: 'Description' },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadUniversities();
  }

  const universityMapper = university => {
    // university.logo = image(university.logo, 60, 60);
    university.logo = university.logo.url;

    university.created_at = d(dateFromTimestamp(university.created_at), 'short');

    return university;
  }

  const loadUniversities = () => {
    loading.value = true;

    store.dispatch('university/loadUniversitiesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(universityMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {

    const confirmed = confirm(`Do you want delete the university '${data.value.slug}'`);

    if (confirmed) {
      store.dispatch('university/deleteUniversityAsync', { uuid: data.value.uuid })
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
