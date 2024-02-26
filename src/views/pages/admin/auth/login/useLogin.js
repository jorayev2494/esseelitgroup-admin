import { reactive, getCurrentInstance } from "vue";
import useAuth from '@/services/auth/useAuth';
import { useRouter } from "vue-router";

export function useLogin() {
  const showSocialLogin = false;
  const router = useRouter();

  const form = reactive({
    email: '',
    password: '',
  })

  const login = () => {
    useAuth.login(form).then(() => {
      // console.log('Success logined: ', getCurrentInstance().proxy.$tMakeRoute({ name: 'dashboard' }))
      router.push({ name: 'dashboard' });
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