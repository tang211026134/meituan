<template>
    <main>
        <header>
            猫眼电影
          
            <span @click="back()"><img src="../assets/images/search_icon.png" width="18px" height="18px" alt=""></span>
          
        </header>
        <div>
           <mt-search v-model="value"></mt-search>
        </div>
    </main>
</template>
<script>
     export default{
      data(){
          return{
            value:''
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
</style>