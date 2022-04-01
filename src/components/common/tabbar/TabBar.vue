<template>
<!-- 这里本来有一个div盒子  将原来的div标签删除掉 -->
    <div id="tab-bar">
      <!--这里使用的还是插槽 -->
     <slot></slot>
    </div>
</template>

<script>
export default {
  name:"TabBar",
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
 #tab-bar{
     display: flex;
     background-color: rgb(206, 176, 183);
     position: fixed;
     left: 0;
     right: 0;
     bottom: 0;
   }
   
</style>