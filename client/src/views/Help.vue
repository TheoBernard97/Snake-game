<template>
  <div class="help">
    <h1>Help</h1>
    <p class="description">
      The snake game is a common video game concept where the player maneuvers a line which grows in length, with the line itself being a primary obstacle.
      The snake himself move constantly forward but you can change the direction.
    </p>
    <router-link to="/">
      <button>Back</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Help"
};
</script>

<style scoped>
.help {
  text-align: center;
}

.description {
  margin: auto auto 20px;
  width: 50%;
}
</style>
