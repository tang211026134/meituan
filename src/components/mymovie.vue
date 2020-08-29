<template>
  <div class="mymovie">
      <header>
          <span>猫眼电影</span>
      </header>

      <mt-navbar v-model="selected">
        <mt-tab-item id="1">账号登录</mt-tab-item>
        <mt-tab-item id="2">手机登录</mt-tab-item>
        
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-cell>
               <div class="num">
               <label for=""> <input type="text" placeholder="账户名/手机号/Email" style="border: none;outline:none"></label> 
               </div>
            </mt-cell> 
            <mt-cell>
                <div class="passw">
                    <label for=""> <input type="text" placeholder="请输入您的密码" style="border: none;outline:none"></label> 
                 </div>
                 
            </mt-cell>
            <mt-cell> 
                <div class="sign">
                    登录
                </div>
            </mt-cell> 
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell>
               <div class="num">
               
                <label for=""> <input type="text" placeholder="请输入您的手机号" style="border: none;outline:none"></label> 
               </div>
            </mt-cell> 
            <mt-cell>
                <div class="passw">
                    <label for=""> <input type="text" placeholder="请输入短信验证码" style="border: none;outline:none"></label> 
                    
                    
                </div>
                 
            </mt-cell>
            <mt-cell> 
                <div class="sign">
                    登录
                </div>
            </mt-cell> 
        </mt-tab-container-item>
      </mt-tab-container>
      <footer>
          <router-link to="/register">
          <span class="register">立即注册</span>
          </router-link>
          <span class="find">找回密码</span>
      </footer>
      <div class="bottom">
        <span class="cat">© 猫眼电影 客服电话：</span>
        <span class="number">400-670-5445</span>
      </div>
      
  </div>
</template>
<script>
   export default{
    data(){
        return{
            selected:"1",
           
        }
    },
    
   }
</script>
<style scoped>
 header{
     width:100%;
     height: 50px;
     background: #E54847;
 }
header>span{
    width:100%;
    float: right;
    color: white;
    text-align: center;
    line-height: 50px;
}
.num>label{
    margin-right: 213px;
   
}
.passw>label{
    margin-right: 238px;
}
.sign{
    height: 29px;
    background: #df2d2d;
    color: white;
    line-height: 29px;
    text-align: center;
    border-radius: 6px;
    width: 348px;
    font-size: 14px;
}
footer{
    width: 94%;
    height: 20px;
    margin:3% 3%;
}
.register{
    float: left;
    color: #fe8c00;
    font-size: 14px;
}
.find{
    float: right;
    color: #fe8c00;
    font-size: 14px;
}
.bottom{
    width:90%;
    margin:5% 5%;
    text-align: center;
}
.cat{

    color:#333;
    font-size: 14px;
}
.number{
    color:#e66767;
    font-size: 14px;
}
</style>



