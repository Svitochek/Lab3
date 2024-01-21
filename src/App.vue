<template>
  <div id="app">
    <button @click="currentView = 'Population'">Население</button>
    <button @click="currentView = 'Emissions'">Экология</button>

    <Population v-if="currentView === 'Population'" />
    <Emissions v-if="currentView === 'Emissions'" />
  </div>
</template>

<script>
import Population from './components/Population.vue';
import Emissions from './components/Emissions.vue';

export default {
  name: 'App',
  components: {
    Population,
    Emissions
  },
  data() {
    return {
      currentView: 'Population'
    };
  }
};
</script>
