/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-26 14:31:38
 * @LastEditors: lp
 * @LastEditTime: 2020-08-26 14:34:53
 * @FilePath: \前端课程\vue\vue\jingdong\src\assets\js\data.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count++
    },
    add(state, n) {
      state.count = state.count + n;
    }
  }
})
