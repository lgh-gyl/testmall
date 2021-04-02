<template>
     <div class="tab-bar-item" @click="itemCilck()">
       <div v-if="!isAcitive"><slot name="item-icon"></slot></div>   
       <div v-else><slot name="iten-icon-active"></slot></div>
       <div :style="activestyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
     activeColor:{
        type:String,
        dafault:'red'
     }
    },
    data() {
      return {
          // Acitive:true
      }
    },
    computed:{
       isAcitive(){
         return this.$route.path.indexOf(this.path) !== -1
       },
       activestyle(){
         return this.isAcitive ? {color:this.activeColor}:{}
       }
    },
     
    methods: {
       itemCilck(){
        // console.log("itemCilck");
        this.$router.replace(this.path);
       }
    },
    
}
</script>
<style scoped>
   #bat-tar{
    display: flex;
    background-color:rgb(231, 229, 229);    
    padding: 10px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0; 

     box-shadow: 0 -1px 1px rgba(100, 100, 100,.2);
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px; 
    margin-top: 8px;
    
  }
  .tab-bar-item img {
      width: 20px;
      height: 20px;
  }

  .active{
    color: red;
  }
</style>