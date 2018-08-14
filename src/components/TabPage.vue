<template>
  <div class="tabContainer">
    <ul class="tab">
      <li :class="{ active : (type==='file')}" @click="setType('file')">File</li>
      <li :class="{ active : (type==='hash')}" @click="setType('hash')">Hash</li>
      <li :class="{ active : (type==='url')}" @click="setType('url')">Url</li>
    </ul>
    <div v-show="type==='file'" class="tabPage">
      <DropZone/>
    </div>
    <div v-show="type==='hash'" class="tabPage">
      <Input type="hash"/>
    </div>
    <div v-show="type==='url'" class="tabPage">
       <Input type="url"/>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import DropZone from './DropZone.vue';
import Input from './Input.vue';

export default {
  name: 'tabPage',
  computed: {
    ...mapState('TabPage', ['type']),
  },
  methods: {
    ...mapMutations('TabPage', ['setType']),
  },
  components: {
    DropZone,
    Input,
  },
};
</script>
<style>
.tab {
  padding: 0;
  margin-bottom: 0;
}
.tab > li {
  list-style: none;
  display: inline-block;
  font-size: 1.3rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 5px;
}
.tab > li:hover {
  cursor: pointer;
}
.tab > .active {
  background-color: #dddddd;
}
.tabPage {
  background-color: #dddddd;
  height: 15rem;
  margin-top: -10px;
  padding-top: 3px;
  padding-left: 5px;
  border-radius: 10px;
}
</style>

