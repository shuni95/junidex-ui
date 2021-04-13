<template>
  <div id="app">
    <app-team />
  </div>
</template>

<script>
import AppTeam from './components/app/AppTeam.vue'

export default {
  name: 'Main',

  components: {
    AppTeam
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
