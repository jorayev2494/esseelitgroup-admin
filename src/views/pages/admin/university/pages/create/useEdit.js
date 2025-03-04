import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import { useCountry } from "../../useCases/useCountry";
import { useCity } from "../../useCases/useCity";
import { useCropper } from '../../useCases/useCropper';
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { t } = useI18n();

  const inputs = useInputs();
  const { protectPermission } = useACLProtection();

  const { countries, loadCountries } = useCountry();
  const { cities, loadCities } = useCity();

  const form = ref({
    youtube_video_id: '',
    logo: null,
    cover: null,
    name: '',
    label: '',
    country_uuid: '',
    city_uuid: '',
    description: '',
    translations: {},
    is_on_the_country_list: false,
    is_for_foreign: false,
    top_position: '',
  });

  const {
    logoPreview,
    coverPreview,
    modalBindings,

    uploadMedia,
    croppedMedia,
  } = useCropper({ form });

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

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

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      await store.dispatch('university/createUniversityAsync', { data: decorateFormData() })
        .then(() => {
          router.push({ name: 'universities' }).then(() => {
            toast.success(t('university.flash_messages.success.university_was_created'));
          });
        })
    })
  }

  const countryChanged = event => {
    const { value } = event.target;

    loadCities({ filters: { country_uuids: [value] } })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadCountries();
  })

  return {
    RESOURCE_ACTIONS,

    form,
    inputs,
    countries,
    cities,
    logoPreview,
    coverPreview,
    uploadMedia,
    croppedMedia,
    modalBindings,

    countryChanged,
    create,
  }
}
