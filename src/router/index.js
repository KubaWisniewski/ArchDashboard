import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.loggedIn;
  console.log(loggedIn);
  if (loggedIn === false && to.path !== "/login") {
    return next({
      path: "/login"
    });
  } else if (to.path === "/login" && loggedIn === true) {
    next("/dashboard");
  }
  return next();
});

export default router;
