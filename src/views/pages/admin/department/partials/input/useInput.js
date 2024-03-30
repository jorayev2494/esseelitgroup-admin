import { defineProps, toRefs } from 'vue'

export default function useInput() {

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    }
  });

  const { translations } = toRefs(props.form);

  return {
    translations,
  }
}
