<template>
       <tab-bar>
       <tab-bar-item path="/home" activeColor="red">
           <img slot="item-icon" src="../../assets/img/tabbar/catgory-active.svg" alt="">
              <img slot="iten-icon-active" src="../../assets/img/tabbar/category.svg" alt="">
           <div slot="item-text">首页</div>
       </tab-bar-item>

        <tab-bar-item path="/profile" activeColor="red">
               <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
              <img slot="iten-icon-active" src="../../assets/img/tabbar/profile-active.svg" alt="">
           <div slot="item-text">分类</div>
       </tab-bar-item>

        <tab-bar-item path="/cart" activeColor="red">
             <img slot="item-icon" src="../../assets/img/tabbar/shopcat.svg" alt="">
               <img slot="iten-icon-active" src="../../assets/img/tabbar/shopcat-active.svg" alt="">
               <div slot="item-text">购物车</div>
       </tab-bar-item>

        <tab-bar-item path="/category" activeColor="red">
               <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
            <img slot="iten-icon-active" src="../../assets/img/tabbar/home-active.svg" alt="">
           <div slot="item-text">个人中心</div>
       </tab-bar-item>
    </tab-bar>  
</template>
<script>
   import TabBar from '../../components/tabbar/TabBar'
   import TabBarItem from '../../components/tabbar/TabBarItem'
export default {
     name:"MainTabBar",
     components:{
         TabBarItem,
         TabBar
     }
    
}
</script>
<style scoped>

</style>