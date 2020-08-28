<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-27 01:42:55
 * @LastEditors: lp
 * @LastEditTime: 2020-08-27 09:27:39
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\type_recommend.vue
-->
<template>
  <div class="right">
    <div class="right_title">
      <h4>热门分类</h4>
      <img src="../assets/images/type_b2.png" alt="" class="type_b2">
      <span>排行榜</span>
      <img src="../assets/images/type_b1.png" alt="" class="type_b1">
    </div>
    <ul class="right_con">
      <li v-for="(item,index) in r.list">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['r'],
    data() {
      return {
        list: ''
      }
    },
  }

</script>

<style>

</style>
