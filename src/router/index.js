import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Food from "@/views/Food.vue";
import Cart from "@/views/Cart.vue";
import "primeicons/primeicons.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/food",
      name: "food",
      component: Food,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
