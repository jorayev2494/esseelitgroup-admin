import { ref } from "vue"
import useAuth from '@/services/auth/useAuth';
import { useRouter } from "vue-router";

export default function useRestorePasswordLink() {

  const router = useRouter();

  const email = ref('');

  const restorePasswordLink = () => {
    useAuth.forgotPassword({ email: email.value }).then(() => {
      router.push({ name: 'login' });
    }).catch(err => {
      console.log('Login error response: ', err);
    });
  }

  return {
    email,
    restorePasswordLink,
  }
}