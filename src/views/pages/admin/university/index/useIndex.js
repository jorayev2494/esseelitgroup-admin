import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'logo', title: 'Logo' },
    { field: 'name', title: 'Name' },
    { field: 'label', title: 'Label' },
    { field: 'description', title: 'Description' },
    { field: 'created_at', title: 'Created At', type: 'date' },
    { field: 'actions', title: 'actions', sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadUniversities();
  }

  const companyMapper = company => {
    // company.logo = image(company.logo, 60, 60);
    company.logo = company.logo.url;

    return company;
  }

  const loadUniversities = () => {
    loading.value = true;

    store.dispatch('university/loadUniversitiesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(companyMapper);
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
