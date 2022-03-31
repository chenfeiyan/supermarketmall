<template>
<!-- 在首页中   使用的是组件   在每一个组件中   使用的是插槽 -->
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
           <slot name="item-icon"></slot>
      </div>
      <div v-else>
           <slot name="item-icon-active"></slot>
      </div>
       <div v-bind:class="{active:isActive}">
            <slot  name="item-text"></slot>
       </div>  
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String
    },
    data() {
        return {
            // 定义一个变量   如果是false    那么取反就是true  就是显示黑白的
            // 如果是true   取反就是false   那么就会显示彩色的  
            // isActive:false,
        };
    },

    mounted() {
        
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1;
        }
    },
    methods: {
       itemClick() {
        //    console.log("我被点击了");
        this.$router.push(this.path)
       }
    },
};
</script>

<style  scoped>
  .tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     font-size: 14px;
   }
   .tab-bar-item img{
       width: 24px;
       height: 24px;
       margin-top: 3px;
       vertical-align: middle;
   }
   .active{
       color: red;
   }
</style>