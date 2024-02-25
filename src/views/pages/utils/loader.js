import { ref } from 'vue';

export function useLoader() {
  const loading = ref(false)

  const startLoading = () => loading.value = true;
  const stopLoading = () => loading.value = false;
  const toggleLoading = () => loading.value = !loading.value;

  const start = startLoading;
  const stop = stopLoading;

  return {
    loading,
    start,
    stop,
    startLoading,
    stopLoading,
    toggleLoading,
  };
}
