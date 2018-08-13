<template>
  <div id="app">
    <SideBar/>
    <router-view/>
  </div>
</template>
<script>
import SideBar from '@/views/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
<style>
body {
  margin: 0;
}
</style>
