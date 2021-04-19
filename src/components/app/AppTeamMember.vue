<template>
    <div class="pokemon" :style="styleObject">
        <img v-if="name == ''" :id="'pokemon' + index" src="/static/img/blank.gif"/>
        <img v-else :id="'pokemon' + index" :src="'/static/img/' + this.name + '.gif'"/>
    </div>
</template>

<script>
export default {
    props: ['index', 'name', 'typeOne', 'typeTwo'],

    data() {
        return {
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png',
            styleObject: {
                background: '',
                'background-size': 'contain',
            }
        }
    },

    methods: {
        getColorStyle(_type) {
            switch(_type) {
                case 'Bug': return '#cbe669';
                case 'Poison': return '#dd38da';
                case 'Fire': return '#ff0000';
                case 'Flying': return 'rgb(34, 234, 234)';
                case 'Fighting': return 'rgb(164, 86, 40)';
                case 'Rock': return 'rgb(123, 57, 32)';
                default: return '#cbe669';
            }
        }
    },

    created() {
        let typeOneColor = this.getColorStyle(this.typeOne);
        let typeTwoColor = this.getColorStyle(this.typeTwo);

        this.styleObject.background = `url(${this.img}), linear-gradient(45deg, ${typeOneColor} 5%, transparent 30%, transparent 70%, ${typeTwoColor} 105%)`;
    }
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
    background-blend-mode: multiply;
    filter: drop-shadow(0px 0px 3px #189914);
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
