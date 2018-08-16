<template>
  <div class="chartContainer">
    <button class="chartButton">DB</button>
    <button class="chartButton">Environments</button>
    <button class="chartButton">Categories</button>
    <div>
      <toggle-button
      :value="true"
      :height="30"
      :width="80"
      :labels="{checked: 'Line', unchecked: 'Pie'}"/>
      차트는 여기다가
    </div>
  </div>
</template>
<script>
import ToggleButton from 'vue-js-toggle-button';
import Vue from 'vue';

Vue.use(ToggleButton);

export default {
  name: 'Statistic',
};
</script>
<style>
.chartContainer {
  text-align: center;
}
.chartButton {
}
.vue-js-switch {
  float: right;
}
.v-switch-label {
  font-size: 20px;
}
</style>
