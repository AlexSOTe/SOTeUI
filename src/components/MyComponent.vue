<template>
  <div class="MyComponent">
    <TiltCard />
    <hr />
    <!--<div v-tilt style="width:200px;height:200px;">123</div>-->
  </div>
</template>

<script lang="ts" setup>
  import TiltCard from './TiltCard.vue';

</script>

<style scoped lang="scss">
  .MyComponent {
    padding: 30px;
  }
</style>
