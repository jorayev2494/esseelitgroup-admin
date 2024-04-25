import { defineProps, toRefs } from 'vue'

export default function useInput() {

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    }
  });

  console.log('R: ', props);

  const { translations } = toRefs(props.form);

  return {
    translations,
  }
}
