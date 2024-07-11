import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { getStatusStyle } from "../../useCases/usePartials";

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'full_name', title: t('manager.form.full_name') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const managerMapper = manager => {
    manager.avatar = image(manager.avatar);
    // if (manager.avatar?.url === undefined) {
    //   manager.avatar = {
    //     url: defaultImage('avatar'),
    //   };
    // }

    manager.created_at = d(new Date(manager.created_at * 1000), 'short');

    return manager;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('manager/loadManagersAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(managerMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the manager '${data.value.full_name}'`);

    if (confirmed) {
      store.dispatch('manager/deleteManagerAsync', { uuid: data.value.uuid }).then(reloadData);
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
