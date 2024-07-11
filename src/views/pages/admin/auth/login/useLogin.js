import { reactive, getCurrentInstance } from "vue";
import useAuth from '@/services/auth/useAuth';
import { useRouter } from "vue-router";
import Tr from '@/services/translations/translation.js';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export function useLogin() {
  const showSocialLogin = false;
  const router = useRouter();
  const { t } = useI18n();

  const form = reactive({
    email: '',
    password: '',
  })

  const login = () => {
    useAuth.login(form).then(response => {
      router.push(Tr.makeRoute({ name: 'dashboard' })).then(() => {
        const { first_name } = response.data.auth_data
        toast.success(t('auth.flash_messages.success.welcome', { first_name }))
      });
    });
  }

  return {
    showSocialLogin,
    form,
    login,
  }
}