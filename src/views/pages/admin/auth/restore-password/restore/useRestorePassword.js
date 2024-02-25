import { reactive } from "vue"
import useAuth from '@/services/auth/useAuth';
import { useRouter } from "vue-router";

export default function useRestorePassword() {

  const router = useRouter();

  const form = reactive({
    password: '',
    password_confirmation: '',
    token: '',
  });

  const setTokenToForm = () => {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.has('token')) {
      form.token = queryParams.get('token');
    }
  }

  const restorePassword = () => {
    setTokenToForm();

    useAuth.restorePassword(form).then(() => {
      router.push({ name: 'login' });
    }).catch(err => {
      console.log('Login error response: ', err);
    });
  }

  return {
    form,
    restorePassword,
  }
}