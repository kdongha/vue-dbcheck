<template>
  <div>
    <Search/>
    <br>
    <br>
    <br>
    <Statistic/>
    <br>
    <br>
    <br>
    <ShowDB/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Search from '../components/Search.vue';
import Statistic from '../components/Statistic.vue';
import ShowDB from '../components/ShowDB.vue';

export default {
  name: 'ScanDB',
  computed: {
    ...mapState('ScanDB', ['showDB']),
  },
  components: {
    Search,
    Statistic,
    ShowDB,
  },
};
</script>
<style>
</style>

