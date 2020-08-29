<template>
    <main>
        <div class="header">
            <router-link to="/">
                <img src="../assets/images/icn_back.png" alt="" class="icn_back">
            </router-link> 
                <p class="center"> 我的美团</p>   
                <div class="right">
                    <router-link to="/">
                        <img src="../assets/images/icon_home.png" alt="" class="icon_home">
                    </router-link>
                    <img src="../assets/images/icn_search_2.png" alt="" class="icn_search_2">
                </div>
        </div>
        <div class="nav">
            <img src="../assets/images/pic-default.png" alt="" class="left">
            <div class="center">
                <p class="top">pxC860212832</p>
                <span class="span">
                    <!-- <img src="../assets/images/vip3.png" alt=""> -->
                </span>
                <p class="bottom">账户余额：<span>0</span> 元</p>
            </div>
            <div class="right">
                <img src="../assets/images/img_right.png" alt="" >
            </div>
        </div>
        <div class="content">
            <div class="top">
                <p class="left">
                    <img src="../assets/images/all_order.png" alt="">
                </p>
                全部订单
                <span class="right">
                    <img src="../assets/images/order_right.png" alt="">
                </span>
            </div>
            <div class="bottom">
                <ul>
                    <li>
                        <router-link to="/allBook">
                            <img src="../assets/images/pay.png" alt="">
                            <p>待付款</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/allBook">
                            <img src="../assets/images/no_use.png" alt="">
                            <p>待使用</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/allBook">
                            <img src="../assets/images/no_record.png" alt="">
                            <p>待评价</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/allBook">
                            <img src="../assets/images/after.png" alt="">
                            <p>退款/售后</p>
                        </router-link>
                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li v-for='(item,index) in list'>
                    <span class="left" :style='{background:item.color}'>
                        <img :src="item.src" alt="" class="span_img">
                    </span>
                    <p>{{item.text}}</p>
                    <img src="../assets/images/order_right.png" alt="" class="li_img">
                </li>
            </ul>
        </div>
        <footer>
            <div id="center">
                <router-link to="/login">
                    <button>登录</button>
                 </router-link>
                 <router-link to="/register">
                  <button>注册</button>
                 </router-link>
               <p>
                   <span id="city">城市：</span>
                   <img src="../assets/images/local.png" alt="">
                   <span>{{this.$store.state.currentCity}}</span>
                 </p>
             </div>
             
                <ul id="nav">
                    <li><router-link to="/">首页  </router-link></li>
                    <li>我的</li>
                    <li>美团下载</li>
                    <li>电脑版</li>
                    <li>帮助</li>
                    
                </ul>
             
             <div id="contact">
               <span>友情链接:</span>
               <a href="//m.maoyan.com/?channel=touch_group">猫眼电影</a>
               <a href="//m.dianping.com">大众点评</a>
               <a href="https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj">美团旅行</a>
               <a href="//i.zhenguo.com">榛果民宿</a>
               <a href="//evt.dianping.com/synthesislink/9496.html">大众点评下载</a>
               <a href="https://shouyin.meituan.com?utm_source=inner&utm_medium=mti ">美团收银官网</a>
               <a href="https://xue.meituan.com/?from=mt0">美团点评餐饮学院</a>
               <a href="https://www.kuailvzaixian.com/">快驴进货商家合作</a>
               <p>©2020 美团网 京ICP证070791号</p>
               <div class="txt">
                 
               </div>
               
             </div>
        </footer>
    </main>
</template>
<!-- <script>
    export default{
        methods: {
         ch(){
             this.$router.go(-1)
       }
     }
    }

</script> -->
<style scoped>
    main{
        height: 100vh;
        background: rgb(221, 214, 214);
    }
    .header{
        width: 100%;
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        background-color: orange;
    }
    .icn_back{
        width: 10px;
        height: 18px;
        margin-left: 15px;
        margin-top: 15px;
        float: left;
    }
    .header .center{
        width: 100px;
        margin-left: 120px;
        text-align: center;
        font-size: 16.5px;
        height: 130px;
        float: left;
    }
    .header .right{
        width: 60px;
        height: 50px;
        margin-right: 20px;
        float: right;
        /* background-color: grey; */
    }
    .icon_home{
        width: 24px;
        height: 24px;
        float: left;
        margin-top: 14px;
    }
    .icn_search_2{
        width: 24px;
        height: 24px;
        margin-top: 14px;
        float: right;
    }
    .nav{
        width: 100%;
        height: 85px;
        background: url('../assets/images/my-photo.png') no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
    }
    .nav .left{
        margin-top: 12px;
        margin-left: 20px;
        width: 60px;
        height: 60px;
        float: left;
    }
    .nav .center{
        /* width: 250px; */
        height: 50px;
        margin-left: 15px;
        float: left;
    }
    .nav .top{
        font-size: 14px;
        margin-top: 18px;
        float: left;
    }
    .nav .span{
                width: 17px;
                height: 16px;
                margin-top: 18px;
                margin-left: 7px;
                display: inline-block;
                background:url('../assets/images/vip3.png') no-repeat -1px -1px;
                background-size: 17px;
            }
    .nav .bottom{
        font-size: 13px;
        margin-top: 10px;
    }
    .nav .bottom span{
        color: orange;
    }
    .nav .right{
        width: 13px;
        height: 13px;
        float: right;
        margin-top: 35px;
        margin-right: 10px;
    }
    .nav .right img{
        width: 17.5px;
    }
    .content{
        width: 100%;
        height: 20vh;
        margin-top: 10px;
        /* background-color: palegreen; */
    }
    .content .top{
        width: 100%;
        height: 43px;
        line-height: 35px;
        padding-top:5px ;
        background-color: white;
        font-size: 15px;
    }
    .content .top .left{
        width: 25px;
        height: 28px;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 12px;
        float: left;
        background-color: orange;
        border-radius: 4px;
        text-align: center;
    }
    .content .top .left img{
        width: 20px;
    }
    .content .top .right{
        width: 10px;
        height: 10px;
        margin-right: 15px;
        margin-top: 3px;
        float: right;
    }
    .content .top .right img{
        width: 15px
        
    }
    .content .bottom{
        width: 100%;
        height: 85px;
        border: none;
        border-top: 1px solid grey;
        background-color: white;
        overflow: hidden;
    }
    .content ul{
        width: 100%;
        height: 85px;
        margin-top: 8px;
    }
    .content .bottom li{
        float: left;
        width: 19%;
        height: 85px;
        text-align: center;
        margin: 0 3%;
    }
    .content .bottom li img{
        margin-top: 8px;
        width: 35px;
        height: 35px;
    }
    .content .bottom p{
        margin-top: 0px;
        font-size: 14px;
        text-align: center;
        color: black;
    }
    .footer{
        margin-top: 11px;
        width: 100%;
        /* height: 216px; */
        background-color: orange;
    }
    .footer li{
        width: 100%;
        height: 53px;
        background-color: white;
        border-bottom: 1px solid grey;
    }
    .footer .left{
        margin: 10px 10px;
        display: inline-block;
        width: 30px;
        height: 30px;
        float: left;
        text-align: center;
        background-color: tomato;
        border-radius: 3px;
    }
    .footer p{
        margin-top: 15px;
        font-size:15px;
        float: left;
    }
    .li_img{
        width: 15px;
        height:15px;
        float: right;
        /* margin: 20px 10px; */
        margin-top: 20px;
        margin-right: 15px;
    }
    .span_img{
        margin-top: 5px;
        width: 20px;
    }
    
    footer{
         /* height: 600px; */
         width: 100%;
         background:white
        
     }
     footer #center{
         height: 50px;
         line-height: 50px;
     }
 
     #center button{
       background:#ffc300;
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
         font-size: 13px;
     }
     #center p>img{
       width: 15px;
       margin-bottom: -2px;
     }
      p #city{
        font-size: 15px;
         color: #999999;
     }
 
     footer #nav{ 
           height: 40px;
           line-height: 40px;
           margin-top: 10px;
           margin-left: 10px;
     }
     a:-webkit-any-link {
    color:#feac47;
    cursor: pointer;
    text-decoration: none;
    }
     footer #nav>li{
         float: left;
         font-size: 12px;
         color:#feac47;
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
         /* margin-top: ;
         /* margin-left: 60px; */
         /* margin-right: ;  */
         line-height: 30px;
         /* background-color: aquamarine; */
     }
     footer #contact>a{
       height: 30px;
       display: inline-block;
       /* margin-left: 1%; */
         margin-right: 24px;
         color:#646464;
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
    footer #contact>p{
        width: 60%;
        height: 20px;
        margin-left: 20%;
        margin-top: 5px;
        float: left;
        color:#646464;
        background-color: white;
 
    }
    a{
        text-decoration: none;
    }

</style>
<script>
        export default{  
                data(){
                    return {
                        list:[
                            {
                               color:'skyblue',
                               src:'./src/assets/images/fav.png',
                               text:'我的收藏',
                               num:1,
                               url:'./src/assets/images/order_right.png'
                            },
                            {
                               color:'red',
                               src:'./src/assets/images/use_pay.png',
                               text:'我的抵用券',
                               num:93,
                               url:'./src/assets/images/order_right.png'
                            },
                            {
                               color:'orange',
                               src:'./src/assets/images/gift.png',
                               text:'我的抽奖单',
                               num:'',
                               url:'./src/assets/images/order_right.png'
                            },
                            {
                               color:'purple',
                               src:'./src/assets/images/point.png',
                               text:'积分换礼品',
                               num:'',
                               url:'./src/assets/images/order_right.png'
                            },
                            
                        ]
                    }
                }
            }
</script>