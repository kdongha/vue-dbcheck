<template>
<div>
  <tab-page/>
  <Result/>
</div>
</template>
<script>
import TabPage from '@/components/TabPage.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'home',
  components: {
    TabPage,
    Result,
  },
};
</script>
<style>
</style>

