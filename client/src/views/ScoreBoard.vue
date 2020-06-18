<template>
  <div class="scoreboard">
    <h1>ScoreBoard</h1>
    <button v-on:click="getScores">Get scores</button>

    <router-link to="/">
      <button>Back</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  methods: {
    getScores() {
      fetch("http://localhost:5000/api/scores/getScores", {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.scoreboard {
  text-align: center;
}
</style>
