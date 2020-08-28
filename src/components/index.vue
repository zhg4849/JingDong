<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lp
 * @Date: 2020-08-22 11:09:10
 * @LastEditors: lp
 * @LastEditTime: 2020-08-28 13:38:38
 * @FilePath: \前端课程\vue\vue\jingdong\src\components\index.vue
-->
<template>
  <main class="index_wrap">
    <div class="header">
      <span class="left"><img src="../assets/images/header1.png" alt="" @click="type_list()"></span>
      <div class="center">
        <h1><img src="../assets/images/header2.png" alt=""></h1>
        <i></i>
        <input type="text" placeholder="办公椅" class="search_input">
      </div>
      <span class="right" @click="login()">登录</span>
    </div>

    <div class="slide">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="../assets/images/a1.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a2.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a3.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a4.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a5.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a6.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a7.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/a8.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="show_img">
      <img src="../assets/images/b1.png" alt="">
      <img src="../assets/images/b2.png" alt="">
      <img src="../assets/images/b3.png" alt="">
    </div>

    <ul class="mall">
      <li>
        <img src="../assets/images/c1.png" alt="">
        <p>京东超市</p>
      </li>
      <li>
        <img src="../assets/images/c2.png" alt="">
        <p>数码电器</p>
      </li>
      <li>
        <img src="../assets/images/c3.png" alt="">
        <p>京东服饰</p>
      </li>
      <li>
        <img src="../assets/images/c4.png" alt="">
        <p>京东生鲜</p>
      </li>
      <li>
        <img src="../assets/images/c5.png" alt="">
        <p>京东到家</p>
      </li>
      <li>
        <img src="../assets/images/c6.png" alt="">
        <p>充值缴费</p>
      </li>
      <li>
        <img src="../assets/images/c7.png" alt="">
        <p>9.9元拼</p>
      </li>
      <li>
        <img src="../assets/images/c8.png" alt="">
        <p>领券</p>
      </li>
      <li>
        <img src="../assets/images/c9.png" alt="">
        <p>领金贴</p>
      </li>
      <li>
        <img src="../assets/images/c10.png" alt="">
        <p>PLUS会员</p>
      </li>
    </ul>

    <div class="seckill_title">
      <p>京东秒杀</p>
      <div class="order">
        <span>16点场</span>
        <p id="time1"></p>
      </div>
      <img src="../assets/images/seckill_icon.png" alt="">
      <span class="right">更多秒杀</span>
    </div>

    <div class="seckill_list">
      <ul>
        <li>
          <img src="../assets/images/d1.png" alt="">
          <b>￥19.9</b>
          <p>￥58</p>
        </li>
        <li>
          <img src="../assets/images/d2.png" alt="">
          <b>￥119</b>
          <p>￥178</p>
        </li>
        <li>
          <img src="../assets/images/d3.png" alt="">
          <b>￥89</b>
          <p>￥99</p>
        </li>
        <li>
          <img src="../assets/images/d4.png" alt="">
          <b>￥49</b>
          <p>￥89</p>
        </li>
        <li>
          <img src="../assets/images/d5.png" alt="">
          <b>￥28</b>
          <p>￥70</p>
        </li>
        <li>
          <img src="../assets/images/d6.png" alt="">
          <b>￥49.9</b>
          <p>￥59.9</p>
        </li>
        <li>
          <img src="../assets/images/d7.png" alt="">
          <b>￥519</b>
          <p>￥599</p>
        </li>
        <li>
          <img src="../assets/images/d8.png" alt="">
          <b>￥2538</b>
          <p>￥2699</p>
        </li>
        <li>
          <img src="../assets/images/d9.png" alt="">
          <b>￥199</b>
          <p>￥236</p>
        </li>
        <li>
          <img src="../assets/images/d10.png" alt="">
          <b>￥9.9</b>
          <p>￥22.9</p>
        </li>
        <span class="right_more">
          <p><i></i>查看更多</p>
        </span>
      </ul>
    </div>

    <div class="show_img_welfare1">
      <img src="../assets/images/e1.png" alt="">
      <img src="../assets/images/e2.png" alt="" @click="welfare()">
    </div>

    <img src="../assets/images/e3.png" alt="" class="show_img_welfare2">

    <ul class="show_img_welfare3">
      <li><img src="../assets/images/f1.png" alt="" class="left"></li>
      <li><img src="../assets/images/f2.png" alt="" class="center"></li>
      <li><img src="../assets/images/f3.png" alt="" class="right"></li>
    </ul>

    <ul class="show_img_welfare4">
      <li><img src="../assets/images/g1.png" alt=""></li>
      <li><img src="../assets/images/g2.png" alt=""></li>
      <li><img src="../assets/images/g3.png" alt=""></li>
      <li><img src="../assets/images/g4.png" alt=""></li>
    </ul>

    <img src="../assets/images/courtyard.png" alt="" class="courtyard">

    <ul class="courtyard_title">
      <li>
        <span>厨房配件</span>
        <p>厨房神器，轻松带回家</p>
      </li>
      <li>
        <span>时尚男鞋</span>
        <p>各有脚度，舒适出行</p>
      </li>
    </ul>

    <ul class="courtyard_con1">
      <li>
        <img src="../assets/images/h1.png" alt="">
        <img src="../assets/images/h2.png" alt="">
      </li>
      <li>
        <img src="../assets/images/h3.png" alt="">
        <img src="../assets/images/h4.png" alt="">
      </li>
    </ul>
    <ul class="courtyard_con2">
      <li>
        <span>无畏时光</span>
        <p>自身魅力</p>
        <img src="../assets/images/h5.png" alt="">
      </li>
      <li>
        <span>瘦身秘密</span>
        <p>魔法塑身衣</p>
        <img src="../assets/images/h6.png" alt="">
      </li>
      <li>
        <span>品质宝宝</span>
        <p>宝宝要吃好</p>
        <img src="../assets/images/h7.png" alt="">
      </li>
      <li>
        <span>棉麻夏装</span>
        <p>居家必选</p>
        <img src="../assets/images/h8.png" alt="">
      </li>
    </ul>

    <img src="../assets/images/daily.png" alt="" class="daily">

    <ul class="daily_con">
      <li>
        <span class="title1">免息星球</span>
        <p>白条免息购</p>
        <img src="../assets/images/i1.png" alt="">
      </li>
      <li>
        <span class="title2">每日特价</span>
        <p>9块9疯抢</p>
        <img src="../assets/images/i2.png" alt="">
      </li>
      <li>
        <span class="title3">品牌闪购</span>
        <p>汇大牌好价</p>
        <img src="../assets/images/i3.png" alt="">
      </li>
      <li>
        <span class="title4">京东直播</span>
        <p>边看边买</p>
        <img src="../assets/images/i4.png" alt="">
      </li>
      <li>
        <span class="title6">排行榜</span>
        <p>热销推荐</p>
        <img src="../assets/images/i5.png" alt="">
      </li>
      <li>
        <span class="daily_title6">拍拍好物</span>
        <p>二手优品</p>
        <img src="../assets/images/i6.png" alt="">
      </li>
      <li>
        <span class="title7">新品首发</span>
        <p>京东小魔方</p>
        <img src="../assets/images/i7.png" alt="">
      </li>
      <li>
        <span class="title8">发现好货</span>
        <p>发现品质生活</p>
        <img src="../assets/images/i8.png" alt="">
      </li>
    </ul>

    <img src="../assets/images/recommend.png" alt="" class="recommend">

    <ul class="recommend_list">
      <li v-for="(item,index) in list">
        <img :src="item.src" alt="">
        <p>{{item.des}}</p>
        <div class="recommend_footer"> <b>{{item.price}}</b>
          <i v-if="item.reduction">{{item.reduction}}</i>
          <span v-if="item.like">{{item.like}}</span></div>
      </li>
    </ul>

    <div class="footer_blank"></div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            src: './src/assets/images/j1.png',
            des: 'TUMI/途明Alpha 3系列系列男士纯色弹道尼龙电脑双肩背包 黑色/02603580D3',
            price: '￥ 5190',
            like: '看相似'
          },
          {
            src: './src/assets/images/j2.png',
            des: '【萨奇袋鼠】2020新品上市欧美新款男士真皮手提包大容量电脑背包女头层牛皮短途旅行双肩包 经典黑',
            price: '￥ 168',
            reduction: '满减',
            like: '看相似'
          },
          {
            src: './src/assets/images/j3.png',
            des: 'TUMI/途明Alpha Bravo系列男士时尚轻质尼龙卷顶双肩包 黑色/0232659D',
            price: '￥ 3990',
            like: '看相似'
          },
          {
            src: './src/assets/images/j4.png',
            des: '新品日本科靓脚后跟保护套护干足裂跟防硅胶皲裂去减震死皮保湿老茧贴 2双装',
            price: '￥ 121',
            like: '看相似'
          },
          {
            src: './src/assets/images/j5.png',
            des: '朱尔头层牛皮双肩包女简约通勤旅行大容量防盗背包女潮流休闲防盗多功能女士包包JD346黑色',
            price: '￥ 339',
            like: '看相似'
          },
          {
            src: './src/assets/images/j6.png',
            des: '筷子家用家庭防滑快子分用耐高温不发霉一人一色钛防霉10合金 炫彩 花开富贵 金色底红花 10双',
            price: '￥ 66',
            like: '看相似'
          },
          {
            src: './src/assets/images/j7.png',
            des: '智优安 单肩包男斜挎休闲头层牛皮新款时尚迷你男士小挎包 黑色小号A90919',
            price: '￥ 109',
            like: '看相似'
          },
          {
            src: './src/assets/images/j8.png',
            des: '【萨奇袋鼠】2020新品上市新款简约双肩包男时尚潮流商务背包电脑男士休闲旅游背包 黑色',
            price: '￥ 428',
            reduction: '满减',
            like: '看相似'
          },
          {
            src: './src/assets/images/j9.png',
            des: '牛船长【爱在胸前】情人节生日送男友老公父亲单肩斜挎真皮胸包男牛皮软胸前挂肩小包包 咖啡色',
            price: '￥ 168',
            like: '看相似'
          },
          {
            src: './src/assets/images/j10.png',
            des: '【品牌直营】微孔防尘盖菜罩可折叠菜罩可洗菜罩透气防蝇罩剩饭菜罩家用餐桌罩 圆形金色素面微孔',
            price: '￥ 68',
            like: '看相似'
          },
          {
            src: './src/assets/images/j11.png',
            des: 'alloy/乐几 陪嫁箱复古婚箱亮面行李箱红色结婚女小型轻便结婚旅行箱复古20英寸静音轮密码箱P',
            price: '￥ 799',
            like: '看相似'
          },
          {
            src: './src/assets/images/j12.png',
            des: '玩儿！休闲系列！纤薄的行走人生 拼接出真知牛气斜跨单肩包 军绿色 宽39cm 高46cm 厚1cm',
            price: '￥ 355',
            like: '看相似'
          },
          {
            src: './src/assets/images/j13.png',
            des: '联想（Lenovo）拯救者原装电脑包双肩包X2常规版 机甲风炫彩旅行包背包书包',
            price: '￥ 229',
            like: '看相似'
          },
          {
            src: './src/assets/images/j14.png',
            des: '【尊享礼盒】碧素堂烟酰胺氨基酸护肤品套装礼盒男女士适用 5件套',
            price: '￥ 1088.8',
            like: '看相似'
          },
          {
            src: './src/assets/images/j15.png',
            des: '山浦山地自行车男女成人公路赛车网红学生变速单车 高配辐条白黑 26寸21速',
            price: '￥ 305',
            like: '看相似'
          },
          {
            src: './src/assets/images/j16.png',
            des: '80L战术户外登山包 迷彩战术双肩背包男超大容量旅行背囊 黑色',
            price: '￥ 139',
            like: '看相似'
          },
          {
            src: './src/assets/images/j17.png',
            des: 'Samsonite/新秀丽双肩包男 商务时尚简约电脑包轻盈超大容量男士背包BP0 BP0010黑色',
            price: '￥ 699',
            like: '看相似'
          },
          {
            src: './src/assets/images/j18.png',
            des: '哈尼保罗（HANIBOLO）2019男士手包新款时尚手拿包牛津布韩版手抓包帆布休闲夹包男蓝色 8895-1蓝色（小号）',
            price: '￥ 39',
            like: '看相似'
          },
          {
            src: './src/assets/images/j19.png',
            des: '送4大好礼厨房电子称烘焙称迷你1g-10kg食物秤茶叶称克重秤 白色5kg/1g无背光款送电池',
            price: '￥ 66',
            like: '看相似'
          },
          {
            src: './src/assets/images/j20.png',
            des: '拉杆箱24寸旅行箱子20寸登机箱韩版密码皮箱万向轮潮男女网红行李箱ins 902 复古款 PVC 白+黑色 20寸',
            price: '￥ 208',
            reduction: '满减',
            like: '看相似'
          },
        ]
      }
    },
    mounted() {
      var timer;

      function start(goalTime) {
        var goal = new Date(goalTime);
        var now = new Date();
        var distance = goal.getTime() - now.getTime();
        // 计算天数
        var d = parseInt(distance / (24 * 3600 * 1000));
        // 计算天数剩余ms数
        var remainder1 = distance % (24 * 3600 * 1000);
        // 计算小时数
        var h = parseInt(remainder1 / (3600 * 1000));
        // 计算小时剩余ms数
        var remainder2 = remainder1 % (3600 * 1000);
        // 计算分钟数
        var m = parseInt(remainder2 / (60 * 1000));
        // 计算分钟剩余ms数
        var remainder3 = remainder2 % (60 * 1000);
        // 计算秒数
        var s = parseInt(remainder3 / 1000);

        if (h % 10 == h) {
          h = '0' + h
        }
        if (m % 10 == m) {
          m = '0' + m
        }
        if (s % 10 == s) {
          s = '0' + s
        }
        time1.innerHTML = `${h}:${m}:${s}`;
      }

      clearInterval(timer)
      start('Dec 28,2020 16:00:00');
      timer = setInterval(function () {
        start('Dec 28,2020 16:00:00');
      }, 1000)

    },
    methods: {
      welfare() {
        this.$router.push('/index/welfare')
      },
      login() {
        this.$router.push('/login')
      },
      type_list() {
        this.$router.push('/type')
      }
    }
  }

</script>
<style scoped>
  .header {
    width: 100%;
    background-color: #e43130;
    position: fixed;
    top: 0px;
    overflow: hidden;
    z-index: 100;
  }

  .index_wrap {
    background-color: #f6f6f6;
  }

</style>
<style>
  .header .left {
    width: 10%;
    line-height: 50px;
    text-align: center;
    float: left;
  }

  .header .left img {
    width: 20px;
  }

  .header .center {
    width: 80%;
    line-height: 45px;
    float: left;
    overflow: hidden;
    position: relative;
  }

  .header .center h1 {
    width: 40px;
    line-height: 30px;
    text-align: center;
    float: left;
    position: absolute;
    left: 5px;
    top: 10px;
  }

  .header .center img {
    width: 20px;
    background-color: #fff;
  }

  .header .center .search_input {
    width: 100%;
    height: 32px;
    border-radius: 15px;
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 80px;
    border: none;
  }

  .header .center i {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(../assets/images/jd-sprites.png) no-repeat -166px 0px;
    transform: scale(0.5);
    left: 45px;
    top: 10px;
  }

  .header .right {
    width: 10%;
    font-size: 14px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    float: right;
  }

  .slide {
    text-align: center;
    margin-top: 50px;
  }

  .slide img {
    border-radius: 10px;
    width: 95%;
  }

  .slide .mint-swipe-items-wrap {
    padding-bottom: 37.59%;
  }

  .slide .mint-swipe-indicator {
    opacity: 0.3;
  }

  .show_img {
    width: 100%;
  }

  .show_img img {
    width: 33.33%;
    float: left;
  }

  .mall {
    width: 100%;
    text-align: center;
  }

  .mall li {
    width: 20%;
    float: left;
  }

  .mall li img {
    margin-top: 10px;
    width: 50%;
  }

  .mall li p {
    margin-top: 9px;
    font-size: 15px;
    color: #666;
  }

  .seckill_title {
    width: 100%;
    height: 35px;
    padding-top: 30px;
    padding-bottom: 10px;
    overflow: hidden;
  }

  .seckill_title>p {
    float: left;
    margin: 10px;
    font-size: 15px;
  }

  .seckill_title .order {
    width: 130px;
    height: 22px;
    font-size: 14px;
    color: #f2270c;
    border: 1px solid #f2270c;
    border-radius: 15px;
    margin: 10px 0px;
    float: left;
  }

  .seckill_title .order span {
    float: left;
    background-color: #f2270c;
    border: 2px solid #f2270c;
    color: #fff;
    border-radius: 15px;
  }

  .seckill_title .order p {
    margin-top: 2px;
    float: right;
    font-weight: bold;
    margin-right: 5px;
  }

  .seckill_title img {
    float: right;
    width: 13px;
    margin: 14px 15px 10px 0px
  }

  .seckill_title .right {
    float: right;
    font-size: 14px;
    color: #f2270c;
    margin: 10px 5px 10px 0px
  }

  .seckill_list {
    width: 100%;
    text-align: center;
    overflow: auto;
    margin-bottom: 20px;
  }

  .seckill_list ul {
    overflow: hidden;
    width: 235%;
  }

  .seckill_list li {
    width: 9.5%;
    float: left;
    box-sizing: border-box;
  }

  .seckill_list li img {
    width: 80%;
  }

  .seckill_list li b {
    color: #f2270c;
    display: block;
  }

  .seckill_list li p {
    color: #999;
    font-size: 14px;
    text-decoration: line-through;
  }

  .seckill_list .right_more {
    width: 5%;
    text-align: center;
    float: right;
  }

  .seckill_list .right_more p {
    width: 13px;
    font-size: 13px;
    color: #666;
    background: rgba(168, 166, 166, 0.247);
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    position: relative;
  }

  .seckill_list .right_more i {
    position: absolute;
    width: 22px;
    height: 22px;
    background: url(../assets/images/jd-sprites_1.png) no-repeat -214px -218px;
    transform: scale(0.5);
    left: -6px;
    top: -20px;
  }

  .show_img_welfare1 {
    width: 95%;
    margin: 0px auto;
  }

  .show_img_welfare1 img {
    width: 50%;
    float: left;
  }

  .show_img_welfare2 {
    width: 100%;
    margin-top: 10px;
  }

  .show_img_welfare3 li {
    width: 33.33%;
    float: left;
    text-align: center;
  }

  .show_img_welfare3 .left {
    width: 85%;
    margin-top: 12px;
    margin-bottom: 5px;
  }

  .show_img_welfare3 .center {
    width: 100%;
  }

  .show_img_welfare3 .right {
    width: 85%;
    margin-top: 12px;
  }

  .show_img_welfare4 {
    width: 95%;
    overflow: hidden;
    margin: 10px auto;
  }

  .show_img_welfare4 li {
    width: 25%;
    float: left;
  }

  .show_img_welfare4 li img {
    width: 100%;
  }

  .courtyard {
    width: 100%;
    margin: 10px 0px;
  }

  .courtyard_title {
    width: 100%;
  }

  .courtyard_title li {
    width: 50%;
    float: left;
  }

  .courtyard_title li span {
    font-weight: bold;
    font-size: 18px;
    margin-left: 5%;
    background: -webkit-linear-gradient(left, #45CAFF, #1471FB);
    background: linear-gradient(90deg, #45CAFF, #1471FB);
    -webkit-background-clip: text;
    color: transparent;
  }


  .courtyard_title li p {
    color: #666;
    font-size: 14px;
    margin-left: 5%;
  }

  .courtyard_con1 {
    width: 100%;
    text-align: center;
  }

  .courtyard_con1 li {
    width: 50%;
    float: left;
  }

  .courtyard_con1 li img {
    width: 35%;
    margin-left: 10px;
    margin-top: 5px;
  }

  .courtyard_con2 {
    width: 100%;
  }

  .courtyard_con2 li {
    width: 25%;
    float: left;
    margin-top: 10px;
  }

  .courtyard_con2 li span {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }

  .courtyard_con2 li p {
    color: #666;
    font-size: 14px;
    margin-left: 10px;
  }

  .courtyard_con2 li img {
    width: 70%;
    margin-left: 10px;
    margin-top: 5px;
  }

  .daily {
    width: 100%;
    margin: 10px 0px;
  }

  .daily_con {
    width: 100%;
  }

  .daily_con li {
    width: 25%;
    float: left;
  }

  .daily_con li .title1 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #FF2A2A, #F139D2);
    background: linear-gradient(90deg, #FF2A2A, #F139D2);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title2 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #FE8537, #F02B2B);
    background: linear-gradient(90deg, #FE8537, #F02B2B);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title3 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #FF765C, #FF23B3);
    background: linear-gradient(90deg, #FF765C, #FF23B3);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title4 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #FF2A00, #FF00AF);
    background: linear-gradient(90deg, #FF2A00, #FF00AF);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title6 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #D400FF, #FF320A);
    background: linear-gradient(90deg, #D400FF, #FF320A);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .daily_title6 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #00C2AB, #3E94FF);
    background: linear-gradient(90deg, #00C2AB, #3E94FF);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title7 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #FF765C, #FF23B3);
    background: linear-gradient(90deg, #FF765C, #FF23B3);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li .title8 {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    background: -webkit-linear-gradient(left, #2AD396, #85BB1F);
    background: linear-gradient(90deg, #2AD396, #85BB1F);
    -webkit-background-clip: text;
    color: transparent;
  }

  .daily_con li p {
    color: #222;
    font-size: 14px;
    margin-left: 10px;
  }

  .daily_con li img {
    width: 70%;
    margin: 5px 0px 10px 10px;
  }

  .recommend {
    width: 100%;
    margin-top: 30px;
  }

  .recommend_list {
    width: 100%;
  }

  .recommend_list li {
    width: 50%;
    float: left;
  }

  .recommend_list li img {
    width: 90%;
    margin-left: 10px;
    margin-bottom: 25px;
  }

  .recommend_list li p {
    margin: 6px 10px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 行数 */
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .recommend_list li b {
    color: #f63030;
    margin-left: 10px;
  }

  .recommend_list li i {
    color: #e4303c;
    font-size: 12px;
    border: 1px solid #e4303c;
    margin-left: 5px;
    padding: 0px 3px;
    font-style: normal;
  }

  .recommend_list li span {
    border: 1px solid #666;
    font-size: 12px;
    color: #666;
    float: right;
    margin-right: 15px;
    margin-top: 2px;
    padding: 0px 5px;
  }

  .recommend_footer {
    margin-bottom: 30px;
  }

  .footer_blank {
    width: 100%;
    height: 60px;
    overflow: hidden;
  }

</style>
