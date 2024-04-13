import { ref } from "vue";
import { useUrlPattern } from "../utils/UrlPattern";

export default function useChangeImage()
{
  const { image } = useUrlPattern();
  const imagePreview = ref(image(null));

  const uploadImage = (event, callback) => {
    const [image] = event.target.files;

    if (image) {
      console.log('Uploaded image: ', image);
      callback(image)
      imagePreview.value = URL.createObjectURL(image);
    }
  }

  return {
    imagePreview,

    uploadImage,
  }
}
