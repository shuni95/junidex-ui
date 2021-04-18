<template>
    <div>
        <h2>Manage Pokemon Team</h2>

        <div v-for="(teamMember, index) in team" :key="'team'+index">
            <label>Pokemon {{index + 1}}</label>
            <select :id="'pokemon' + (index+1)" @change="updatePokemonTeam($event)" :data-index="index">
                <option value="">--SELECT--</option>
                <option v-for="(pokemon, j) in pokemonAll"
                    :key="'team1-' + j"
                    :value="pokemon.id" :selected="teamMember == pokemon.id ? 'selected': ''">{{ pokemon.name }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemonAll: [],
            team: [],
            socket: {},
        }
    },

    methods: {
        updatePokemonTeam(event) {
            this.team[event.target.dataset['index']] = parseInt(event.target.value)

            this.socket.send(JSON.stringify({"body": {"team": this.team}}))
        }
    },

    created() {
        console.log("app team created");
        // Load team from API
        fetch(process.env.VUE_APP_REST_SERVER + "/api/teamIds")
            .then(r => r.json())
            .then(data => {
                this.team = data;
            })

        fetch(process.env.VUE_APP_REST_SERVER + "/api/all")
            .then(r => r.json())
            .then(data => {
                this.pokemonAll = data;
            })
    },

    mounted() {
        this.socket = new WebSocket(process.env.VUE_APP_WS_SERVER + "/ws");
        console.log("Attempting Connection...");

        this.socket.onopen = () => {
            console.log("Successfully Connected");
        };

        this.socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
            this.socket.send("Client Closed!")
        };

        this.socket.onerror = error => {
            console.log("Socket Error: ", error);
        };
    }
}
</script>

<style>

</style>
