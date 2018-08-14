<template>
  <div id="dropZone" @click="clickZone">
    <div>
      Drop or Click
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

const inputFile = document.createElement('INPUT');
inputFile.setAttribute('type', 'file');

export default {
  name: 'dropZone',
  methods: {
    ...mapMutations('DropZone', ['setFile']),
    clickZone() {
      inputFile.click(this.setFile);
      inputFile.onchange = () => {
        this.setFile(inputFile.files[0]);
      };
    },
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
      this.setFile(e.dataTransfer.files[0]);
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

