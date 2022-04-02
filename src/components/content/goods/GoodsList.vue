<template>
    <div class="goods">
       <!-- {{goods}} -->
       <!-- 我们需要在goodsListItem组件中展示我们的数据   所以哦我们需要引入这个子组件 -->
       <!-- 我们这里需要很多个子组件   所以使用遍历子组件的方式给每一个子组件绑定数据 -->
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
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
   .goods{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
   }
</style>