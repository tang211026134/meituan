<template>
    <main>
    <header>
        <p class="left" @click="back()">
          <img src="../assets/images/register02.jpg" width="12px" height="16px" alt />
        </p>
        <p class="center">周边游</p>
        <p class="right">
          <img src="../assets/images/register01.jpg" width="23px" height="23px" alt />
        </p>
      </header>

      
      <div class='choose'>
        <ul>
            <li class="happy" @click="change()">
              周边游
            </li>
            <li class="acity">
                全城
            </li>
            <li class='sort'>
                智能排序
            </li>
            <li class="select">
                筛选
            </li>
        </ul>
      </div>  

      <div id="show">
      
       <ul>
         <li v-for='(item,index) in listlike' >
           <!-- <router-link :to='"/details/"+item.shop'> -->
            <img :src="item.src" alt="" class="img2">
            <p class="shop">{{item.shop}} 
                <span class="tick">{{item.tick}}</span> 
                <span class="group">{{item.group}}</span>
                <span class="x">{{item.x}}</span>
             </p>
            <span class="comment">
                <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                <img src="../assets/images/take_outicon4.png" width="10px" height="10px" id="img2" alt />
                <span class="grade">{{item.grade}}分</span>
                <span class="num"> {{item.num}}人消费</span>
            </span>
             <p class="fo">
                 <span class="money">{{item.money}} <span class="y">起</span></span>
                 <span class="far">{{item.far}}m</span>
             </p>
            <!-- </router-link> -->
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
</main>
</template>

<script>
    export default{
        data(){
           return{
            listlike:[
                {
                  src:'./src/assets/images/ktv01.jpg',
                  shop:'十一音樂製作录音棚',
                  tick:'',
                  group:'',
                  x:"",
                  grade:'5',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
                {
                  src:'./src/assets/images/ktv02.jpg',
                  shop:'堂会(白云店)',
                  tick:'',
                  group:'',
                  x:'',
                  grade:'5',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
                {
                  src:'./src/assets/images/ktv03.jpg',
                  shop:'喜聚PTV',
                  tick:'',
                  group:'',
                  x:'',
                  grade:'5',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
                {
                  src:'./src/assets/images/ktv03.jpg',
                  shop:'堂会(天河店)',
                  tick:'',
                  group:'',
                  x:'',
                  grade:'5',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
                {
                  src:'./src/assets/images/ktv03.jpg',
                  shop:'畅想国度(奥园店)',
                  tick:'',
                  group:'',
                  x:'',
                  grade:'5',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
                {
                  src:'./src/assets/images/ktv03.jpg',
                  shop:'TOP星派对KTV',
                  tick:'',
                  group:'',
                  x:'',
                  grade:'',
                  num:'1234',
                  money:'47',
                  far:'已售49805'
                },
               
               
               
            ]
           }
        },
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
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
    font-size: 18px;
  }
  header img {
    vertical-align: middle;
  }

  .choose{
        width:100%;
        height: 43px;
        position: relative;
    }
    .choose>ul>li{
        width: 24.75%;
        float: left;
        border:1px solid grey;
        text-align: center;
        line-height: 43px;
        color:#666666;
        font-size:14px;
        border-left: none;
        border-right: none;
    }
    
     .happy::after{
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border-top: 7px solid #B7B7B7;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 0;
        margin-left: 0px;
    }
    .sort::after{
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border-top: 7px solid #B7B7B7;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 0;
        margin-left: 0px;
    }
    .select::after{
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border-top: 7px solid #B7B7B7;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 0;
        margin-left: 0px;
    }
    .acity::after{
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border-top: 7px solid #B7B7B7;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 0;
        margin-left: 0px;
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
       /* border-top: 1px solid rgb(100, 90, 90); */
        padding: 8px 8px 8px 0;
    }
   
    .img2{
        float: left;
        width: 95px;
        height: 80px;
        margin-right: 9px;
    }
    #show .shop{
        margin-left: 27%;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 16px;
        color: black;
    }
    .shop .tick{
        
        font-size: 12px;
        background:#4DC8F1 ;
        color: white;
        margin-left: 5px;
        border-radius: 4px;
    }
    .shop .group{
        content: '套餐';
        font-size: 12px;
        background:#FF9400 ;
        color: white;
        margin-left: 5px;
        border-radius: 4px;
    }
    .shop .x{
        content: '套餐';
        font-size: 12px;
        background:#BD82E3;
        color: white;
        margin-left: 5px;
        border-radius: 4px;
    }
    #show .bar{
        margin-left: 27%;
        font-size: 12px;
        margin-bottom: 15px;
        color: grey;
        
    }
    .grade{
        font-size: 13px;
        color:#FDB338 ;
        margin-left: 5px;
    }
    
    .num{
        font-size: 13px;
        margin-left: 66px;
        color: #666666;
    }
   #show .fo{
     margin-left: 27%;
     
   }
    #show .money{
        font-size: 17.5px;
        color:#ff5353
      
     }
     #show .y{
        font-size: 13px;
        color:#666666;
        /* margin-left: -8px; */
      
     }
     #show .active{
        font-size: 13px;
        color:#666666;
        /* margin-left: 5px; */
      
     }
     #show .far{
         float: right;
         margin-right: 18px;
         margin-top: 5px;
         font-size: 13px;
         color:#666666;
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
         color:#ffbd00;
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
       background: #ffbd00;
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
         border:1px solid #ffbd00;;
         
         color:#ffbd00;
        
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
         color:#ffbd00;
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
       color:#ffbd00;
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