<script>
  import { onMount, onDestroy } from 'svelte';
  import { APIOps } from '../constants.mjs';
  import { nanoid } from 'nanoid';

  const callbackChannelId = `CB:${nanoid(5)}`;
  let dataResponseChannel = null;
  let dataRequestChannel = null;
  let orderId = null;
  let isDoorDisabled = false;

  $: if (orderId) {
    isDoorDisabled = false;

    console.debug('DOOR::dataResponseChannel.orderId:', orderId);
  }

  const handleDoorClick = async () => {
    isDoorDisabled = true;

    dataRequestChannel.postMessage({
      callbackChannel: callbackChannelId,
      settings: {
        url: '/api/order_cookie',
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      body: {
        op: APIOps.ORDER_COOKIE,
        ts: Date.now(),
      },
    });
  }

  onMount(() => {
    dataResponseChannel = new BroadcastChannel(callbackChannelId);
    dataRequestChannel = new BroadcastChannel('data:req');

    dataResponseChannel.onmessage = ({ data }) => {
      orderId = data?.orderId;
    };
  });

  onDestroy(() => {
    if (dataRequestChannel) {
      dataRequestChannel.close();
    }

    if (dataResponseChannel) {
      dataResponseChannel.close();
    }
  });
</script>

<style>
  .door {
    background-color: var(--door-background-color);
    display: flex;
    flex-direction: column;
    height: 75%;
    position: relative;
    width: 100%;
    cursor: pointer;

    pointer-events: var(--pointer-events);
  }

  .door-handle {
    background-color: var(--door-handle-color);
    height: 0.75vh;
    left: 0.5vw;
    position: absolute;
    top: 50%;
    width: 2vw;
  }

  .isDoorDisabled {
    pointer-events: none;
    cursor: not-allowed;
  }
</style>

<div class="door" on:click={handleDoorClick} class:isDoorDisabled>
  <div class="door-handle" />
</div>