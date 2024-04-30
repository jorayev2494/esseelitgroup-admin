import { ref } from "vue";
import { useStore } from "vuex";

export function useAlias()
{
  const store = useStore();

  const aliases = ref([]);

  const loadAliases = (params) => {
    store.dispatch('alias/loadAliasListAsync', { params })
      .then(response => {
        aliases.value = response.data;
      })
  }

  return {
    aliases,

    loadAliases,
  }
}