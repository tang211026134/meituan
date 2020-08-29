<template>
    <div class="pro">
      <ul>
        <li v-for="(item,index) in list">
          <p>{{item.con}}</p>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        list: [
          {
            con: "美团点评平台用户服务协议",
          },
          {
            con: "隐私政策",
          },
          {
            con: "美团点评餐饮安全管理办法",
          },
          {
            con: "价格说明",
          },
          {
            con: "法律声明",
          },
          {
            con: "美团点评点评规则",
          },
          {
            con: "美团点评团购用户服务条款",
          },
          {
            con: "美团酒店/美团门票用户服务条款",
          },
          {
            con: "消费者权益保障",
          },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .pro {
    background: rgba(241, 243, 248, 0.541);
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  ul {
    width: 100%;
    background: white;
    overflow: hidden;
    margin-top: 4%;
  }
  ul > li {
    height: 49px;
      width: 100%;
      border: 1px solid rgb(212, 203, 203);
      line-height: 49px;
      border-left: none;
      border-right: none;
      font-size: 18px;
      color: #333;
  }
  ul > li > p {
    margin-left: 5%;
  }
  </style>