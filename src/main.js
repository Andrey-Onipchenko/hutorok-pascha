import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";
import VueGtag from "vue-gtag-next";

createApp(App)
  .use(store)
  .use(router)
  .use(Maska)
  .use(VueGtag, {
    property: {
      id: "UA-53317131-4",
    },
  })
  .mount("#app");
