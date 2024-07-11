import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useName } from "../useCases/useName";
import { useUniversity } from "../useCases/useUniversity";
import coverUseCases from '../../../components/imageCropper/useCases'

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();
  const { nameSelectedPreview, names, loadNamesList } = useName();
  const { universitiesPreview, universities, loadUniversities } = useUniversity();
  const {
    imagePreview,
    modalBindings,

    changedImage,
    croppedImage,
  } = coverUseCases();

  const inputs = useInputs();

  const form = reactive({
    logo: '',
    name_uuid: '',
    translations: {},
  });

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const value = form[key];

        if (key === 'translations') {
          for (const kk in value) {
            if (Object.hasOwnProperty.call(value, kk)) {
              const vv = value[kk];

              for (const k in vv) {
                if (Object.hasOwnProperty.call(vv, k)) {
                  const v = vv[k];
                  formData.append(`${key}[${kk}][${k}]`, v);

                }
              }

            }
          }
          continue;
        }


        formData.append(key, value);
      }
    }

    return formData;
  }

  const create = () => {
    store.dispatch('faculty/createFacultyAsync', decorateFormData())
      .then(() => {
        router.push({ name: 'faculties' });
      })
  }

  onMounted(() => {
    loadNamesList()
    loadUniversities()
    imagePreview.value  = image()
  })

  return {
    form,
    names,
    inputs,
    universitiesPreview,
    universities,
    imagePreview,
    nameSelectedPreview,
    modalBindings,
    
    changedImage,
    croppedImage,
    create,
  }
}
