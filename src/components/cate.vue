<template>
    <div id="take">
      <header>
        <img src="../assets/images/cate.jpg" alt="" width="375px">
        <div class="float">
            <img class="icn_left" @click="back()" src="../assets/images/details_back.png" width="20px" height="20px" alt="">
            <input type="text" placeholder="请输入商家名、品类或商圈">
           <img class="icn_right" src="../assets/images/mycate.png" width="20px" height="20px" alt="">
           <img class="search" src="../assets/images/icn_search.png"  width="20px" height="20px" alt="">
        </div>
      </header>

     
      <div class="banner">
        <main>
          <ul>
            <li v-for="(item,index) in list">
              <span class="img">
                <img :src="item.src" width="44px" height="44px" alt />
              </span>
              <p class="con">{{item.con}}</p>
            </li>
          </ul>
        </main>
  
        
        <div class="nav">
          <ul>
            <li>
              全部类目
              <span>
                <img class="se" src="../assets/images/take_out_icon5.jpg" width="18px"  alt />
              </span>
            </li>
            <li>附近商家</li>
            <li>智能排序</li>
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
                <img src="../assets/images/cate001.jpg" width="80px" alt />
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
                  <img src="../assets/images/cate002.jpg" width="80px" alt />
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


      <footer>
        <div id="groub">
            <p>
                当前位置：广州团购>全部团购
            </p>
        </div>
        <div id="center">
          <router-link to="/login">
             <button>登录</button>
          </router-link>
          <router-link to="/register">
           <button>注册</button>
          </router-link>
           <p>
               <span id="city">城市：</span>
               <span class="c">&nbsp;&nbsp;&nbsp;{{this.$store.state.currentCity}}&nbsp;&nbsp;&nbsp;</span>
             </p>
         </div>
         
            <ul id="nav">
                <li>首页</li>
                <li @click="back()">我的</li>
                <li>美团下载</li>
                <li>电脑版</li>
                <li>帮助</li>
                
            </ul>
           
         <div id="contact">
           <span>友情链接:</span>
           <a href="//m.maoyan.com/?channel=touch_group">猫眼电影</a>
        </div>
           <p class="last">©2020 美团网 京ICP证070791号</p>
   
    </footer>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        list: [
          {
            src: "./src/assets/images/cate01.jpg",
            con: "火锅",
          },
          {
            src: "./src/assets/images/cate02.jpg",
            con: "甜点饮品",
          },
          {
            src: "./src/assets/images/cate03.jpg",
            con: "自助餐",
          },
          {
            src: "./src/assets/images/cate04.jpg",
            con: "小吃快餐",
          },
          {
            src: "./src/assets/images/cate05.jpg",
            con: "西餐",
          },
          {
            src: "./src/assets/images/cate06.jpg",
            con: "烧烤烤肉",
          },
          {
            src: "./src/assets/images/cate07.jpg",
            con: "香锅烤鱼",
          },
          {
            src: "./src/assets/images/cate08.jpg",
            con: "海鲜",
          },
          
        ],
      };
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
  };
  </script>
  <style scoped>
  header {
    width: 100%;
    height: 50px;
    background: #1c1b20;
    position: relative;
  }

.float{
    position: absolute; 
    width:90%;
    margin:0 5%;
    top: 7px;
    left: 0;

}
.left_icon{
    float: left;

}
.right_icon{
    float: right;
}
 header .float>input{
    outline: none;
    border: none;
    border-radius: 15px;
    height: 28px;
    width: 72%;
    padding-left:40px;
    font-size: 13px;
    position: relative;
}
.search{
    position: absolute;
    top:5px;
    left:33px;
}
  .banner {
    width: 100%;
    /* height: calc(150vh - 130px); */
    overflow: auto;
  }
  
  
  main {
    width: 100%;
    height: 174px;
    margin-top: 67px;
  }
  main > ul > li {
    width: 19%;
    float: left;
    height: 66px;
    margin-left: 6%;
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


  footer{
         
         width: 100%;
         background:#f0f0f0;
        
     }
     footer #groub{
         height: 50px;
         line-height: 50px;
      }
     #groub>p{
         float: left;
         font-size: 14px;
         color:#06c1ae;
         margin-left:4%;
     }
     #groub>span{
       margin-right: 4%;
         float: right;
     }
 
     footer #center{
         height: 50px;
         line-height: 50px;
     }
 
     #center button{
       background:#06c1ae;
       height: 37px;
       width: 60px;
       border:none;
       border-radius: 10px;
       font-size: 14px;
       margin-left: 10px;
       margin-top: 20px;
     }
     #center p{
         float: right;
         margin-right: 50px;
         margin-top: 10px;
         font-size: 18px;
     }
     
      #city{
        font-size: 15px;
         color: #999999;
     }
     .c{
         border:1px solid #06c1ae;
         
         color:#06c1ae;
        
     }
     footer #nav{ 
           height: 40px;
           line-height: 40px;
           margin-top: 10px;
           margin-left: 10px;
     }
     footer #nav>li{
         float: left;
         font-size: 12px;
         color:#06c1ae;
         margin-left: 20px;
     }
     footer #nav>li:nth-of-type(1)::after,footer #nav>li:nth-of-type(2)::after,
     footer #nav>li:nth-of-type(3)::after,footer #nav>li:nth-of-type(4)::after{
         content: '|';
         color: rgb(114, 108, 108);
         margin-left: 20px;
 
     }
 
     footer #contact{
          width: 90%;
          margin: 5px auto ;
         text-align: center;
         font-size: 12px;
         line-height: 30px;
         
     }
     footer #contact>a{
       height: 30px;
       display: inline-block;
       margin-right: 24px;
       color:#06c1ae;
       text-decoration: none;
     }
     footer #contact>a:nth-of-type(4),footer #contact>a:nth-of-type(7){
      margin-right: 0px;
     }
 
     .txt{
        margin-top:20px;
        color:#646464;
        height: 30px;
        border-top: 1px solid black;
     }
    .last{
        width: 60%;
        height: 20px;
        margin-left:87px;
        font-size: 12px;
        color: #999999;
        
 
    }
  </style>