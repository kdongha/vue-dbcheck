<template>
  <div>
    <div  class="search">
    <Multiselect
    multiple
    :searchable="false"
    :close-on-select="false"
    :limit="2"
    v-model="selectedEnvironments"
    :options="this.environments"
    placeholder="Select Environments"/>
    <Multiselect
    multiple
    :searchable="false"
    :limit="2"
    :close-on-select="false"
    v-model="selectedCategories"
    :options="this.categories"
    placeholder="Select categories"/>
     <date-picker
     v-model="selectedDate"
     range
     lang="en"
     format="YYYY-MM-DD"
     confirm
     not-before="2018-07-05"/>
    </div>
    <div class="buttonContainer">
      <Spinner :size="20" :line-size="5" v-if="isLoading"/>
     <button class="inputSearch" v-else
     @click="sendScanDB({
       environments:selectedEnvironments,
       categories:selectedCategories,
       startDate:selectedDate[0],
       endDate:selectedDate[1]
       })">
        Scan
       </button>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import DatePicker from 'vue2-datepicker';
import Spinner from 'vue-simple-spinner';

import { mapState, mapActions } from 'vuex';

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
    ...mapState('ScanDB', ['environments', 'categories', 'isLoading']),
  },
  methods: {
    ...mapActions('ScanDB', ['sendScanDB']),
  },
  components: {
    Multiselect,
    DatePicker,
    Spinner,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.search {
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.multiselect {
  width: 400px;
  display: inline-block;
  background-color: #ffffff;
}
.buttonContainer {
  margin-top: 3rem;
  text-align: center;
}
.mx-datepicker-range {
  width: 220px;
}
</style>

