import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

function setFavicon(isDark: boolean) {
  const link = document.getElementById("favicon") as HTMLLinkElement;
  link.href = isDark ? "/loldle-white.ico" : "/loldle-black.ico";
}

setFavicon(window.matchMedia('(prefers-color-scheme: dark)').matches);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
  setFavicon(e.matches);
});