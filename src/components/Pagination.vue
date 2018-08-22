<template>
  <ul class="pagination">
    <li class="disactive" @click=pageFirst><<</li>
    <li class ="disactive" @click="pageDown"><</li>
    <li  v-for="key in this.pageArray"
    v-bind:key="key"
    v-bind:class="{'active':((page%10)===(key%10)), 'disactive':((page%10)!==(key%10))}"
    @click="pageClick(key)">
      {{key}}
    </li>
    <li class="disactive" @click="pageUP">></li>
    <li class="disactive" @click="pageLast">>></li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'pagination',
  props: ['records'],
  data() {
    return {
      page: 1,
      pageArray: [],
      perPage: 50,
    };
  },
  computed: {
    ...mapState('ScanDB', ['showDB']),
  },
  methods: {
    ...mapActions('ScanDB', ['sendPage']),
    getPageArray() {
      const array = [];
      const i = Math.floor((this.page - 1) / 10) * 10 + 1;
      for (
        let j = i;
        j <= Math.ceil(this.records / this.perPage) && j < i + 10;
        j += 1
      ) {
        array.push(j);
      }
      this.pageArray = array;
    },
    pageClick(page) {
      this.page = page;
      this.sendPage({ db: this.showDB, page: this.page });
    },
    pageUP() {
      if (this.pageArray[0] + 10 <= Math.ceil(this.records / this.perPage)) {
        this.page = this.pageArray[0] + 10;
        this.getPageArray();
        this.sendPage({ db: this.showDB, page: this.page });
      }
    },
    pageDown() {
      if (this.pageArray[0] > 1) {
        this.page = this.pageArray[0] - 10;
        this.getPageArray();
        this.sendPage({ db: this.showDB, page: this.page });
      }
    },
    pageFirst() {
      if (this.page !== 1) {
        this.page = 1;
        this.getPageArray();
        this.sendPage({ db: this.showDB, page: this.page });
      }
    },
    pageLast() {
      if (this.page !== Math.ceil(this.records / this.perPage)) {
        this.page = Math.ceil(this.records / this.perPage);
        this.getPageArray();
        this.sendPage({ db: this.showDB, page: this.page });
      }
    },
  },
  mounted() {
    this.getPageArray();
  },
  watch: {
    records() {
      this.page = 1;
      this.getPageArray();
    },
  },
};
</script>
<style>
.pagination {
  display: flex;
  justify-content: center;
}
.pagination li {
  list-style: none;
  display: inline-block;
  width: 3rem;
  margin-left: -1px;
  text-align: center;
  border: solid 1px #ddd;
  font-size: 1.3rem;
}
.disactive {
  color: #337ab5;
  cursor: pointer;
}
.active {
  background-color: #337ab5;
  color: #ffffff;
}
</style>

