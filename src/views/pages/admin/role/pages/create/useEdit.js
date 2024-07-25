import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";


export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const inputs = useInput();

  const form = ref({
    translations: {},
    is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('role/createRoleAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'roles' });
      })
  }

  return {
    form,
    inputs,

    create,
  }
}
