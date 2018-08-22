<template>
  <div class="testContainer">
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js';

let ctx;
let myChart;

export default {
  name: 'TestChart',
  props: ['data'],
  methods: {
    test(t) {
      console.log(t);
    },
  },
  mounted() {
    ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
      type: 'line',
      data: this.data,
      responsive: true,
    });
  },
  watch: {
    data: (data) => {
      myChart.data = data;
      myChart.update();
    },
  },
};
</script>
<style>
.testContainer {
  width: 80%;
  margin: auto;
}
</style>

