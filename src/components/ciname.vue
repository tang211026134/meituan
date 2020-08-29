<template class="ciname">
    
   <main>
       <header>
           <div class="left">
               <img src="../assets/images/ciname.jpg" height="35px" width="35px" alt="">
            </div>
            <div class="center">
                <span>猫眼</span>
                <p>在线选座，热门影讯，爱上看电影</p>
            </div>
           <div class="right">
               <span>打开APP</span>
           </div>
       </header>

       <div class="title">
           <img class="t_left" @click="back()" src="../assets/images/search_icon.png" width="20px" height="20px" alt="">
           <img class="t_right" src="../assets//images/ciname_icon.jpg" width="20px" height="20px" alt="">
           <span>猫眼电影</span>
       </div>

       <mt-navbar v-model="selected"> 
        <mt-tab-item id="1">预告片</mt-tab-item>
        <mt-tab-item id="2">说电影</mt-tab-item>
        <mt-tab-item id="3">追剧</mt-tab-item>
        <mt-tab-item id="4">追星</mt-tab-item>
      </mt-navbar>
      
  
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div class="mp4" v-for="(item,index) in listY">
                <mt-cell>
                    <video :src="item.src" controls  width="350px" height="200px"></video>
                    <div class="vdTitle">{{item.title}}</div>
                </mt-cell> 
                <div class="icon">
                    <span><img src="../assets/images/ciname_icon04.jpg" width="20px" height="20px" alt=""></span>
                    <span>预告片速递</span>
                    <img  class="forward" src="../assets/images/ciame_icon4.jpg" width="15px" height="15px" alt="">
                    <img class="comment"  src="../assets/images/ciame_icon3.jpg" width="15px" height="15px" alt="">
                    <img class="like" @click="change()" src="../assets/images/ciame_icon2.jpg" width="15px" height="15px" alt="">
                    <span class="forNum">{{item.forNum}}</span>
                    <span class="comNum">{{item.comNum}}</span> 
                    <span class="likeNum">{{item.likeNum}}</span>
                </div>
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
           <div v-for="(item,index) in listS">
                <mt-cell>
                    <video :src="item.src" controls  width="350px" height="200px"></video>
                    <div class="vdTitle">{{item.title}}</div>
                </mt-cell> 
                <div class="icon">
                    <span><img src="../assets/images/ciname_icon04.jpg" width="20px" height="20px" alt=""></span>
                    <span>预告片速递</span>
                    <img class="forward"  src="../assets/images/ciame_icon4.jpg" width="15px" height="15px" alt="">
                    <img class="comment"  src="../assets/images/ciame_icon3.jpg" width="15px" height="15px" alt="">
                    <img class="like" src="../assets/images/ciame_icon2.jpg" width="15px" height="15px" alt="">
                    <span class="forNum">{{item.forNum}}</span>
                    <span class="comNum">{{item.comNum}}</span>
                    <span class="likeNum">{{item.likeNum}}</span>
                </div>
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
            <div v-for="(item,index) in listTv">
                <mt-cell>
                    <video :src="item.src" controls width="350px" height="200px"></video>
                    <div class="vdTitle">{{item.title}}</div>
                </mt-cell> 
                <div class="icon">
                    <span><img src="../assets/images/ciname_icon04.jpg" width="20px" height="20px" alt=""></span>
                    <span>预告片速递</span>
                    <img class="forward"  src="../assets/images/ciame_icon4.jpg" width="15px" height="15px" alt="">
                    <img class="comment"  src="../assets/images/ciame_icon3.jpg" width="15px" height="15px" alt="">
                    <img class="like" src="../assets/images/ciame_icon2.jpg" width="15px" height="15px" alt="">
                    <span class="forNum">{{item.forNum}}</span>
                    <span class="comNum">{{item.comNum}}</span>
                    <span class="likeNum">{{item.likeNum}}</span>
                </div>
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="4">
            <div v-for="(item,index) in listSa">
                <mt-cell>
                    <video :src="item.src" controls width="350px" height="200px"></video>
                    <div class="vdTitle">{{item.title}}</div>
                </mt-cell> 
                <div class="icon">
                    <span><img src="../assets/images/ciname_icon04.jpg" width="20px" height="20px" alt=""></span>
                    <span>预告片速递</span>
                    <img class="forward"  src="../assets/images/ciame_icon4.jpg" width="15px" height="15px" alt="">
                    <img class="comment"  src="../assets/images/ciame_icon3.jpg" width="15px" height="15px" alt="">
                    <img class="like" src="../assets/images/ciame_icon2.jpg" width="15px" height="15px" alt="">
                    <span class="forNum">{{item.forNum}}</span>
                    <span class="comNum">{{item.comNum}}</span>
                    <span class="likeNum">{{item.likeNum}}</span>
                </div>
            </div>
          </mt-tab-container-item>

      </mt-tab-container>

   </main>
</template>
<script>
    export default{
     data(){
         return{
             selected:"1",
           
             listY:[
                 {
                     src:'./src/assets/media/m_yg001.mp4',
                     title:'《温暖的抱抱》定档12月31日上映，常远、沈腾在线为“心灵疗养院”打广告',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                     src:'./src/assets/media/m_yg002.mp4',
                     title:'电影《我在时间尽头等你》林格邱倩番外篇 李鸿其李一桐甜蜜云约会',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                     src:'./src/assets/media/m_yg004.mp4',
                     title:'《魔发精灵2》音浪滚滚， 劲歌热舞点燃快乐嗨不停',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                     src:'./src/assets/media/m_yg004.mp4',
                     title:'《魔发精灵2》音浪滚滚， 劲歌热舞点燃快乐嗨不停',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
             ],
             listS:[
                 {
                    src:'./src/assets/media/m_say01.mp4',
                    title:'《八佰》：郑恺的出场最让人心头一颤，国人皆如此倭寇何敢！',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_say02.mp4',
                    title:'独眼女记者的传奇一生，就连卡扎菲都要给她面子，真实事件    改编！',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_say03.mp4',
                    title:'《八佰》:共情不煽情，不完美但仍是迄今最好的国产战争片!',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_say04.mp4',
                    title:'七分钟告诉你为什么《别告诉她》是一部高级的视觉电影',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
             ],
             listTv:[
                 {
                    src:'./src/assets/media/m_tv01.mp4',
                    title:'《天赐》预告片：国产首部纪实鸟类故事片',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_tv03.mp4',
                    title:'Netflix动画《侏罗纪世界：白垩纪营地》预告',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_tv04.mp4',
                    title:'再次出发！环球影业发布特别视频邀你大银幕再相见！',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_tv05.mp4',
                    title:'本周漫威最新消息，《洛基》提前开播，《猎鹰冬兵》新片段曝光',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
             ],
             listSa:[
                 {
                    src:'./src/assets/media/m_sa01.mp4',
                    title:'《红尘客栈》情人节快乐，功夫熊猫宝娇',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_sa02.mp4',
                    title:'Netflix联手周杰伦？真人秀《周游记》定档预告',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_sa03.mp4',
                    title:'李现曾经预测《银翼杀手2049》拿下奥斯卡最佳摄影，不愧是资深电影博主',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                    src:'./src/assets/media/m_sa04.mp4',
                    title:'张含韵《乘风破浪的姐姐》张含韵表演，依旧是小公主，越来越漂亮了！',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
             ],
             listT:[
                 {
                     src:'./src/assets/media/xioaxin.mp4',
                     forNum:'12',
                     comNum:'25',
                     likeNum:'100',
                 },
                 {
                     src:'./src/assets/media/music.mp4',
                     forNum:'25',
                     comNum:'35',
                     likeNum:'47',
                 },
                 {
                     src:'./src/assets/media/xioaxin.mp4',
                     forNum:'25',
                     comNum:'36',
                     likeNum:'78',
                 },
                 {
                     src:'./src/assets/media/music.mp4',
                     forNum:'7',
                     comNum:'',
                     likeNum:'5',
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
    header{
      width: 92%;
      margin-top:4%;
      margin-left: 4%;
      margin-right: 4%;
      height: 48px;
    }
    .left{
        float: left;
        width:12%;
    }
    .center{
        float: left;
        width: 60%;
        line-height: 21px;
    }
    .center>p{
        font-size: 12px;
    }
    .right{
        float: right;
        width:28%;
    }
    .right>span{
        height: 28px;
        background: red;
        width: 65px;
        display: block;
        color: white;
        border-radius: 3px;
        text-align: center;
        line-height: 28px;
    }

    .title{
        width:92%;
        background:#e54847 ;
        text-align: center;
        height: 25px;
        line-height: 25px;
        padding: 12px;
    }
    .t_left{
        float: left;
       margin-top:3px;
    }
    .t_right{
        float: right;
    }
    .title>span{
        color:white;
        font-size: 18px;
    }
    .icon{
        
        width: 92%;
        margin:0 4%;
        margin-top:15px;
        position: relative;
    }
    .comment{
        float: right;
        margin-left:25px;
        margin-right: 28px;
    }
    .like{
        float: right;
    }
    .forward{
        float: right;
        margin-right: 23px;
    }
    .likeNum{
        position: absolute;
        bottom: 13px;
        right:85px;
        font-size: 12px;
    }
    .forNum{
        position: absolute;
        bottom: 13px;
        right:44px;
        font-size: 12px;
    }
    .comNum{
        position: absolute;
        bottom: 13px;
        right:0px;
        font-size: 12px;
    }
    .mp4{
        position: relative;
        width:92%;
        margin:3% 4%;
    }
    .vdTitle{
        font-family: PingFangSC-Medium,serif;
        position: absolute;
        top: 5px;
        left:16px;
        color:white;
        font-size: 16px;
        line-height: 26px;
    }
</style>