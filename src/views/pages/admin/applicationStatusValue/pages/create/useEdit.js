import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../../useCases/useCountry";
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { t } = useI18n();
  const { countries, loadCountries } = useCountry();
  const { protectPermission } = useACLProtection();

  const form = ref({
    text_color: '',
    background_color: '',
    is_required_note: true,
    translations: {},
    // is_active: true,
    is_first: false,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      await store.dispatch('applicationStatusValue/createStatusAsync', { data: decorateData() })
        .then(() => {
          router.push({ name: 'application-statuses' }).then(() => {
            toast.success(t('applicationStatusValue.flash_messages.success.application_status_was_created'));
          });
        })
    })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadCountries()
  })

  return {
    RESOURCE_ACTIONS,

    form,
    inputs,
    countries,

    create,
  }
}
