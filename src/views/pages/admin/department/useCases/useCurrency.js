import { ref } from "vue"
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  const currenciesPreviews = ref([]);
  const currencies = ref([]);

  const loadCurrencies = (params = {}) => {
    return store.dispatch('currency/loadCurrencyListAsync', { params })
      .then(response => {
        currencies.value = response.data
      })
  }

  return {
    currenciesPreviews,
    currencies,

    loadCurrencies,
  }
}
