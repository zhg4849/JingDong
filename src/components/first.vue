<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-22 10:31:19
 * @LastEditors: lp
 * @LastEditTime: 2020-08-24 16:01:39
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\first.vue
-->
<template>
  <main>
    <router-view></router-view>
    <ul class="index_footer">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="item.path">
          <img :src="item.pic" alt="" class="pic">
          <img :src="item.src" alt="" class="src">
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            path: '/index',
            con: '首页',
            pic: './src/assets/images/index.png',
            src: './src/assets/images/index_s.png',
          },
          {
            path: '/type',
            con: '分类',
            pic: './src/assets/images/type.png',
            src: './src/assets/images/type_s.png',
          },
          {
            path: '/surp',
            con: '京喜',
            pic: './src/assets/images/surp.png',
            src: './src/assets/images/surp_s.png',
          },
          {
            path: '/cart',
            con: '购物车',
            pic: './src/assets/images/cart.png',
            src: './src/assets/images/cart_s.png',
          },
          {
            path: '/login',
            con: '未登录',
            pic: './src/assets/images/login.png',
            src: './src/assets/images/login_s.png',
          },
        ]
      }
    }
  }

</script>

<style>
  .pic {
    display: inline-block;
  }

  .src {
    display: none;
  }

  .router-link-active .pic {
    display: none;
  }

  .router-link-active .src {
    display: inline-block;
  }

  .index_footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 0px 9px 1px #ccc;
  }

  .index_footer li {
    width: 20%;
    float: left;
    text-align: center;
  }

  .index_footer li img {
    width: 65px;
  }

</style>
