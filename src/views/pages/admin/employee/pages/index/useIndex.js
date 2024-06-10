import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { getStatusStyle } from "../../useCases/usePartials";

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { defaultImage } = useUrlPattern();
  const { t, d } = useI18n();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'full_name', title: t('employee.form.full_name') },
    { field: 'company.name', title: t('employee.form.company') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const studentMapper = student => {
    if (student.avatar?.url === undefined) {
      student.avatar = {
        url: defaultImage('avatar'),
      };
    }

    student.created_at = d(new Date(student.created_at * 1000), 'short');

    return student;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('employee/loadEmployeesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(studentMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the employee '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('employee/deleteEmployeeAsync', { uuid: data.value.uuid }).then(reloadData);
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
