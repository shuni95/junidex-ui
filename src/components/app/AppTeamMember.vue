<template>
  <div class="pokemon">
    <img v-if="name == ''" :id="'pokemon' + index" src="/static/img/blank.gif"/>
    <img v-else :id="'pokemon' + index" :src="'/static/img/' + this.name + '.gif'"/>
  </div>
</template>

<script>
export default {
    props: ['index', 'name']
}
</script>

<style>

  .pokemon {
    display: inline;
    text-align: center;
    padding: 10px;
    width: 100px;
    height: 100px;
    position: relative;
    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png");
    background-size: contain;
  }

  .pokemon > img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
  }
</style>