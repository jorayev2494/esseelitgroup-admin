import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref, watch } from "vue";

export default function useIndex({ props }) {

  const { image } = useUrlPattern();

  const logoPreview = ref(null);
  const coverPreview = ref(null);

  watch(props, (v, o) => {
    console.log('Watch: ', v, o)
  })

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.value.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const uploadCover = event => {
    const uploadedCover = event.target.files[0];

    if (uploadedCover) {
      form.value.logo = uploadedCover;
      coverPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  onMounted(() => {
    logoPreview.value = image(logoPreview.value)
    coverPreview.value = image(coverPreview.value, 1200, 800, 'cover')

    // logoPreview.value = image(response.data.logo);
    // coverPreview.value = image(response.data.cover);
  })

  return {
    logoPreview,
    coverPreview,

    uploadLogo,
    uploadCover,
  }
}