import { createRouter, createWebHistory } from "vue-router"

import DocuDemo from "../components/DocuDemo.vue";
import FormDemo from '../components/forms/FormDemo.vue'
import SignIn from "../components/SignIn.vue"
import Cart from "../components/Cart.vue"
import Dinosaur from "../components/Dinosaur.vue"
import ShoppingList from '../components/ShoppingList.vue'
//import FetchDemo from '../components/fetch/FetchDemo.vue'
import SlotDemo from '../components/SlotDemo.vue'
import VueDemo from '../components/VueDemo.vue'

const routes = [
  {
    path: "/doc-demo/",
    component: DocuDemo,
  },
  {
    path: "/form-demo/",
    component: FormDemo,
  },
  {
    path: "/sign-in/",
    component: SignIn,
  },
  {
    path: "/cart/",
    component: Cart,
  },
  {
    path: "/:dinosaur",
    name: "Dinosaur",
    component: Dinosaur,
    props: true,
  },
  { path: "/shopping-list", component: ShoppingList },
  { path: "/slotd", component: SlotDemo },
  { path: "/vueDemo", component: VueDemo },
  //{ path: "/fetch", component: FetchDemo },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
