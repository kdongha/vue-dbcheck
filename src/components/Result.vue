<template>
  <div class="resultContainer">
    <table v-if="result.hsb">
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
          <tr>
            <td>{{result.hsb.HashString}}</td>
            <td>{{result.hsb.FileSize}}</td>
            <td>{{result.hsb.Environment}}</td>
            <td>{{result.hsb.Category}}</td>
            <td>{{result.hsb.Name}}</td>
            <td>{{result.hsb.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <table v-else-if="result.mdb">
      <thead>
          <th>PE Hash</th>
          <th>PE Size</th>
          <th>Environment</th>
          <th>Category</th>
          <th>Name</th>
          <th>Updated Time</th>
      </thead>
      <tbody>
          <tr>
            <td>{{result.mdb.PESectionHash}}</td>
            <td>{{result.mdb.PESectionSize}}</td>
            <td>{{result.mdb.Environment}}</td>
            <td>{{result.mdb.Category}}</td>
            <td>{{result.mdb.Name}}</td>
            <td>{{result.mdb.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <table v-else-if="result.pdb">
      <thead>
          <th>URL</th>
          <th>Updated Time</th>
      </thead>
      <tbody>
          <tr>
            <td>{{result.pdb.PhishingURL}}</td>
            <td>{{result.pdb.UpdatedTime}}</td>
          </tr>
      </tbody>
    </table>
    <div v-else-if="result.error">
      Error : The file type is not PE type.
    </div>
    <div v-else-if="result !==''">
      No Search result
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'result',
  computed: { ...mapState('Search', ['result']) },
};
</script>
<style>
.resultContainer {
  margin-top: 2rem;
  text-align: center;
}

.resultContainer td {
  overflow-x: auto;
}
</style>

