import { createApp } from "vue";
import router from './router/index.ts';
import {createPinia} from 'pinia';

import App from "./App.vue";

import "./styles/style.css";

const app = createApp(App);
const store = createPinia();
app.use(router);
app.use(store);
//app.component("food-item", FoodItem);
app.mount("#app");

// const appRouting = createApp(AppRouting);
// appRouting.use(router);
// appRouting.mount("#app-routing");
