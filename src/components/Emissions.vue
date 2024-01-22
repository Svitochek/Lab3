<template>
  <div>
    <h1>Анализ выбросов парниковых газов</h1>
    <input type="file" @change="loadFile" />

    <DataTable v-if="emissionsData.data.length" :headers="emissionsData.headers" :data="emissionsData.data" />

      <!-- вывод данных об уменьшении выбросов -->
    <div v-if="analysisResult.mostReduced || analysisResult.leastReduced">
        <p><strong>Наибольшее уменьшение выбросов:</strong> {{ analysisResult.mostReduced.gas }} <span style="color: red;">{{ analysisResult.mostReduced.reduction.toFixed(1)}}</span></p>
        <p><strong>Наименьшее уменьшение выбросов:</strong> {{ analysisResult.leastReduced.gas}} <span style="color: green;">+{{ analysisResult.leastReduced.reduction.toFixed(1)}}</span></p>
        <Graph v-if="chartData" :data="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
import { parseFile } from '../utils/parseFile';
import DataTable from './DataTable.vue';
import {analyzeEmissions} from '../utils/analyzeEmissions'
import Graph from './Graph.vue';
import prepareChartData from '../utils/preparingData'


export default {
  name: 'Emissions',
  components: {
    DataTable,
    Graph
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
      },
      chartData: null,
      options:{}
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
        this.chartData = prepareChartData(this.emissionsData);
      };
      reader.readAsText(file);
    },
  }
}
</script>
