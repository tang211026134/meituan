<template>
    <main>
        <div class="img">
            <img src='../assets/images/logo_img.png' alt=''>
        </div>
        
        
            <div class="inphone">
                           <span>中国 +86></span> 
            <input type="text" name="" placeholder="请输入手机号"> 
            </div>
            <div class="incheckcode">
                <input type="text" name="" placeholder="请输入验证码">
            </div>
            <router-link to="/personal">
                <p class="btn">登录</p>
            </router-link>
            
            <p class="txt">未注册的手机号验证后自动创建美团账户</p>
            <span class='bottom'>账号登录</span>
        
    </main>

</template>
<style scoped>
    *{
        padding: 0px;
        margin: 0px;
    }
    a:-webkit-any-link {
        text-decoration: none;
    }
    .img{
        width: 80px;
        height: 80px;
        margin: 25px 50%;
        transform: translateX(-40px);
    }
    img{
        width: 80px;
    }
    .inphone{
        width: 87%;
        height: 56px;
        margin: 0 auto;
        border: none;
        border-bottom:1px solid rgb(209, 209, 209);
    }
    .incheckcode{
        width: 87%;
        height: 56px;
        margin: 0 auto;
        margin-top: 3.6px;
        border: none;
        border-bottom:1px solid rgb(209, 209, 209);
    }
    span{
        display: block;
        float: left;
        font-style: Arial;
        margin-right: 8px;
        font-size: 12px;
        margin-top: 25px;
    }
    input{
        display: block;
        width: 60%;
        height: 40px;
        font-size: 18px;
        color:  rgb(209, 209, 209);
        border: none;
        margin-top: 15px;
        float: left;
        margin-left: 0px;
    }
    .btn{
        color: #222222;
        margin: 30px auto;
        margin-bottom: 10px;
        width: 87%;
        height: 43px;
        text-align: center;
        line-height: 43px;
        border-radius: 10px;
        background-color: orange;
    }
    .txt{
        width: 87%;
        font-size: 12px;
        margin: 0 auto;
        color: grey;
        text-align: center;
    }
    .bottom{
        width: 87%;
        font-size: 12px;
        margin: 25px auto;
        padding-left: 43%;
        display: inline-block;
    }
</style>