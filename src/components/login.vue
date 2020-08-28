<template>
  <main>
    <p class="header">
      <img src="../assets/images/back.png" alt="" @click="back()" class="h_left">
      京东登录注册
    </p>
    <div class="ipt">
      <p class="ipt_a">+86
        <img src="../assets/images/down.png" alt="">
        <input type="text" placeholder="请输入手机号">
        <input type="text" placeholder="请输入验证码">
        <a> | 获取验证码</a>
      </p>
    </div>
    <button class="login" @click="login()">登录</button>
    <button class="login" @click="login()">一键登录</button>
    <p>
      <a id="left">账号密码登录</a>
      <a id="right">手机快速注册</a>
    </p>
    <h4>其他方式登录</h4>
    <p class="qw_img">
      <img src="../assets/images/qq.png" alt="">
      <img src="../assets/images/wx.png" alt="" class="img_right">
    </p>
    <p class="qw">
      <a id="q"> QQ</a>
      <a>微信</a></p>
    <p class="foot">
      未注册的手机号验证后将自动创建京东账号, 登录即代表您已经同意<a href="">京东隐私政策</a>
    </p>
  </main>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      },
      login() {
        this.$router.push('/index')
      }
    },
  }

</script>

<style scoped>
  main {
    text-align: center;
  }

  .header {
    width: 90%;
    text-align: center;
    font-size: 17px;
    margin-top: 10px;
  }

  .h_left {
    height: 24px;
    width: 24px;
    float: left;
    margin-left: 13px;
  }

  .ipt {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    border-bottom: 1px solid #efefef;
  }

  .ipt img {
    height: 6px;
    width: 15px;
    margin-left: 6px;
    margin-right: 6px;
  }

  .ipt_a {
    height: 50px;
    border-bottom: .01rem solid #efefef;
    line-height: 50px;
    margin-bottom: 39px;
  }

  .ipt a {
    margin-left: 12px;
    color: grey;
  }

  input {
    outline: none;
    border: none;
  }

  .login {
    height: 40px;
    width: 80%;
    border: 1px solid red;
    margin-top: 15px;
    border-radius: 50px;
    color: red;
  }

  button {
    outline: none;
  }

  h4 {
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 13px;
    text-align: center;
    color: grey;
  }

  #left {
    float: left;
    color: grey;
    margin-left: 12px;
    margin-top: 15px;
  }

  #right {
    float: right;
    color: grey;
    margin-right: 12px;
    margin-top: 15px;
  }

  .qw_img {
    width: 100%;
    margin-left: 10px;
    transform: scale(0.6);
  }

  .qw_img .img_right {
    margin-left: 7%;
  }

  .qw {
    text-align: center;
    color: grey;
    font-size: 13px;
  }

  #q {
    margin-right: 30px;
    padding: 22px;
  }

  .foot {
    text-align: center;
    padding: 10px;
    font-size: 14px;
    color: grey;
  }

  .foot a {
    text-decoration: none;
    color: #4a90e2;
  }

</style>
