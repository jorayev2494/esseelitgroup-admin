import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default function useMaritalStatus()
{
  const { t } = useI18n();

  const maritalStatusPreview = ref(null);

  const maritalStatuses = ref([
    {
      label: t('system.marital_status.items.single'),
      value: 'single',
    },
    {
      label: t('system.marital_status.items.married'),
      value: 'married',
    },
  ]);

  const findMaritalStatus = value => maritalStatuses.value.find(item => item.value === value);

  return {
    maritalStatusPreview,
    maritalStatuses,

    findMaritalStatus,
  }
}
