import { onMounted, ref } from "vue";
import { useStore } from "vuex"
import { useApplicationStatusStyle } from '../../../../useCases/useApplicationStatusStyle'

export default function ({ emit }) {
  const store = useStore();

  const items = ref([]);
  const clickedItem = ref(null);

  const loadItems = (params = {}) => {
    store.dispatch('applicationStatusValue/loadStatusWidgetListAsync', { params })
      .then(response => {
        items.value = response.data;
      })
  }

  const clearClicked = function (item = null) {
    if (clickedItem.value === item) {
      return
    }

    clickedItem.value = item;
    emit('clear', item);
  }

  const itemClicked = function (item) {
    if (item.uuid === clickedItem.value?.uuid) {
      return;
    }

    if (item.application_count <= 0) {
      clearClicked()
    }

    clickedItem.value = item;

    emit('click', item);
  }

  onMounted(() => {
    loadItems()
  })

  return {
    items,
    clickedItem,
    
    itemClicked,
    clearClicked,
    useApplicationStatusStyle,
  }
}
