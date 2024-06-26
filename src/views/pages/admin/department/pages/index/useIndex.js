import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import useFilters from "../../useCases/useFilters";

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { filters } = useFilters();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'name.value', title: t('department.form.name') },
    { field: 'university.name', title: t('department.form.university') },
    { field: 'faculty.name.value', title: t('department.form.faculty') },
    { field: 'degree.value', title: t('department.form.degree') },
    { field: 'language', title: t('department.form.language') },
    { field: 'price', title: t('department.form.price') },
    { field: 'is_filled', title: t('department.form.is_filled') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = (params = {}) => {
    items.value = [];
    loadDepartments(params);
  }

  const loadFilters = filters => {
    reloadData({ filters })
  }

  const departmentMapper = department => {
    department.created_at = d(dateFromTimestamp(department.created_at), 'short')

    return department;
  }

  const loadDepartments = (params = {}) => {
    loading.value = true;

    store.dispatch('department/loadDepartmentsAsync', { params: { ...paginator.toQueryParams(), ...params } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(departmentMapper);
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
    filters,
    remove,

    paginator,
    loadDepartments,

    changeServer,
    loadFilters,
  }
}
