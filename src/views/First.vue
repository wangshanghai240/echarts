<template>
  <div class="zu"></div>
</template>

<script>
export default {
    name:'First',
    created(){
        this.las()
    },
    methods:{
        las(){
            let myEcharts = this.$echarts.init(document.getElementsByClassName('zu'))
            let option = {
                title:{
                    text:'vue使用echarts练习'
                },
                tooltip:{},
                legend:{
                    data:['销量']
                },
                xAxis:{
                    data:['苹果','香蕉','葡萄']
                },
                yAxis:{},
                series:[
                    {
                        name:'销量',
                        type:'bar',
                        data:[50,40,90]
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
}
</script>

<style>
.zu{
    width:300px;
    height:400px;
    background:#ccc;
}
</style>