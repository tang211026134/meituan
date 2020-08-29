<template>
    <main>
        <div class="header">
            <router-link to="/">
                <img src="../assets/images/icn_back.png" alt="" class="icn_back"> 
            </router-link>
            <p class="center"> 选择分类</p> 
            <router-link to="/">
                <img src="../assets/images/icon_home.png" alt="" class="icon_home">
            </router-link>
        </div>
        <div class="all">全部分类</div>
        <div class="con">
            <ul>
                <li v-for='(item,index) in allCity'>
                    <p>{{item.title}}</p>
                    <ul>
                        <li v-for="(item,index) in item.list" @click='type(item)'>{{item}}</li>
                    </ul>
                </li>
            </ul>
            
            <!-- <p>{{hotTitle}}</p>
            <ul>
                <li v-for='(item,index) in hotList'>
                    {{item}}
                </li>
            </ul>
            <p>{{deliciousTitle}}</p>
            <ul>
                <li v-for='(item,index) in deliciousList'>
                    {{item}}
                </li>
            </ul>
            <p>{{hostTitle}}</p>
            <ul>
                <li v-for='(item,index) in hostList'>
                    {{item}}
                </li>
            </ul>
            <p>{{vacationTitle}}</p>
            <ul>
                <li v-for='(item,index) in vacationList'>
                    {{item}}
                </li>
            </ul>
            <p>{{entertainmentTitle}}</p>
            <ul>
                <li v-for='(item,index) in entertainmentList'>
                    {{item}}
                </li>
            </ul>
            <p>{{shoppingTitle}}</p>
            <ul>
                <li v-for='(item,index) in shoppingList'>
                    {{item}}
                </li>
            </ul>
            <p>{{shoppingTitle}}</p>
            <ul>
                <li v-for='(item,index) in shoppingList'>
                    {{item}}
                </li>
            </ul>
            <p>{{goTitle}}</p>
            <ul>
                <li v-for='(item,index) in goList'>
                    {{item}}
                </li>
            </ul>
            <p>{{partyTitle}}</p>
            <ul>
                <li v-for='(item,index) in partyList'>
                    {{item}}
                </li>
            </ul>
            <p>{{styleTitle}}</p>
            <ul>
                <li v-for='(item,index) in styleList'>
                    {{item}}
                </li>
            </ul>
            <p>{{beautifulTitle}}</p>
            <ul>
                <li v-for='(item,index) in beautifulList'>
                    {{item}}
                </li>
            </ul>
            <p>{{tourTitle}}</p>
            <ul>
                <li v-for='(item,index) in tourList'>
                    {{item}}
                </li>
            </ul>
            <p>{{lifeTitle}}</p>
            <ul>
                <li v-for='(item,index) in lifeList'>
                    {{item}}
                </li>
            </ul>
            <p>{{ParentingTitle}}</p>
            <ul>
                <li v-for='(item,index) in ParentingList'>
                    {{item}}
                </li>
            </ul>
            <p>{{petsTitle}}</p>
            <ul>
                <li v-for='(item,index) in petsList'>
                    {{item}}
                </li>
            </ul>
            <p>{{carTitle}}</p>
            <ul>
                <li v-for='(item,index) in carList'>
                    {{item}}
                </li>
            </ul>
            <p>{{photoTitle}}</p>
            <ul>
                <li v-for='(item,index) in photoList'>
                    {{item}}
                </li>
            </ul>
            <p>{{weddingTitle}}</p>
            <ul>
                <li v-for='(item,index) in weddingList'>
                    {{item}}
                </li>
            </ul>
            <p>{{careTitle}}</p>
            <ul>
                <li v-for='(item,index) in careList'>
                    {{item}}
                </li>
            </ul>
            <p>{{decorationTitle}}</p>
            <ul>
                <li v-for='(item,index) in decorationList'>
                    {{item}}
                </li>
            </ul>
            <p>{{exitTitle}}</p>
            <ul>
                <li v-for='(item,index) in exitList'>
                    {{item}}
                </li>
            </ul>
            <p>{{studyTitle}}</p>
            <ul>
                <li v-for='(item,index) in studyList'>
                    {{item}}
                </li>
            </ul>
            <p>{{drawTitle}}</p>
            <ul>
                <li v-for='(item,index) in drawList'>
                    {{item}}
                </li>
            </ul> -->
        </div>
    </main>

</template>
<style scoped>
     main{
        background: rgb(221, 214, 214);
    }
    .header{
        width: 100%;
        height: 53px;
        overflow: hidden;
        line-height: 53px;
        background-color: orange;
    }
    .icn_back{
        width: 13px;
        /* height: 14px; */
        margin-left: 20px;
        margin-top: 15px;
        float: left;
    }
    .header .center{
        width: 100px;
        /* background-color: grey; */
        margin-left: 110px;
        font-size: 18px;
        height: 53px;
        float: left;
    }
    .icon_home{
        width: 25px;
        /* height: 63px; */
        float: right;
        margin-right: 15px;
        margin-top: 16px;
    }
    .all{
        width: 95%;
        height: 40px;
        margin: 10px auto 0px;
        border-radius: 5px;
        background-color: white;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
    }
    .con{
        width: 95%;
        margin: 0 auto;
    }
    .con>ul ul{
        width: 100%;
        overflow: hidden;
        background-color: white;
        border-radius: 5px;
    }
    .con>ul ul li{
        width: 32.65%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        /* color: grey; */
        border: 1px solid grey;
        float: left;
    }
    .con p{
        color: grey;
        font-size: 16px;
        margin-top: 12px;
        margin-bottom: 8px;
    }
</style>
<script>
    export default{
        data(){
            return{
                allCity:[
                {
                    title:'热门',
                    list:['火锅','代金券','自助餐','甜点饮品','小吃快餐','粤菜','西餐','日韩料理',
                        '川湘菜','生日蛋糕','烧烤烤肉','香锅烤鱼'],},
                {
                    title:'美食',
                    list:['全部','代金券','甜点饮品','生日蛋糕','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请',
                              '烧烤烤肉','川湘菜','江浙菜','咖啡酒吧','小龙虾','云贵菜','东南亚菜','京菜鲁菜','素菜','海鲜','台湾nag/客家菜',
                              '蒙菜','汤/粥/炖菜','新疆菜','徽菜','西北菜','火锅','中式烧烤烤串','其他美食'],},
               { 
                    title:'酒店',
                    list:['全部','经济型酒店','高星酒店','豪华酒店','主题酒店','度假酒店/度假村','公寓型酒店','客栈','青年旅社','其他酒店',
                            '低星酒店','公寓民宿','家庭出行'],},
                {
                    title:'周边游',
                    list:['全部','温泉','经典','主题公园','水上乐园','动植物园','海洋馆','展览馆','游船','高空景观','滑雪','真人CS',
                            '漂流','出租车','其他游玩','农家乐'],},
                {
                    title:'休闲娱乐',
                    list:['全部','足疗/按摩','洗浴/汗蒸','KTV','酒吧','电玩/游戏厅','密室逃脱','运动健身','私人影院','DIY手工坊','网吧网咖',
                                    ,'棋牌室','轰趴馆','真人CS','VR','演出赛事','更多休闲娱乐','温泉'],},
                {
                    title:'购物',
                    list:['全部','食品','家居日用','女装','内衣','男装','美妆','家纺','鞋靴','箱包皮具','母婴玩具','数码电器','配置手表',
                         '家居家装','运动户外','汽车用品','本地购物'],},
                {
                    title:'独家出行',
                    list:['全部','境外游','火车票','景点门票'],},
                {
                    title:'宴会',
                    list:['全部','一站式婚礼会馆','酒店宴会厅','特色餐饮'],},
                {
                    title:'时尚购',
                    list:['全部','本地购物','服饰鞋包','配镜','鲜花','数码家电','超市/便利店','珠宝饰品'],},
                {
                    title:'丽人',
                    list:['全部','美容美体','美甲美睫','瑜伽舞蹈','瘦身纤体','韩式定妆','祛痘','纹身','整形','化妆品'],},
                {
                    title:'旅游',
                    list:['全部','跟团游','国内游','自由行','签证'],},
                {
                    title:'生活服务',
                    list:['全部','汽车服务','其他生活','证件照','配镜','搬家','体检/齿科','家政洗衣','鲜花','照片冲印','商场购物卡','充值服务',
                            '健康服务','开锁','培训课程','跑腿代购','服饰鞋包','母婴亲子','婚庆','电器数码'],},
                {
                    title:'运动健身',
                    list:['全部','游泳/水上运动','健身房/体操房','羽球','台球','武术','保龄球','篮球','滑冰','射箭','网球','骑马','足球',
                            '乓球','壁球','舞蹈','瑜伽','综合体育场馆其他运动'],},
                {
                    title:'母婴亲子',
                    list:['全部','儿童乐园','婴儿游泳','儿童摄影妇写镇','母婴护理','幼儿教育','宝派对','手工DIY','其他',
                                '儿童话剧科普','采摘','农家乐公园'],},
                {
                    title:'宠物',
                    list:['全部','宠物店','宠物医院'],},
                {
                    title:'汽车服务',
                    list:['全部','洗车','汽汽美容','维修保养','打蜡','镀晶镀膜','小保养','汽车贴膜','内饰清洁','租车','汽车改装','汽车配件',
                        '汽车陪练','4S','汽车用品','停车场','多服务'],},
                {
                    title:'摄影写真',
                    list:['全部','婚纱摄影','个性写真','耔摄影','其他摄影'],},
                {
                    title:'结婚',
                    list:['全部','婚纱礼服','西服定制','婚庆公司','婚戒首饰','婚纱摄影','个性写真','婚礼小礼品','婚车租赁','彩妆造型',
                            '司仪主持','婚礼跟拍','更多婚礼服务','婚宴','旅拍婚照','婚房装修'],},
                {
                    title:'医疗',
                    list:['全部','医院','齿科口腔','体检中心','药店'],},
                {
                    title:'家装',
                    list:['全部','装修设计','家用电器','家装卖场','装修建材','家具家居'],},
                {
                    title:'出境游',
                    list:['全部','美食','当地玩乐','交通用车','自由行','Wi-Fi/电话卡'],},
                {
                    title:'学习培训',
                    list:['全部','外语培训','音乐培训','术培训驾校','教育院校','职业技术','升学辅导留学','兴趣生活','多教育培训'],},
                {
                    title:'抽奖',
                    list:['全部','美梦成真','霸王餐','free游','夺宝'],}
                ]
            }

        },
        methods: {
            type(item){
                this.$store.state.type = item;
                this.$router.push('/entertainment')
            }
        }
    }
</script>