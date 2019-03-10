<template>
  <div id="app">
    <homeSign/>
  </div>
</template>

<script>
import homeSign from './components/homeSign.vue'

export default {
  name: 'app',
  components: {
    homeSign
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
