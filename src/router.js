import Vue from "vue";
import Router from "vue-router";
import App from "@/App.vue";
import Watch from '@/components/BaseUse/WatchDemo'
import Computed from "@/components/BaseUse/ComputedDemo";
import IfandShow from "@/components/BaseUse/IfandShow";
import For from "@/components/BaseUse/For";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      component: App,
      name: "App",
      path: "/"
    },
    {
      component: Watch,
      name: "watch",
      path: "/watch"
    },
    {
      name: "computed",
      component: Computed,
      path: "/computed"
    },
    {
      name: "IfandShow",
      component: IfandShow,
      path: "/IfandShow"
    },
    {
      name: "For",
      component: For,
      path: "/For"
    }
  ]
});