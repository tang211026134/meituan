<template>
    <div>
        <main>
         
            <header>
              猫眼电影
              <router-link to="/">
              <span><img src="../assets/images/search_icon.png" width="18px" height="18px" alt=""></span>
            </router-link>
          </header>
        
          <nav>
              <p id="new">正在热映</p>
              <p id="fur">即将上映</p>
              <router-link to="/search">
                <img src="../assets/images/movie_search.png" alt="" width="20px" height="20px">
              </router-link>
          </nav>
          </main>
         <div class="banner">
             
            <div id="best">
             <p>最受好评电影</p>
             <div>
                 <ul>
                    <li v-for='(item,index) in list'>
                        <img :src="item.src" width="85px" height="115px" alt="" /> 
                        <p class="con"> {{item.con}}</p>
                        
                        <span class="na">{{item.na}}</span>
                     </li>
                </ul>
             </div>
            </div>
      
            <div id="show">
             <ul>
               <li v-for="(item,index) in listcenter">
                 <img :src="item.src" id="pic"  width="64px" height="90px" alt />
                 <div>
                   <p class="na">{{item.na}}</p>
                   <p>
                     <img :src="item.type" id="type"  alt />
                   </p>
                   <p class="score">
                     {{item.score}}
                     <span>{{item.s}}</span>
                   </p>
                   <p class="actor">{{item.actor}}</p>
                   <p class="con">{{item.con}}</p>
                 </div>
                 <button class="buy">{{item.buy}}</button>
               </li>
             </ul>
           </div>
      
     
           <div id="person">
             <p>热门影人</p>
             <div>
               <ul>
                 <li v-for="(item,index) in listp">
                   <img :src="item.src"  width="85px" height="115px" alt />
                   <span class="na">{{item.na}}</span>
                 </li>
               </ul>
             </div>
           </div>
     
           <div id="hot">
             <p>娱乐热点</p>
             <ul v-for="(item,index) in listhot">
               <li>{{item.con}}</li>
             </ul>
            </div>
         </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                  {
                     src:'./src/assets/images/movie01.jpg',
                     con:'观众评分  9.4',
                    
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie02.jpg',
                     con:'观众评分  9.3',
                    
                     na:"星际穿越",
                  },
                  {
                     src:'./src/assets/images/movie03.jpg',
                     con:'观众评分  9.3',
                   
                     na:"哈利波特",
                  },
                  {
                     src:'./src/assets/images/movie04.jpg',
                     con:'观众评分  9.2',
                     
                     na:"八佰",
                  },
                  {
                     src:'./src/assets/images/movie05.jpg',
                     con:'观众评分',
                     score:'9.4分',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie06.jpg',
                     con:'观众评分',
                     score:'9.4分',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie07.jpg',
                     con:'观众评分',
                     score:'9.4分',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie08.jpg',
                     con:'观众评分',
                     score:'9.4分',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie09.jpg',
                     con:'15322人想看',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie10.jpg',
                     con:'15322人想看',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie11.jpg',
                     con:'15322人想看',
                     na:"误杀",
                  },
                  {
                     src:'./src/assets/images/movie12.jpg',
                     con:'15322人想看',
                     
                     na:"盗梦空间",
                  }
 
                  ],
                  listcenter: [
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor:
                        "主演:仿生仿生访问问问无法所发生的是伟大的仿生仿生访问问问无法所发生的是伟大的",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                    {
                      src: "./src/assets/images/movie01.jpg",
                      na: "八佰www",
                      type: "./src/assets/images/2D.jpg",
                      score: "观众评",
                      s: "9.2",
                      actor: "主演",
                      con: "jintian",
                      buy: "购票",
                    },
                 ],
                  listp: [
         {
           src: "./src/assets/images/person01.jpg",
           na: "误杀",
         },
         {
           src: "./src/assets/images/person02.jpg",
           na: "星际穿越",
         },
         {
           src: "./src/assets/images/person03.jpg",
           na: "哈利波特",
         },
         {
           src: "./src/assets/images/person04.jpg",
           na: "八佰",
         },
         {
           src: "./src/assets/images/person01.jpg",
           na: "误杀",
         },
         {
           src: "./src/assets/images/person02.jpg",
           na: "星际穿越",
         },
         {
           src: "./src/assets/images/person03.jpg",
           na: "哈利波特",
         },
         {
           src: "./src/assets/images/person04.jpg",
           na: "八佰",
         },
         {
           src: "./src/assets/images/person01.jpg",
           na: "误杀",
         },
         {
           src: "./src/assets/images/person02.jpg",
           na: "星际穿越",
         },
         {
           src: "./src/assets/images/person03.jpg",
           na: "哈利波特",
         },
         {
           src: "./src/assets/images/person04.jpg",
           na: "八佰",
         },
         
         
       ],
       listhot: [
         {
           con: "1. 苍井优治愈系佳作《漫长的告别》8月28日上映，念念不忘的爱",
         },
         {
           con: "2. 追剧追出“狼人杀”的感觉 《非常目击》曝新预告开启高能预警",
         },
         {
           con: "3. 《哈利·波特与魔法石》内地累计票房破2亿  影迷花式致敬经典",
         },
         {
           con: "4. 《阿里巴巴与神灯》曝光“挑战者”海报，新角色正式亮相",
         },
         {
           con: "5. 恐怖电影《北平会馆》正在热映 让惊悚治愈压力！",
         },
         {
           con: "6. 《邻里美好的一天》9月18日全国上映 北影节提前展映引期待",
         },
         {
           con: "7. 《漫长的告别》全国预售已开启 8月28日共赴治愈之旅",
         },
         {
           con: "8. IMAX发布主创特辑 “八佰壮士”揭秘幕后拍摄细节",
         },
         {
           con: "9. 长春电影节展映单元公布 百余部中外佳片齐聚春城",
         },
         {
           con: "10. 电影《怪物先生》曝片尾曲《怪物宣言》 无畏宣誓个性真我",
         },
       ],
            }
        }
    }
</script>
<style scoped>
     main{
     width: 100%;
     position: fixed;
     top:0;
     left:0;
     z-index: 10;
   }
    header{
        height: 50.5px;
        width: 100%;
        background: #f03d37;
        text-align: center;
        line-height: 50.5px;
        font-size: 18px;
        color: white;
        
    }
    header span{
      float: left;
      margin-left: 20px;
     }
    nav{
        height: 44px;
        width: 100%;
        border: 1px solid rgb(185, 184, 184);
        position: relative;
        border-right: none;
        border-left: none;
        background: white;
        
    }
    nav>p{
        font-size: 15px;
        font-weight: bold;
        color: #666666;
    }
    nav img{
      float: right;
      position: absolute;
      right: 16px;
      bottom: 12px;
    }
    nav #new{
     float: left;
     margin-left: 121px;
     margin-top: 13px;
     color: crimson;
 }
    
    nav #fur{
     float: left;
     margin-left: 52px;
     margin-top: 13px;
    }
 
 
    .banner{
        overflow: auto;
        height: 200vh;
        margin-top: 100px;
    }
    #best{
        height: 192px;
        width: 94%;
        overflow: hidden;
        
    }
    #best>div{
     overflow: auto;
     height: 150px;
    }
    #best>p{
     font-size: 14px;
     columns: #333333;
     margin: 6px 0 10px 17px;
    }
    #best>div>ul{
        width: 352%;
        margin: 0 auto;
     
       
   }
   #best>div>ul>li{
     width: 6%;
     height: 90px;
     margin: 0 1.1%;
     float: left;
     position: relative;
   }
 
   #best .con{
       position: absolute;
       color:#faaf00;
       font-size:12px;
       bottom:-23px;
       left:4px;
       font-weight: bold;
    }
    #best .na{
       font-size:13px;
       font-weight: bold;
    }
    
 
    #show{
        width: 92%;
        /* height: calc(100vh - 100px); */
        /* height: 1000px; */
        background: rgba(180, 176, 173, 0.26);
        margin:0 4%;
        overflow: hidden; 
     }
 
  #show > ul > li > img {
     float: left;
     margin-top: 10px;
  }
 
 #show > ul > li {
 
   height: 114px;
   background: white;
   border: 1px solid gainsboro;
   position: relative;
   overflow: hidden;
   position: relative;
  border-top:none;
  border-left: none;
  border-right: none;
 }
 #show > ul > li:nth-of-type(1) {
   margin-top: 10px;
 }
 #show > ul > li > div {
   width: 80%;
 }
 #show div > p {
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 1;
   overflow: hidden;
 }
 #show .na {
   font-size: 17px;
   color: #333333;
   font-weight: bold;
   margin-left: 13px;
   margin-top: 9px;
   float: left;
 }
 
 #show #type {
   margin-top: 20px;
   margin-left: 11px;
   height: 12px;
 }
 #show .score {
   margin-top: 5px;
 }
 #show .score > span {
   color: rgb(243, 241, 93);
   font-size: 13px;
   font-weight: bold;
 }
 #show .actor {
   line-height: 25px;
 }
 
 #show p {
   font-size: 13px;
   margin-left: 77px;
 }
 #show .buy {
   height: 27px;
   width: 47px;
   font-size: 13px;
   background: tomato;
   float: right;
   position: absolute;
   border-radius: 4px;
   bottom: 47px;
   right: 25px;
   color: white;
 }
 
 
 #person {
   height: 200px;
   width: 96%;
   overflow: hidden;
   /* background: rgba(180, 176, 173, 0.26); */
   /* background: white; */
   margin: 9px 2%;
 }
 
 #person > p {
   font-size: 14px;
   color: #333333;
   margin: 18px 12px;
 }
 #person > div {
   height: 164px;
   width: 96%;
   margin: 0 2%;
   overflow: hidden;
   overflow: auto;
 }
 #person > div > ul {
   width: 352%;
 }
 #person > div > ul > li {
   width: 6%;
   height: 138px;
   margin: 0 1.1%;
   float: left;
 }
 #person > div > ul > li:nth-of-type(1) {
   margin-left: 0;
 }
 #person > div .na {
   font-size: 14px;
   font-weight: bold;
 }
 
 #hot {
   width: 94%;
   margin: 1% 3%;
   height: 366px;
   /* background: rgb(209, 203, 209); */
 }
 #hot > p {
   font-size: 14px;
   margin:27px 0 17px 5px;
 }
 
 #hot > ul > li {
     margin: 13px 0;
     font-size: 14px;
     margin-left: 10px;
     color: #333333;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 1;
     overflow: hidden;
 }
</style>