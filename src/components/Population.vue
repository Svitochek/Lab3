<template>
  <div>
    <h1>Население РФ</h1>
    <input type="file" @change="loadFile" />
    <h2 className="table-title" v-if="populationData.data.length">Распределение по субьектам (тысяч человек)</h2>
    <DataTable v-if="populationData.data.length" :headers="populationData.headers" :data="populationData.data" />
     
  </div>
</template>

<script>
import { parseFile } from './parseFile';
import DataTable from './PopulationTable.vue';

export default {
  name: 'Population',
  components: {
    DataTable
  },
  data() {
    return {
      populationData: {
        headers: [],
        data: []
      }
    };
  },
  methods: {
    loadFile(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = e => {
        const text = e.target.result;
        this.populationData = parseFile(text);
        console.log(this.populationData.headers)
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style>
  .table-title{
    text-align: center;
    margin: 10px 0;
  }
</style>
