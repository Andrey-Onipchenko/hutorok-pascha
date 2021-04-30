import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/game/gameover",
    name: "GameOver",
    component: () => import("../views/GameOver.vue"),
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("../views/Rules.vue"),
  },
  {
    path: "/winners",
    name: "winners",
    component: () => import("../views/Winners.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
