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
    { field: 'description', title: 'description' },
    { field: 'created_at', title: 'Created At', type: 'date' },
    { field: 'actions', title: 'actions', sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadFaculties();
  }

  const facultyMapper = faculty => {
    // faculty.logo = image(faculty.logo, 60, 60);
    faculty.logo = faculty.logo.url;

    return faculty;
  }

  const loadFaculties = () => {
    loading.value = true;

    store.dispatch('faculty/loadFacultiesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(facultyMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the faculty '${data.value.name}'`);

    if (confirmed) {
      store.dispatch('faculty/deleteFacultyAsync', { uuid: data.value.uuid }).then(reloadData);
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
    loadFaculties,

    changeServer,
  }
}
