<template>
    <div>
        <nav-bar class="home-nav">
           <div slot="center">购物街</div>
        </nav-bar>
        <!-- 将我们的数据传递到我们的homeswiper组件中 -->
        <!-- 第一个banners是我们在子组件中定义的属性    第二个banners是我们的在当前组件中的属性 -->
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import {getHomeMultidata} from "network/home"


export default {
    data() {
        return {
            // result:null
            banners:[],
            recommends:[],
        };
    },
    // 等这个home首页一加载  就调用getHomeMultidata函数
    // 这个函数返回一个request函数   而在request函数中   返回的是一个promise对象
    // 所以我们可以在getHomeMultidata函数的后面直接写这个then方法
    created(){
        getHomeMultidata().then(res=>{
            // console.log(res);
            // this.result=res.data;
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
    }
</style>