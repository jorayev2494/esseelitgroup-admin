import { ref } from "vue"

export default function useSearch(searchBy = '')
{
  const form = ref({
    search: '',
    search_by: searchBy,
  })

  const toQueryParams = () => form.value

  return {
    form,

    toQueryParams,
  }
}