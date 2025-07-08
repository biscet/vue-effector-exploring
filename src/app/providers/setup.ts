import type { App } from "vue";
import router from "@/app/providers/router";

export function setup(app: App) {
  app.use(router).mount("#app");
}
