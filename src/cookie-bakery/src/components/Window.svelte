<style>
  .window {
    display: flex;
    background-color: var(--window-background-color);
    border: 0.125vw solid var(--window-border-color);
    border-radius: 50%;

    position: relative;
    width: 7vw;
    height: 7vw;
  }

  .window > picture > img {
    opacity: 0;
    position: relative;
    width: 100%;
    height: 100%;

    transition: opacity 0.75s ease-in;
  }

  .window:hover > picture > img {
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }
</style>

<div class="window">
  <picture>
    <source srcset="/images/cookie.avif" type="image/avif">
    <source srcset="/images/cookie.webp" type="image/webp">
    <img src="/images/cookie.png" alt="cookie">
  </picture>
</div>