import { useString } from "@/views/pages/utils/helpers";
import { useI18n } from "vue-i18n";
import { toast } from "vue3-toastify";
import Tr from '@/services/translations/translation'
import ToastNotificationTemplate from '@/services/toast/template/Notification.vue';
const sound = require('@/assets/sound/notification/sound-4.mp3');
const icon = require('@/assets/img/logo.png');

export default () => {
  const { strCropper } = useString();
  const { t } = useI18n();

  const toastNotification = ({ data: { title, message } }) => {
    toast(
      ToastNotificationTemplate,
      {
        type: toast.TYPE.SUCCESS,
        data: {
          title: t('system.notification'),
          message: strCropper(message, 80),
        },
        autoClose: 6000,
        icon: false,
        // closeOnClick: false,
        closeButton: false,
        onOpen: () => {
          new Audio(sound).play();
        },
      }
    )
  }

  const webNotify = ({ data: { type, payload } }) => {
    if (Notification.permission !== 'denied') {
      const notification = new Notification('title', {
          icon,
          body: JSON.stringify(payload),
          data: {
  
          },
          tag: type,
          lang: Tr.currentLocale,
        }
      );
  
      notification.addEventListener('show', console.log);
      notification.addEventListener('click', console.log);
      notification.addEventListener('close', console.log);
      notification.addEventListener('error', console.log);
    }
  }

  const webNotification = async ctx => {
    console.log('Web Notification: ', ctx);

    if (Notification.permission === 'granted') {
      await webNotify(ctx);
    } else if (Notification.permission !== 'denied') {
      await Notification.requestPermission().then(async () => {
        await webNotify(ctx);
      })
    }
  }

  return {
    toastNotification,
    webNotification,
  }
}
