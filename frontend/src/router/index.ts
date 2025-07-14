import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      // Eager-loaded when app starts
      component: HomeView,
    },
    {
      path: "/classic",
      name: "Classic",
      // Lazy-loaded when the route is visited.
      component: () => import("../views/ClassicGameView.vue"),
    },
    {
      path: "/quote",
      name: "Quote",
      component: () => import("../views/QuoteGameView.vue"),
    },
    {
      path: "/ability",
      name: "Ability",
      component: () => import("../views/AbilityGameView.vue"),
    },
    {
      path: "/emoji",
      name: "Emoji",
      component: () => import("../views/EmojiGameView.vue"),
    },
    {
      path: "/splash",
      name: "Splash",
      component: () => import("../views/SplashGameView.vue"),
    },
  ],
});

export default router;
