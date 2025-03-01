import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../useCases/useCountry";
import { useInput } from "../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'
import Tr from '@/services/translations/translation.js';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { protectPermission } = useACLProtection();
  const { countries, loadCountries } = useCountry();
  const { uuid } = route.params;
  const { t } = useI18n();

  const form = ref({});
  const inputs = useInput();

  const loadCity = () => {
    store.dispatch('city/showCityAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('city/updateCityAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'countries' }).then(() => {
            toast.success(t('city.flash_messages.success.city_was_updated'));
          });
        })
    })
  }

  onMounted(() => {
    loadCity();
    loadCountries();
  })

  return {
    form,
    inputs,
    countries,

    update,
  }
}
