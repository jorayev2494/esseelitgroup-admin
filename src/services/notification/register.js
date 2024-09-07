import { useStore } from "vuex";
import { useCentrifuge } from "../ws/centrifuge";
import drivers from './drivers/index'

export default () => {
  const { toastNotification, webNotification } = drivers();

  const notificationDrivers = [
    // toastNotification,
    webNotification,
  ];

  const store = useStore();
  const centrifuge = useCentrifuge();

  const notify = ctx => {
    store.commit('notification/incrementQuantityUnviewed');
    notificationDrivers.forEach(driver => driver(ctx));
  };

  const notificationSubscribe = authUser => {
    console.log('Notification Subscribe: ', authUser);

    const { uuid } = authUser
    const notificationSub = centrifuge.newSubscription(`notification#${uuid}`);
    notificationSub.on('publication', notify);
    notificationSub.subscribe();
  }
    
  if (store.getters['auth/isAuthenticated']) {
    store.getters['auth/getAuthData'].then(notificationSubscribe);
  } else {
    store.subscribe(({ type, payload }) => {
      if (type === 'auth/setAuthData') {
        if (typeof(payload) === 'object') {
          notificationSubscribe(payload);
        } else {
          // centrifuge.disconnect();
        }
      }
    })
  }

}