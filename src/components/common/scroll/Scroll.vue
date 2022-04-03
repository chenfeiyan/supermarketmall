<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data() {
        return {
            scroll:null,
            message:"哈哈哈"
        };
    },

    mounted() {
        // ref设置的是组件的名称   我们通过  this.$refs.组件名称  获取的是这个组件
        this.scroll=new BScroll(this.$refs.wrapper,{
            // 新版本的滚动不了  需要设置这个参数
            observeDOM:true,
            click:true,
        })
    },

    methods: {
        // 我们自己封装了一个函数   在调用的时候需要传入三个参数
        fanHuiDingBu(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        }
    },
};
</script>

<style  scoped>

</style>