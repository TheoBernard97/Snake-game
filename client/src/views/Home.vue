<template>
  <div class="home">
    <h1>Home</h1>
    <div class="game-area"></div>
    <div class="nav">
      <router-link to="/scoreboard">
        <button>ScoreBoard</button>
      </router-link>
      <router-link to="/help">
        <button>Help</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  text-align: center;
}

.game-area {
  border: solid 2px black;
  width: 1000px;
  height: 500px;
  margin: 5% auto;
}
</style>
