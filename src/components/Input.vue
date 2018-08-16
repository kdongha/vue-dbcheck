<template>
  <div class="inputContainer">
    <input type="text" class="input" :placeholder="getPlaceholder()">
    <button class="inputSearch">Search</button>
  </div>
</template>
<script>
export default {
  props: ['type'],
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

