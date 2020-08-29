<template>
    <div id="register">
      <header>
        <p class="left" @click="back()">
          <img src="../assets/images/register02.jpg" width="12px" height="16px" alt />
        </p>
        <p class="center">注册账号</p>
        <p class="right">
          <img src="../assets/images/register01.jpg" width="23px" height="23px" alt />
        </p>
      </header>
  
      <div class="proc">
        <span class="num">输入手机号</span>
        <span>&nbsp;&nbsp;> &nbsp;输入验证码&nbsp; >&nbsp; 设置密码</span>
      </div>
  
      <div class="num">
        <input type="text" />
        <p class="number">请输入您的手机号</p>
      </div>
  
      <div class="argee">
        <span>
          <img src="../assets/images/register03.jpg" width="20px" alt />
        </span>
        <span>我已阅读并同意</span>
        <router-link to="/protocol">
          <span class="xy">《美团网用户协议》</span>
        </router-link>
      </div>
  
      <div class="check">获取验证码</div>
    </div>
  </template>
  <script>
    export default{
      methods:{
        back(){
              this.$router.go(-1)
          }
      }
    }
  </script>
  <style scoped>
  #register {
    width: 100%;
    height: 100vh;
    background-color: #eeebeb;
  }
  header {
    height: 51px;
    width: 100%;
    background: #ffbd00;
    text-align: center;
    line-height: 51px;
  }
  header .left {
    float: left;
    width: 10%;
  }
  header .right {
    float: right;
    width: 10%;
  }
  header .center {
    float: left;
    width: 80%;
    font-size: 16px;
  }
  header img {
    vertical-align: middle;
  }
  
  .proc {
    height: 41px;
    width: 100%;
    background: white;
    text-align: center;
    line-height: 41px;
  }
  .proc span {
    font-size: 14px;
    color: #999999;
  }
  .proc .num {
    color: #222222;
  }
  .num {
    position: relative;
  }
  input {
    margin-top: 13px;
    height: 41px;
    width: 100%;
    background-color: white;
    border: none;
  }
  .number {
    font-size: 15px;
    color: #999999;
    position: absolute;
    left: 17px;
    top: 21px;
  }
  
  .argee {
    height: 30px;
    width: 94%;
    margin: 3% 3%;
  }
  .argee > span {
    font-size: 14px;
    margin-left: 2px;
  }
  .argee > span > img {
    background: #ffbd00;
    width: 24px;
    height: 25px;
  }
  .xy {
    font-size: 14px;
    margin-left: -4px;
    color: orange;
    text-decoration: none;
  }
  a:-webkit-any-link {
    text-decoration: none;
  }
  .check {
    height: 49px;
      width: 94%;
      background: #dbd7d7;
      margin: 2% 3%;
      border-radius: 15px;
      font-size: 20px;
      color: #999999;
      text-align: center;
      line-height: 49px;
  }
  </style>