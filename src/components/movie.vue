<template>
    <div id="movie">
        
      
     <component :is="msg"></component>
     <footer>
          <ul>  
           <li v-for="(item,index) in listnav" @click="change(item,index)">
             <router-link :to="item.path">
             <img :src="item.src1" width="30px" height="30px" class="pic" alt />
             <img :src="item.src2" width="30px" height="30px" class="active" alt />
             <p class="cont">{{item.cont}}</p>
            </router-link>
           </li>
         </ul>
       </footer>
      
    </div>
 </template>
 
 <script>
   import movies from './movies.vue'
   import mymovie from './mymovie.vue'
  //  import ciname from './ciname.vue'
      export default{
        methods:{
          change(a,b){
            this.msg = a.id;
           
          }
        },
        components: {
          'v-movies':movies,
          'v-mymovie':mymovie,
          // 'v-mymovie':cinema
        },
          data(){
              return{
                  msg:'v-movies',
       listnav:[
         {
        
           src1:'./src/assets/images/movie_nav02.jpg',
           src2:'./src/assets/images/movie_nav01.jpg',
           cont:'电影',
           path:'/movie',
           id:'v-movies'

         },
         {
           src1:'./src/assets/images/movie_nav04.jpg',
           src2:'./src/assets/images/movie_nav03.jpg',
           cont:'影院',
           path:'/ciname',
           id:'v-movies'

         },
         {
           src1:'./src/assets/images/movie_nav05.jpg',
           src2:'./src/assets/images/movie_nav06.jpg',
           cont:'我的',
           path:'/mymovie',
           id:'v-mymovie'

         },
         
       ]
              }
          },

         

      }
 </script>
 <style scoped>
  
   
   .router-link-active .cont{
     color:red
   }
   .pic{
     display:inline-block;

   }
   .active{
     display: none;
   }
   .router-link-active .pic{
     display:none;
   }
  .router-link-active .active{
    display:inline-block;
  }
  
 
 
 footer {
   height: 50px;
   width: 100%;
   
   background: white;
   position:fixed;
   bottom:0;
   left: 0;
   border: 1px solid rgb(199, 190, 190);
 }
 footer > ul > li {
   float: left;
   width: 33.3%;
   text-align:center;
 }
 
 a:-webkit-any-link {
    color:#999999;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
}
 </style>