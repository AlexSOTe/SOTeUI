<template>
  <div class="ClickRipple" v-ripple></div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
  .ClickRipple {
  }
</style>
<style>
  /*全局css*/
  @keyframes RippleSpread {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(6);
      opacity: 0;
    }
  }

  .ripple-animate {
    animation: RippleSpread 300ms ease-out;
    animation-fill-mode: forwards;
  }
</style>
