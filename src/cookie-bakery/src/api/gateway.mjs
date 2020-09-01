import {
  APIOps,
} from '../constants.mjs';

const dataRequestChannel = new BroadcastChannel('data:req');

dataRequestChannel.onmessage = async ({ data: {
    callbackChannel = null,
    settings = null,
    body = null,
  },
}) => {
  const { url, ...rest } = settings;

  switch(body.op) {
    case APIOps.ORDER_COOKIE: {
      Object.assign(rest, { body: JSON.stringify(body) });

      const response = await (await fetch(url, rest)).json();

      if (callbackChannel) {
        (new BroadcastChannel(callbackChannel)).postMessage(response);
      }

      break;
    }
    default: {
      if (callbackChannel) {
        (new BroadcastChannel(callbackChannel)).postMessage({
          data: `unrecognized ${body.op}`,
        });
      }

      break;
    }
  }
};
