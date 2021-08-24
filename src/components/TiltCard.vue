<template>
  <div class="TiltCard">
    <div class="tiltEle" v-tilt="tiltOptions"></div>
  </div>
</template>

<script lang="ts" setup>
  const name: string = 'TiltCard';
  const tiltOptions = {
    degreeRate: 20,
    translateZ: '100px',
  };
</script>

<style scoped lang="scss">
  .TiltCard {
    height: 300px;
    background-color: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;

    .tiltEle {
      width: 250px;
      height: 250px;
    }
  }
</style>
