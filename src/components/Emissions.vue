<template>
  <div>

  <div>
    <h1>Анализ выбросов парниковых газов</h1>
    <input type="file" @change="loadFile" />
    <DataTable v-if="emissionsData.data.length" :headers="emissionsData.headers" :data="emissionsData.data" />
  </div>
  <div v-if="analysisResult.mostReduced || analysisResult.leastReduced">
      <p><strong>Наибольшее уменьшение выбросов:</strong> {{ analysisResult.mostReduced.gas }} <span style="color: red;">{{ analysisResult.mostReduced.reduction.toFixed(1)}}</span></p>
      <p><strong>Наименьшее уменьшение выбросов:</strong> {{ analysisResult.leastReduced.gas}} <span style="color: green;">{{ analysisResult.leastReduced.reduction.toFixed(1)}}</span></p>
    </div>
     </div>
</template>

<script>
import { parseFile } from './parseFile';
import DataTable from './DataTable.vue';
import {analyzeEmissions} from './analyzeEmissions'

export default {
  name: 'Emissions',
  components: {
    DataTable
  },
  data() {
    return {
      emissionsData: {
        headers: [],
        data: []
      },
      analysisResult: {
        mostReduced: '',
        leastReduced: ''
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
        this.emissionsData = parseFile(text);
        this.analysisResult = analyzeEmissions(this.emissionsData);

      };


      reader.readAsText(file);
    }
  }
};
</script>
