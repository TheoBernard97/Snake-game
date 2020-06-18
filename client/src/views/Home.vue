<template>
  <div class="home">
    <h1>Home</h1>
    <GameArea />
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
import GameArea from "../components/GameArea";

export default {
  name: "Home",
  components: {
    GameArea
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
