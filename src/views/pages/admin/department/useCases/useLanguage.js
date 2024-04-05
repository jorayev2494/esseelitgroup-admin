import { ref } from "vue";
import { useStore } from "vuex";

export function useLanguage()
{
  const store = useStore();

  const languages = ref([]);

  const loadLanguages = (params) => {
    store.dispatch('language/loadLanguagesListAsync', { params })
      .then(response => {
        languages.value = response.data;
      })
  }

  return {
    languages,

    loadLanguages,
  }
}