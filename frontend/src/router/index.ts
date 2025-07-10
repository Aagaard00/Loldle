import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/classic",
      name: "Classic",
      // route level code-splitting
      // this generates a separate chunk (Classic.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ClassicGameView.vue"),
    },
  ],
});

export default router;
