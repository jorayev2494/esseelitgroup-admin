import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../../useCases/usePartials'
import useApplicationStatus from "../../useCases/useApplicationStatus";
import useStudentNationality from "../../useCases/useStudentNationality";
import { useDate } from "@/views/pages/utils/helpers";
import useParticipants from '../../useCases/useParticipants'

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { dateTimeFromTimestamp } = useDate();
  const { applicationStatusPreview, applicationStatuses, loadApplicationStatuses } = useApplicationStatus();
  const { studentNationalityPreview, studentNationalities, loadStudentNationalities } = useStudentNationality();
  const { participants, loadParticipants } = useParticipants();

  const inputs = useInputs();

  const form = reactive({
    participants_number: '',
    start_time: '',
    end_time: '',
    application_status_uuids: [],
    student_nationality_uuids: [],
    translations: {},
    is_active: false,
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const getData = () => {
    form.application_status_uuids = applicationStatusPreview.value.map(({ uuid }) => uuid);
    form.student_nationality_uuids = studentNationalityPreview.value.map(({ uuid }) => uuid);

    return form;
  };

  const create = async () => {
    const param = {
      application_status_uuids: form.application_status_uuids,
      student_nationality_uuids: form.student_nationality_uuids,
    }

    await loadParticipants(param).then(response => {
      if (response.data.total < form.participants_number) {
        alert(`Participants counts ${response.data.total} less than need participants number ${form.participants_number}`)
  
        return
      }

      store.dispatch('contest/createContestAsync', { data: getData() })
        .then(() => {
          router.push({ name: 'contests' });
        })
    }).catch((err) => {
      
    });
  }

  onMounted(() => {
    loadApplicationStatuses();
    loadStudentNationalities();

    if ('start_time' in form) {
      form.start_time = dateTimeFromTimestamp(Math.floor(Date.now() / 1000));
    }
  })

  return {
    form,

    inputs,
    applicationStatusPreview,
    applicationStatuses,
    studentNationalityPreview,
    studentNationalities,

    activityOptions,

    create,
  }
}
