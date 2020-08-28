<template>
  <main>
    <router-view></router-view>
    <div class="header">
      <img src="../assets/images/back.png" alt="" class="header_l" @click="back()">
      <span>购物车</span>
      <img src="../assets/images/det_spot.png" alt="" class="header_r">
    </div>
    <div class="address">
      <span>朝阳区三环到四环之间</span>
      <b> 编辑商品</b>
    </div>
    <div class="order">
      <div class="ord_header">
        <i class="ord_icon"></i>
        <p>罗季漫旗店</p><i class="ord_icon_r"></i>
      </div>
      <div class="ord_coupon">
        <span>满减</span>
        <p>满95000元可减49887元</p>
        <b>去凑单 </b>
        <i></i>
      </div>

      <div class="ord_goods" v-for="(item,index) in list">
        <div class="ord_g_left">
          <i></i>
          <img :src="item.src" alt="" @click="details()">
        </div>
        <div class="ord_g_right">
          <p class="ord_name">{{item.des}}</p>
          <div class="ord_attribute">
            <div class="attribute_l">不锈钢【双杆2.0米*可伸缩】送防风钩*夹子，中 </div>
            <div class="attribute_r">,选服务</div>
          </div>
          <p class="ord_full">满95000减49887</p><br>
          <div class="ord_price">
            <span>￥<b>114</b>.77</span>
            <div class="ord_btn">
              <button>-</button>
              <input type="text">
              <button>+</button>
            </div>
          </div>
          <div class="ord_buy">移入关注&nbsp; &nbsp;|&nbsp; &nbsp;删除</div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        list: [{
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          },
          {
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          },
          {
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          },
          {
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          },
          {
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          },
          {
            src: './src/assets/images/cart_goods.png',
            des: '不锈钢晾衣架落地折叠卧室内凉衣服挂衣杆家用阳台伸缩晒被子神器 不锈钢1.4米【无伸缩】 中'
          }
        ]
      }
    },
    methods: {
      details() {
        this.$router.push('/cart/details')
      },
      back() {
        this.$router.go(-1)
      }
    },
  }

</script>
<style scoped>
  .header {
    width: 90%;
    padding: 10px 18px;
    text-align: center;
    font-size: 18px;
  }

  .header_l {
    height: 22px;
    width: auto;
    float: left;
  }

  .header_r {
    height: 22px;
    width: auto;
    float: right;
  }

  .address {
    width: 90%;
    padding: 10px 18px;
    border-top: 1px solid #e5e5e5;
    position: relative;
    background-color: #fff;
  }

  .address span {
    margin-left: 25px;
  }

  .address b {
    font-size: 12px;
    color: #626262;
    float: right;
  }

  .address span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -6px;
    background-image: url(../assets/images/cart_map.png);
    background-position: 0 -93px;
    background-size: 130px 105px;
    width: 12px;
    height: 12px;
  }

  .address b::after {
    content: "";
    position: absolute;
    width: 1px;
    height: .5rem;
    background: #bfbfbf;
    top: 50%;
    right: 74px;
    margin-top: -.25rem;
  }

  .order {
    width: 90%;
    padding: 10px 18px;
    margin-top: 10px;
    background-color: #fff;
    position: relative;
  }

  .ord_header {
    font-size: 12px;
    font-weight: 700;
    margin-left: 45px;
    margin-top: 10px;
  }

  .ord_header::after {
    position: absolute;
    left: 6%;
    top: 10px;
    content: "";
    margin-left: -15px;
    background-image: url(../assets/images/cart_map.png);
    background-position: 0 -31px;
    background-size: 130px 105px;
    width: 31px;
    height: 31px;
  }

  .ord_icon {
    position: absolute;
    background-image: url(../assets/images/cart_map.png);
    background-size: 130px 105px;
    width: 14px;
    height: 14px;
    display: block;
    margin-right: 6px;
    background-position: -115px -71px;
    left: 40px;
  }

  .ord_coupon {
    margin: 20px 0px 0px 20px;
    font-weight: 700;
    font-size: 12px;
    color: #1d1e1e;
    position: relative;
  }

  .ord_coupon span {
    color: white;
    background-color: red;
    font-size: 10px;
    margin-right: 5px;
    padding: 0px 2px;
  }

  .ord_coupon p {
    width: 51%;
    position: relative;
    left: 30px;
    top: -16px;
  }

  .ord_coupon b {
    font-weight: normal;
    position: relative;
    left: 86%;
    top: -33px;
  }

  .ord_coupon b::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -38%;
    background-image: url(../assets/images/cart_map.png);
    background-position: -101px -85px;
    background-size: 130px 105px;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
  }

  .ord_goods {
    background-color: #fafafa;
    padding-left: 15px;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .ord_g_left img {
    width: 100px;
    height: 100px;
    float: left;
    margin-left: 20px;
    margin-right: 11px;
  }

  .ord_g_left i {
    position: absolute;
    top: 30%;
    left: 0px;
    content: "";
    background-image: url(../assets/images/cart_map.png);
    background-position: 0 -31px;
    background-size: 130px 105px;
    width: 31px;
    height: 31px;
  }

  .ord_name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .ord_attribute {
    width: 35%;
    float: left;
  }

  .attribute_l {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    float: left;
    width: 139px;
    font-size: 11px;
    background-color: #f2f2f2;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .attribute_r {
    font-size: 11px;
    position: absolute;
    margin-left: 137px;
    background-color: #f2f2f2;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 0px 11px 0 5px;

  }

  .attribute_r::before {
    content: "";
    position: absolute;
    left: 82%;
    top: 59%;
    margin-top: -3px;
    background-image: url(../assets/images/cart_map.png);
    background-position: -117px -85px;
    background-size: 130px 105px;
    width: 6px;
    height: 6px;
  }

  .ord_full {
    font-size: 11px;
    float: left;
    background-color: #f2f2f2;
    margin: 8px 60px 8px 0px;
    padding: 2px 18px 2px 5px;
    border-radius: 12px;
  }

  .ord_full::before {
    content: "";
    position: absolute;
    top: 100%;
    right: 32%;
    background-image: url(../assets/images/cart_map.png);
    background-position: -117px -85px;
    background-size: 130px 105px;
    width: 6px;
    height: 6px;

  }

  .ord_price span {
    float: left;
    font-size: 13px;
    color: red;
  }

  .ord_price span b {
    font-size: 15px;
    color: red;
  }

  .ord_btn {
    float: right;
  }

  button {
    font-weight: 700;
    outline: none;
    border: none;
    background-color: #fff;
  }

  input {
    outline: none;
    border: none;
    width: 30px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    background-color: #f2f2f2;
  }

  .ord_buy {
    float: right;
    margin-right: 8%;
    position: relative;
    left: 28%;
    font-size: 10px;
    margin-top: 8px;
  }

  .footer {
    width: 100%;
    height: 55px;
  }

</style>
