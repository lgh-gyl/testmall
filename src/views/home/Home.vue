<template>
<div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <homewpper :banners='banners'></homewpper>
 <h2>我是首页</h2>
</div> 
</template>
<script>
  import NavBar from '../../components/navbar/NavBar'
  import Homewpper from '../../views/home/childComps/Homewpper'

  import {getHomeMultidata} from '../../network/home'

   
export default {
      name:'Home',
        components:{
          NavBar,
          Homewpper     
       },
       data() {
           return {
              banners:[],
              recommends:[]
           }
       },
      created() {
        //    1，请求数据
         getHomeMultidata().then(res =>{
            // console.log(res,2222)
            // this.result = res.data;
             this.banners =res.data.banner.list;
             this.recommends = res.data.recommend.list;

         })

      },
}
</script>
<style scoped>
    #home{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
    }
    .nav-bar{
        background-color: rgb(245, 101, 130);   
    }
</style>