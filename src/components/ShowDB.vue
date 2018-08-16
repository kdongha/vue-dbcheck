<template>
  <div>
    <button>hsb</button>
    <button>mdb</button>
    <button>pdb</button>
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
          <tr v-for="key in db.hsb" :key="key.HashString">
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
          <tr v-for="key in db.mdb" :key="key.PESectionHash">
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
          <tr v-for="key in db.pdb" :key="key.PhishingURL">
            <td>{{key.PhishingURL}}</td>
            <td>{{key.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ShowDB',
  computed: {
    ...mapState('ScanDB', ['showDB', 'db']),
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
</style>

