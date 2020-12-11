<template>
  <el-carousel :interval="20000" type="card" height="300px">
    <el-carousel-item v-for="item in 3" :key="item" >
      <div style=" text-align: center " @click=" selected(item) ">
        <!--<div class="img2" ></div>-->
        <h3 class="zeje_bg" :style="{backgroundImage: 'url(' + info[item].url + ')' }">{{ info[item].title }}</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scope>
  .el-carousel__item h3 {
  
    font-size: 20px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
     background-color: #d3dce6;

  }
  
  .el-carousel__item:nth-child(2n+1) {
   
    background-color: #99a9bf;
  }

  .zeje_bg {
      background-repeat: no-repeat;
      background-position-x: center;
      background-size:contain;
      display: flex;
      text-align: center;
  }
</style>

<script>
export default {
  data() {
    return {
      info:[
        {title:"",url:""},
        {title:"扫我",url:"../../img/xyz.png"},
        {title:"微信",url:"../../img/zeje_wechat.jpg"},
        {title:"毕业证书",url:"../../img/zeje_byz.jpg"},
        {title:"学士学位证书",url:"../../img/zeje_xs.jpg"}]
    };
  },
  methods: {
    selected(index) {
      if (index === 1) {
        //window.location.href= './technology/vue/20190601_myblog.html';
      }
    }
  }
}
</script>