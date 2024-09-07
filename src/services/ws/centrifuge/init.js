import store from '@/services/store';
import { Centrifuge } from 'centrifuge';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YmYwNDhjZC00ZGQ3LTRiOTctOGE3Yy0wN2I2YjIwYzY5MDUiLCJleHAiOjE3MjM0OTUxOTEsImlhdCI6MTcyMjg5MDM5MX0.wEl5u6HFlgfF7AdTZeSo9TG8XJSwIw2mJP_b8yR_nNg';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjM1MDA5MjMsImlhdCI6MTcyMjg5NjEyM30.k-c67uTY5MLtVvOoiq1maWKvy09Cw0j6fTvPXv_DePw';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE3MjM2NjExNTgsImlhdCI6MTcyMzA1NjM1OH0.EBwUKvbWT0IWB-zvhIm61wJP7aAgaK8DzJBultXuD60';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5YmYwNDhjZC00ZGQ3LTRiOTctOGE3Yy0wN2I2YjIwYzY5MDUiLCJjaGFubmVscyI6WyJuZXdzIl19.FjlsRq-RwcBz0_BoEoouTL-GyN9Q4bE0jwknIQxlOaI';

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5YmYwNDhjZC00ZGQ3LTRiOTctOGE3Yy0wN2I2YjIwYzY5MDUiLCJpbmZvIjp7InV1aWQiOiI5YmYwNDhjZC00ZGQ3LTRiOTctOGE3Yy0wN2I2YjIwYzY5MDUiLCJmaXJzdF9uYW1lIjoiTWFuYWdlclVwUyIsImxhc3RfbmFtZSI6Ik1hbmFnZXJvdlVwUyJ9fQ.o7AiLSYttXb6A41f9QaYG3gSs8cGejip9v4-WWFWVk0';
const token = store.getters['ws/centrifuge/getWSAccessToken'];

export const singleton = (function () {

  var timestamp = parseInt(new Date().getTime() / 1000).toString();

  /** @var { Centrifuge } instance */
  let instance;

  function createInstance() {
    const endpoint = 'ws://localhost:8000/connection/websocket';

    const centrifuge = new Centrifuge(
      endpoint,
      {
        user: '9bf048cd-4dd7-4b97-8a7c-07b6b20c6905',
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
