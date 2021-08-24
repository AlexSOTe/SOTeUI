<template>
  <div class="TiltCard" v-tilt="tiltOptions"></div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from "vue";
  import { ITiltOptions } from "../directives/tilt";
  const name: string = 'TiltCard';

  const tiltOptions: ITiltOptions = reactive({
    degreeRate: 10,
    translateZ: '100px',
    width: '350px',
    height: '350px',
  });
  onMounted(() => {
  })
</script>

<style scoped lang="scss">
  .TiltCard {
  }
</style>
