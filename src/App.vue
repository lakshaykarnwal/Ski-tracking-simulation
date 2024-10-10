<template>
  <div id="app">
    <ArcGISMap/>
  </div>
</template>

<script>
import ArcGISMap from './components/ArcGISMap.vue';

export default {
  name: 'App',
  components: {
    ArcGISMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
