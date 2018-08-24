<template>
  <div class="chartContainer" v-if="Object.keys(doughnutData).length!==0">
    <button class="chartButton"
    @click="setType('db')"
    v-bind:class="{'active':(this.type==='db'), 'disactive':(this.type!=='db')}">
      DB
    </button>
    <button class="chartButton"
    @click="setType('environment')"
    v-bind:class="{'active':(this.type==='environment'), 'disactive':(this.type!=='environment')}">
      Environments
    </button>
    <button class="chartButton"
    @click="setType('category')"
    v-bind:class="{'active':(this.type==='category'), 'disactive':(this.type!=='category')}">
      Categories
    </button>
    <div>
      <toggle-button
      v-model="line"
      :height="30"
      :width="130"
      :labels="{checked: 'Line', unchecked: 'Doughnut'}"/>
      <LineChart v-if="line" :data='this.getLineData()'/>
      <DoughnutChart v-else-if="!line" :data='this.getDoughnutData()'/>
    </div>
  </div>
</template>
<script>
import ToggleButton from 'vue-js-toggle-button';
import Vue from 'vue';
import { mapState } from 'vuex';

import LineChart from './LineChart.vue';
import DoughnutChart from './DoughnutChart.vue';

Vue.use(ToggleButton);

const colorMap = [
  '#ffa963',
  '#6b32de',
  '#60ff91',
  '#c900ac',
  '#009229',
  '#ff2994',
  '#f7ff66',
  '#006ce5',
  '#99b000',
  '#400048',
  '#ffe17e',
  '#002551',
  '#b26100',
  '#0187dd',
  '#880019',
  '#c5f0ff',
  '#370015',
  '#bfd0ff',
  '#023a00',
  '#ff8ad0',
  '#01855f',
  '#ffaea4',
  '#00535c',
  '#5e5400',
];

let colorIndex = 0;

const getColor = () => {
  const color = colorMap[colorIndex];
  if (colorIndex === 23) {
    colorIndex = 0;
  } else {
    colorIndex += 1;
  }
  return color;
};
export default {
  name: 'Statistic',
  data() {
    return {
      type: 'db',
      line: true,
    };
  },
  computed: {
    ...mapState('ScanDB', ['lineData', 'doughnutData']),
  },
  methods: {
    getLineData() {
      const labels = Object.keys(this.lineData[this.type][Object.keys(this.lineData[this.type])[0]],);
      const datasets = [];

      Object.keys(this.lineData[this.type]).forEach((element) => {
        const color = getColor();
        datasets.push({
          label: element,
          fill: false,
          data: Object.values(this.lineData[this.type][element]),
          backgroundColor: color,
          borderColor: color,
        });
      });
      return {
        labels,
        datasets,
      };
    },
    getDoughnutData() {
      const datasets = [{ data: [], backgroundColor: [] }];
      const labels = [];
      Object.keys(this.doughnutData[this.type]).forEach((element) => {
        const color = getColor();
        labels.push(element);
        datasets[0].data.push(this.doughnutData[this.type][element]);
        datasets[0].backgroundColor.push(color);
      });
      return {
        datasets,
        labels,
      };
    },
    setType(type) {
      this.type = type;
    },
  },
  components: {
    LineChart,
    DoughnutChart,
  },
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
