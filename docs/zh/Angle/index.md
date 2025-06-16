---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Angle/indexindex
      linkText: 角度转换
  - - link: /Angle/index
      linkText: 角度单位换算
head:
  - - meta
    - name: description
      content: "角度单位换算指南，涵盖度 (deg)、弧度 (rad)、梯度 (grad)、角分 (arcmin)、角秒 (arcsec) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "角度, 单位转换, 度, 弧度, 梯度, 角分, 角秒, 换算公式, 单位换算指南"  
---
# 角度单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Angle } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "度", "value": "deg" },
  { "label": "弧度", "value": "rad" },
  { "label": "梯度", "value": "grad" },
  { "label": "角分", "value": "arcmin" },
  { "label": "角秒", "value": "arcsec" }
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

## 角度单位换算公式表

单位 | 名称 | 定义 | 换算公式（以 1 rad 为基准）
---|---|---|---
rad | 弧度 | 圆周长与半径的比值（1 圆 = 2π rad） | 1 rad = 1 rad（基准单位）
deg | 度 | 1 圆 = 360° | 1 rad ≈ 57.2958°
grad | 梯度 | 1 圆 = 400 grad | 1 rad ≈ 63.6620 grad
arcmin | 角分 | 1° = 60 arcmin | 1 rad ≈ 3437.747 arcmin
arcsec | 角秒 | 1 arcmin = 60 arcsec | 1 rad ≈ 206,264.8 arcsec

**换算关系链（基于圆周定义）**：
1 圆 = 360° = 400 grad = 2π rad ≈ 6.2832 rad 
1° = 60 arcmin = 3,600 arcsec 

## 生活应用场景

### 导航与地理定位（deg, arcmin, arcsec）

  * **GPS 坐标** ：经纬度以度（°）、分（′）、秒（″）表示（如 39°54′26″N）。
  * **地图测绘** ：精确到角秒级（1 arcsec ≈ 30 米距离差）确保定位精度 。

### 工程与机械设计（grad）

  * **测量仪器** ：全站仪、水准仪常用梯度（grad）单位，400 grad 的圆周设计简化角度计算（如坡度 100 grad = 45°）。

### 数学与物理计算（rad）

  * **三角函数** ：微积分和物理公式（如角速度）默认弧度制，简化导数计算（e.g. d(sinθ)/dθ = cosθ 仅在 rad 下成立）。

### 天文观测（arcsec）

  * **望远镜分辨率** ：天体视直径用角秒衡量（e.g. 满月 ≈ 1,800 arcsec）；哈勃望远镜分辨率达 0.05 arcsec 。

### 日常工具（deg）

  * **旋转调节** ：手机屏幕旋转（90°）、量角器测量角度、家具安装倾斜角均以度为标准 [4]。

## 单位选择建议

场景 | 推荐单位 | 原因
---|---|---
学术计算 / 物理公式 | rad | 与数学常数兼容（如 π）
工程测量 / 机械制图 | grad | 十进制简化坡度计算
地理坐标 / 天文观测 | deg + 角分 / 秒 | 直观且精度分级明确
日常生活 | deg | 通用性强

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file, index) in Angle" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="primary"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>