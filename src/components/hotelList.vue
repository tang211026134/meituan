<template>
    <div id="take">
      <header>
        <input type="text" placeholder="位置/酒店/关键词"/>
        <span class="search">
                <img src="../assets/images/take_out_icon2.jpg" width="18px" alt />
          
        </span>
        <span class="enter">住{{this.$store.state.month1}}月{{this.$store.state.day1}}日</span>
        <span class="leave">离{{this.$store.state.month2}}月{{this.$store.state.day2}}日</span>
        <img src="../assets/images/icn-down.png" alt="" class="img">
      </header>
      <div class="banner">
        <div class="nav">
          <ul>
            <li>
              全城
              <span>
                <img class="se" src="../assets/images/take_out_icon5.jpg" width="18px"  alt />
              </span>
            </li>
            <li>价格/星级</li>
            <li>智能排序</li>
            <li>
              筛选
              <span>
                <img class="select" src="../assets/images/take_out_icon3.jpg" width="18px" alt />
              </span>
            </li>
          </ul>
        </div>
  
        <div class="show">
          <ul>
            <li v-for='(item,index) in list'>
                <span class="img1">
                  <img src="../assets/images/take01.jpg" width="80px" alt />
                </span>
                <div class="right">
                  <p class="shop">{{item.name}}</p>
                  <p class="sal">
                    <span>{{item.grade}}</span>
                    <span>{{item.sale}}消费</span>
                  </p>  
                  <span class="time">{{item.address}}</span>
                  <p class="sal">
                    <span>￥{{item.money}}元起</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{{item.time}}分钟前有人预定</span>
                  </p>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        list:[
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
          {
            name:'tata.他她艺宿',
            grade:4.9,
            sale:'700+',
            address:'广西大学/动物园|广西大学附近',
            money:88,
            time:2,
          },
        ]
      };
    },
  };
  </script>
  <style scoped>
  header {
    width: 100%;
    height: 50px;
    background: #f5f5f7;
    position: relative;
  }
  .enter{
      position: absolute;
      font-size: 10px;
      top: 12px;
      left: 21%;
  }
  .leave{
      position: absolute;
      font-size: 10px;
      
      top: 23px;
      left: 21%;
  }
  header .img{
    position: absolute;
    width: 8px;
    top: 23px;
    left: 35%;
  }
  .banner {
    width: 100%;
    height: calc(200vh - 130px);
    overflow: auto;
  }
  header input {
    height: 27px;
    width: 40%;
    float: left;
    padding-left: 30%;
    border: none;
    outline:none;
    font-size: 13.5px;
    margin-left: 20%;
    margin-top: 3%;
    /* background-color: #ebebe4; */
  }
  header p {
    position: absolute;
    color: rgb(187, 184, 184);
    font-size: 14px;
    right: 23%;
    bottom: 28%;

  }
  .search {
    position: absolute;
    bottom: 25%;
    left: 45%;
  }
  .search img{
      width: 15px;
  }
  .nav{
      overflow: hidden;
  }
  .nav > ul > li {
    width: 25%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #666;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    border-top: 1px solid rgb(202, 199, 199);
    border-bottom: 1px solid rgb(202, 199, 199);
    position: relative;
  }
  .se{
      transform: rotate(-180deg);
      position: absolute;
      top: 12px;
      right: 5px;
  }
  .select{
    position: absolute;
    top: 11px;
    right: 16px;
  }


  .show {
    width: 100%;
    margin: 0% 3%;
  }
  .show > ul > li {
        padding-bottom: 5px;
        width: 100%;
        overflow: hidden;
        border-bottom: 01px solid grey;
  }
  
  .img1 {
    float: left;
    margin-top: 2%;
  }
  .right {
    width: 75%;
    margin-left: 2%;
    margin-top: 2%;
    float: left;
  }
  .sals{
      transform: rotate(-180deg);
      margin-left: 46%;
  }
  .bargin {
    font-size: 12px;
    line-height: 26px;
  }
  
  #img2 {
    transform: rotate(-75deg);
  }
  .shop {
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }
  .time {
      font-size: 12px;
  }
  .sal span {
    font-size: 12px;
    line-height: 20px;
  }
  </style>