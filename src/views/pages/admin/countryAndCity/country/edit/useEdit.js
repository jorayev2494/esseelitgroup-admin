import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;

  const form = ref({});

  const inputs = useInput();

  const loadUniversity = () => {
    store.dispatch('country/showCountryAsync', uuid)
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }
  const update = () => {
    store.dispatch('country/updateCountryAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'countries' });
      })
  }

  onMounted(() => {
    loadUniversity()
  })

  return {
    form,
    inputs,

    update,
  }
}
