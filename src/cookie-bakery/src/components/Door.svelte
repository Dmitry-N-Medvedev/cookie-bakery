<script>
  const handleDoorClick = () => {
    console.debug('handleDoorClick');
  }
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
</style>

<div class="door" on:click={handleDoorClick}>
  <div class="door-handle" />
</div>