import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
// import Missing from "../views/404.vue";
// import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/demo",
  //   component: Demo,
  //   meta: {
  //     title: "Trydo || Creative Agency And Multipurpose Template",
  //   },
  // },
  {
    path: "/",
    name: "officialWebsite",
    meta: {
      title: "X-Beyond Official",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolioTwo2.vue"),
  },
  {
    path: "/mint",
    name: "mint",
    meta: {
      title: "X-Beyond Official",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolioTwoMint.vue"),
  },
  {
    path: "/commingSoon",
    name: "commingSoon",
    meta: {
      title: "X-Beyond Official",
    },
    component: () =>
      import("../views/all-home-version/commingSoon.vue"),
  },
  {
    path: "/redeemPage",
    name: "redeemPage",
    meta: {
      title: "X-Beyond Official",
    },
    component: () =>
      import("../views/all-home-version/redeemPage.vue"),
  },
  // {
  //   path: "/",
  //   name: "officialWebsite",
  //   meta: {
  //     title: "officialWebsite",
  //   },
  //   component: () =>
  //     import("../views/Xbeyond/officialWebsite.vue"),
  // },
  // {
  //   path: "/mint",
  //   name: "mint",
  //   meta: {
  //     title: "mint",
  //   },
  //   component: () =>
  //     import("../views/Xbeyond/mint.vue"),
  // },
   //2022/1/26首页
  //  {
  //   path: "/landing-personal-portfolio-02",
  //   name: "LandingPersonalPortfolioTwo",
  //   meta: {
  //     title: "Personal Portfolio Landing || VueJS Multipurpose Template",
  //   },
  //   component: () =>
  //     import("../views/all-home-version/LandingPersonalPortfolioTwo2.vue"),
  // },
  // //修改mint页面
  // {
  //   path: "/mint2",
  //   name: "LandingPersonalPortfolioTwo",
  //   meta: {
  //     title: "Personal Portfolio Landing || VueJS Multipurpose Template",
  //   },
  //   component: () =>
  //     import("../views/all-home-version/LandingPersonalPortfolioTwoMint.vue"),
  // },
];

const router = new VueRouter({
  // mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
