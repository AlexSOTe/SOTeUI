<template>
  <div class="TiltCard">
    <div class="tiltEle" v-tilt>
      <div class="floatCard">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const name: string = 'TiltCard';
</script>

<style scoped lang="scss">
  .TiltCard {
    width: 300px;
    height: 300px;
    background-color: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 2000px;

    .tiltEle {
      position: relative;
      width: 250px;
      height: 250px;
      transform-style: preserve-3d;
      background-color: pink;
      border-radius: 10px;

      .floatCard {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        background-color: #4cff0044;
        transform: translate3d(-50%,-50%,100px);
        border: 1px solid #1e1e1e;
        transform-style: preserve-3d;
        border-radius: 10px;
      }
    }
  }
</style>
