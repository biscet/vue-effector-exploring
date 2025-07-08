import { createApp } from "vue";

import "@/entities/styles/reset.scss";
import "@/app/providers/init";

import App from "@/app/App.vue";
import { setup } from "@/app/providers/setup";

const app = createApp(App);

setup(app);
