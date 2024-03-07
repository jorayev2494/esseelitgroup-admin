import { reactive, getCurrentInstance } from "vue";
import useAuth from '@/services/auth/useAuth';
import { useRouter } from "vue-router";
import Tr from '@/services/translations/translation.js';
import { toast } from "vue3-toastify";

export function useLogin() {
  const showSocialLogin = false;
  const router = useRouter();

  const form = reactive({
    email: '',
    password: '',
  })

  const login = () => {
    useAuth.login(form).then(() => {
      router.push(Tr.makeRoute({ name: 'dashboard' }));
      toast.success(
        'Welcome!',
      )
    }).catch(err => {
      console.log('Login error response: ', err);
    });
  }

  return {
    showSocialLogin,
    form,
    login,
  }
}