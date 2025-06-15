---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/VolumeFlowRate/
      linkText: 体积流量单位转换
  - - link: /zh/VolumeFlowRate/index
      linkText: 体积流量单位单位换算
head:
  - - meta
    - name: description
      content: 体积流量单位换算工具和教程，支持立方米每秒(m³/s)、升每秒(l/s)、加仑每分钟(gal/min)等35种单位间的转换，并提供流量单位的科学原理和应用场景。
  - - meta
    - name: keywords
      content: 体积流量换算,流量计算器,flow rate calculator,m³/s,l/s,gal/min,立方英尺每分钟,CFM,流体力学,管道流量
---
# 体积流量单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
const convert = inject('convert')
const options =  [
  { label: "立方毫米每秒 (mm³/s)", value: "mm3/s" },
{ label: "立方厘米每秒 (cm³/s)", value: "cm3/s" },
  { label: "毫升每秒 (ml/s)", value: "ml/s" },
  { label: "厘升每秒 (cl/s)", value: "cl/s" },
  { label: "分升每秒 (dl/s)", value: "dl/s" },
  { label: "升每秒 (l/s)", value: "l/s" },
  { label: "升每分 (l/min)", value: "l/min" },
  { label: "升每小时 (l/h)", value: "l/h" },
  { label: "千升每秒 (kl/s)", value: "kl/s" },
  { label: "千升每分 (kl/min)", value: "kl/min" },
  { label: "千升每小时 (kl/h)", value: "kl/h" },
  { label: "立方米每秒 (m³/s)", value: "m3/s" },
  { label: "立方米每分 (m³/min)", value: "m3/min" },
  { label: "立方米每小时 (m³/h)", value: "m3/h" },
  { label: "立方千米每秒 (km³/s)", value: "km3/s" },
  { label: "茶匙每秒 (tsp/s)", value: "tsp/s" },
  { label: "汤匙每秒 (Tbs/s)", value: "Tbs/s" },
  { label: "立方英寸每秒 (in³/s)", value: "in3/s" },
  { label: "立方英寸每分 (in³/min)", value: "in3/min" },
  { label: "立方英寸每小时 (in³/h)", value: "in3/h" },
  { label: "液体盎司每秒 (fl-oz/s)", value: "fl-oz/s" },
  { label: "液体盎司每分 (fl-oz/min)", value: "fl-oz/min" },
  { label: "液体盎司每小时 (fl-oz/h)", value: "fl-oz/h" },
  { label: "杯每秒 (cup/s)", value: "cup/s" },
  { label: "品脱每秒 (pnt/s)", value: "pnt/s" },
  { label: "品脱每分 (pnt/min)", value: "pnt/min" },
  { label: "品脱每小时 (pnt/h)", value: "pnt/h" },
  { label: "夸脱每秒 (qt/s)", value: "qt/s" },
  { label: "加仑每秒 (gal/s)", value: "gal/s" },
  { label: "加仑每分 (gal/min)", value: "gal/min" },
  { label: "加仑每小时 (gal/h)", value: "gal/h" },
  { label: "立方英尺每秒 (ft³/s)", value: "ft3/s" },
  { label: "立方英尺每分 (ft³/min)", value: "ft3/min" },
  { label: "立方英尺每小时 (ft³/h)", value: "ft3/h" },
  { label: "立方码每秒 (yd³/s)", value: "yd3/s" },
  { label: "立方码每分 (yd³/min)", value: "yd3/min" },
  { label: "立方码每小时 (yd³/h)", value: "yd3/h" }
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
  title:'体积流量单位换算',
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


## 体积流量单位换算表（以国际标准单位 m³/s 为基准）

单位分类| 单位符号| 换算为 m³/s 的系数| 常见应用场景
---|---|---|---
科学级微小流量| mm³/s| 1.0×10⁻⁹| 微流体实验、医药滴注
| cm³/s (ml/s)| 1.0×10⁻⁶| 实验室注射泵、化学滴定
公制实用单位| L/s| 0.001| 水泵流量、工业管道
| m³/min| 1/60 ≈ 0.01667| 通风系统、河流水文监测
| m³/h| 1/3600 ≈ 2.778×10⁻⁴| 天然气计量、空调制冷量
英美制单位| tsp/s| 4.929×10⁻⁶| 烹饪调味剂添加
| gal(US)/min| 6.309×10⁻⁵| 美制汽车引擎冷却系统
| ft³/min| 4.719×10⁻⁴| 空压机输出、建筑通风
工程大流量| yd³/h| 0.2124| 土方工程、采矿运输

注：完整版含 35 种单位换算表因篇幅限制未完全展示，可查阅获取原始数据。

## 科普文章：体积流量单位的科学与生活密码

### 一、单位体系背后的科学逻辑

体积流量描述物质在单位时间内通过某截面的空间占据量，其核心是时间与三维空间的结合。国际标准单位 m³/s（立方米每秒）被定为基准，原因有三：

  * **兼容性** ：1 m³ = 1000 L，可无缝衔接实验室（毫升级）与工业场景（千升级）。
  * **可推导性** ：如 1 L/min = (0.001 m³)/(60 s) ≈ 1.667×10⁻⁵ m³/s。
  * **全球通用** ：科学论文、工程图纸强制使用公制单位避免歧义。

### 二、英美制单位的生存密码

尽管公制单位占主导，英美制单位仍在特定领域不可替代：

  * **厨房战场** ：1 美制茶匙（tsp）≈ 4.93 ml，是西方食谱的黄金标准。
  * **汽车工业** ：美国引擎功率以 gal/min 衡量冷却液流量。
  * **建筑业** ：通风管道设计沿用 ft³/min（CFM），因北美建筑模数基于英尺。

### 三、单位转换的实战技巧

避免单位混淆需掌握三个关键转换链：

  * **体积基础** ：1 m³ = 1000 L = 1,000,000 cm³（即 ml）。
  * **时间扩展** ：1 m³/s = 60 m³/min = 3600 m³/h。
  * **跨制式桥梁** ：1 美制加仑 ≈ 3.785 L，1 立方英尺 ≈ 28.317 L。

**案例** ：某净水器标称流量 10 gal(US)/min，换算为公制：

10×3.785 L/min = 37.85 L/min ≈ 0.000631 m³/s。

### 四、选对单位 = 解决一半问题

  * **医疗输液** ：用 ml/min 精准控制药量，1 ml 误差可能致命。
  * **石油管道** ：m³/h 兼顾精确度与数值简洁（输油量动辄数万立方米）。
  * **微型机械** ：mm³/s 描述 3D 打印机的树脂挤出量，精度达微升级。
