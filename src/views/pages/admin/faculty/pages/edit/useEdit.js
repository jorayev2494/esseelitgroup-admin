import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import { useName } from "../../useCases/useName";
import { useUniversity } from "../../useCases/useUniversity";
import coverUseCases from '../../../../components/imageCropper/useCases'
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const inputs = useInputs();
  const { nameSelectedPreview, names, loadNamesList, makeNameSelectedPreview } = useName()
  const { universities, loadUniversities } = useUniversity();
  const {
    imagePreview,
    modalBindings,

    changedImage,
    croppedImage,
  } = coverUseCases();
  const { protectPermission } = useACLProtection();

  const { uuid } = route.params;

  const form = ref({});

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'logo' && ! (value instanceof File)) {
          formData.append(key, '');
          continue;
        }
        
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

  const mapFaculty = faculty => {
    const { name_uuid, logo } = faculty
    form.value = faculty;
    imagePreview.value = image(logo)
    makeNameSelectedPreview(item => item.uuid === name_uuid)

    return faculty;
  }

  const loadFaculty = () => {
    store.dispatch('faculty/showFacultyAsync', { uuid }).then(response => {
      form.value = mapFaculty(response.data)
    })
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('faculty/updateFacultyAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'faculties' });
        })
    })
  }

  onMounted(() => {
    loadFaculty()
    loadNamesList()
    loadUniversities()
  })

  return {
    form,
    names,
    inputs,
    universities,
    imagePreview,
    nameSelectedPreview,
    modalBindings,

    changedImage,
    croppedImage,
    update,
  }
}
