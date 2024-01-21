<template>
  <div>
    <h1>Анализ выбросов парниковых газов</h1>
    <input type="file" @change="loadFile" />
    <DataTable v-if="emissionsData.data.length" :headers="emissionsData.headers" :data="emissionsData.data" />
  </div>
</template>

<script>
import { parseFile } from './parseFile';
import DataTable from './DataTable.vue';

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
      };
      reader.readAsText(file);
    }
  }
};
</script>
