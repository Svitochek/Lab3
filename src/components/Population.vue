<template>
  <div>
    <h1>Население РФ</h1>
    <input type="file" @change="loadFile" />
    <h2 className="table-title" v-if="populationData.data.length">Распределение по субьектам (тысяч человек)</h2>
    <p v-if="populationData.data.length">Субьект с самым большим снижением населения — <span style="font-weight:600;">{{mostReduced.area}}: <span style="color: red">{{mostReduced.reduction}}</span></span></p>
    <DataTable v-if="populationData.data.length" :headers="populationData.headers" :data="populationData.data" />
    
  </div>
</template>

<script>
import { parseFile } from './parseFile';
import DataTable from './PopulationTable.vue';
import {analyzePopulation} from './analyzePopulation'

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
      },
      mostReduced : ''
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
        this.mostReduced = analyzePopulation(this.populationData)
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
