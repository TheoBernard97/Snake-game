import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/scoreboard",
      name: "scoreboard",
      component: () => import("./views/ScoreBoard.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("./views/Help.vue"),
    },
  ],
});
