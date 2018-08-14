<template>
  <div id="app">
    <SideBar/>
    <div class="main">
    <router-view/>
    </div>

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
  width: calc(100vw - 290px);
  height: calc(100vh - 60px);
  padding: 30px;
  margin: 0px;
  background-color: #f4f5f7;
  float: left;
}
</style>
