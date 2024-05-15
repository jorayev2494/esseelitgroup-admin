import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { getStatusStyle } from "../../useCases/usePartials";

export default function useIndex({ props }) {

  const store = useStore();
  const paginator = usePaginator();
  const { image } = useUrlPattern();
  const { t, d } = useI18n();
  const { contestUuid } = toRefs(props);

  const loading = ref(true);
  const items = ref([]);
  const columns = [
    { field: 'code', title: t('contestStudent.code') },
    { field: 'student', title: t('contestStudent.student') },
    { field: 'gift_given_at', title: t('contestStudent.form.gift_given_at'), type: 'date' },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const reloadData = () => {
    items.value = [];
    loadItems();
  }

  const studentMapper = student => {
    student.created_at = d(new Date(student.created_at * 1000), 'short');

    if (student.gift_given_at) {
      student.gift_given_at = d(new Date(student.gift_given_at * 1000), 'short');
    }

    return student;
  }

  const loadItems = () => {
    loading.value = true;

    store.dispatch('contestStudent/loadContestStudentsAsync', { contestUuid: contestUuid.value, params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(studentMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    // const confirmed = confirm(`Do you want delete the student '${data.value.full_name}'`);

    // if (confirmed) {
    //   store.dispatch('contestStudent/deleteContestStudentAsync', { contestUuid: contestUuid.value, uuid: data.value.uuid }).then(reloadData);
    // }
  }

  const selectWinnerStudent = () => {
    store.dispatch('contestStudent/createContestStudentAsync', { contestUuid: contestUuid.value })
      .then(response => {
        reloadData()
      })
      .catch(error => error);
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
    selectWinnerStudent,
    getStatusStyle,
  }
}
