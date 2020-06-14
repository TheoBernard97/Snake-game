<template>
  <div class="home">
    <h1>Home</h1>
    <div class="game-area">
      <div v-bind:key="snakeDot.index" v-for="snakeDot in snakeDots">
        <div class="snake-dot" v-bind:style="{top: snakeDot[0], left: snakeDot[1]}"></div>
      </div>
      <div class="food-dot" v-bind:style="{top: food[0], left: food[1]}"></div>
    </div>
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
  name: "Home",
  data() {
    return {
      snakeDots: [
        ["0", "0"],
        ["0", "2%"]
      ],
      food: this.getRandomCoordinates()
    };
  },
  methods: {
    getRandomCoordinates() {
      let min = 1;
      let max = 97;
      let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      return [x + "%", y + "%"];
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

.game-area {
  position: relative;
  border: solid 2px black;
  margin: 50px auto;
  width: 600px;
  height: 600px;
}

.snake-dot {
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: black;
  border: solid 1px white;
}

.food-dot {
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: red;
  border: solid 1px white;
}
</style>
