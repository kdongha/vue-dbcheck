<template>
  <div>
    <button v-if="hsb"
    @click="setShowDB('hsb')"
    v-bind:class="{'active':(this.showDB==='hsb'), 'disactive':(this.showDB!=='hsb')}">
      hsb
    </button>
    <button v-if="mdb"
    @click="setShowDB('mdb')"
    v-bind:class="{'active':(this.showDB==='mdb'), 'disactive':(this.showDB!=='mdb')}">
      mdb
    </button>
    <button v-if="pdb"
    @click="setShowDB('pdb')"
    v-bind:class="{'active':(this.showDB==='pdb'), 'disactive':(this.showDB!=='pdb')}">
      pdb
    </button>
    <table v-show="showDB==='hsb'">
      <thead>
        <tr>
          <th>Hash</th>
          <th>FileSize</th>
          <th>Environment</th>
          <th>Category</th>
          <th>Name</th>
          <th>Updated Time</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="key in hsb" :key="key.HashString">
            <td>{{key.HashString}}</td>
            <td>{{key.FileSize}}</td>
            <td>{{key.Environment}}</td>
            <td>{{key.Category}}</td>
            <td>{{key.Name}}</td>
            <td>{{key.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <table v-show="showDB==='mdb'">
      <thead>
          <th>PE Hash</th>
          <th>PE Size</th>
          <th>Environment</th>
          <th>Category</th>
          <th>Name</th>
          <th>Updated Time</th>
      </thead>
      <tbody>
          <tr v-for="key in mdb" :key="key.PESectionHash">
            <td>{{key.PESectionHash}}</td>
            <td>{{key.PESectionSize}}</td>
            <td>{{key.Environment}}</td>
            <td>{{key.Category}}</td>
            <td>{{key.Name}}</td>
            <td>{{key.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <table v-show="showDB==='pdb'">
      <thead>
          <th>URL</th>
          <th>Updated Time</th>
      </thead>
      <tbody>
          <tr v-for="key in pdb" :key="key.PhishingURL">
            <td>{{key.PhishingURL}}</td>
            <td>{{key.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <pagination v-if="showDB==='hsb'" :records="doughnutData.db.hsb"/>
    <pagination v-if="showDB==='mdb'" :records="doughnutData.db.mdb"/>
    <pagination v-if="showDB==='pdb'" :records="doughnutData.db.pdb"/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import pagination from './Pagination.vue';

export default {
  name: 'ShowDB',
  computed: {
    ...mapState('ScanDB', ['showDB', 'hsb', 'mdb', 'pdb', 'doughnutData']),
  },
  methods: {
    ...mapMutations('ScanDB', ['setShowDB']),
  },
  components: {
    pagination,
  },
};
</script>
<style>
table {
  border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
  line-height: 1.5;
  margin: 20px 10px;
}
table th {
  width: 155px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #777777;
}
table td {
  width: 155px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #eee;
}
th,
td {
  text-align: left;
  padding: 8px;
  max-width: 60vw;
  overflow-x: auto;
  white-space: nowrap;
}
tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
</style>

