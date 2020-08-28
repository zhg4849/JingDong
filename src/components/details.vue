<template>
  <main>
    <p class="details_back"><img src="../assets/images/details_back.png" alt="" @click="back()"></p>
    <div class="details_slide">
      <mt-swipe :auto="5000">
        <mt-swipe-item><img src="../assets/images/details_slide1.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/details_slide2.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/details_slide3.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/details_slide4.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/details_slide5.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="price">
      <div class="pri_show">
        <span class="pri_left">
          ￥
          <b class="pri_left_m">68</b>
          .77
        </span>
        <div class="pri_right">
          <img src="../assets/images/det_collecot.png" alt=""><br>
          收藏
        </div>
        <div class="pri_right">
          <img src="../assets/images/det_reminder.png" alt=""><br>
          降价提醒
        </div>
        <p class="pri_p">不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中</p>
        <p class="pri_p1">可自由伸缩设计折叠免安装收纳不占地</p>
      </div>
    </div>
    <!-- 优惠卷 -->
    <div class="discount">
      <span class="dct_left">优惠</span>
      <div class="dct_content">
        <p>
          <span>满30减6</span>
          <span>满99减10</span>
          <span id="new">新用户专享</span>
        </p>
        <p><span>满减</span>&nbsp;&nbsp;每满95000元，可减49887元现金</p>

      </div>
      <img src="../assets/images/det_spot.png" alt="">
    </div>
    <!-- 选择商品和收货地址 -->
    <div class="select">
      <div class="slt_cont">
        <span class="slt_left">已选</span>
        <span class="slt_center">不锈钢1.4米【无伸缩】，中，1个</span>
        <img src="../assets/images/det_spot.png" alt="" class="slt_right">
        <p>
          本商品支持保障服务，点击可选服务
        </p>
      </div>
      <div class="slt_cont">
        <span class="slt_left">送至</span>
        <span class="slt_center">北京朝阳区三环到四环之间</span>
        <img src="../assets/images/det_spot.png" alt="" class="slt_right">
        <p>
          <span id="stock">现货</span>
          由商家从 北京 发货
        </p>
      </div>
      <div class="slt_sever">
        <ul>
          <li>商家发货&售后</li>
          <li>7天无理由退货</li>
          <li>送运费险</li>
          <li>闪电退款</li>
          <li>极速审核</li>
        </ul>
        <img src="../assets/images/det_spot.png" alt="" class="slt_right">
      </div>
    </div>
    <!-- 评价 -->
    <div class="evaluate">
      <p>
        <span id="a">|</span> <span class="eval_a1">评价</span>
        <span class="eval_a2">30+</span>
        <span class="eval_a3">好评度66%</span>
      </p>
      <P class="eval_b">
        26个用户默认好评
      </P>
    </div>
    <div class="answer">
      <span id="a">|</span> <span class="eval_a1">问答</span>
      <img src="../assets/images/det_right.png" alt="">
      <span class="eval_a3">暂无提问信息，去提问</span>
    </div>
    <div class="shop">
      <div class="shop_top">
        <span><img src="../assets/images/det_logo.png" alt="" class="logo"></span>
        <b>罗季漫旗舰店</b>
        <a> 店铺星级
          <img src="../assets/images/det_stars.png" alt="">
          <img src="../assets/images/det_stars.png" alt="">
          <img src="../assets/images/det_stars.png" alt="">
          <img src="../assets/images/det_stars.png" alt="">
          <img src="../assets/images/det_stars.png" alt="">
          <img src="../assets/images/det_stars.png" alt="">
        </a>
      </div>
      <div class="shop_tab">
        <div class="shop_fans">
          <a>2.7万</a><br>
          <b>粉丝人数</b>
        </div>

        <div class="shop_stock">
          <a>6543</a><br>
          <b>全部商品</b>
        </div>
        <div class="shop_evaluate">
          <a>评价</a>
          <b>8.41 | 低</b><br>
          <a>物流</a>
          <b>8.33 | 低</b><br>
          <a>售后</a>
          <b id="red">9.19 | 高</b>
        </div>
        <div class="shop_foot">
          <button class="btn" id="l">关注店铺</button>
          <button class="btn" id="r">进入店铺</button>
        </div>
      </div>
    </div>
    <div class="recycle">
      <p>
        <img src="../assets/images/det_recycle.png" alt="">
        高价回收
      </p>
      <a>旧品回收，免费估价，极速到账</a>
      <img src="../assets/images/det_right.png" alt="" class="rec_right">
    </div>
    <div class="sale"></div>
  </main>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
  }

</script>

<style>
  .details_slide {
    text-align: center;
  }

  .details_slide img {
    border-radius: 10px;
    width: 100%;
  }

  .details_slide .mint-swipe-items-wrap {
    padding-bottom: 100%;
  }

  .details_slide .mint-swipe-indicator {
    opacity: 0.3;
  }

  .details_back {
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    left: 10px;
    top: 10px;
    z-index: 100;
    border-radius: 50%;
    background-color: #666;
  }

  .details_back img {
    width: 20px;
    height: 20px;
    margin-top: 4px;
  }

</style>

<style scoped>
  main {
    background-color: #fafafa;
    position: relative;
  }

  .price {
    width: 90%;
    background-color: #fff;
    overflow: hidden;
    margin-top: 12px;
    margin: 12px auto;
    padding: 0px 18px;
  }

  .pri_left {
    font-size: 18px;
    color: #f2270c;

  }

  .pri_left_m {
    font-size: 30px;
  }

  .pri_right {
    height: 10px;
    width: 40px;
    font-size: 9px;
    float: right;
    text-align: center;
  }

  .pri_right img {
    height: 18px;
    width: 18px;
  }

  .pri_p {
    font-weight: 700;
    line-height: 21px;
    margin: 15px 0px;
  }

  .pri_p1 {
    font-size: 12px;
    color: #7d7979;
    padding-bottom: 8px;
  }

  .discount {
    width: 90%;
    padding: 18px 20px 5px 18px;
    background-color: #fff;
    margin: 10px 0px;
    position: relative;
  }

  .dct_left {
    font-weight: 700;
    font-size: 13px;
  }

  .dct_content {
    position: relative;
    left: 44px;
    top: -20px;
    line-height: 20px;
    font-size: 12px;
  }

  .dct_content span {
    height: 16px;
    width: 16px;
    color: red;
    position: relative;
    font-size: 10px;
    padding: 0 9px 0 12px;
    border: 1px solid #f2270c;
  }

  #new {
    background-color: #f2270c;
    color: white;
  }

  .discount img {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 12px;
    right: 18px;
  }

  .select {
    background-color: #fff;
    width: 90%;
    margin: 10px 0px;
    padding: 0 18px;

  }

  .slt_cont {
    padding: 18px 0px;
    position: relative;
  }

  .slt_left {
    font-weight: 700;
    font-size: 13px;
  }

  .slt_center {
    font-size: 13px;
    line-height: 22px;
  }

  .slt_right {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 12px;
    right: -3px;
  }

  .select p {
    color: #7d7979;
    font-size: 12px;
    margin-left: 36px;
    line-height: 18px;
  }

  #stock {
    font-size: 12px;
    color: red;
  }

  .slt_sever {
    width: 100%;
    padding: 10px 0px;
    position: relative;
    background-color: #fafafa;

  }

  .slt_sever li {
    padding: 3px 12px 3px 0;
    display: inline-block;
    line-height: 1;
    color: #8c8c8c;
    font-size: 12px;
  }

  .slt_sever li::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 6px;
    width: 11px;
    height: 11px;
    background: url(../assets/images/det_gou.png) no-repeat;
    background-size: 11px auto;
  }

  .evaluate {
    padding: 8px 18px;
    padding-top: 18px;
    background-color: #fff;
  }

  .eval_a1 {
    font-weight: 700;
    font-size: 15px;
  }

  .eval_a2 {
    font-weight: 700;
    font-size: 12px;
  }

  .eval_a3 {
    float: right;
    font-size: 12px;
    color: #8c8c8c;
    margin-right: 10px;
  }

  #a {
    color: red;
    font-weight: 700;

  }

  .eval_b {
    width: 95%;
    text-align: center;
    background-color: #f7f7f7;
    color: #a59999;
    line-height: 40px;
    font-size: 12px;
    margin-top: 15px;
  }

  .answer {
    padding: 10px 18px;

    margin-top: 5px;
    background-color: #fff;
  }

  .answer img {
    float: right;
    height: 13px;
    width: 13px;
    margin-top: 3px;
  }

  .shop {
    padding: 18px;
    position: relative;
    background-color: #fff;
    margin-top: 10px;
  }

  .shop_top .logo {
    position: absolute;
    top: 15px;
    left: 25px;
    height: auto;
    width: 50px;
  }

  .shop_top b {
    font-size: 12px;
    position: relative;
    left: 65px;
    top: 0px;

  }

  .shop_top a {
    font-size: 10px;
    position: relative;
    left: -12px;
    top: 15px;

  }

  .shop_top a img {
    height: 10px;
    width: 10px;
    position: relative;
    left: 3px;
    top: 1px;
  }

  .shop_tab {
    padding-top: 39px;
  }

  .shop_fans {
    width: 30%;
    text-align: center;
    float: left;
    border-right: 1px solid rgba(121, 110, 110, 0.212);
  }

  .shop_stock {
    width: 30%;
    text-align: center;
    float: left;
  }

  .shop_evaluate {
    width: 39%;
    text-align: center;
    float: left;
    line-height: 1;
  }

  .shop_tab a {
    font-size: 14px;
  }

  .shop_tab b {
    font-size: 10px;
    color: #999;
  }

  .shop_evaluate a {
    font-size: 10px;
    color: #999;
  }

  .shop_evaluate b {
    font-size: 10px;
    color: #18c461
  }

  #red {
    color: #e4393c;
  }

  .shop_foot {
    padding-top: 75px;
    text-align: center;
  }

  .shop_btn {
    position: relative;
    line-height: 13px;
  }

  .shop_foot .btn {
    height: 30px;
    width: 100px;
    background-color: #fff;
    border-radius: 15px;
    margin-right: 10px;
  }

  #l::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: 0px;
    margin-right: 6px;
    width: 14px;
    height: 14px;
    background: url(../assets/images/det_shop1.png) no-repeat;
    background-size: 13px auto;
  }

  #r::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: 1px;
    margin-right: 6px;
    width: 14px;
    height: 14px;
    background: url(../assets/images/det_shop2.png) no-repeat;
    background-size: 12px auto;
  }

  .recycle {
    padding: 10px 18px;
    font-size: 14px;
    margin: 10px 0;
    background-color: #fff;
  }

  .recycle p img {
    height: 14px;
  }

  .recycle a {
    font-size: 12px;
    color: #999;
    padding-left: 18px;
  }

  .rec_right {
    float: right;
    height: 14px;
    margin-top: -7px;
  }

</style>
