<template>
  <div id="app">
     <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>

<script>

  import MainTabBar from './components/MainTabBar/MainTabBar'

export default {
  name: "App",
  components:{
   MainTabBar

  
  }
};
</script>

<style scoped>
   
  @import './assets/css/base.css';
   
</style>