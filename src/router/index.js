import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/new",
    name: "new",
    component: () => import("../views/NewView.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/EditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
