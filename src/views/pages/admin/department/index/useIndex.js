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
    { field: 'name', title: 'Name' },
    { field: 'description', title: 'description' },
    { field: 'created_at', title: 'Created At', type: 'date' },
    { field: 'actions', title: 'actions', sort: false },
  ];

  const reloadData = () => {
    items.value = [];
    loadDepartments();
  }

  const departmentMapper = faculty => {

    return faculty;
  }

  const loadDepartments = () => {
    loading.value = true;

    store.dispatch('department/loadDepartmentsAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;
        console.log('Data: ', data, 'response: ', response)

        paginator.setMetaData(data);
        items.value = data.data.map(departmentMapper);
        console.log('Department data: ', data.data)
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the department '${data.value.name}'`);

    if (confirmed) {
      store.dispatch('department/deleteDepartmentAsync', { uuid: data.value.uuid }).then(reloadData);
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
    loadDepartments,

    changeServer,
  }
}
