<template>
    <div id="home">
        <nav-bar class="home-nav">
           <div slot="center">精品街</div>
        </nav-bar>
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
        <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
            <li>列表14</li>
            <li>列表15</li>
            <li>列表16</li>
            <li>列表17</li>
            <li>列表18</li>
            <li>列表19</li>
            <li>列表20</li>
            <li>列表21</li>
            <li>列表22</li>
            <li>列表23</li>
            <li>列表24</li>
            <li>列表25</li>
            <li>列表26</li>
            <li>列表27</li>
            <li>列表28</li>
            <li>列表29</li>
            <li>列表30</li>
            <li>列表31</li>
            <li>列表32</li>
            <li>列表33</li>
            <li>列表34</li>
            <li>列表35</li>
            <li>列表36</li>
            <li>列表37</li>
            <li>列表38</li>
            <li>列表39</li>
            <li>列表40</li>
            <li>列表41</li>
            <li>列表42</li>
            <li>列表43</li>
            <li>列表44</li>
            <li>列表45</li>
            <li>列表46</li>
            <li>列表47</li>
            <li>列表48</li>
            <li>列表49</li>
            <li>列表50</li>
            <li>列表51</li>
            <li>列表52</li>
            <li>列表53</li>
            <li>列表54</li>
            <li>列表55</li>
            <li>列表56</li>
            <li>列表57</li>
            <li>列表58</li>
            <li>列表59</li>
            <li>列表60</li>
            <li>列表61</li>
            <li>列表62</li>
            <li>列表63</li>
            <li>列表64</li>
            <li>列表65</li>
            <li>列表66</li>
            <li>列表67</li>
            <li>列表68</li>
            <li>列表69</li>
            <li>列表70</li>
            <li>列表71</li>
            <li>列表72</li>
            <li>列表73</li>
            <li>列表74</li>
            <li>列表75</li>
            <li>列表76</li>
            <li>列表77</li>
            <li>列表78</li>
            <li>列表79</li>
            <li>列表80</li>
            <li>列表81</li>
            <li>列表82</li>
            <li>列表83</li>
            <li>列表84</li>
            <li>列表85</li>
            <li>列表86</li>
            <li>列表87</li>
            <li>列表88</li>
            <li>列表89</li>
            <li>列表90</li>
            <li>列表91</li>
            <li>列表92</li>
            <li>列表93</li>
            <li>列表94</li>
            <li>列表95</li>
            <li>列表96</li>
            <li>列表97</li>
            <li>列表98</li>
            <li>列表99</li>
            <li>列表100</li>
        </ul>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import FeatureView from "./childComps/FeatureView.vue"


import TabControl from "components/content/tabControl/TabControl.vue"
import GoodsList from "./../../components/content/goods/GoodsList.vue"
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
        GoodsList   
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
        padding-top: 44px;
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
</style>