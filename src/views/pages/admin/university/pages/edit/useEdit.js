import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import { useCountry } from "../../useCases/useCountry";
import { useCity } from "../../useCases/useCity";
import { useCropper } from '../../useCases/useCropper';
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();
  const { t } = useI18n();

  const form = ref({});
  const inputs = useInputs();

  const {
    logoPreview,
    coverPreview,
    modalBindings,

    uploadMedia,
    croppedMedia,
  } = useCropper({ form });

  const { countries, loadCountries } = useCountry();
  const { cities, loadCities } = useCity();

  const universityMapper = university => {
    const { logo, cover, country_uuid } = university
    form.value = university;

    logoPreview.value = image(logo)
    coverPreview.value = image(cover)

    loadCities({ filters: { country_uuids: [country_uuid] } })

    university.top_position = university.top_position ?? '';

    return university;
  }

  const loadUniversity = () => {
    store.dispatch('university/showUniversityAsync', uuid)
      .then(response => {
        universityMapper(response.data);
      })
  }

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'logo' || key === 'cover') {
          console.log('typeof(value): ', typeof(value), value instanceof File)
          if (! (value instanceof File)) {
            formData.append(key, '');
            continue;
          }
        }

        if (key === 'is_on_the_country_list' || key === 'is_for_foreign') {
          formData.append(key, value === true ? 1 : 0);
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
      form.value.cover = uploadedCover;
      coverPreview.value = URL.createObjectURL(uploadedCover);
    }
  }

  const countryChanged = event => {
    const { value } = event.target;

    loadCities({ filters: { country_uuids: [value] } })
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('university/updateUniversityAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'universities' }).then(() => {
            toast.success(t('university.flash_messages.success.university_was_updated'));
          });
        })
    })
  }

  onMounted(() => {
    loadUniversity()
    loadCountries()
  })

  return {
    form,
    inputs,
    logoPreview,
    coverPreview,
    uploadMedia,
    countries,
    cities,

    croppedMedia,
    modalBindings,

    countryChanged,
    uploadLogo,
    uploadCover,

    update,
  }
}
