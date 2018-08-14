<template>
  <div id="app">
    <SideBar/>
    <router-view class="main"/>
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
.main {
  width: calc(100% - 290px);
  padding:30px;
  height: 100vh;
  margin: 0px;
  background-color: #F4F5F7;
  float: left;
}
</style>
