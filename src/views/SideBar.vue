<template>
  <div class="sidebar">
    <Logo/>
    <hr>
    <SideNav/>
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue';
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'sidebar',
  components: {
    Logo,
    SideNav,
  },
};
</script>
<style>
.sidebar {
  background-color: #2c2c2c;
  width: 230px;
  height: 100vh;
  float: left;
}
</style>

