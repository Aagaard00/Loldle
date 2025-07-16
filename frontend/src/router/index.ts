import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const baseName: string = "Loldle";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: `${baseName}`,
      // Eager-loaded when app starts
      component: HomeView,
    },
    {
      path: "/classic",
      name: `Classic | ${baseName}`,
      // Lazy-loaded when the route is visited.
      component: () => import("../views/ClassicGameView.vue"),
    },
    {
      path: "/quote",
      name: `Quote | ${baseName}` ,
      component: () => import("../views/QuoteGameView.vue"),
    },
    {
      path: "/ability",
      name: `Ability | ${baseName}`,
      component: () => import("../views/AbilityGameView.vue"),
    },
    {
      path: "/emoji",
      name: `Emoji | ${baseName}`,
      component: () => import("../views/EmojiGameView.vue"),
    },
    {
      path: "/splash",
      name: `Splash | ${baseName}`,
      component: () => import("../views/SplashGameView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  document.title = to.name?.toString() ?? baseName;
});

export default router;
