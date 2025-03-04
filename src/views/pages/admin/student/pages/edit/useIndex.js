import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany, useNationality, useCountryOfResidence, useHighSchoolCountry, useLanguage } from '../../useCases/usePartials' 
import Tr from '@/services/translations/translation'
import useGender from "@/views/pages/useCases/useGender";
import useMaritalStatus from "@/views/pages/useCases/useMaritalStatus";
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useDate } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { t } = useI18n();
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { companyPreview, companies, loadCompanies } = useCompany();
  const { nationalityPreview, nationalities, loadNationalities } = useNationality();
  const { countryOfResidencePreview, countryOfResidences, loadCountryOfResidences } = useCountryOfResidence();
  const { highSchoolCountryPreview, highSchoolCountries, loadHighSchoolCountries } = useHighSchoolCountry();
  const { genderPreview, genders, findGender } = useGender();
  const { maritalStatusPreview, maritalStatuses, findMaritalStatus } = useMaritalStatus();
  const { languagePreview, languages, loadLanguages } = useLanguage();

  const { dateFromTimestamp, formatDate } = useDate();

  const documents = [
    'passport',
    'passport_translation',
    'school_attestat',
    'school_attestat_translation',
    'transcript',
    'transcript_translation',
    'equivalence_document',
    'biometric_photo',
  ];

  const form = ref({});
  
  const additionalDocuments = reactive([]);

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (documents.includes(key) && !(value instanceof File)) {
          continue;
        }

        formData.append(key, value);
      }
    }

    formData.append(`additional_documents[]`, []);
    additionalDocuments.forEach(({ document, description }, idx) => {
      formData.append(`additional_documents[${idx}][document]`, document);
      formData.append(`additional_documents[${idx}][description]`, description);
    });

    return formData;
  };

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('student/updateStudentAsync', { uuid, data: getData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'students' })).then(() => {
            toast.success(t('student.flash_messages.success.student_was_updated'));
          })
        })
    })
  }

  const studentMapper = student => {
    student.birthday = formatDate(dateFromTimestamp(student.birthday));
    student.passport_date_of_expiry = formatDate(dateFromTimestamp(student.passport_date_of_expiry));
    student.passport_date_of_issue = formatDate(dateFromTimestamp(student.passport_date_of_issue));

    genderPreview.value = findGender(student.gender);
    maritalStatusPreview.value = findMaritalStatus(student.marital_type);
    
    avatarPreview.value = student.avatar !== null ? image(student.avatar) : avatarPreview.value;
    student.avatar = '';

    // student.additional_documents = [];

    return student;
  }

  const loadStudent = () => {
    store.dispatch('student/showStudentAsync', { uuid }).then(response => {
      form.value = studentMapper(response.data);
    })
  }

  onMounted(() => {
    loadStudent();

    loadCompanies();
    loadNationalities();
    loadCountryOfResidences();
    loadHighSchoolCountries();
    loadLanguages();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    companyPreview,
    companies,

    genderPreview,
    genders,

    maritalStatusPreview,
    maritalStatuses,

    nationalityPreview,
    nationalities,

    countryOfResidencePreview,
    countryOfResidences,

    highSchoolCountryPreview,
    highSchoolCountries,

    languagePreview,
    languages,

    additionalDocuments,

    update,
  }
}
