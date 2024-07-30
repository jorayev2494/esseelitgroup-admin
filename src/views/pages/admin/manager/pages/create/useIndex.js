import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useRole } from '../../useCases/usePartials'
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default () => {

  const router = useRouter();
  const store = useStore();
  const { protectPermission } = useACLProtection();

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { rolePreview, roles, loadRoles } = useRole();

  const form = ref({
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
  });

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

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      store.dispatch('manager/createManagerAsync', { data: getData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'managers' }))
        })
    })
  }

  onMounted(() => {
    loadRoles();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    rolePreview,
    roles,

    create,
  }
}
