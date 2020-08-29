<template>
    <main>
        <div class="header">
            <img src="../assets/images/book_back.png" alt="" class="back" @click='back()'>
            <p @click='show()'>全部订单
                <img src="../assets/images/icn-down.png" alt="">
            </p>
            <div class="right">
                <span class="nav" @click='showNav()'></span> 
            </div> 
        </div>
        <div class="all" v-show="flag">
            <div class="main">
                <span @click='all()'>全部分类</span>
            </div>
        </div>
        <div class="navList" v-show="msg">
            <img src="../assets/images/navdown.png" alt="">
            <ul>
                <li>
                    <router-link to="/">
                        <img src="../assets/images/icon_home.png" alt="">
                         首页
                    </router-link>
                </li>
                    
                <li>
                    <router-link to="/personal">
                    <img src="../assets/images/icn_mine.png" alt="">
                    我的
                </router-link>
                </li>
                <li>
                    <img src="../assets/images/icn_search_2.png" alt="">
                    搜索
                </li>
            </ul>
        </div>
        <div>
            <ul class="wrap">
                <li v-for='(item,index) in list'  @click='change(item,index)' :class='{current:num==index}'>
                    {{item.con}}
                </li>
            </ul>
        </div>
        <div class="con">
            <ul v-show='num==0'>
                <li v-for='(item,index) in allList'>
                    <b>
                        <img :src="item.src" alt="">
                    </b>
                    <div class="txt">
                        <h4>{{item.name}}</h4>
                        <p>下单时间：
                            <span>{{item.time}}</span>
                        </p>
                        <p>总价：￥{{item.money}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.status}}</p>
                        <span v-if='item.btn' @click='allItiem(index,item)'>{{item.btn}}</span>
                    </div>
                </li>
            </ul>
            <ul v-show='num==1'>
                <li v-for='(item,index) in no_PayList'>
                    <b>
                        <img :src="item.src" alt="">
                    </b>
                    <div class="txt">
                        <h4>{{item.name}}</h4>
                        <p>下单时间：
                            <span>{{item.time}}</span>
                        </p>
                        <p>总价：￥{{item.money}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.status}}</p>
                        <span v-if='item.btn' @click='pay(index,item)'>{{item.btn}}</span>
                    </div>
                </li>
            </ul>
            <ul v-show='num==2'>
                <li v-for='(item,index) in no_UseList'>
                    <b>
                        <img :src="item.src" alt="">
                    </b>
                    <div class="txt">
                        <h4>{{item.name}}</h4>
                        <p>下单时间：
                            <span>{{item.time}}</span>
                        </p>
                        <p>总价：￥{{item.money}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.status}}</p>
                        <span v-if='item.btn'>{{item.btn}}</span>
                    </div>
                </li>
            </ul>
            <ul v-show='num==3'>
                <li v-for='(item,index) in no_CommentList'>
                    <b>
                        <img :src="item.src" alt="">
                    </b>
                    <div class="txt">
                        <h4>{{item.name}}</h4>
                        <p>下单时间：
                            <span>{{item.time}}</span>
                        </p>
                        <p>总价：￥{{item.money}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.status}}</p>
                        <span v-if='item.btn' @click='comment(index,item)'>{{item.btn}}</span>
                    </div>
                </li>
            </ul>
            <ul v-show='num==4'>
                <li v-for='(item,index) in backList'>
                    <b>
                        <img :src="item.src" alt="">
                    </b>
                    <div class="txt">
                        <h4>{{item.name}}</h4>
                        <p>下单时间：
                            <span>{{item.time}}</span>
                        </p>
                        <p>总价：￥{{item.money}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.status}}</p>
                        <span v-if='item.btn' @click='Toast()'>{{item.btn}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <section v-show='mask'>
            <div class="xing">
                <img src="../assets/images/com_star.png" alt=""  @click="changeComment('1')">
                <img src="../assets/images/com_star.png" alt=""  @click="changeComment('2')">
                <img src="../assets/images/com_star.png" alt=""  @click="changeComment('3')">
                <img src="../assets/images/com_star.png" alt=""  @click="changeComment('4')">
                <img src="../assets/images/com_star.png" alt=""  @click="changeComment('5')">
            </div>
            <textarea name="" id="" cols="40" rows="8"></textarea>
            <mt-button size="large" @click.native="handleClick">发表评价</mt-button>
        </section>
    </main>
</template>
<style scoped>
    section{
        position: absolute;
        top: 0px;
        left:0px;
        width: 100%;
        height: 100vh;
        background-color: white;
    }
    section img{
        width: 40px;
    }
    section img:nth-of-type(1){
        margin-left: 20px;
    }
    textarea{
        margin-left: 25px;
    }
    main{
        background-color: rgb(235, 232, 232);
        position: relative;
    }
    .header{
        width: 100%;
        height: 55px;
        background-color:orange;
    }
    .back{
        float: left;
        width: 11px;
        height: 20px;
        margin-top: 17px;
        margin-left: 15px;
    }
    .header p{
        width: 35%;
        height: 55px;
        line-height: 55px;
        /* background-color: tomato; */
        /* color: white; */
        text-align: center;
        font-size: 18px;
        float: right;
        margin-right: 33%;
    }
    .header p img{
        width: 14px;
    }

    .header .right{
        width: 9%;
        height: 30px;
        float: right;
        margin-top: 10px;
        margin-right:-250px ;
        /* background-color: red; */
    }
    .nav{
        display: inline-block;
        width: 28px;
        height: 30px; 
        /* margin-left: 45px; */
        margin-top: 4px;
        background:url('../assets/images/book_fav.png') no-repeat;
        background-size: 24px;
    }
   .header b{
       display: inline-block;
       /* text-align: center; */
       margin-top: 35px;
       /* margin-left: 6px; */
       color: white;
   }
   .wrap{
       width: 100%;
       height: 40px;
       background-color: white;

   }
   .wrap>li{
       float: left;
       height: 30.3px;
       margin: 2% 3.3%;
   }
   .current{
    border-bottom: 2px solid orange;
   }
   .con{
       width: 100%;
       /* height: 300px; */
       margin-top: 10px;
       /* background-color: cadetblue; */
   }
   .con li{
       width: 100%;
       height: 110px;
       background-color: white;
       border-bottom: 1px solid grey;
   }
   .con b img{
       width: 40px;
       margin-top: 15px;
       margin-left: 10px;
       float: left;
   }
   .con .txt{
       /* background-color: tomato; */
       width: 60%;
       height: 70px;
       margin-top: 15px;
       margin-left: 10px;
       float: left;
   }
   .con .txt h4{
       margin-bottom: 7px;
   }
   .con .txt p{
       color: grey;
       font-size: 13px;
       margin-top: 2px;
   }
   .con .right{
       width: 20%;
       height: 80px;
       /* background-color: violet; */
       margin-top: 15px;
       margin-right: 10px;
       float: right;
   }
   .con .right p{
       float: right;
        color: grey;
        font-size: 13.5px;
   }
   .con .right span{
       display: inline-block;
       margin-top: 30px;
       float: right;
       font-size: 13px;
       /* background-color: teal; */
       border-radius: 7px;
       border: 1px solid grey;
       width: 70%;
       height: 26px;
       line-height: 26px;
       text-align: center;
   }
   .all{
       width: 100%;
       height: calc(100vh - 55px);
       background-color: rgba(0, 0, 0,0.2);
       position: absolute;
       top: 55px;
       left: 0px;
   }
   .all .main{
       background-color: white;
       width: 100%;
       height: 120px;
   }
   .all .main span{
       display: inline-block;
       font-size: 14px;
       color: grey;
       width: 20%;
       height: 30px;
       border-radius: 2px;
       margin-top: 25px;
       margin-left: 10px;
       text-align: center;
       line-height: 30px;
       border: 1px solid grey;
   }
   .navList{
       width: 100%;
       height: calc(100vh - 55px);
       background-color: rgba(0, 0, 0,0.03);
       position: absolute;
       top: 38px;
       right: 0px;
   }
   a:-webkit-any-link {
    color:#000000;
    cursor: pointer;
    text-decoration: none;
}
   .navList ul{
       width: 28%;
       height: 130px;
       margin-top: -4px;
       background-color: rgb(253, 253, 254);
       border-radius: 5px;
       float: right;
   }
   .navList li{
       /* text-align: center; */
       height: 43.33px;
       line-height: 43.33px;
       font-size: 14px;
       
   }
   .navList li img{
       margin-top: 8px;
       margin-left: 25px;
       margin-right: 5px;
       float: left;
       width: 25px;
   }
   .navList>img{
       width: 20px;
       margin-left: 90%;
   }
</style>
<script>
    export default{
        data(){
            return{
                flag:false,
                msg:false,
                mask:false,
                num:0,
                sh:'全部',
                list:[
                    {
                        con:'全部'
                    },
                    {
                        con:'待付款'
                    },
                    {
                        con:'待使用'
                    },
                    {
                        con:'待评价'
                    },
                    {
                        con:'退款/售后'
                    }
                ],
                allList:[
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待评价',
                        btn:'评价'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'订单已完成',
                        // btn:'评价'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待付款',
                        btn:'付款'
                    }
                ],
                no_PayList:[
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待付款',
                        btn:'付款'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待付款',
                        btn:'付款'
                    }
                ],
                no_UseList:[
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待使用'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待使用'
                    }
                ],
                no_CommentList:[
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待评价',
                        btn:'评价'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待评价',
                        btn:'评价'
                    }
                ],
                backList:[
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待处理',
                        btn:'催进度'
                    },
                    {
                        src:'./src/assets/images/deal_old.jpg',
                        name:'老沙县1',
                        time:'2020-08-21 10:52',
                        money:'20.5',
                        status:'待处理',
                        btn:'催进度'
                    }
                ],
            }
        },
        methods: {
                change(a,b){
                    this.num=b;
        
        },
    back(){
             this.$router.go(-1);
        },
        show(){
            this.flag=!this.flag;
        },
        all(){
            this.flag=false;
            this.num=0;
        },
        showNav(){
            this.msg=!this.msg;
        },
        pay(index,item){
            this.no_PayList.splice(index,1);
            this.no_UseList.push({
                src:item.src,
                name:item.name,
                time:item.time,
                money:item.money,
                status:'待使用'
            })

        },
        comment(index,item){
            this.mask = true;
            this.allList.push({
                src: item.src,
                name:item.name,
                time:item.time,
                money:item.money,
                status:'订单已完成',
            })
            this.no_CommentList.splice(index,1)
            
        },
        changeComment(t) {
            for (let i = 0; i < t; i++) {
            $('.xing img').eq(i).attr("src", "./src/assets/images/take_outicon4.png");
            }
        },
        Toast(){
            let instance = this.$toast('已为您催促客服，请耐心等待')
            setTimeout(() => {
            instance.close();
            }, 2000);
        },
        handleClick(){
            this.mask = false;
        },
        allItiem(index,item){
            if(item.btn=='付款'){
                this.$toast('请输入指纹')
                setTimeout(() => {
                    this.$toast('支付成功')
                }, 2000);
                this.allList[index].status='订单已完成';
                this.no_UseList.push({
                src:item.src,
                name:item.name,
                time:item.time,
                money:item.money,
                status:'待使用'})
                this.no_CommentList.push({
                src:item.src,
                name:item.name,
                time:item.time,
                money:item.money,
                status:'待评价',
                btn:'评价'})
            }else if(item.btn=='评价'){
                this.mask = true;
                this.allList[index].status='订单已完成';
                this.allList[index].btn='';
            }else{
                this.$toast('已为您催促客服，请耐心等待')
            }
        }
    }
}

</script>