/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-22 10:25:35
 * @LastEditors: lp
 * @LastEditTime: 2020-08-28 10:02:42
 * @FilePath: \前端课程\vue\vue\jingdong\src\assets\js\router.js
 */
import VueRouter from 'vue-router';

import first from '../../components/first.vue';
import index from '../../components/index.vue';
import type from '../../components/type.vue';
import surp from '../../components/surp.vue';
import cart from '../../components/cart.vue';
import login from '../../components/login.vue';
import welfare from '../../components/welfare.vue';
import type_recommend from '../../components/type_recommend.vue';
import type_type from '../../components/type_type.vue';
import details from '../../components/details.vue';

export default new VueRouter({
  routes: [{
      path: '/',
      component: first,
      children: [{
          path: '/index',
          component: index,
        },
        {
          path: '/type',
          component: type,
          children: [{
              path: '/type',
              component: type_recommend,
            },
            {
              path: '/type',
              component: type_type
            },
          ]
        },
        {
          path: '/cart',
          component: cart
        },
      ],
      redirect: '/index'
    },
    {
      path: '/surp',
      component: surp
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index/welfare',
      component: welfare
    },
    {
      path: '/cart/details',
      component: details
    },
    {
      path: '/*',
      redirect: '/index'
    },
  ]
})
