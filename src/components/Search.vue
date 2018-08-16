<template>
  <div class="search">
    <Multiselect
    multiple
    v-model="selectedEnvironments"
    :options="this.environments"
    placeholder="Select Environments"/>
    <Multiselect
    multiple
    v-model="selectedCategories"
    :options="this.categories"
    placeholder="Select categories"/>
     <date-picker v-model="selectedDate" range lang="en" format="YYYY-MM-DD" confirm/>
     <br>
     <br>
     <button class="inputSearch">Scan</button>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import DatePicker from 'vue2-datepicker';

import { mapState } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      selectedEnvironments: [],
      selectedCategories: [],
      selectedDate: [],
    };
  },
  computed: {
    ...mapState('ScanDB', ['environments', 'categories']),
  },
  components: {
    Multiselect,
    DatePicker,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.search {
  text-align: center;
}
.multiselect {
  width: 280px;
  display: inline-block;
  background-color: #ffffff;
}
</style>

