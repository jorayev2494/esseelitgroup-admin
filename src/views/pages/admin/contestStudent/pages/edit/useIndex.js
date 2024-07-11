import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany, useNationality, useCountryOfResidence, useHighSchoolCountry } from '../../useCases/usePartials' 
import Tr from '@/services/translations/translation'
import useGender from "@/views/pages/useCases/useGender";
import useMaritalStatus from "@/views/pages/useCases/useMaritalStatus";
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useDate } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { d } = useI18n()
  const { image } = useUrlPattern();

  const { contestUuid, code } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { companyPreview, companies, loadCompanies } = useCompany();
  const { nationalityPreview, nationalities, loadNationalities } = useNationality();
  const { countryOfResidencePreview, countryOfResidences, loadCountryOfResidences } = useCountryOfResidence();
  const { highSchoolCountryPreview, highSchoolCountries, loadHighSchoolCountries } = useHighSchoolCountry();
  const { genderPreview, genders, findGender } = useGender();
  const { maritalStatusPreview, maritalStatuses, findMaritalStatus } = useMaritalStatus();

  const { dateTimeFromTimestamp } = useDate();

  const form = ref(null);

  const getData = () => {
    return form.value;
  };

  const update = () => {
    store.dispatch('contestStudent/updateContestStudentAsync', { contestUuid, code, data: getData() })
      .then(() => {
        router.push(Tr.makeRoute({ name: 'contest-show', params: { uuid: contestUuid } }))
      })
  }

  const contestStudentMapper = contestStudent => {
    const { student } = contestStudent;
    
    avatarPreview.value = student.avatar !== null ? student.avatar.url : avatarPreview.value;
    student.avatar = '';

    if (contestStudent.gift_given_at) {
      contestStudent.gift_given_at = dateTimeFromTimestamp(contestStudent.gift_given_at);
    }

    return contestStudent;
  }

  const loadItem = () => {
    store.dispatch('contestStudent/showContestStudentAsync', { contestUuid, code })
      .then(response => {
        // console.log("response.data: ", response.data);
        form.value = contestStudentMapper(response.data);
      })
  }

  onMounted(() => {
    loadItem();

    loadCompanies();
    loadNationalities();
    loadCountryOfResidences();
    loadHighSchoolCountries();
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

    update,
  }
}
