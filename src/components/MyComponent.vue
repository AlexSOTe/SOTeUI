<template>
  <div class="MyComponent">
    <menu class="menu">
      <ul>
        <li v-for="(item,index) in menuList"
            :key="item.name">
          <button @click="onMenuItemClick(item)">{{item.name}}</button>
        </li>
      </ul>
    </menu>
    <template v-if="activeName==='TiltCard'">
      <TiltCard />
    </template>
    <template v-else-if="activeName==='CssHouse'">
      <CssHouse />
    </template>
    <template v-else-if="activeName==='ClickRipple'">
      <ClickRipple />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import TiltCard from './TiltCard.vue';
  import CssHouse from './CssHouse.vue';
  import ClickRipple from './ClickRipple.vue';
  interface IMenuItem {
    name: string;
    label: string;
    [key: string]: any;
  }
  const menuList: Array<IMenuItem> = [
    { name: 'TiltCard', label: '倾斜卡片' },
    { name: 'CssHouse', label: 'CSS房子' },
    { name: 'ClickRipple', label: '鼠标波纹' },
  ];
  const activeName = ref('ClickRipple');
  const onMenuItemClick = (item: IMenuItem) => {
    activeName.value = item.name
    console.log(activeName);
  }
</script>

<style scoped lang="scss">

  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
  }

  .MyComponent {
    padding: 30px;

    .menu {
    }
  }
</style>
