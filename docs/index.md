---
layout: home
home: true

lang: zh-CN
title: 单位快速转换
titleTemplate: 首页
editLink: true
lastUpdated: true
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
hero:
  name: "Unit Converter"
  text: "单位快速转换在线工具"
  tagline: "免费的在线单位换算计算器，包含重量、长度、面积、时间、温度和更多其他类别的单位换算器"

# features:
#   - icon: 📍 
#     title: 温度
#     details: xxx，xxx，xx
#   - icon: 🌍
#     title: 时间
#     details: xxx，xxx，xx
#   - icon: 🤖
#     title: 长度
#     details: xxx，xxx，xx
#   - icon: 📍 
#     title: 面积
#     details: xxx，xxx，xx
#   - icon: 🌍
#     title: 重量
#     details: xxx，xxx，xx
#   - icon: 🤖
#     title: 功率
#     details: xxx，xxx，xx
---
<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title:'进制转换器',
    subtitle:'实现不同进制之间的转换',
    link:'/radix/'
  },{
    title:'时间转换器',
    subtitle:'完成不同时区及时间格式的转换',
    link:'/time/'
  },{
    title:'面积转换器',
    subtitle:'用于不同面积单位间相互转换',
    link:'/area/'
  },{
    title:'温度转换器',
    subtitle:'实现摄氏度、华氏度等温度换算',
    link:'/temperature/'
  },{
    title:'重量转换器',
    subtitle:'进行千克、克、磅等重量单位转换',
    link:'/weight/'
  },{
    title:'长度转换器',
    subtitle:'完成米、厘米、英尺等长度换算',
    link:'/distance/'
  }
])
</script>
<v-row>
  <v-col
    v-for="n in features"
    :key="n"
    cols="12"
    sm="4"
    class="mt-4"
  >
    <Feature :link="n.link" :subtitle="n.subtitle" :title="n.title"/>
  </v-col>
</v-row>
