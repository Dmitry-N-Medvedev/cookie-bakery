<script></script>

<style>
  .mailbox {
    display: grid;
    grid-template-columns: 0.5vw 1fr 0.5vw;
    grid-template-rows: 0.5vw 1fr 3fr 0.5vw;
    grid-template-areas:
      '. . .'
      '. mailbox-slit .'
      '. mailbox-title .'
      '. . .'
    ;

    position: relative;
    width: 7vw;
    height: 7vw;
    background-color: var(--mailbox-background-color);
  }

  .mailbox-slit {
    align-self: center;
    background-color: var(--mailbox-slit-color);
    grid-area: mailbox-slit;
    height: 1.0vh;
    justify-self: center;
    width: 75%;
  }

  .mailbox-title {
    align-items: flex-start;
    display: flex;
    grid-area: mailbox-title;
    justify-content: center;
    font-size: 1vw;
    text-transform: capitalize;
    color: var(--mailbox-text-color);
  }
</style>

<div class="mailbox">
  <div class="mailbox-slit" />
  <div class="mailbox-title">mailbox</div>
</div>