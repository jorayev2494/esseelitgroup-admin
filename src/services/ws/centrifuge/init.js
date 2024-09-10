import store from '@/services/store';
import { Centrifuge } from 'centrifuge';

const token = store.getters['ws/centrifuge/getWSAccessToken'];

export const singleton = (function () {

  var timestamp = parseInt(new Date().getTime() / 1000).toString();

  /** @var { Centrifuge } instance */
  let instance;

  function createInstance() {
    const wsServerEndpoint = process.env.VUE_APP_WS_SERVER_ENDPOINT;
    const endpoint = `${wsServerEndpoint}/connection/websocket`;

    console.log('MODE process.env.NODE_ENV: ', `${process.env.NODE_ENV},`, 'WS endpoint: ', endpoint)

    const centrifuge = new Centrifuge(
      endpoint,
      {
        debug: true,
        // user: '9bf048cd-4dd7-4b97-8a7c-07b6b20c6905',
        token,
        timestamp,
        // data: {
        //   authToken: token,
        // }
        // transports: ["websocket", "xhr-streaming"],
      }
    );

    // centrifuge.setToken(token);
    centrifuge.on('publish', function (ctx) {
      const channel = ctx.channel;
      const payload = JSON.stringify(ctx.data);
      console.log('Publication from server-side channel', channel, payload);
    });

    centrifuge.on('connecting', function (ctx) {
      console.log(`connecting: ${ctx.code}, ${ctx.reason}`, ctx);
    }).on('connected', function (ctx) {
      console.log(`connected over ${ctx.transport}`, ctx);
    }).on('disconnected', function (ctx) {
      console.log(`disconnected: ${ctx.code}, ${ctx.reason}`, ctx);
    }).connect();
    
    const sub = centrifuge.newSubscription('health');
    // const sub = centrifuge.newSubscription('channel#9bf048cd-4dd7-4b97-8a7c-07b6b20c6905');
    
    sub.on('publication', ctx => {
      console.log('Health publication: ', ctx);
    }).on('subscribing', ctx => {
      console.log('Health subscribing: ', ctx);
    }).on('subscribed', ctx => {
      console.log('Health subscribed: ', ctx);
    }).on('unsubscribed', ctx => {
      console.log(`Health unsubscribed: ${ctx.code}, ${ctx.reason}`, ctx);
    }).subscribe();

    // centrifuge.connect();

    return centrifuge
  }

  return {
    /** @returns { Centrifuge } */
    getInstance: function () {
      // Лень – двигатель прогресса!
      if (!instance) {
        instance = createInstance();
        // Замораживаем объект, чтобы сохранить его аутентичность
        // Object.freeze(instance);
      }
      return instance;
    }
  };

})();

/**
 * @var { Centrifuge } instance
 **/
export const instance = singleton.getInstance();

/**
 * @returns { Centrifuge }
 */
export const getInstance = () => singleton.getInstance();
