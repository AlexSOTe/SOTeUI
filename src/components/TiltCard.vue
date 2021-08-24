<template>
  <div class="TiltCard" v-tilt="tiltOptions"></div>
</template>

<script lang="ts" setup>
  const name: string = 'TiltCard';
  const tiltOptions = {
    degreeRate: 10,
    translateZ: '100px',
    width: '350px',
    height: '350px',
  };
</script>

<style scoped lang="scss">
  .TiltCard {
  }
</style>
