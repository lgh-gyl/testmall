<template>
    <div class="reommend">
      <div v-for="(item,index) in recommends"  :key="index" class="reommend-tiem">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
   </div>
</template>

<script>
export default {
    name:'RecommedView',
    props:{
        recommends:{
            type:Array,
            default(){
              return []
            }
        }
    }
}
</script>

<style scoped>
  .reommend{
      display: flex;
      font-size: 12px;
      text-align: center;
      
      padding: 10px 0 30px;
      border-bottom: 8px solid rgba(201, 199, 199, 0.4);
     
  }
   .reommend-tiem{
       flex: 1;
   }

  .reommend-tiem img {
       width: 60px;
      height: 60px;
      top: 0;
  }
 
</style>