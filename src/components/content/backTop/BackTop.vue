<template>
    <div class="back-top">
        <!-- 在样式中我们使用这个波浪线  在引入组件的时候  不用加波浪线 -->
        <img src="~assets/img/back-top.png" alt="">
    </div>
</template>

<script>
export default {
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
    .back-top{
        position: fixed;
        right: 8px;
        bottom: 55px;
    }
    .back-top img{
        width: 43px;
        height: 43px;
    }
</style>