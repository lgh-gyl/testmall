<template>
    <div id="bat-tar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
 #bat-tar{
    display: flex;
    background-color:rgb(231, 229, 229);    
    font-size: 1px; 

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0; 
  }
  .item-tabr{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .item-tabr img {
      width: 20px;
      height: 20px;
  }
</style>