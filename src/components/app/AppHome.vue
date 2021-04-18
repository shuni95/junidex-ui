<template>
   <div id="app">
    <app-team />
  </div>
</template>

<script>
import AppTeam from './AppTeam'

export default {
    name: 'AppHome',

    components: {
        AppTeam
    },

    created() {
        console.log("app home created");
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
}
</style>