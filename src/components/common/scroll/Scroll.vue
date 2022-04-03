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
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            scroll:null,
            message:"哈哈哈",
        };
    },

    mounted() {
        // 1.创建BScroll对象
        // ref设置的是组件的名称   我们通过  this.$refs.组件名称  获取的是这个组件
        this.scroll=new BScroll(this.$refs.wrapper,{
            // 新版本的滚动不了  需要设置这个参数
            observeDOM:true,
            click:true,
            // 想要实时的获取位置   需要设置一个属性   probeType:   值的是一个确切的数值
            // 但是这里不能够设置一个具体的值   我们需要从home组件照顾你传入一个具体的值
            probeType:this.probeType
        });
        // 2.监听滚动的位置
        this.scroll.on("scroll",(position)=>{
            console.log(position);
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