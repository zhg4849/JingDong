/*
 * @Description:
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-21 16:57:40
 * @LastEditors: lp
 * @LastEditTime: 2020-08-26 15:20:58
 * @FilePath: \前端课程\vue\vue\jingdong\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vuex from "vuex";
Vue.use(Vuex);

import Mint from "mint-ui";
Vue.use(Mint);

import "../node_modules/mint-ui/lib/style.css";

import router from "../src/assets/js/router";
import store from "../src/assets/js/data.js";
// 全局的css
import "../src/assets/css/cssreset.css";
import "../src/assets/css/common.css";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
