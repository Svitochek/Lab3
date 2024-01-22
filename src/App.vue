<template>
  <div id="app">
    <div className="tab-buttons">
      <button @click="currentView = 'Population'">Население</button>
      <button @click="currentView = 'Emissions'">Экология</button>
    </div>
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
      currentView: 'Emissions'
    };
  }
};
</script>

<style>
  body{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  button{
    background-color: #113e6a;
    opacity: .8;
    border: 1px solid #a48375;
    padding: 10px;
    cursor: pointer;
    border-radius: 20px;
    color: #ffff;
    font-size: 16px;
    margin-right: 1em;
  }

  button:hover{
    opacity: .9;
  }

  h1 {
    font-weight: 600;
  }

  *{
    box-sizing: border-box;
  }


</style>
