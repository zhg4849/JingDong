<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-27 09:43:25
 * @LastEditors: lp
 * @LastEditTime: 2020-08-28 03:12:16
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\welfare.vue
-->
<template>
  <main>
    <div class="welfare_header">
      <span class="h_img1"><img src="../assets/images/welfare_a1.png" alt="" @click="back()"></span>
      <p>神券福利站</p>
      <span class="h_img3"><img src="../assets/images/welfare_a3.png" alt=""></span>
      <span class="h_img2"><img src="../assets/images/welfare_a2.png" alt=""></span>
    </div>
    <img src="../assets/images/welfare_b1.png" alt="" class="h_img4">
    <img src="../assets/images/welfare_b2.png" alt="" class="h_img5">

    <div class="welfare_wrap" v-for="(item,index) in list">
      <ul class="welfare_list">
        <li class="welfare_list_left">
          <span class="w_money" v-if="item.money">{{item.money}}</span>
          <span class="w_price">{{item.price}}</span>
          <span class="w_limit">{{item.limit}}</span>
          <p>{{item.des}}</p>
        </li>
        <li class="welfare_list_right">
          <p @click="receive()">立即领取</p>
        </li>
      </ul>
    </div>

    <div class="welfare_footer_wrap1">
      <img src="../assets/images/welfare_d1.png" alt="" class="f_img1">
    </div>
    <div class="welfare_footer_wrap2">
      <img src="../assets/images/welfare_d2.png" alt="">
      <img src="../assets/images/welfare_d3.png" alt="">
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            money: '￥',
            price: '10',
            limit: '满20可用',
            des: '仅可购买自营图书全品类（特例商品除外）商品'
          },
          {
            money: '￥',
            price: '30',
            limit: '满31可用',
            des: '仅可购买汽车用品和鲜花园艺部分商品'
          },
          {
            money: '￥',
            price: '30',
            limit: '满99可用',
            des: '仅可购买家清部分商品'
          },
          {
            money: '￥',
            price: '20',
            limit: '满69可用',
            des: '仅可购买母婴自营部分商品'
          },
          {
            money: '￥',
            price: '9',
            limit: '满9.9可用',
            des: '仅可购买汽车用品、鲜花园艺和邮票钱币商品'
          },
          {
            price: '8.8折',
            limit: '满1可用',
            des: '仅可购买鲜花园艺、汽车用品和邮票钱币商品'
          },
        ]
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      receive() {
        alert('领取成功')
        this.$router.push('/index')
      }
    },
  }

</script>

<style>
  .welfare_header {
    width: 100%;
    height: 45px;
    text-align: center;
  }

  .welfare_header .h_img1 {
    float: left;
    width: 30px;
    line-height: 50px;
    height: 45px;
    margin-left: 5px;
  }

  .welfare_header .h_img1 img {
    width: 20px;
    height: 20px;
  }

  .welfare_header .h_img2 {
    float: right;
    width: 30px;
    line-height: 65px;
    height: 45px;
    margin-right: 15px;
  }

  .welfare_header .h_img2 img {
    width: 30px;
    height: 30px;
  }

  .welfare_header .h_img3 {
    float: right;
    width: 30px;
    line-height: 35px;
    height: 45px;
    margin-right: 5px;
  }

  .welfare_header .h_img3 img {
    width: 20px;
  }

  .welfare_header p {
    color: #333;
    width: 30%;
    height: 45px;
    line-height: 45px;
    float: left;
    padding-left: 110px;
  }

  .h_img4 {
    width: 100%;
  }

  .h_img5 {
    margin-top: -5px;
    width: 100%;
    margin-bottom: -4.5px;
  }

  .welfare_wrap {
    width: 100%;
    padding: 0px 10px;
    background-color: #f50f3b;
  }

  .welfare_list {
    width: 100%;
    height: 92px;
    background: url('../assets/images/welfare_c1.png') no-repeat;
    background-size: 95%;
  }

  .welfare_list_left {
    width: 65%;
    height: 88px;
    float: left;
    overflow: hidden;
  }


  .welfare_list_left .w_money {
    font-size: 20px;
    color: #fff;
    float: left;
    margin-left: 10px;
    margin-top: 25px;
  }

  .welfare_list_left .w_price {
    font-size: 30px;
    color: #fff;
    float: left;
    margin-left: 3px;
    margin-top: 15px;
    font-family: PingFang SC, Impact, Microsoft YaHei, Verdana, Arial, Helvetica, sans-serif;
  }

  .welfare_list_left .w_limit {
    width: 43%;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 13px;
    background-color: #eb4711;
    color: #fff;
    border-radius: 12px;
    float: right;
    margin-left: 2px;
    margin-top: 29px;
  }

  .welfare_list_left p {
    width: 250px;
    font-size: 12px;
    color: #fff;
    float: left;
    margin-left: 10px;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 行数 */
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .welfare_list_right {
    height: 88px;
    width: 30%;
    float: left;
  }

  .welfare_list_right p {
    width: 60%;
    height: 20%;
    margin: 0px auto;
    text-align: center;
    color: #eb4711;
    background-color: #ffe9e8;
    margin-top: 35px;
    font-size: 11px;
    border-radius: 10px;
  }

  .welfare_footer_wrap1 {
    width: 100%;
    padding: 0px 10px;
    background-color: #f50f3b;
    overflow: hidden;
  }

  .welfare_footer_wrap1 .f_img1 {
    width: 95%;
  }

  .welfare_footer_wrap2 {
    width: 95%;
    padding: 0px 10px;
    margin-top: -5px;
    background-color: #f50f3b;
    overflow: hidden;
  }

  .welfare_footer_wrap2 img {
    width: 50%;
    float: left;
  }

</style>
