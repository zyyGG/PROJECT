<template>
  <!--主页-一般默认显示 -->
  <div>
    <a-row>
      <!-- 首页左边区域 -->
      <a-col :span="18">
        <a-row>
          <a-col>
            <a-carousel autoplay>
              <div><h3>HEllO!,NICE TO MEET YOU</h3></div>
              <div><h3>滚动页面"一"</h3></div>
              <div>
                <a href="https://www.baidu.com" target="_black"
                  ><h3>滚动页面"二"</h3></a
                >
              </div>
              <div><h3>滚动页面"三"</h3></div>
              <div><h3>滚动页面"四"</h3></div>
            </a-carousel>
          </a-col>
          <a-col>
            <!-- 提示框区 -->
            <a-row type="flex" justify="space-around">
              <a-col :span="5">
                <a-card hoverable style="width: 240px">
                  <img
                    slot="cover"
                    alt="example"
                    src="./assets/img02.png"
                    style="padding: 10px 20px"
                  />
                  <a-card-meta title="支付宝验证">
                    <img slot="avatar" src="./assets/img01.png" width="50px" />
                    <template slot="description">
                      采用支付宝身份验证，提升账户安全性
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :span="5">
                <a-card hoverable style="width: 240px">
                  <img
                    slot="cover"
                    alt="example"
                    src="./assets/img04.png"
                    style="padding: 10px 20px"
                  />
                  <a-card-meta title="实人认证">
                    <img slot="avatar" src="./assets/img03.png" width="50px" />
                    <template slot="description">
                      采用支付宝身份验证，提升账户安全性
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :span="5">
                <a-card hoverable style="width: 240px">
                  <img
                    slot="cover"
                    alt="example"
                    src="./assets/img04.png"
                    style="padding: 10px 20px"
                  />
                  <a-card-meta title="实人认证">
                    <img slot="avatar" src="./assets/img03.png" width="50px" />
                    <template slot="description">
                      采用支付宝身份验证，提升账户安全性
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :span="5">
                <a-card hoverable style="width: 240px">
                  <img
                    slot="cover"
                    alt="example"
                    src="./assets/img04.png"
                    style="padding: 10px 20px"
                  />
                  <a-card-meta title="实人认证">
                    <img slot="avatar" src="./assets/img03.png" width="50px" />
                    <template slot="description">
                      采用支付宝身份验证，提升账户安全性
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
            </a-row>
            <!-- 数据展示区标题 -->
            <a-row type="flex" justify="space-between" align="middle">
              <a-col>
                <h3>我的数据</h3>
                <p>数据更新时间:2022-01-01 00:00:00</p>
              </a-col>
              <a-col>
                <a><a-icon type="plus" />指标<a-icon type="right" /></a>
              </a-col>
            </a-row>
            <!-- 数据展示区数据 -->
            <a-row type="flex">
              <a-col class="dataBox" :offset="1">
                <a-statistic
                  title="支付金额"
                  :precision="2"
                  :value="112893"
                  valueStyle="font-size:20px"
                >
                  <template #prefix>
                    <span>￥</span>
                  </template>
                </a-statistic>
                <a-statistic
                  title="昨日"
                  :precision="2"
                  :value="1356"
                  valueStyle="font-size:15px"
                >
                  <template #prefix>
                    <span>￥</span>
                  </template>
                </a-statistic>
              </a-col>
              <a-col class="dataBox" :offset="1">
                <a-statistic
                  title="访客数"
                  :value="500"
                  valueStyle="font-size:20px"
                >
                  <template #prefix>
                    <span></span>
                  </template>
                </a-statistic>
                <a-statistic
                  title="昨日"
                  key=""
                  :value="150"
                  valueStyle="font-size:15px"
                >
                  <template #prefix>
                    <span></span>
                  </template>
                </a-statistic>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="5" :offset="1">
        <!-- 用户头像和个人资料区 -->
        <a-row class="rightBar">
          <a-col class="userBar" type="flex">
            <a-space>
              <a-avatar icon="user" size="large"></a-avatar>
              <h3>UserName</h3>
            </a-space>
          </a-col>
          <a-col class="payBar" type="flex" align="middle">
            <a-space>
              <a-button shape="round"><a-icon type="flag" />微信</a-button>
              <a-button shape="round"><a-icon type="flag" />支付宝</a-button>
            </a-space>
          </a-col>
          <a-col ref="chart" class="chart"> </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core"
//引入图表 
import { PieChart } from "echarts/charts"
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 图表组件
import { LegendComponent } from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent
])


export default {
  name: "Home",

  mounted () {
    echarts.init(this.$refs.chart.$el).setOption({
      title: {
        text: '销售数据',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
     /*  legend: {
        orient: 'vertical',
        left: 'left'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
            { value: 300, name: 'new Data' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })

  }
}
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.dataBox {
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: #f7f8fa;
  min-width: 200px;
}

/* 图表 */
.chart {
  min-height: 500px;
}
/* 用户头像区域 */
.userBar {
  padding-top: 30px;
  padding-bottom: 15px;
}
/* 支付选择 */
.payBar{
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>