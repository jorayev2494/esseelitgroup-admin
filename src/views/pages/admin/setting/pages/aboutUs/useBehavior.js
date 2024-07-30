import { onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useAboutUsInput } from '../../useCases/useInput'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { formDataTranslations } from '../../../../utils/helpers'
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default () => {
  const store = useStore();

  const { image } = useUrlPattern();
  const { imagePreview: coverPreview, uploadImage: uploadCover } = useChangeImage();
  const inputs = useAboutUsInput();
  const { checkPermissions, protectPermission } = useACLProtection();

  const slug = 'about-us';
  const form = ref(null);

  const itemDataMapper = item => {
    coverPreview.value = image(item?.cover);

    return item;
  }

  const loadItemData = () => {
    store.dispatch('staticPage/showStaticPageAsync', { slug })
      .then(response => {
        form.value = itemDataMapper(response.data)
      })
  }

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'cover' && ! (value instanceof File)) {
          formData.append(key, '');
          continue;
        }

        formData.append(key, value)
      }
    }

    formDataTranslations(formData, form);

    return formData;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_ABOUT_US).then(() => {
      store.dispatch('staticPage/updateStaticPageAsync', { slug, data: getData() })
        .then(response => {
            alert('Updated')
        })
    })
  }

  onMounted(() => {
    loadItemData()
  })

  return {
    form,
    inputs,
    coverPreview,

    update,
    uploadCover,
  }
}
