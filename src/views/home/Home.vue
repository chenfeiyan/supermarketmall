<template>
    <div id="home">
        <nav-bar class="home-nav">
           <div slot="center">精品街</div>
        </nav-bar>
       <scroll class="content" ref="scro" :probe-type="3">
                <!-- 将我们的数据传递到我们的homeswiper组件中 -->
            <!-- 第一个banners是我们在子组件中定义的属性    第二个banners是我们的在当前组件中的属性 -->
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <!-- 我们这里执行从tabControl组件传递出来的tabClick函数   也就是我们需要绑定这个自定义属性tabClick -->
            <tab-control class="tab-control"
                        :titles="['流行','新款','精选']"
                        v-on:tabClick="tabClick"
                        ></tab-control>
             <goods-list :goods="showGoods"></goods-list>
       </scroll>
       <back-top @click.native="backClick"></back-top>
       
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import FeatureView from "./childComps/FeatureView.vue"


import TabControl from "components/content/tabControl/TabControl.vue"
import GoodsList from "components/content/goods/GoodsList.vue"
import Scroll from "components/common/scroll/Scroll.vue"
import BackTop from "components/content/backTop/BackTop.vue"
import {getHomeMultidata,getHomeGoods} from "network/home"




export default {
    data() {
        return {
            // result:null
            banners:[],
            recommends:[],
            goods:{
                "pop":{page:0,list:[]},
                "new":{page:0,list:[]},
                "sell":{page:0,list:[]}
            },
            // 我们这里设置一个默认的展示类型   展示类型就是我们的pop类型
            // 接下来我们设置一个方法
            currentType:"pop",
        };
    },
    // 等这个home首页一加载  就调用getHomeMultidata函数
    // 这个函数返回一个request函数   而在request函数中   返回的是一个promise对象
    // 所以我们可以在getHomeMultidata函数的后面直接写这个then方法
    created(){
        // 1.请求多个数据
        this.getHomeMultidata();
        // 2.请求商品数据
        this.getHomeGoods("pop");
        this.getHomeGoods("new");
        this.getHomeGoods("sell");
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    mounted() {
        
    },

    methods: {
        // 事件监听相关的方法
        tabClick(index){
            // console.log(index);
            // 使用switch语句   根据这个idnex的值的不同  我们给这个currentType属性设置具体值
            switch(index){
                case 0:
                    this.currentType="pop";
                    break;
                case 1:
                    this.currentType="new";
                    break;
                case 2:
                    this.currentType="sell";
                    break;
            }
        },
        backClick(){
            // console.log("我是点击事件");
            //  点击这个按钮  因为我们给这个scroll组件起了一个ref名字   所以通过ref名字可以找到这个组件
            // this.$refs.scro   接下来哦我们可以获取这个组件中的message数据
            // console.log(this.$refs.scro.message);
            // 但是我们想要获取的是这个组件中的scroll数据   所以我们通过方法同样可以获取到
            // this.$refs.scro.scroll   之后调用这个对象的scrollTo方法  传入两个参数就可以了
            // this.$refs.scro.scroll.scrollTo(0,0)
            // scrollTo(0,0,时间为毫秒数)
            // 这个scrollTo函数是我们的Better scroll插件中的方法
            // this.$refs.scro.scroll.scrollTo(0,0,500)
            // 我们自己在scroll组件中设置了一个方法  
            this.$refs.scro.fanHuiDingBu(0,0)
        },
        // 网络请求相关的方法
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                // console.log(res);
                // this.result=res.data;
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
            })
        },
         getHomeGoods(type){
             const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
                // console.log(res.data.list);
                // 将我们从后台获取的数据  传入到这个新数组中  并且将当前的页码加上1
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page+=1;
            })
         }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    }
};
</script>

<style  scoped>
    #home{
        height: 100vh;
        /* padding-top: 44px; */
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        /* 固定定位的元素加上这三个属性   left:0 right:0  top:0 */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    .tab-control{
        position: sticky;
        top: 44px;
    }
    .content{
        /* height: 300px; */
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
    }
</style>