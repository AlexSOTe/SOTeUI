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
      <hr />
    </template>
    <template v-else-if="activeName==='CssHouse'">
      <CssHouse />
      <hr />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import TiltCard from './TiltCard.vue';
  import CssHouse from './CssHouse.vue';
  interface IMenuItem {
    name: string;
    label: string;
    [key: string]: any;
  }
  const menuList: Array<IMenuItem> = [
    { name: 'TiltCard', label: '倾斜卡片' },
    { name: 'CssHouse', label: 'CSS房子' },
  ];
  const activeName = ref('CssHouse');
  const onMenuItemClick = (item: IMenuItem) => {
    activeName.value = item.name
    console.log(activeName.value);
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
