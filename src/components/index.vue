<template>
    <div id="app">
        <header>
            <span @click='cityList()'>
              {{this.$store.state.currentCity}}
            </span>
            <img src="../assets/images/icn_down.png" alt="" id="select">
              <input type="text" placeholder="请输入商家名、品类或者商圈...">
              <img src="../assets/images/icn_search.png" alt="" class="find"> 
            <router-link to="/login">
                <img src="../assets/images/icn_mine.png" alt="" id="log">
            </router-link>
            <router-view></router-view>
        </header>
 
        <div id="adver">
            <img src="../assets/images/img_box.png" alt="">
               <p>省钱利器 购物超划算</p>
               <p class="bottom">吃喝玩乐尽在美团</p>
            <span>去APP</span>
        </div>
 
        <main>
            <ul>
                <li v-for='(item,index) in list' :style='{background:item.color}'>
                 <router-link :to="item.path">
                   <span class="iconfont img">{{item.src}}</span>
                    <p class="con">{{item.con}}</p>  
                 </router-link>
                </li>
            </ul>
        </main>
 
 
        <div id="show">
            <p>猜你喜欢</p>
           <ul>
             <li v-for='(item,index) in listlike' >
               <router-link :to='"/details/"+item.shop'>
                <img :src="item.src" alt="" class="img2">
                <!-- <b><img :src="item.src" alt="" class="img2"></b> -->
                 <p class="shop">{{item.shop}}</p>
                 <p class="bar">{{item.bar}}</p>
                 <p class="fo">
                     <span class="money">{{item.money}} <span class="y">{{item.y}}</span></span>
                     <span class="active">{{item.active}}</span>
                     <span class="sales">{{item.sales}}</span>
                 </p>
                </router-link>
             </li>
            
           </ul>
        </div>
        
        <footer>
            <div id="groub">
                <p>
                    查看全部团购
                </p>
                <span class="iconfont">&#xe84c;</span>
            </div>
            <div id="center">
               <button @click='login()'>登录</button>
               <button @click='register()'>注册</button>
               <p>
                   <span id="city">城市：</span>
                   <img src="../assets/images/local.png" alt="">
                   <span>{{this.$store.state.currentCity}}</span>
                 </p>
             </div>
             
                <ul id="nav">
                    <li @click='home()'>首页</li>
                    <li @click='mine()'>我的</li>
                    <li>美团下载</li>
                    <li>电脑版</li>
                    <li>帮助</li>
                    
                </ul>
             
             <div id="contact">
               <span>友情链接:</span>

               <a href="//m.maoyan.com/?channel=touch_group">猫眼电影</a>
               <a href="//m.dianping.com">大众点评</a>
               <a href="https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj">美团旅行</a>
               <a href="https://minsu.meituan.com/?utm_source=i-zhenguo">榛果民宿</a>
               <a href="http://evt.dianping.com/synthesislink/9496.html">大众点评下载</a>
               <a href="https://shouyin.meituan.com?utm_source=inner&utm_medium=mti ">美团收银官网</a>
               <a href="https://xue.meituan.com/?from=mt0">美团点评餐饮学院</a>
               <a href="https://www.kuailvzaixian.com/">快驴进货商家合作</a>
               <p>©2020 美团网 京ICP证070791号</p>
               <div class="txt">
                 
               </div>
               
             </div>
        </footer>
  </div>
   
 </template>
 
 <script>
    export default{
        data(){
        return{
            list:[
                {
                    src:'\ue617',
                    con:'美食',
                    color:'#fd9d21',
                    path:'/cate'
                },
                {
                    src:'\ue67e',
                    con:'猫眼电影',
                    color:'#ff6767',
                    path:'/movie'
                },
                {
                    src:'\ue68a',
                    con:'酒店',
                    color:'#8a90fa',
                    path:'/hotel'
                },
                {
                    src:'\ue621',
                    con:'休闲娱乐',
                    color:'#fed030',
                    path:'/entertainment'
                },
                {
                    src:'\ue742',
                    con:'外卖',
                    color:'#fd9d21',
                    path:'/take_out'
                },
                {
                    src:'\ue62e',
                    con:'KTV',
                    color:'#fed030',
                    path:'/ktv'
                },
                {
                    src:'\ue67c',
                    con:'周边游',
                    color:' #4dc6ee',
                    path:'/tour'
                },
                {
                    src:'\ue84b',
                    con:'丽人',
                    color:'#ff80c2',
                    path:'/beauty'
                },
                {
                    src:'\ue665',
                    con:'小吃快餐',
                    color:'#fd9d21',
                    path:'/snack'
                },
                {
                    src:'\ue60e',
                    con:'全部分类',
                    color:'#00d3be',
                    path:'/type'
                },
                
            ],
            listlike:[
                {
                  src:'./src/assets/images/lu.jpg',
                  shop:'鹿禾堂',
                  bar:'[五一路]芒果鲜奶1杯，包间免费',
                  money:'1.99',
                  y:'元',
                  active:'门市价8元',
                  sales:'已售2382'
                },
                {
                  src:'./src/assets/images/pic02.jpg',
                  shop:'Pelicana百利家炸鸡',
                  bar:'[广州等]摇滚三宝1份，提供免费WiFi',
                  money:'9.8',
                  y:'元',
                  active:'门市价18元',
                  sales:'已售89718'
                },
                {
                  src:'./src/assets/images/pic03.jpg',
                  shop:'又一间茶点轩',
                  bar:'[5店通用]又一间茶点轩4人点心套餐',
                  money:'148',
                  y:'元',
                  active:'门市价195.4元',
                  sales:'已售46544'
                },
                {
                  src:'./src/assets/images/pic04.jpg',
                  shop:'大岗仙庙烧鸡',
                  bar:'[9店通用]3-4人排骨套餐',
                  money:'128',
                  y:'元',
                  active:'门市价149元',
                  sales:'已售28233'
                },
                {
                  src:'./src/assets/images/pic05.jpg',
                  shop:'弘善素食',
                  bar:'[市桥]中西素食自助餐',
                  money:'19.8',
                  y:'元',
                  active:'门市价22元',
                  sales:'已售111123'
                },
                {
                  src:'./src/assets/images/pic06.jpg',
                  shop:'袁记饺子云吞连锁店',
                  bar:'[2店通用]20元代金券1张，可叠加',
                  money:'18.8',
                  y:'元',
                  active:'门市价20元',
                  sales:'已售55235'
                },
                {
                  src:'./src/assets/images/pic07.jpg',
                  shop:'汤响自助回转火锅',
                  bar:'[北京路商业区]50元代金券1张，可叠加',
                  money:'47',
                  y:'元',
                  active:'门市价26元',
                  sales:'已售49805'
                },
                {
                  src:'./src/assets/images/pic08.jpg',
                  shop:'遇见小面',
                  bar:'[45店通用]大勺肉酱酸辣粉1份',
                  money:'6.99',
                  y:'元',
                  active:'门市价9元',
                  sales:'已售131713'
                },
                {
                  src:'./src/assets/images/pic09.jpg',
                  shop:'尊宝比萨',
                  bar:'[广州等]单人套餐',
                  money:'26',
                  y:'元',
                  active:'门市价41元',
                  sales:'已售134164'
                },
                {
                  src:'./src/assets/images/pic10.jpg',
                  shop:'十分牛西餐·牛扒专门店',
                  bar:'[北京路商业区]牛排2人餐，免费WiFi',
                  money:'159',
                  y:'元',
                  active:'门市价179元',
                  sales:'已售211448'
                },
                {
                  src:'./src/assets/images/pic11.jpg',
                  shop:'TANING挞柠·手挞柠檬茶',
                  bar:'[105店通用]招牌手挞柠檬茶3选1',
                  money:'12.9',
                  y:'元',
                  active:'门市价16元',
                  sales:'已售437075'
                },
                {
                  src:'./src/assets/images/yufen.jpg',
                  shop:'五谷鱼粉',
                  bar:'[明秀路]五谷鱼粉单身套餐',
                  money:'10.8',
                  y:'元',
                  active:'门市价13元',
                  sales:'已售32310'
                },
                {
                  src:'./src/assets/images/kai.jpg',
                  shop:'开普勒精致手作茶坊',
                  bar:'[6店通用]正宗台湾纯茶2选1',
                  money:'9',
                  y:'元',
                  active:'门市价12元',
                  sales:'已售55402'
                },
                {
                  src:'./src/assets/images/luo.jpg',
                  shop:'螺公堂',
                  bar:'[32店通用]10元代金券1张，可叠加',
                  money:'8.8',
                  y:'元',
                  active:'门市价10元',
                  sales:'已售71670'
                },
                {
                  src:'./src/assets/images/CRAZY.jpg',
                  shop:'CRAZY FRESH鲜疯',
                  bar:'[航洋国际]西瓜丁圆圆（浑身上下透露着一股青草的清新甜味，搭配荔枝味的圆圆，简直就是夏天饮品的靓嘢哦~）1份',
                  money:'11.9',
                  y:'元',
                  active:'门市价18元',
                  sales:'已售16503'
                },
                {
                  src:'./src/assets/images/liang.jpg',
                  shop:'梁小糖',
                  bar:'[园湖路]招牌烤奶2选1，提供免费WiFi',
                  money:'4.9',
                  y:'元',
                  active:'门市价6元',
                  sales:'已售10557'
                },
                {
                  src:'./src/assets/images/bi.jpg',
                  shop:'比巴卜自助烤涮餐厅',
                  bar:'[市中心]单人自助晚餐1次，无需预约，节假日通用',
                  money:'57',
                  y:'元',
                  active:'门市价59元',
                  sales:'已售226030'
                },
                {
                  src:'./src/assets/images/liu.jpg',
                  shop:'柳螺香',
                  bar:'[16店通用]原味螺蛳粉套餐，建议单人使用',
                  money:'10.9',
                  y:'元',
                  active:'门市价18元',
                  sales:'已售46234'
                },
                {
                  src:'./src/assets/images/le.jpg',
                  shop:'乐多多炸鸡',
                  bar:'[31店通用]20元代金券1张，可叠加',
                  money:'14.8',
                  y:'元',
                  active:'门市价20元',
                  sales:'已售23081'
                },
                {
                  src:'./src/assets/images/ji.jpg',
                  shop:'黎氏鸡脚王',
                  bar:'[广西大学]黎氏鸭翅膀1个，提供免费WiFi',
                  money:'0.99',
                  y:'元',
                  active:'门市价2.5元',
                  sales:'已售43971'
                },
                {
                  src:'./src/assets/images/pic12.jpg',
                  shop:'重庆德庄毛肚火锅',
                  bar:'[3店通用]100元代金券1张，可叠加',
                  money:'93',
                  y:'元',
                  active:'门市价100元',
                  sales:'已售5087'
                },
                {
                  src:'./src/assets/images/pic13.jpg',
                  shop:'小肥羊',
                  bar:'[南宁等]100元通用代金券1张，可叠加',
                  money:'85',
                  y:'元',
                  active:'门市价100元',
                  sales:'已售59805'
                },
                {
                  src:'./src/assets/images/pic14.jpg',
                  shop:'蛙来哒炭烧牛蛙',
                  bar:'[悦荟广场]100元代金券1张，可叠加3张',
                  money:'92',
                  y:'元',
                  active:'门市价100元',
                  sales:'已售40805'
                },
                {
                  src:'./src/assets/images/pic15.jpg',
                  shop:'苗佳酸汤粉',
                  bar:'[2店通用]酸汤三鲜1份，提供免费WiFi',
                  money:'11.8',
                  y:'元',
                  active:'门市价18元',
                  sales:'已售69805'
                },
                
            ]
        }
     },
     methods: {
      register(){
        this.$router.push('/register')
      },
      login(){
        this.$router.push('/login')
      },
      mine(){
        this.$router.push('/personal')
      },
      home(){
        this.$router.push('/')
      },
      cityList(){
        this.$router.push('/cityList')
      },
     }
    }
 
 
 </script>
 
 <style scoped>
     #app{
         background: #f0efed;
     }
    #app header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #ffce00;
        position: relative;
    } 
     header span{
        float: left;
        margin-left: 15px;
        font-size: 15px;
        color: #222222;
        font-family: PingFangSC-Medium;
        
    }
    a:-webkit-any-link {
        text-decoration: none;
    }
    #select{
     margin-top: 23px;
     margin-left: 5px;
     width: 10px;
     float: left;
    }
    input{
        width: 58%;
        height: 33px;
        border-radius: 10px;
        margin-top: 8px;
        margin-left: 13px;
        padding-left: 35px;
        float: left;
        line-height: 33px;
        font-size: 13px;
        background-color: #fff9e5;
        outline: none;
        border: none;
        
    }
   .find{
       float: left;
       position: absolute;
       left: 85px;
       top: 17px;
       width: 15px;
   }
   
    
   #log{
        float:right;
        /* height: 25px; */
        width: 23px;
        /* height: 24px; */
        margin-top: 13px;
        margin-right: 10px;
    }
    #adver{
       height: 51.5px; 
       width: 100%;
       overflow: hidden;
       background-color:#000000;
       
    }
    #adver>img{
        width: 36px;
        float: left;
        margin-left: 13px;
        margin-top: 7px;
    }
    #adver p{
       margin-top: 9px;
       margin-left: 60px;
       font-size: 13px;
       color: white;
    }
    #adver .bottom{
        font-size: 12px;
        margin-top: 1px;
        color: gray;
    }
   
     #adver>span{
        
         height:30px ;
         width:55px ;
         text-align: center;
         line-height: 30px;
         background-color:#ffc100;
         float: right;
         border-radius: 5px;
          margin-right: 15px;
         margin-top: -32px;
         font-size: 12px;
     }
     
 
     main{
         width: 100%;
         height: 165px;
         margin-bottom:10px;
         background-color: white;
      
     }
     main>ul>li{
         width: 41px;
         float: left;
         height: 40px;
         border-radius: 50%;
         margin: 3% 4.5% 8%;
         position: relative;
     }
     .img{
         position: absolute;
         top: 5px;
         left: 6px;
         color:white
     }
     .con{
         width: 130%;
         text-align:center ;
         margin-top: 6px;
         left: -12%;
         position: absolute;
         top: 100%;
         font-size: 13px;
         color: grey;
     }
 
 
    #show{
        width: 100%;
      
        background-color: white;
        overflow: hidden;
        padding-top: 10px;
      
    }
    #show>p{
        margin-left: 4%;
        height: 30px;
        font-size:17px;
          
    }
    #show>ul{
         margin-left: 4%;
         
    }
    #show>ul>li{
        width: 100%;
        height: 85px;
        border-top: 1px solid #ddd8ce;
        padding: 8px 8px 8px 0;
    }
    
    .img2{
        float: left;
        width: 95px;
        height: 80px;
        margin-right: 11px;
    }
    #show .shop{
        margin-left: 27%;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 16px;
        color: black;
    }
    #show .bar{
      margin-left: 27%;
    font-size: 12px;
    height: 16px;
    margin-bottom: 15px;
    color: grey;
    overflow: hidden;
    }
   #show .fo{
     margin-left: 27%;
     
   }
    #show .money{
        font-size: 17.5px;
        color:#ff6600
      
     }
     #show .y{
        font-size: 13px;
        color:#ff6600;
        /* margin-left: -8px; */
      
     }
     #show .active{
        font-size: 13px;
        color:#666666;
        /* margin-left: 5px; */
      
     }
     #show .sales{
         float: right;
         margin-right: 10px;
         margin-top: 5px;
         font-size: 13px;
         color:#666666;
         }
 
     footer{
         /* height: 600px; */
         width: 100%;
         background:white
        
     }
     footer #groub{
         height: 50px;
         line-height: 50px;
         border:1px solid rgb(100, 96, 96);
         border-left:none;
         border-right:none;
 
     }
     #groub>p{
         float: left;
         font-size: 17px;
         color:#feac47;
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

 
 </style>