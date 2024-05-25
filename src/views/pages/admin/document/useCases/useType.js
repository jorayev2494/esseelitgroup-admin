import { ref } from "vue";
import { useStore } from "vuex"

export default () => {
  const store = useStore();

  const typePreview = ref(null);
  const types = ref([]);

  const loadTypes = (params = {}) => {
    store.dispatch('document/loadDocumentTypeListAsync', { params })
      .then(response => {
        types.value = response.data;
      })
  }

  return {
    typePreview,
    types,

    loadTypes,
  }
}