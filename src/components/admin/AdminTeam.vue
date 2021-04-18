<template>
    <div>
        <h2>Manage Pokemon Team</h2>

        <div>
            <label>Pokemon 1</label>
            <select id="pokemon1">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team1-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>

        <div>
            <label>Pokemon 2</label>
            <select id="pokemon2">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team2-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>

        <div>
            <label>Pokemon 3</label>
            <select id="pokemon3">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team3-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>

        <div>
            <label>Pokemon 4</label>
            <select id="pokemon4">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team4-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>

        <div>
            <label>Pokemon 5</label>
            <select id="pokemon5">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team5-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>

        <div>
            <label>Pokemon 6</label>
            <select id="pokemon6">
                <option v-for="(pokemon, index) in pokemonAll"
                    :key="'team6-' + index"
                    :value="pokemon.id">{{ pokemon.name }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemonAll: [],
        }
    },

    mounted() {
        let socket = new WebSocket("ws://127.0.0.1:8080/ws");
        console.log("Attempting Connection...");

        socket.onopen = () => {
            console.log("Successfully Connected");
        };

        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
            socket.send("Client Closed!")
        };

        socket.onerror = error => {
            console.log("Socket Error: ", error);
        };

        var pokemon1 = document.getElementById("pokemon1");
        var pokemon2 = document.getElementById("pokemon2");
        var pokemon3 = document.getElementById("pokemon3");
        var pokemon4 = document.getElementById("pokemon4");
        var pokemon5 = document.getElementById("pokemon5");
        var pokemon6 = document.getElementById("pokemon6");
        let team = [];

        function updatePokemonTeam (team) {
          socket.send(JSON.stringify({"body": {"team": team}}));
        }

        pokemon1.addEventListener('change', (event) => {
          team[0] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });

        pokemon2.addEventListener('change', (event) => {
          team[1] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });

        pokemon3.addEventListener('change', (event) => {
          team[2] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });

        pokemon4.addEventListener('change', (event) => {
          team[3] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });

        pokemon5.addEventListener('change', (event) => {
          team[4] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });

        pokemon6.addEventListener('change', (event) => {
          team[5] = parseInt(event.target.value);
          updatePokemonTeam(team);
        });
    }
}
</script>

<style>

</style>