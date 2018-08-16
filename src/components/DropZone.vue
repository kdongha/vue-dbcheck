<template>
  <div id="dropZone" @click="clickZone">
    <div>
      Drop or Click
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';

let inputFile = document.createElement('INPUT');
inputFile.setAttribute('type', 'file');

export default {
  name: 'dropZone',
  methods: {
    ...mapMutations('DropZone', ['setFile']),
    clickZone() {
      inputFile.click(this.setFile);
    },
    ...mapActions('DropZone', ['sendFile']),
  },
  mounted() {
    const dropZone = document.getElementById('dropZone');
    const DragOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
      dropZone.style.backgroundColor = '#18a4f5';
      e.dataTransfer.dropEffect = 'copy';
    };

    const DragLeave = (e) => {
      e.stopPropagation();
      e.preventDefault();
      dropZone.style.backgroundColor = '';
    };

    const DropFile = (e) => {
      e.stopPropagation();
      e.preventDefault();
      dropZone.style.backgroundColor = '';
      this.sendFile(e.dataTransfer.files[0]);
      this.$router.push('result');
    };

    inputFile.onchange = () => {
      this.sendFile(inputFile.files[0]);
      inputFile = document.createElement('INPUT');
      inputFile.setAttribute('type', 'file');
      this.$router.push('result');
    };

    dropZone.addEventListener('dragover', DragOver, false);
    dropZone.addEventListener('dragleave', DragLeave, false);
    dropZone.addEventListener('drop', DropFile, false);
  },
};
</script>
<style>
#dropZone {
  font-size: 3rem;
  margin: 2rem;
  height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
#dropZone:hover {
  background-color: #18a4f5;
  cursor: pointer;
}
#dropZone.dragover {
  background-color: #18a4f5;
}
</style>

