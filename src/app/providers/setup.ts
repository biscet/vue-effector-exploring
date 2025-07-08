import type { App } from "vue";
import router from "@/app/providers/router";
import components from "@/shared/ui";

export function setup(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  app.use(router).mount("#app");
}
