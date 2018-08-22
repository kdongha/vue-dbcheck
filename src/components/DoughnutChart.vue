<script>
import { Doughnut, mixins } from 'vue-chartjs';

export default {
  name: 'DoughnutChart',
  mixins: [mixins.reactiveProp],
  props: ['options'],
  extends: Doughnut,
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 75,
    });
  },
};
</script>
<style scoped>
</style>
