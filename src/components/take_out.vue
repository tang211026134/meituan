<template>
    <div id="take">
      <header>
        <span class="adicon">
          <img src="../assets/images/take_out_icon1.jpg" width="18px" alt />
        </span>
        <span class="ad">{{this.$store.state.currentCity}}</span>
        <input type="text" />
        <span class="search">
          <img src="../assets/images/take_out_icon2.jpg" width="18px" alt />
        </span>
        <p>请输入商家或商品名称</p>
      </header>
      <div class="banner">
        <main>
          <ul>
            <li v-for="(item,index) in list">
              <!-- <router-link :to="item.path"> -->
              <span class="img">
                <img :src="item.src" width="44px" height="44px" alt />
              </span>
              <p class="con">{{item.con}}</p>
              <!-- </router-link> -->
            </li>
          </ul>
        </main>
  
        <div class="store">附近商家</div>
        <div class="nav">
          <ul>
            <li>
              综合排序
              <span>
                <img class="se" src="../assets/images/take_out_icon5.jpg" width="18px"  alt />
              </span>
            </li>
            <li>销量最高</li>
            <li>距离最近</li>
            <li>
              筛选
              <span>
                <img class="select" src="../assets/images/take_out_icon3.jpg" width="18px" alt />
              </span>
            </li>
          </ul>
        </div>
  
        <div class="show">
          <ul>
            <li>
              <span class="img1">
                <img src="../assets/images/take01.jpg" width="80px" alt />
              </span>
              <div class="right">
                <p class="shop">多蜜多（韩式炸鸡）</p>
                <p class="sal">
                  <span>
                    <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                    <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                    <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                    <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                    <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                  </span>
                  <span>4.6</span>
                  <span>月售700+</span>
                  <span class="time">30分钟|363m</span>
                </p>
                <p class="sal">
                  <span>起送￥20元|</span>
                  <span>配送￥3|</span>
                  <span>人均￥27</span>
                </p>
                <p class="bargin">
                  <span class="img3">
                    <img src="../assets/images/take_out_icon6.jpg" width="16px" alt />
                  </span>
                  <span>满25减15；满75减40</span>
                  <span><img class="sals" src="../assets/images/take_out_icon5.jpg" width="12px"  alt /></span>
                </p>
                <p class="bargin">
                  <span class="img4">
                    <img src="../assets/images/take_out_icon7.jpg" width="16px" alt />
                  </span>
                  <span>折扣商品0.03折起</span>
                </p>
              </div>
            </li>
            
            <li>
                <span class="img1">
                  <img src="../assets/images/take01.jpg" width="80px" alt />
                </span>
                <div class="right">
                  <p class="shop">多蜜多（韩式炸鸡）</p>
                  <p class="sal">
                    <span>
                      <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                      <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                      <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                      <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                      <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                    </span>
                    <span>4.6</span>
                    <span>月售700+</span>
                    <span class="time">30分钟|363m</span>
                  </p>
                  <p class="sal">
                    <span>起送￥20元 &nbsp;|</span>
                    <span>配送￥3 &nbsp;| &nbsp;</span>
                    <span>人均￥27</span>
                  </p>
                  <p class="bargin">
                    <span class="img3">
                      <img src="../assets/images/take_out_icon6.jpg" width="16px" alt />
                    </span>
                    <span>满25减15；满75减40</span>
                    <span><img class="sals" src="../assets/images/take_out_icon5.jpg" width="14px"  alt /></span>
                  </p>
                  <p class="bargin">
                    <span class="img4">
                      <img src="../assets/images/take_out_icon7.jpg" width="16px" alt />
                    </span>
                    <span>折扣商品0.03折起</span>
                  </p>
                </div>
              </li>


           
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        list: [
          {
            src: "./src/assets/images/take_out01.jpg",
            con: "美食",
          },
          {
            src: "./src/assets/images/take_out02.jpg",
            con: "美团超市",
          },
          {
            src: "./src/assets/images/take_out03.jpg",
            con: "生鲜果蔬",
          },
          {
            src: "./src/assets/images/take_out04.jpg",
            con: "美团专送",
          },
          {
            src: "./src/assets/images/take_out05.jpg",
            con: "快食简餐",
          },
          {
            src: "./src/assets/images/take_out06.jpg",
            con: "早餐",
          },
          {
            src: "./src/assets/images/take_out07.jpg",
            con: "甜点饮品",
          },
          {
            src: "./src/assets/images/take_out08.jpg",
            con: "家常菜",
          },
          {
            src: "./src/assets/images/take_out09.jpg",
            con: "小吃馆",
          },
          {
            src: "./src/assets/images/take_out010.jpg",
            con: "鲜花蛋糕",
          },
        ],
      };
    },
  };
  </script>
  <style scoped>
  header {
    width: 100%;
    height: 50px;
    background: #1c1b20;
    position: relative;
  }
  .banner {
    width: 100%;
    height: calc(200vh - 130px);
    overflow: auto;
  }
  .adicon {
    position: absolute;
    
    left: 11px;
    bottom: 8px;
  }
  .ad {
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    left: 33px;
    bottom: 13px;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  }
  .ad::after {
    content: ">";
    width: 20px;
    height: 20px;
    margin-left: 5px;
    font-size: 15px;
  }
  header input {
    height: 24px;
    width: 61%;
    float: right;
    border-radius: 40px;
    margin-right: 5%;
    margin-top: 3%;
    background: #ebebe4;
  }
  header p {
    position: absolute;
    color: rgb(187, 184, 184);
    font-size: 14px;
    right: 20%;
    bottom: 28%;

  }
  .search {
    position: absolute;
    bottom: 22%;
    left: 37%;
  }
  
  main {
    width: 100%;
    height: 176px;
  }
  main > ul > li {
    width: 16%;
    float: left;
    height: 66px;
    margin-left: 4%;
    margin-top: 3%;
    position: relative;
    overflow: hidden;
  }
  
  .con {
    position: absolute;
    font-size: 12px;
    color: #333;
    text-align: center;
    white-space: nowrap;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  }
  
  .store {
    width: 100%;
    text-align: center;
    line-height: 32px;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  }
  .store::before {
    content: "";
    height: 1px;
    width: 15%;
    background: #666;
    margin-right: 3px;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    display: inline-block;
    margin-bottom: 6px;
  }
  .store::after {
    content: "";
    height: 1px;
    width: 15%;
    background: #666;
    margin-left: 3px;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    display: inline-block;
    margin-bottom: 5px;
  }
  .nav{
      overflow: hidden;
  }
  .nav > ul > li {
    width: 25%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #666;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    border-top: 1px solid rgb(202, 199, 199);
    border-bottom: 1px solid rgb(202, 199, 199);
    position: relative;
  }
  .se{
      transform: rotate(-180deg);
      position: absolute;
      top: 12px;
      right: 5px;
  }
  .select{
    position: absolute;
    top: 11px;
    right: 16px;
  }


  .show {
    width: 94%;
    margin: 0% 3%;
  }
  .show > ul > li {
    width: 100%;
   overflow: hidden;
  }
  
  .img1 {
    float: left;
    margin-top: 2%;
  }
  .right {
    width: 75%;
    margin-left: 2%;
    margin-top: 2%;
    float: left;
  }
  .sals{
      transform: rotate(-180deg);
      margin-left: 37%;
  }
  .bargin {
    font-size: 12px;
    line-height: 26px;
  }
  
  #img2 {
    transform: rotate(-75deg);
  }
  .shop {
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }
  .time {
    margin-left: 14%;
  }
  .sal span {
    font-size: 12px;
    line-height: 20px;
  }
  </style>