---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Pace/
      linkText: 配速单位转换
  - - link: /Pace/index
      linkText: 配速单位单位换算
head:
  - - meta
    - name: description
      content: 配速单位换算工具和教程，支持秒每米(s/m)、分钟每公里(min/km)、秒每英尺(s/ft)、分钟每英里(min/mi)之间的转换，并提供配速科学训练指南。
  - - meta
    - name: keywords
      content: 配速换算,配速计算器,pace calculator,min/km,min/mi,s/m,s/ft,马拉松配速,跑步训练,配速表
---
# 配速单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Pace } from '../../files';
const convert = inject('convert')
const options =  [
  { label: "秒每米 (s/m)", value: "s/m" },
  { label: "分钟每公里 (min/km)", value: "min/km" },
  { label: "秒每英尺 (s/ft)", value: "s/ft" },
  { label: "分钟每英里 (min/mi)", value: "min/mi" }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur"
  },
  to:{
    required: true,
    trigger: "select"
  },
  from:{
    required: true,
    trigger: "select"
  }
}
const form = reactive({
  number:null,
  to:'',
  from:'',
  result:'',
  title:'面积单位换算',
})
const convertHandler = (e) => {
   e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number}${form.from} = ${convert(form.number).from(form.from).to(form.to)}${form.to}`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值"  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要转换的数值" />
  </n-form-item>
  <n-form-item label="从" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="到" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择转换单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" style="width:100%" @click="convertHandler">转换</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

# 配速单位转换表

| min/km | s/m  | min/mi | s/ft  | 等效速度 (km/h) |
|--------|------|--------|-------|-----------------|
| 3:00   | 0.3  | 4:50   | 0.091 | 20.0            |
| 4:00   | 0.4  | 6:26   | 0.122 | 15.0            |
| 5:00   | 0.5  | 8:03   | 0.152 | 12.0            |
| 6:00   | 0.6  | 9:39   | 0.183 | 10.0            |
| 7:00   | 0.7  | 11:16  | 0.213 | 8.6             |

## 换算公式
- 1 min/km = 1.609 min/mi
- 1 s/m = 16.667 min/km
- 1 s/ft = 54.681 min/km
- 1 min/mi = 0.0373 s/m

# 配速单位的科学与应用

## 一、配速的本质与单位定义
配速（Pace）是单位距离所需时间的度量，与速度（单位时间内的距离）互为倒数。国际常用单位包括：

### 公制单位
- **min/km（分钟每公里）**：长跑训练常用，如5 min/km表示每公里耗时5分钟。
- **s/m（秒每米）**：短跑或科学分析使用，1 s/m = 60 min/km。

### 英制单位
- **min/mi（分钟每英里）**：欧美地区主流，1 min/mi ≈ 0.621 min/km。
- **s/ft（秒每英尺）**：工程或特定运动场景使用，1 s/ft ≈ 54.68 min/km。

示例：若配速为5 min/km，则速度=12 km/h（因60÷5=12）。

## 二、单位转换的物理原理
配速转换依赖距离单位的换算关系：
- 公里与英里：1 mi ≈ 1.609 km → 配速比 min/km : min/mi ≈ 1 : 1.609
- 米与英尺：1 ft = 0.3048 m → 配速比 s/m : s/ft ≈ 1 : 3.281

实际应用中，可通过在线工具快速换算，避免手动计算误差。

## 三、不同单位的应用场景
### min/km
- **马拉松训练**：专业跑者用此单位制定分段计划，如全程目标配速4:30 min/km。
- **生理监测**：结合心率数据评估有氧耐力。

### min/mi
- **越野跑导航**：欧美地形图常以英里标注距离，需匹配配速单位。
- **赛事策略**：如波士顿马拉松的“心碎坡”段需调整英制配速。

### s/m 与 s/ft
- **短跑技术分析**：博尔特9.58s百米=0.958 s/m，用于优化步频。
- **装备测试**：跑鞋缓震性能需测量触地时间（s/ft）。

## 四、训练中的配速科学
### 配速稳定性
- 波动过大会增加能耗（类比汽车刹车距离与速度关系）。
- 建议波动范围≤5%（如5:00±15s/km）。

### 环境适配
- **温度**：高温下配速降低1-2%以维持心率安全区。
- **坡度**：每1%坡度增加配速约12-15 s/km。

### 技术工具
- 使用GPS手表实时监测配速单位（可切换min/km或min/mi）。
- 分析软件如Strava自动生成配速-地形热力图。
