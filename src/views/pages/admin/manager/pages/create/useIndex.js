import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";

export default () => {

  const router = useRouter();
  const store = useStore();
  const { image } = useUrlPattern();

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();

  const form = ref({
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
  });

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        formData.append(key, value);
      }
    }

    return formData;
  };

  const create = () => {
    store.dispatch('manager/createManagerAsync', { data: getData() })
      .then(() => {
        router.push(Tr.makeRoute({ name: 'managers' }))
      })
  }

  return {
    form,
    avatarPreview,
    uploadAvatar,

    create,
  }
}
