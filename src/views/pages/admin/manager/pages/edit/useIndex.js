import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useRole } from '../../useCases/usePartials'
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { t } = useI18n();
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { rolePreview, roles, loadRoles } = useRole();

  const form = ref({});

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        formData.append(key, value);
      }
    }

    return formData;
  };

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('manager/updateManagerAsync', { uuid, data: getData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'managers' })).then(() => {
            toast.success(t('manager.flash_messages.success.manager_was_updated'));
          })
        })
    })
  }

  const studentMapper = student => {    
    avatarPreview.value = student.avatar !== null ? image(student.avatar) : avatarPreview.value;
    student.avatar = '';

    return student;
  }

  const loadStudent = () => {
    store.dispatch('manager/showManagerAsync', { uuid }).then(response => {
      form.value = studentMapper(response.data);
    })
  }

  onMounted(() => {
    loadStudent();
    loadRoles();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    rolePreview,
    roles,

    update,
  }
}
