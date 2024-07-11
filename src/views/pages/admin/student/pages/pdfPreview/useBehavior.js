import httpClient from "@/services/http";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"

export default () => {
  const route = useRoute();
  const store = useStore();

  const { uuid } = route.params;

  const src = ref(null);
  const token = ref(null);

  const loadPdfPreview = () => {
    token.value = store.getters['auth/getAccessToken'];

    src.value = httpClient.getUri();
    src.value = src.value.substring(0, src.value.indexOf('/api'))

    src.value += `/admin/students/pdf/preview/${uuid}?token=${token.value}`
  }

  onMounted(() => {
    loadPdfPreview()
  })

  return {
    src,
  }
}