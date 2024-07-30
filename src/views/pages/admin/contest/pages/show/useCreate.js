import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useApplicationStatus from "../../useCases/useApplicationStatus";
import useStudentNationality from "../../useCases/useStudentNationality";
import { useDate } from "@/views/pages/utils/helpers";
import useParticipants from "../../useCases/useParticipants";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { protectPermission } = useACLProtection();
  const { uuid } = route.params;

  const { dateTimeFromTimestamp } = useDate();
  const { applicationStatusPreview, applicationStatuses, loadApplicationStatuses } = useApplicationStatus();
  const { studentNationalityPreview, studentNationalities, loadStudentNationalities } = useStudentNationality();
  const { participants, loadParticipants } = useParticipants();

  const inputs = useInputs();

  const form = ref(null);
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const getData = () => {
    form.value.application_status_uuids = form.value.application_statuses.map(({ uuid }) => uuid);
    form.value.student_nationality_uuids = form.value.student_nationalities.map(({ uuid }) => uuid);

    return form.value;
  };

  const itemMapper = item => {
    item.start_time = dateTimeFromTimestamp(item.start_time);

    if (item.end_time) {
      item.end_time = dateTimeFromTimestamp(item.end_time);
    }

    return item
  }

  const loadItem = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_SHOW).then(() => {
      store.dispatch('contest/showContestAsync', { uuid })
        .then(response => {
          form.value = itemMapper(response.data);
        })
    })
  }

  onMounted(() => {
    loadApplicationStatuses();
    loadStudentNationalities();
    loadItem()

    // if ('start_time' in form) {
    //   form.start_time = dateTimeFromTimestamp(Math.floor(Date.now() / 1000));
    // }
  })

  return {
    form,

    inputs,
    applicationStatusPreview,
    applicationStatuses,
    studentNationalityPreview,
    studentNationalities,

    activityOptions,
  }
}
