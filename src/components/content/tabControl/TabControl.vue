<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" 
             :key="item.title" 
             class="tab-control-item"
             :class="{active:index===currentIndex}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        };
    },

    mounted() {
        
    },

    methods: {
        itemClick(index){
            this.currentIndex=index;
            // 在这里内部点击的时候   将我们的点击的索引值传递出去   传递到home组件里面
            this.$emit("tabClick",index);
        }
    },
};
</script>

<style  scoped>
    .tab-control{
        z-index: 9;
        display: flex;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size:15px ;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color:var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>