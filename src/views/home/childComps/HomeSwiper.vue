<template>
    <div>
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
    // 这里需要使用数据   但是数据在我们的Home.vue中   所以我们使用props属性传递过来
    props:{
        banners:{
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
    components:{
        Swiper,
        SwiperItem
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>

</style>