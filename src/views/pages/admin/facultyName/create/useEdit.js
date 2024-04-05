import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";


export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const inputs = useInput();

  const form = ref({
    value: '',
    translations: {},
    // is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('facultyName/createFacultyNameAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'faculties-names' });
      })
  }

  return {
    form,
    inputs,

    create,
  }
}
