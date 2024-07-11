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

  const loadItem = () => {
    store.dispatch('language/showLanguageAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    store.dispatch('language/updateLanguageAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'languages' });
      })
  }

  onMounted(() => {
    loadItem();
  })

  return {
    form,
    inputs,

    update,
  }
}
