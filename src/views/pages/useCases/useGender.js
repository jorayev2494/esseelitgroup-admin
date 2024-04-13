import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

export default function useGender()
{
  const { t } = useI18n();

  const genderPreview = ref(null);

  const genders = ref([
    {
      label: t('system.gender.items.male'),
      value: 'male',
    },
    {
      label: t('system.gender.items.female'),
      value: 'female',
    },
  ]);

  const findGender = value => genders.value.find(item => item.value === value);

  return {
    genderPreview,
    genders,

    findGender,
  }
}
