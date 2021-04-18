<template>
    <div class="wrapper">
        <app-team-member v-for="(teamMember, index) in team"
            :key="'team' + index"
            :index="index"
            :name="teamMember"></app-team-member>
    </div>
</template>

<script>
import AppTeamMember from './AppTeamMember.vue';

export default {
    name: 'AppTeam',

    components: { AppTeamMember },

    data() {
        return {
            team: [],
            teamMember: null,
        }
    },

    created() {
      console.log("app team created");
    },

    mounted() {
        // Load team from API
        fetch(process.env.VUE_APP_REST_SERVER + "/api/team")
            .then(r => r.json())
            .then(data => {
                this.team = data;
            })

        // Connect WS
        let socket = new WebSocket(process.env.VUE_APP_WS_SERVER + "/ws");
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

        // Listen the messages
        socket.addEventListener('message', function (event) {
          console.log('Message from server', event.data);
          const dataDecoded = JSON.parse(event.data);
          console.info(event.data)
          if (dataDecoded['body']['team'] != null) {
            const team = dataDecoded['body']['team'];
            console.info(team)
            for (var i = 0; i < 6; i++) {
              if (team[i] == "") {
                document.getElementById("pokemon"+i).src = "/static/img/blank.gif";
              } else {
                document.getElementById("pokemon"+i).src = "/static/img/"+team[i]+".gif"
              }
            }
          }
        });
    }
}
</script>

<style>
    p {
        color: rgb(68, 0, 255);
        background-color: rgb(132, 132, 233);
        font-family: Monospace;
      }

.wrapper {
        display: grid;
        grid-template-columns: repeat(2, 125px);
        grid-gap: 10px;
      }
</style>