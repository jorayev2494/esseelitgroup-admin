import { ref } from "vue"

export function usePaginator() {
  const page = ref(1);
  const perPage = ref(10);
  const lastPage = ref(1);
  const to = ref(0);
  const total = ref(0);
  const perPageOptions = [10, 25, 50, 75, 100];

  const toQueryParams = () => ({
    page: page.value,
    per_page: perPage.value,
  })

  const setMetaData = data => {
    const { current_page, last_page, per_page, to: dTo, total: dTotal } = data;
  
    page.value = current_page;
    perPage.value = per_page;
    lastPage.value = last_page;
    to.value = dTo;
    total.value = dTotal;
  }

  const isLastPage = () => lastPage.value === 1

  const serverPaginate = data => {
    if (['page', 'pagesize'].includes(data.change_type)) {
      page.value = data.current_page ?? page.value;
      perPage.value = data.pagesize ?? perPage.value;
    }
  }

  return {
    page,
    perPage,
    lastPage,
    to,
    total,
    perPageOptions,

    setMetaData,
    serverPaginate,
    toQueryParams,
    isLastPage,
  };
}
