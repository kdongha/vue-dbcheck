<template>
  <div class="inputContainer">
    <input type="text" v-model="text" class="input" :placeholder="getPlaceholder()">
    <button class="inputSearch" @click="sendQuery">Search</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: ['type'],
  data() {
    return {
      text: '',
    };
  },
  methods: {
    getPlaceholder() {
      switch (this.type) {
        case 'hash':
          return 'Input MD5/SHA1/SHA256...';
        case 'url':
          return 'Input URL';
        default:
          return 'Etc...';
      }
    },
    ...mapActions('Search', ['sendHash', 'sendUrl']),
    sendQuery() {
      switch (this.type) {
        case 'hash':
          this.sendHash(this.text);
          break;
        case 'url':
          this.sendUrl(this.text);
          break;
        default:
      }
      this.text = '';
    },
  },
};
</script>
<style>
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.input {
  width: 50rem;
  height: 2rem;
  font-size: 1.2rem;
  line-height: 100%;
  border-radius: 10px;
  text-align: center;
}
.inputSearch {
  font-size: 1.3rem;
  border-radius: 10px;
  color: white;
  background-color: #2196f3;
}
</style>

