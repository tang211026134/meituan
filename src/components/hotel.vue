<template>
  <div id="hotel">
      <div class="city" v-show='show'>
          <div class="header">
              <mt-search v-model="valueadd"></mt-search>
          </div>
          <div class="currentCity">
               <p class=title> 热门城市</p>
              <p class="posit">定位失败，请点击重试</p>
          </div>
          <div class="lastRequest">
            <p class=title>最近访问</p>
              <p class="lastCity">广州</p>
              <p class="lastCity">深圳</p>
              <p class="lastCity">上海</p>
          </div>
          <div class="hotCity">
            <p class=title>热门城市</p>
            <ul>
              <li v-for="(item,index) in listHot">{{item}}</li>
            </ul>

          </div>
          <div class="allCity">
                <mt-index-list>
                  <mt-index-section :index="item.title" v-for="(item,index) in cityArr">
                      <mt-cell :title="i" v-for="i in item.lists" @click.native="selectedCity(i)"></mt-cell>
                  </mt-index-section>
        </mt-index-list>
          </div>
      </div>
     <div class="show">
         <div class="img"><img src="../assets/images/hotel.jpg"  alt=""></div>
         <div class="tab">
              <div>
                  <ul :class="{header:true,header_right:flag}">
                      <li class="right" v-for='(item,index) in list' @click='change(item,index)' >
                        {{item}}
                      </li>
                    </ul>
              </div>
         
              <section class="con" v-show='flag'>
                  <ul>
                    <li @click='selectCity()'>
                      <span class="one">目的地</span>
                      <span class="two">{{currentCity}}</span>
                      <span class="three">></span>
                    </li>
                    <li >
                      <span class="one" @click="openPicker">时间</span>
                      <span class="two">{{month}}月{{day}}日</span> 
                        <mt-datetime-picker ref="picker" 
                              type="date" 
                              v-model="dataValue" 
                              confirmText='确定' 
                              cancelText = '取消' 
                              year-format = "{value} 年"
                              month-format = "{value} 月"
                              date-format = "{value} 日"
                              @confirm="handleConfirm"
                              :startDate="startDate">
                        </mt-datetime-picker>
                      <span class="week" @click="openPicker">星期{{week}}入住</span>
                      <span class="three" @click="openPicker">></span>
                    </li>
                    <li>
                      <span class="one">搜索</span>
                      <span class="find">位置/酒店/关键词</span>
                      <span class="three">></span>
                    </li>
                    <li>
                      <p>查找酒店</p>
                    </li>
                  </ul>
                </section>
                <section class="con" v-show='!flag'>
                  <ul>
                    <li @click='selectCity()'>
                      <span class="one">目的地</span>
                      <span class="two">{{currentCity}}</span>
                      <span class="three">></span>
                    </li>
                        <li id="enterDay">
                          <span class="one" @click="openPicker">时间</span>
                          <b class="enter">{{month1}}月{{day1}}日<span @click="openPicker1">星期{{week1}}入住</span></b>
                          <mt-datetime-picker ref="picker1" 
                                  type="date" 
                                  v-model="dataValue1" 
                                  confirmText='确定' 
                                  cancelText = '取消' 
                                  year-format = "{value} 年"
                                  month-format = "{value} 月"
                                  date-format = "{value} 日"
                                  @confirm="handleConfirm1"
                                  :startDate="startDate">
                            </mt-datetime-picker>
                        </li>
                        <li id="leaveDay">
                          <b class="leave">{{month2}}月{{day2}}日<span @click="openPicker2">星期{{week2}}离店&nbsp;&nbsp;&nbsp;&nbsp;{{count}}晚</span></b>
                          <mt-datetime-picker ref="picker2" 
                                  type="date" 
                                  v-model="dataValue2" 
                                  confirmText='确定' 
                                  cancelText = '取消' 
                                  year-format = "{value} 年"
                                  month-format = "{value} 月"
                                  date-format = "{value} 日"
                                  @confirm="handleConfirm2"
                                  :startDate="startDate">
                            </mt-datetime-picker>
                          <span class="three">></span>
                    </li>
                    <li>
                      <span class="one">搜索</span>
                      <span class="find">位置/酒店/关键词</span>
                      <span class="three">></span>
                    </li>
                    <li>
                      <p @click="back()">查找酒店</p>
                    </li>
                  </ul>
                </section>
         
         </div>
      </div>

      <div class="lr">
          <router-link to="/login">
            <button class="login">登录</button>
          </router-link>
          <router-link to="/register">
            <button class="regt">注册</button>
          </router-link>
        </div>

      <footer>
        <ul id="nav">
          <li><router-link to="/">首页  </router-link></li>
          <li>订单</li>
          <li>电脑版</li>
          <li>帮助</li>
        </ul>
        <div class="contact">
          友情链接:  
          <router-link to="/movie">猫眼电影</router-link>
        </div>
        <div class="bottom">
            <p>©2020 美团网 京ICP证070791号</p>
        </div>
      </footer> 
  </div>
</template>

<script>
  
  export default{
      data(){
          return{
            dataValue:'',
            startDate:new Date(),
            year:new Date().getFullYear(),
            day:new Date().getDate(),
            week:new Date().getDay(),
            month:new Date().getMonth()+1,
            dataValue1:'',
            year1:new Date().getFullYear(),
            day1:new Date().getDate(),
            week1:new Date().getDay(),
            time1:new Date().getTime(),
            month1:new Date().getMonth()+1,
            dataValue2:'',
            year2:new Date().getFullYear(),
            day2:new Date().getDate(),
            week2:new Date().getDay(),
            time2:new Date().getTime(),
            month2:new Date().getMonth()+1,
            count:1,
            currentCity:'广州',
            valueadd:'',
              flag:false,
              show:false,
              num:0,
              list:['全日房','钟点房'],
              listHot:['北京','上海','重庆','广州','杭州','南京'],
              cityArr:[
              {   
                title:"A",
                lists:[
                    "阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"
                    ]
            },
            {
                title:"B",
                lists:["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"
                    ]
            },
            {
                title:"C",
                lists:["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德", "郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"
                    ]
            },
            {
                title:"D",
                lists:["大连","东莞","大理","丹东","大庆","大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"
                    ]
            },
            {
                title:"E",
                lists:["鄂尔多斯","恩施","鄂州"]
            },
            {
                title:"F",
                lists:["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"
                    ]
                    
            },
            {
                title:"G",
                lists:["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"]
                    
            },
            {
                title:"H",
                lists:["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"
                    ]
            },
            {
                title:"J",
                lists:["济南","佳木斯","吉安","江门","焦作","嘉兴","嘉峪关","揭阳","吉林","金昌","晋城","景德镇","荆门","荆州","金华","济宁","晋中","锦州","九江",
                    "酒泉"
                            ]
                    
            },
            {
                title:"K",
                lists:["昆明","开封"]
          
            },
            {
                title:"L",
                lists:["兰州","拉萨","来宾","莱芜","廊坊","乐山","凉山","连云港","聊城","辽阳","辽源","丽江","临沧","临汾","临夏","临沂","林芝","丽水","六安","六盘水",
                    "柳州","陇南","龙岩","娄底","漯河","洛阳","泸州","吕梁"
                            ]
          
            },
            {
                title:"M",
                lists:["马鞍山","茂名","眉山","梅州","绵阳","牡丹江"]
                    
            },
            {
                title:"N",
                lists:["南京","南昌","南宁","宁波","南充","南平","南通","南阳","那曲","内江", "宁德","怒江"
                            ]
            },
            {
                title:"P",
                lists:["盘锦","攀枝花","平顶山","平凉","萍乡","莆田","濮阳"]
          
            },
            {
                title:"Q",
                lists:["青岛","黔东南","黔南","黔西南","庆阳","清远","秦皇岛","钦州","齐齐哈尔","泉州","曲靖","衢州"]
                    
            },
            {
                title:"R",
                lists:["日喀则","日照"]
            },
            {
                title:"S",
                lists:["上海","深圳","苏州","沈阳","石家庄","三门峡","三明","三亚","商洛","商丘","上饶","山南","汕头","汕尾","韶关","绍兴","邵阳","十堰","朔州","四平","绥化","遂宁","随州","宿迁","宿州"
                    ]
                    
            },
            {
                title:"T",
                lists:["天津","太原","泰安","泰州","台州","唐山","天水","铁岭","铜川","通化","通辽","铜陵","铜仁","台湾","W","武汉","乌鲁木齐","无锡","威海","潍坊","文山","温州","乌海","芜湖","乌兰察布","武威","梧州"
                    ]
            },
            {
                title:"X",
                lists:["厦门","西安","西宁","襄樊","湘潭","湘西","咸宁","咸阳","孝感","邢台","新乡","信阳","新余","忻州","西双版纳","宣城","许昌","徐州","香港","锡林郭勒","兴安"
                    ]
                    
            },
            {
                title:"Y",
                lists:["银川","雅安","延安","延边","盐城","阳江","阳泉","扬州","烟台","宜宾","宜昌","宜春","营口","益阳","永州","岳阳","榆林","运城","云浮","玉树","玉溪","玉林"
                    ]
                    
            },
            {
                title:"Z",
                lists:["杂多县","赞皇县","枣强县","枣阳市","枣庄","泽库县","增城市","曾都区","泽普县","泽州县","札达县","扎赉特旗","扎兰屯市","扎鲁特旗","扎囊县","张北县","张店区","章贡区","张家港","张家界","张家口","漳平市","漳浦县","章丘市","樟树市","张湾区","彰武县","漳县","张掖","漳州","长子县","湛河区","湛江","站前区","沾益县","诏安县","召陵区","昭平县","肇庆","昭通","赵县","昭阳区","招远市","肇源县","肇州县","柞水县","柘城县","浙江","镇安县","振安区","镇巴县","正安县","正定县","正定新区","正蓝旗","正宁县","蒸湘区","正镶白旗","正阳县","郑州","镇海区","镇江","浈江区","镇康县","镇赉县","镇平县","振兴区","镇雄县","镇原县","志丹县","治多县","芝罘区","枝江市","芷江侗族自治县","织金县","中方县","中江县","钟楼区","中牟县","中宁县","中山","中山区","钟山区","钟山县","中卫","钟祥市","中阳县","中原区","周村区","周口","周宁县","舟曲县","舟山","周至县","庄河市","诸城市","珠海","珠晖区","诸暨市","驻马店","准格尔旗","涿鹿县","卓尼","涿州市","卓资县","珠山区","竹山县","竹溪县","株洲","株洲县","淄博","子长县","淄川区","自贡","秭归县","紫金县","自流井区","资溪县","资兴市","资阳"
                    ]
            }
    
            ]
          }
      },
      methods: {
        back(){
        this.$router.replace('/hotelList')
      },
        handleConfirm(value){
        this.year = value.getFullYear();
        this.month = value.getMonth()+1;
        this.day = value.getDate();
        
        var temp = value.getDay();
        if(temp == 0){
          this.week = "日";
　　　　　　}else if(temp == 1){
  　　　　　　　　this.week = "一";
　　　　　　}else if(temp == 2){
  　　　　　　　　this.week = "二";
　　　　　　}else if(temp == 3){
  　　　　　　　　this.week = "三";
　　　　　　}else if(temp == 4){
  　　　　　　　　this.week = "四";
　　　　　　}else if(temp == 5){
  　　　　　　　　this.week = "五";
　　　　　　}else{
  　　　　　　　　this.week = "六";
　　　　　　}
        // state.$refs.picker.close();
      },
      handleConfirm1(value1){
        this.year1 = value1.getFullYear();
        this.month1 = value1.getMonth()+1;
        this.day1 = value1.getDate();
        this.time1 = value1.getTime();
        var temp1 = value1.getDay();
        if(temp1 == 0){
          this.week1 = "日";
　　　　　　}else if(temp1 == 1){
　　　　　　　　this.week1 = "一";
　　　　　　}else if(temp1 == 2){
　　　　　　　　this.week1 = "二";
　　　　　　}else if(temp1 == 3){
　　　　　　　　this.week1 = "三";
　　　　　　}else if(temp1 == 4){
　　　　　　　　this.week1 = "四";
　　　　　　}else if(temp1 == 5){
　　　　　　　　this.week1 = "五";
　　　　　　}else{
　　　　　　　　this.week1 = "六";
　　　　　　}
        this.$store.commit('cmonth1',this.month1)
        this.$store.commit('cday1',this.day1)
        return this.time1;
      },

      handleConfirm2(value2){
        // this.log(this.$store.state.dataValue2);
        this.year2 = value2.getFullYear();
        this.month2= value2.getMonth()+1;
        this.day2 = value2.getDate();
        this.time2 = value2.getTime();
        this.count = Math.ceil((this.time2-this.time1)/(1000 * 60 * 60 * 24));
        var temp2 = value2.getDay();
        if(temp2 == 0){
          this.week2 = "日";
　　　　　　}else if(temp2 == 1){
            this.week2 = "一";
　　　　　　}else if(temp2 == 2){
          this.week2 = "二";
　　　　　　}else if(temp2 == 3){
              this.week2 = "三";
　　　　　　}else if(temp2 == 4){
            this.week2 = "四";
　　　　　　}else if(temp2 == 5){
            this.week2 = "五";
　　　　　　}else{
            this.week2 = "六";
　　　　　　}
        this.$store.commit('cmonth2',this.month2)
        this.$store.commit('cday2',this.day2)
        
      },
          selectCity(){
              this.show = true;
          },
          change(a,b){
            this.num=b;
            if(b!=0){
                this.flag=true;
            }
            else{
                this.flag=false;
            }
          },
          openPicker() {
              this.$refs.picker.open();
    },
          openPicker1() {
              this.$refs.picker1.open();
    },
          openPicker2() {
              this.$refs.picker2.open();
    },
    selectedCity(i){
      this.currentCity = i;
      this.show = false
    }
 
      }
  }
</script>

<style scoped>

  #hotel{
      background:#f0efed;
      width: 100%;
      height: 100vh;
      position: relative;
  }


  .city{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  z-index: 90;
  background: white;
  }
  .title{
    margin-left:3%;
  }
  .currentCity{
  position: relative;
  top: -11px;
  background:#f7f7f7;
  font-size: 12px;
  
  }
  .posit{
    height: 30px;
    width:100%;
    background: white;
    font-size: 14px;
    padding: 0 2%;
    line-height: 30px;
  }
  .lastRequest{
    font-size: 12px;
    background:#f7f7f7;
    margin-top: -9px;
  }
  .lastCity{
    height: 30px;
    width:100%;
    background: white;
    padding:0 3%;
    line-height: 30px;
    font-size: 14px;
    }
  .hotCity{
    font-size: 12px;
    background:#f7f7f7;
  }
  .hotCity>ul{
    width: 100%;
    background: white;
    margin:0 4%;
  }
  .hotCity>ul>li{
    width: 29%;
    height: 20px;
    float: left;
    border:1px solid #f7f7f7;
    text-align: center;
    line-height: 20px;
    margin:2% 1%;
    font-size: 14px;
    position: relative;
  }
  .enter{
    font-weight: normal;
    font-size: 16px;
    display:inline-block;
    position: absolute;
    top: -12px;
    left: 50px;
    color: grey;

  }
  .enter span{
    font-size: 13px;
    display: inline-block;
    margin-left: 20px;
    color: grey;
  }
  .leave{
    font-weight: normal;
    font-size: 16px;
    display:inline-block;
    position: absolute;
    bottom: 0px;
    left: 50px;
    color: grey;
  }
  .leave span{
    font-size: 13px;
    display: inline-block;
    margin-left: 20px;
    color: grey;
  }
.show{
  width: 100%;
  height: 560px;
  position: relative;

}
.img{
  width: 100%;
  height: 202px;
  overflow: hidden;
}
img{
  width: 100%;

}

.tab{
width: 94%;
  height: 400px;
  margin: 0 3%;
  position:absolute;
  top: 138px;
}
 
  


.header{
  height: 63px;
  width: 101%;
  border: 1px solid red;
  border-left: none;
  border-right: none;
  border-top:none;
  position: relative;
 

}
.header>li{
  float: left;
  width: 49%;
  height: 63px;
  background:white;
  text-align-last: center;
  line-height: 62px;
  color: #333;
  border: 1px solid rgb(236, 226, 226);
  
  border-top:none;
  border-bottom: none;
}
.con{
  background: white;
}
.con>ul{
  overflow: hidden;
}
.con>ul>li{
  height: 64px;
  width: 94%;
  margin:0 3%;
  line-height: 56px;
  position: relative;
  
}
#enterDay{
  /* background-color: aquamarine; */
}
#leaveDay{
  height: 20px;
  
}
.one{
  font-size:16px;
  color:#999999;

}
.three{
  position:absolute;
  right: 12px;
  bottom:6px;
  color:#999999;
}
.two{
  font-size: 18px;
  color: #333333;
  margin-left: 12px;
}
.week{
  font-size: 12px;
  margin-left: 21px;
  color: #999999;
}
.find{
  font-size: 14px;
  color: #999999;
  margin-left: 42px;
}
.con>ul>li>p{
  height: 41px;
  width: 94%;
  margin:0 3%;
  
  background: #f9504c;
  border-color: #f9504c;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
   text-align: center;
  line-height: 41px;
}

.lr{
  width: 97.6%;
  height: 50px;
  margin-left: 10px;
  
}
.lr button{
  width: 65px;
  height: 35px;
  background-color:#f0efed;
  color: tomato;
  font-size: 15px;
  border: 1px solid  tomato;
}
footer ul{
 
  height: 20px;
  width: 100%;
}
footer ul li{
  margin-left: 9%;
  width: 15%;
  float: left;
  color:#0082E0;
  font-size: 14px;
}
.contact{
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  

}
a:-webkit-any-link {
     text-decoration: none;
     color:#0082E0;
 }

.bottom{
     width: 90%;
     height: 20px;

     border-top: 1px solid grey;
     text-align: center;
     margin: 20px auto;
 }
 .bottom p{
     width: 70%;
      background-color: #f0efed;
      margin: -13px auto;
      font-size: 14px;
      color:#999999
 }
 .header::after{
     content:'';
     position: absolute;
     bottom: 0;
     left: 55px;
     border-radius: 6px;
     height: 4px;
     width: 20%;
     background: #f9504c;
     transform: translateZ(0);
     transition: all 1s;
  }
  .header_right:after{
      left: 240px;
  }
</style>