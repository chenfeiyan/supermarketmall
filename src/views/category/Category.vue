<template>
    <div>
        <!-- <h2>分类张无忌</h2> -->
       <div class="wrapper">
            <ul class="content">
            <button @click="btnclick">点击</button>
            <li>我是猪猪侠0001</li>
            <li>我是猪猪侠0002</li>
            <li>我是猪猪侠0003</li>
            <li>我是猪猪侠0004</li>
            <li>我是猪猪侠0005</li>
            <li>我是猪猪侠0006</li>
            <li>我是猪猪侠0007</li>
            <li>我是猪猪侠0008</li>
            <li>我是猪猪侠0009</li>
            <li>我是猪猪侠0010</li>
            <li>我是猪猪侠0011</li>
            <li>我是猪猪侠0012</li>
            <li>我是猪猪侠0013</li>
            <li>我是猪猪侠0014</li>
            <li>我是猪猪侠0015</li>
            <li>我是猪猪侠0016</li>
            <li>我是猪猪侠0017</li>
            <li>我是猪猪侠0018</li>
            <li>我是猪猪侠0019</li>
            <li>我是猪猪侠0020</li>
            <li>我是猪猪侠0021</li>
            <li>我是猪猪侠0022</li>
            <li>我是猪猪侠0023</li>
            <li>我是猪猪侠0024</li>
            <li>我是猪猪侠0025</li>
            <li>我是猪猪侠0026</li>
            <li>我是猪猪侠0027</li>
            <li>我是猪猪侠0028</li>
            <li>我是猪猪侠0029</li>
            <li>我是猪猪侠0030</li>
            <li>我是猪猪侠0031</li>
            <li>我是猪猪侠0032</li>
            <li>我是猪猪侠0033</li>
            <li>我是猪猪侠0034</li>
            <li>我是猪猪侠0035</li>
            <li>我是猪猪侠0036</li>
            <li>我是猪猪侠0037</li>
            <li>我是猪猪侠0038</li>
            <li>我是猪猪侠0039</li>
            <li>我是猪猪侠0040</li>
            <li>我是猪猪侠0041</li>
            <li>我是猪猪侠0042</li>
            <li>我是猪猪侠0043</li>
            <li>我是猪猪侠0044</li>
            <li>我是猪猪侠0045</li>
            <li>我是猪猪侠0046</li>
            <li>我是猪猪侠0047</li>
            <li>我是猪猪侠0048</li>
            <li>我是猪猪侠0049</li>
            <li>我是猪猪侠0050</li>
            <li>我是猪猪侠0051</li>
            <li>我是猪猪侠0052</li>
            <li>我是猪猪侠0053</li>
            <li>我是猪猪侠0054</li>
            <li>我是猪猪侠0055</li>
            <li>我是猪猪侠0056</li>
            <li>我是猪猪侠0057</li>
            <li>我是猪猪侠0058</li>
            <li>我是猪猪侠0059</li>
            <li>我是猪猪侠0060</li>
            <li>我是猪猪侠0061</li>
            <li>我是猪猪侠0062</li>
            <li>我是猪猪侠0063</li>
            <li>我是猪猪侠0064</li>
            <li>我是猪猪侠0065</li>
            <li>我是猪猪侠0066</li>
            <li>我是猪猪侠0067</li>
            <li>我是猪猪侠0068</li>
            <li>我是猪猪侠0069</li>
            <li>我是猪猪侠0070</li>
            <li>我是猪猪侠0071</li>
            <li>我是猪猪侠0072</li>
            <li>我是猪猪侠0073</li>
            <li>我是猪猪侠0074</li>
            <li>我是猪猪侠0075</li>
            <li>我是猪猪侠0076</li>
            <li>我是猪猪侠0077</li>
            <li>我是猪猪侠0078</li>
            <li>我是猪猪侠0079</li>
            <li>我是猪猪侠0080</li>
            <li>我是猪猪侠0081</li>
            <li>我是猪猪侠0082</li>
            <li>我是猪猪侠0083</li>
            <li>我是猪猪侠0084</li>
            <li>我是猪猪侠0085</li>
            <li>我是猪猪侠0086</li>
            <li>我是猪猪侠0087</li>
            <li>我是猪猪侠0088</li>
            <li>我是猪猪侠0089</li>
            <li>我是猪猪侠0090</li>
            <li>我是猪猪侠0091</li>
            <li>我是猪猪侠0092</li>
            <li>我是猪猪侠0093</li>
            <li>我是猪猪侠0094</li>
            <li>我是猪猪侠0095</li>
            <li>我是猪猪侠0096</li>
            <li>我是猪猪侠0097</li>
            <li>我是猪猪侠0098</li>
            <li>我是猪猪侠0099</li>
            <li>我是猪猪侠0100</li>
        </ul>
       </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data() {
        return {
            scroll:null
        };
    },
    // 这个函数是在组件创建完之后调用的  但是这个时候  还没有加载我们的template模板
    // 这个时候我们直接输出这个wrapper元素是拿不到的
    // 所以我们需要在mounted加载函数中调用
    //    created(){
    //       this.scroll= new BScroll(".wrapper",{})
    //     // console.log();
    //    },

    mounted() {
        this.scroll=new BScroll(document.querySelector(".wrapper"),{
            probeType:3,
            // 这里必须设置为true   不然这个下拉加载事件不执行
            pullUpLoad:true,
        });
        this.scroll.on("scroll",(position)=>{
            // console.log(position);
        });
        // 监听这个下拉加载更多事件
        this.scroll.on("pullingUp",()=>{
            console.log("已经到底部了，下拉加载更多.....");
        })
    },

    methods: {
        btnclick(){
            console.log("按钮被点击了");
        }
    },
};
</script>

<style  scoped>
   .wrapper{
       height: 150px;
       background-color: skyblue;
       /* overflow-y: scroll; */
   }
</style>