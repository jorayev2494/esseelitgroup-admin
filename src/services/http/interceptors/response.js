import ServerValidate from '@/services/toast/template/ServerValidate.vue';
import BadRequest from '@/services/toast/template/BadRequest.vue';
import { toast } from 'vue3-toastify';

const response = response => {
  window.console.log(`Interceptor (response)  => { method: ${response.method}, url: ${response.url} }: `, response);

  return response;
}

const responseError = error => {
  const accessToken = localStorage.getItem('access_token');
  const { config, response } = error

  console.log('response.data: ', response.data);
  if (response && response.status === 422) {
    toast.error(
      ServerValidate,
      {
        autoClose: 5000,
        data: response.data,
        position: accessToken ? 'top-right' : 'top-center',
        toastStyle: {
          // maxWidth: '100%',
          width: '100%',
          fontSize: '14px',
        },
      }
    );
  }

  if (response && response.status === 400) {
    toast.error(
      BadRequest,
      {
        autoClose: 5000,
        data: response.data,
        position: accessToken ? 'top-right' : 'top-center',
      }
    );
  }

  return Promise.reject(error);
};

export default {
  response,
  responseError,
};