<template>
  <div class="DoughnutContainer">
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js';

let ctx;
let myChart;

export default {
  name: 'DoughnutChart',
  props: ['data'],
  methods: {
    test(t) {
      console.log(t);
    },
  },
  mounted() {
    ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
      type: 'doughnut',
      data: this.data,
      responsive: true,
      maintainAspectRatio: false,

      options: {
        tooltips: {
          mode: 'index',
          position: 'nearest',
        },
        cutoutPercentage: 75,
      },
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
.DoughnutContainer {
  width: 80%;
  margin: auto;
}
</style>

