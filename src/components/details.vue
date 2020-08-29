<template>
    <main>
        <div class="header">
            <img src="../assets/images/details_back.png" alt="" class="back" @click='back()'>
            <p>团购详情</p>
            <div class="right">
                <span :class="{fav:true,fav_click:flag}" @click='fav()'>  </span>
                <span class="nav" @click='nav()'></span>
            </div> 
            <!-- <span class="txt">收藏</span> 
            <span class="txt">导航</span>  -->
            <span :class="{txt:true}" ref="b" >收藏</span>
            <span class="txt1">导航</span>
        </div>
        <!-- <div v-show='msg'></div> -->
        
            <ul class="navList" v-show='msg'>
                <li>
                    <router-link to="/">
                        <span class="home"></span>
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/personal">
                        <span class="mine"></span>
                        我的
                    </router-link>
                </li>
             </ul>
        <img src="../assets/images/file.png" alt="" class="file">
        <section v-for='(item,index) in list'>
        <div class="content">
            <img :src="item.src" alt="">
            <p class="top">{{item.con}}</p>
            <p class="bottom">冰魔栗1份，免费提供WiFi</p>
        </div>
        <div class="ne">
            <div class="money">
                <span class="left">{{item.c_money}}</span>
                <span class="y">元</span>
                <span class='grey'>门市价：{{item.o_money}}元</span>
                <p class="buy">立即抢购</p>
            </div>
            <div class="se">
                <span></span>
                <p>七夕甄选，畅享美食美刻</p> 
            </div>
            <div class="se">
                <span></span>
                <p>立减1.1元，每单限购一次</p> 
            </div>
            <div class="bottom">
                <ul>
                    <li>
                        <span class="tui"></span>
                        <b>支持随时退款</b>
                    </li>
                    <li>
                        <span class="back"></span>
                        <b> 支持过期退款</b>
                    </li>
                    <li>
                        <span class="sale"></span>
                         <b>已售{{item.saleCount}}</b> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="comment">
            <div class="top">
                <span>
                    <img src="../assets/images/star.png" alt="">
                    <img src="../assets/images/star.png" alt="">
                    <img src="../assets/images/star.png" alt="">
                    <img src="../assets/images/star.png" alt="">
                    <img src="../assets/images/star.png" alt="">
                    <span>4.7</span>
                </span>
                <b>{{item.commentCount}}人评价></b>
            </div>
            <ul>
                <li>回头客{{item.backCount}}</li>
                <li>不用排队{{item.no_line}}</li>
                <li>上菜快{{item.takeQiu}}</li>
                <li>现做现卖{{item.ontime}}1</li>
                <li>到店自提41</li>
                <li>店内消毒33</li>
                <li>停车方便12</li>
                <li>朋友聚餐6</li>
                <li>下午茶5</li>
                <li>深夜食堂4</li>
            </ul>
        </div>
        <div class="msg">
            <div class="top">
                <p>商家信息</p>
            </div>
            <div class="center">
                <b>{{item.shopName}}</b>
                <p>{{item.address}}</p>
                <span class="span"></span>
                <span class="txt">离我最近</span>
                <span class="call">
                    <b></b>
                </span>
            </div>
            <div class="bottom">
                <p>查看全部66加适用分店
                    <span>></span>
                </p>
            </div>
            </div>
            <div class="details">
                <div class="top">
                    <p>套餐</p>
                </div>
                <div class="bar">主食</div>
                    <div class="top">
                    <ul>
                        <li>大勺肉酱酸辣粉</li>
                        <li>1份</li>
                        <li>9元</li>
                    </ul>
                </div>
                <div class="bar"></div>
                <div class="top">
                    <p>图文详情<span>></span></p> 
                    
                </div>  
            </div>
        <div class="buyMsg">
            <p class="top">购买须知</p>
            <p class="title">有效期</p>
            <p class="con">购买后15天有效</p>
            <p class="title">不可用日期</p>
            <p class="con">粒上皇（延长中路店）：{{item.canNotUseDate}}</p>
            <p class="title">使用时间</p>
            <p class="con">{{item.useTime}}</p>
            <p class="title">使用规则</p>
            <p class="con1">
                <ul>
                    <li class="li">每人每天最多购买1张美团券
                        </li>
                    <li>店内无包间
                        </li>
                    <li>仅限餐前外带，可以打包，打包费详情请咨询商家
                        </li>
                    <li>备注：
                        </li>
                    <li>1.每人每次只能兑换5张
                        </li>
                    <li>团购用户不可同时享受商家其他优惠
                        </li>
                    <li>酒水饮料等问题，请致电商家咨询，以商家反馈为准
                        </li>
                    <li>如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商
                        </li>
                    <li>使用优惠券购买团单，有效期以优惠券规则为准
                        </li>
                    <li>商家提供免费WiFi
                        </li>
                    <li>不提供餐巾纸
                        </li>
                    <li>茶位费：无茶位
                        </li>
                    <li>发票问题请询问商家本单发票由商家提供，请在消费时向商家索取
                        </li>
                    <li>无需预约，消费高峰期可能需要等位</li>
                </ul>
            </p>
        </div>
    </section>
    </main>
</template>
<style scoped>
    main{
        background-color: rgb(235, 232, 232);
    }
    .header{
        width: 100%;
        height: 55px;
        background-color: teal;
    }
    .back{
        float: left;
        width: 30px;
        height: 37px;
        margin-top: 15px;
        margin-left: 10px;
    }
    .header p{
        width: 35%;
        height: 55px;
        line-height: 55px;
        /* background-color: tomato; */
        color: white;
        text-align: center;
        font-size: 20px;
        float: right;
        margin-right: 36%;
    }
    .header .right{
        width: 20%;
        height: 30px;
        float: right;
        margin-top: 6px;
        margin-right:-255px ;
    }
    .nav{
        display: inline-block;
        float: right;
        width: 30px;
        height: 28px; 
        margin-top: -3px;
        background:url('../assets/images/little.png') no-repeat -50px -50px;
        /* background-size: 100% 100%; */
        transform:scale(0.6);
    }
    .fav{
        display: inline-block;
        float: left;
        width: 33px;
        height: 35px; 
        margin-top: -3px;
        /* margin-right: 19px; */
        background:url('../assets/images/little.png') no-repeat -91px -7px;
        /* background-size: 100% 100%; */
        transform:scale(0.65);
   }
   .fav_click{
    background:url('../assets/images/little.png') no-repeat -48px -7px;
   }
   .header .txt{
       display: inline-block;
       text-align: center;
       width: 52px;
        color: white;
        font-size: 13px;
        margin-top: 29px;
        float: right;
        margin-right: -225px;

   }
   .header .txt1{
       display: inline-block;
        color: white;
        font-size: 13px;
        margin-top: 29px;
        float: right;
        margin-right: -253px;

   }

   a:-webkit-any-link {
    color:#000000;
    cursor: pointer;
    text-decoration: none;
}
   .navList{
       position: absolute;
       width: 28%;
       height: 80px;
       font-size: 13px;
       right: 0px;
       top: 56px;
       background-color: rgb(55, 236, 221);
   }
   .navList li{
       height: 39px;
       border-bottom: 0.5px solid grey;
       line-height: 39px;
       color: white;
       text-align: center;
   }
   .home{
    display: inline-block;
    width: 30px;
    height: 30px;
    /* margin-top: -1px; */
    position: absolute;
    left: 8px;
    top: 5px;
    background: url(/dist/little.png?0ba0b75…) no-repeat -41px -92px;
    transform: scale(0.55);
   }
   .mine{
    display: inline-block;
    width: 30px;
    height: 30px;
    /* margin-top: -1px; */
    position: absolute;
    left: 8px;
    top: 43px;
    background: url(/dist/little.png?0ba0b75…) no-repeat -78px -90px;
    transform: scale(0.55);
   }
   .file{
       width: 100%;
       margin-bottom: -4px;
   }
   .content{
       width: 100%;
       height: 200px;
       overflow: hidden;
       background-color:lime;
       position: relative;
   }
   .content img{
       width: 100%;
       /* border: 1px solid red; */
       /* transform: translate(-10px,-140px); */
       /* background-color: rgba(0, 0, 0, 0.3); */
   }
   .content .top{
       position: absolute;
       /* width: 50%;
       height: 400px;
       background-color: rgba(0, 0, 0, 0.15);
       border-radius: 15%; */
       top: 130px;
       font-size: 20px;
       font-weight: bold;
       /* margin-left: 40px; */
       padding-left: 20px;
       color: white;
   }
   .content .bottom{
       position: absolute;
       top: 155px;
       font-size: 17px;
       margin-left: 20px;
       color: white;
   }
   .money{
       width: 100%;
       height: 58px;
       background-color: white;
       /* background-color: tomato; */
   }
   .money .left{
       display: inline-block;
       font-size: 30px;
       margin-top: 9px;
       font-weight: bold;
       color: teal;
       margin-left: 20px;
   }
   .money .y{
       font-size: 14px;
       line-height: 58px;
       color: teal;
   }
   .money .grey{
        font-size: 14px;
       line-height: 58px;
       color: grey;
   }
   .money .buy{
       display: inline-block;
       font-size: 20px;
       line-height: 40px;
       text-align: center;
       border-radius: 4px;
       width: 130px;
       height: 40px;
       float: right;
       color: white;
       margin-top: 10px;
       margin-right: 10px;
       background-color: orange;
   }
   .se{
       height: 45px;
       width: 100%;
       background-color: white;
       /* background-color: teal; */
       /* border: 1px solid black; */
       border-left: none;
       border-right: none;
   }
 
   .se p{
       /* width: 600px; */
       height: 45px;
       /* padding-top: -20px; */
       /* margin-top: 7px; */
       /* margin-left: 30px; */
       font-size: 13.5px;
       line-height: 45px;
       color: grey;
   }
   .se>span{
       width: 17px;
       height: 18px;
       /* margin: 20px 10px; */
       /* margin-right: -40px; */
       margin-top: 16px;
       margin-right: 2px;
       margin-left: 4%;
       border-radius: 4px;
       float: left;
       display: inline-block;
       background-color: orange;
   }
   .ne .bottom{
       width: 100%;
       height: 95px;
       border-bottom: 1px solid grey;
       background-color: white;
       /* background-color: burlywood; */
   }
   .bottom li{
       width: 46%;
       margin-left: 3%;
       height: 40px;
       margin-top: 12px;
       font-size: 16px;
       color:#6BBD00;
       /* background-color: crimson; */
       float: left;
       position: relative;
   }
   .bottom li:nth-of-type(3){
       color: grey;
       margin-top: -9px;
   }
   .bottom .tui{
       
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: -1px;
    position: absolute;
    top: 5px;
    background: url(/dist/little.png?0ba0b75…) no-repeat -33px -124px;
    transform: scale(0.75);
   }
   .bottom .back{
    display: inline-block;
    width: 30px;
    height: 30px;
    top: -8px;
    left: -8px;
    position: absolute;
    background: url(/dist/little.png?0ba0b75…) no-repeat -66px -126px;
    transform: scale(0.75);
   }
    .bottom .sale{
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    position: absolute;
    background: url(/dist/little.png?0ba0b75…) no-repeat -98px -124px;
    transform: scale(0.75);
   }
   .ne .bottom b{
       font-weight: normal;
       line-height: 40px;
       background-color: white;
       margin-left: 30px;
   }
   .comment{
       width: 100%;
       height: 210px;
       margin-top: 10px;
       background-color: white;
   }
   .comment .top{
       width: 100%;
       /* width: 98%; */
       /* padding-left: 20px; */
       /* font-size: 15px; */
       color: darkorange;
       height: 48px;
       line-height: 48px;
       border-bottom: 1px solid grey;
   }
   .comment .top img{
       margin-top: 7px;
       transform: scale(0.45);
       margin-right: -20px;
   }
   /* .comment .top span{
       float: left;
       margin-left: 10px;
   } */
   .comment .top>span>span{
       display: inline-block;
       margin-left: 10px;
       margin-top: 10px;
       line-height: 48px;
   }
   .comment .top img:nth-of-type(1){
       margin-left: 10px;
   }
   .comment .top b{
       font-size: 20px;
       /* margin-right: 35px; */
       font-weight: normal;
       float: right;
       color: grey;
   }
   .comment ul{
       margin-top: 10px;
       margin-left: 10px;
       background-color: turquoise;
   }
   .comment li{
            overflow: hidden;
            float: left;
            height: 26px;
            margin: 5px 2.5px 10px 2.5px;
            padding: 2px 4px;
            line-height: 26px;
            border: 1px solid black;
            border-radius: 3px;
            font-size: 15px;
            /* background-color: darkorange; */
   }
   .comment li:nth-of-type(1),.comment li:nth-of-type(2),.comment li:nth-of-type(3),.comment li:nth-of-type(4),.comment li:nth-of-type(7){
       color: orange;
       border: 1px solid orange;
   }
   .msg{
       width: 100%;
       height: 188px;
       background-color: white;
       margin-top: 10px;
   }
   .msg .top{
       width: 100%;
       height: 45px;
       border-bottom: 1px solid grey;
   }
   .msg .top p {
       font-size: 17px;
       margin-left: 15px;
       line-height: 45px;
   }
   .msg .center{
       width: 100%;
       height: 100px;
       border-bottom: 1px solid grey;
       /* background-color: rgb(80, 255, 217); */
   }
   .msg .center b{
       display: inline-block;
       margin-top: 20px;
       margin-left: 15px;
       font-size: 17px;
   }
   .msg .center p{
       font-size: 15px;
       margin-left: 15px;
       margin-top: 5px;
       color: grey;
   }
   .msg .center .txt{
       display: inline-block;
       margin-top: 5px;
       margin-left: 45px;
       color: orange;
       font-size: 14.5px;
   }
   .msg .center .call{
       display: inline-block;
       float:right;
       width: 20%;
       height: 50px;
       margin-top: -40px;
       border-left: 1px solid grey;
   }
   .msg .center .call b{
       display: inline-block;
       width: 55px;
        height: 40px;
        margin-top: 4px;
        margin-left: 0px;
       background:url('../assets/images/little.png') no-repeat -75px -44px;
       transform: scale(0.5);
   }
   .msg .bottom{
       width: 100%;
       height: 40px;
       border-bottom: 1px solid grey;
       /* background-color: red; */
   }
   .msg .bottom p{
       margin-left: 15px;
       font-size: 16.5px;
       line-height: 40px;
       color: turquoise;
   }
   .msg .bottom span{
        display: inline-block;
        float: right;
        margin-right: 20px;
        font-size: 20px;
   }
   .details{
       width: 100%;
       height: 185px;
       background-color: white;
       margin-top: 10px;
   }
   .details p{
    padding-left: 15px;
   }
   .details .top{
       height: 40px;
       line-height: 40px;
       font-size: 17px;
       border-bottom: 1px solid grey;
   }
   .details .top li{
       /* width: 33.33%; */
       border-left: 1px solid grey;
       margin-right: 15%;
       float: left;
       /* margin-top: 10px; */
       padding-left: 10px;
   }
   .details .top li:nth-of-type(1){
    border-left: none;
   }
   .details .bar{
       width: 100%;
       height: 30px;
       line-height: 30px;
       text-align: center;
       border-bottom: 1px solid grey;
   }
   .buyMsg{
       margin-top: 10px;
       width: 100%;
       height: 600px;
       background-color: white;
   }
   .buyMsg .top{
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        padding-left: 15px;
        border-bottom: 1px solid grey;
        background-color: white;
   }
   .buyMsg .title{
       height: 30px;
       /* background-color: paleturquoise; */
       color: orange;
       padding-left: 15px;
   }
   .buyMsg .con{
       height: 30px;
       /* background-color: rgb(3, 236, 236); */
       padding-left: 20px;
   }
   .buyMsg .con1{
       /* background-color: rgb(3, 236, 236); */
       padding-left: 20px;
   }
   .con1 li{
       line-height: 25px;
       padding-left: 15px;
   }
   .con1 li::before{
       content:"";
       display: inline-block;
       margin-left: -11px;
       width: 5px;
       height: 5px;
       border-radius: 50%;
       margin-right: 5px;
       background-color: black;
   }
</style>
<script>
    export default{
        data(){
            return{
                flag:false,
                msg:false,
            list:[{}]
            }
        },
        mounted(){
            if(this.$route.params.sh=='又一间茶点轩'){
                this.list=[{
                        src:'./src/assets/images/banli.jpg',
                        con:'又一间茶点轩',
                        c_money:'11',
                        o_money:'22',
                        saleCount:'22222',
                        commentCount:'111111',
                        backCount:'222',
                        no_line:'333',
                        takeQiu:'44',
                        ontime:'55',
                        shopName:'又一间茶点轩',
                        address:'[9店通用]3-4人排骨套餐',
                        canNotUseDate:'2020.3.4',
                        useTime:'9:00-10:00'
                    }]
            }else if(this.$route.params.sh=='五谷渔粉') {
                this.list=[{
                        src:'./src/assets/images/yufen11.jpg',
                        con:'五谷渔粉',
                        c_money:10.8,
                        o_money:13,
                        saleCount:32310,
                        commentCount:1732,
                        backCount:229,
                        no_line:343,
                        takeQiu:160,
                        ontime:132,
                        shopName:'五谷渔粉（农院店）',
                        address:'西乡塘区明秀西路口106-16号',
                        canNotUseDate:'2020.9.29',
                        useTime:'9:00-10:00'
                    }]
            }else if(this.$route.params.sh=='鹿禾堂') {
                this.list=[{
                        src:'./src/assets/images/ning.jpg',
                        con:'鹿禾堂',
                        c_money:10.8,
                        o_money:13,
                        saleCount:32310,
                        commentCount:1732,
                        backCount:229,
                        no_line:343,
                        takeQiu:160,
                        ontime:132,
                        shopName:'鹿禾堂（农院店）',
                        address:'西乡塘区明秀西路口106-16号',
                        canNotUseDate:'2020.9.29',
                        useTime:'9:00-10:00'
                    }]
            }else{
                this.list=[{
                        src:'./src/assets/images/suan.jpg',
                        con:'酸奶牛',
                        c_money:10.8,
                        o_money:13,
                        saleCount:32310,
                        commentCount:1732,
                        backCount:229,
                        no_line:343,
                        takeQiu:160,
                        ontime:132,
                        shopName:'酸奶牛（农院店）',
                        address:'西乡塘区明秀西路口106-16号',
                        canNotUseDate:'2020.9.29',
                        useTime:'9:00-10:00'
                    }]
            }

        },
        methods:{
            fav(){
                this.flag = !this.flag;
                if(this.flag){
                    this.$refs.b.innerHTML= '取消收藏'
                }else{
                    this.$refs.b.innerHTML= '收藏'
                }
            },
            back(){
                this.$router.go(-1);
            },
            nav(){
                this.msg = !this.msg;
            }
        }
        
    }
</script>