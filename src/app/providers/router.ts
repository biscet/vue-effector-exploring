import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { BasePage, FormPage, NotFoundPage } from "@/pages";
import { PATHS } from "@/shared/constants/paths";

const routes = [
  { name: PATHS.BASE.NAME, path: PATHS.BASE.PATH, component: BasePage },
  { name: PATHS.FORM.NAME, path: PATHS.FORM.PATH, component: FormPage },
  {
    name: PATHS.NOT_FOUND.NAME,
    path: PATHS.NOT_FOUND.PATH,
    component: NotFoundPage,
  },
] as RouteRecordRaw[];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
