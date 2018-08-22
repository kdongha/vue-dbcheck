<template>
  <div class="tabContainer">
    <ul class="tab">
      <li :class="{ active : (type==='file')}" @click="setType('file')">File</li>
      <li :class="{ active : (type==='hash')}" @click="setType('hash')">Hash</li>
      <li :class="{ active : (type==='url')}" @click="setType('url')">Url</li>
    </ul>
    <div v-show="type==='file'" class="tabPage">
      <Spinner :size="50" :line-size="10" v-if="isLoading"/>
      <DropZone v-else/>
    </div>
    <div v-show="type==='hash'" class="tabPage">
      <Spinner :size="50" :line-size="10" v-if="isLoading"/>
      <Input type="hash" v-else/>
    </div>
    <div v-show="type==='url'" class="tabPage">
      <Spinner :size="50" :line-size="10" v-if="isLoading"/>
       <Input type="url" v-else/>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

import Spinner from 'vue-simple-spinner';
import DropZone from './DropZone.vue';
import Input from './Input.vue';

export default {
  name: 'tabPage',
  computed: {
    ...mapState('TabPage', ['type']),
    ...mapState('Search', ['isLoading']),
  },
  methods: {
    ...mapMutations('TabPage', ['setType']),
  },
  components: {
    DropZone,
    Input,
    Spinner,
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
.tabPage > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

