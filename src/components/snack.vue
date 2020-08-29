<template>
  <div class="enter">
       <header>
          <p class="left" @click="back()">
              <img  src="../assets/images/register02.jpg" width="12px" height="16px" alt />
            </p>
            <p class="center">分类</p>
            <p class="right">
              <img src="../assets/images/take_out_icon2.jpg" width="23px" height="23px" alt />
            </p>
            <p class="my" @click="come()">
              <img src="../assets/images/icn_mine.png" width="23px" height="23px" alt />
            </p>
       </header>

       <div id="adver">
          <img src="../assets/images/img_box.png" alt="">
             <p >省钱利器 购物超划算</p>
             <p class="bottom">吃喝玩乐尽在美团</p>
          <span>去APP</span>
      </div>
      

      <div class='choose'>
          <ul > 
              <li :class="{happy:true,a:color==1}" @click="change(1)" >
                 {{this.$store.state.type}}
              </li>
            <li :class="{happy:true,a:color==2}" @click='change(2)'>
                  全城
              </li>
              <li :class='{happy:true,a:color==3}' @click='change(3)' >
                  默认排序
              </li>
              <li :class="{happy:true,a:color==4}"   @click="change(4)">
                  筛选
              </li>
          </ul>
      </div>
      
       <section>
          <ul class="entershow">
              <li v-for="(item,index) in list">
                <span class="entertype"><router-link :to="item.path">{{item.entertype}}</router-link></span>
                <span class="num">{{item.num}}</span>
              </li>
          </ul>
       </section>       
      <main>
          <ul v-for='(item,index) in conList'>
              <li class="one">
                  <p class="shop">{{item.name}}</p>
                  <img src="../assets/images/enter_icon02.jpg" width="10px" height="10px" alt="">
                  <img src="../assets/images/enter_icon02.jpg" width="10px" height="10px" alt="">
                  <img src="../assets/images/enter_icon01.jpg" width="10px" height="10px" alt="">
                  <img src="../assets/images/enter_icon01.jpg" width="10px" height="10px" alt="">
                  <img src="../assets/images/enter_icon01.jpg" width="10px" height="10px" alt="">
                  <span class="address">{{item.address}}</span>
              </li>
              <li class="two" v-for='(item,index) in item.itemName'>
                 <div class="img">
                     <img src="../assets/images/snack01.jpg" alt="">
                  </div>
                  <div class="con">
                      <p class="shopcon">{{item.name}}</p>
                      <p class="con_bottom">
                          <span class="money">{{item.c_money}}</span>
                          <span class="m">门市价:{{item.o_money}}</span>
                          <span class="sals">已售{{item.sale}}</span>
                      </p>
                  </div>
              </li>
               <li class="three">
                   <p class="other" @click='show(index)'>查看其它团购</p> 
                  <div class="hide" v-show='index==number'>
                      <main>
                          <ul v-for='(item,index) in conList'>
                              <li class="two" v-for='(item,index) in item.itemName'>
                                 <div class="img">
                                     <img src="../assets/images/snack02.jpg" alt="">
                                  </div>
                                  <div class="con">
                                      <p class="shopcon">{{item.name}}</p>
                                      <p class="con_bottom">
                                          <span class="money">{{item.c_money}}</span>
                                          <span class="m">门市价:{{item.o_money}}</span>
                                          <span class="sals">已售{{item.sale}}</span>
                                      </p>
                                  </div>
                              </li>
                          </ul>
                      </main>
                  </div>
               </li>
          </ul>
      </main>
  </div>
</template>

<script>
  export default{
     
      data(){
        
          return{
              color:false,
               msg:false,
              number:null,
              flag:false,
              list:[
               {
                   entertype:'猫眼电影',
                   num:'1050',
                   path:'/movie'
               },
               {
                   entertype:'美食',
                   num:'100',
                   path:'/cate'
               },
               {
                   entertype:'外卖',
                   num:'00',
                   path:'/take_out'
               },
           ],
         conList:[
             {
              name:'岭南第一锅（科学城店）',
              address:'18.8km 北京路商业区',
              itemName:[
                  {
                      name:'小吃6选2，提供免费WiFi',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                  {
                      name:'小吃3选1，提供免费WiFi',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                 

              ]

             },
             {
              name:'重庆巴蜀小面（万达金街店）',
              address:'18.8km 北京路商业区',
              itemName:[
                  {
                      name:'招牌重庆小面1碗',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                  {
                      name:'超值单人面食套餐',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                  

              ]

             },
             {
              name:'华莱士·炸鸡汉堡（黄埔暹岗店）',
              address:'18.8km 北京路商业区',
              itemName:[
                  {
                      name:'1个辣味鸡肉卷+1个牛气冲天堡+1份鸡米花+1份紫薯豌豆派+1份薯条+2杯中可1份',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                  {
                      name:'双人堡卷套餐',
                      c_money:108,
                      o_money:200,
                      sale:27
                  },
                  

              ]

             }
         ],
         

      }
      },
  methods:{
     
      change(n){
        
          $('section>ul').slideToggle();
          this.color=!this.color;
          if(n==1){
            this.color=1;
          }else if(n==2){
            this.color=2;
          }else if(n==3){
            this.color=3;
          }else{
            this.color=4;
          }
        },
      back(){
              this.$router.go(-1)
         
      },
      come(){
              this.$router.replace('/login')
         
      },
      show(index){
          this.number = index;
          alert(this.number)
      }

  
  }}
</script>

<style scoped>
    a:-webkit-any-link {
       color: #333333;
       cursor: pointer;
       text-decoration: none;
    }
  .tabcolor{
    color: red;
  }
  .a{
      color:#FE8C00;
  }
  .hide{
      margin-left: -10px;
      width: 100%;
      /* height: 300px; */
      position: absolute;
      top: 0px;
  }
  section{
      width: 100%;
  }
  section>ul{
      width: 100%;
      background: white;
      position: absolute;
      display: none;
      top: 140px;
      left: 0px;
  }
  section>ul>li{
      width:100%;
      height: 40px;
      border:1px solid gainsboro;
      line-height: 40px;
      font-size: 14px;
   }
   .entertype{
       float: left;
       margin-left:20px;
   }
   .num{
      float: right;
      margin-right: 15px;
      margin-top: 10px;
      padding: 1px 2px;
      height: 20px;
      background: #cccccc;
      border-radius: 10px;
      display: block;
      text-align: center;
      line-height: 20px;
   }
  header{
      width: 94%;
      height: 30px;
      background:#ffc900 ;
      padding:10px 3%;
      font-size:18px
  }
  header>p{
      float: left;
  }
  
  .left{
      width:40%;
      
  }
  .my{
      width: 13%;
      float: right;
  }
  .right{
      width: 10%;
      float: right;
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
      color: white;
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
      /* color:#666666; */
      font-size:14px;
  }
  

  .choose>ul>li:nth-of-type(n){
      border-right:none;
  }
  .choose>ul>li:nth-of-type(1){
      border-left:none;
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
  main{
      width:100%;
      
      background:#f0efed;
  }
  main>ul{
      margin-bottom:4%;
      background-color:white;
  }
  main>ul>li{
     padding: 2% 2%;
     border:0.5px solid rgba(160, 160, 160,0.7);
     font-size: 15px;
     border-top:none;
     border-left:none;
     border-right:none;
  }
  main>ul>li:nth-of-type(1){
      border-top:0.1px solid rgba(160, 160, 160,0.7);
  }
  .two{
     height: 88px;
     
  }
  .shop::after{
      content: "团";
      background-color:#ff4d0f ;
      font-size: 14px;
      color:white;
      border-radius: 3px;
      margin-left: 5px;
    
  }
  .img{
      width:30%;
      height: 85px;
      float: left;
      overflow: hidden;
  }
  .con{
      width: 65%;
      float: right;
  }
  .address{
      float: right;
      font-size:12px
  }
  .con_bottom{
      margin-top:40px
  }
  .shopcon{
      color: #666666;
  }
  .money{
      font-size:18px;
      color:#ff6702;
  }
  .money::after{
      content: "元";
      color:#ffa116;
      font-size: 13px;
  }
  .m{
      font-size: 12px;
      color: #666666;
   }
   .sals{
       float: right;
       font-size: 12px;
       color: #666666;
   }

   .three{
       height: 30px;
       text-align: center;
       line-height: 30px;
       position: relative;
   }
   .other{
       font-size: 15px;
       color:#fe8c00;
   }
</style>