// 单独封装一个echarts，降低main.js的耦合度
import * as echarts from 'echarts/core'
// 导入对应的图表
import { BarChart } from 'echarts/charts'
// 导入组件
import { TimelineComponent } from 'echarts/components'
// 注册
echarts.use([BarChart, TimelineComponent])

// 导出echart
export default echarts