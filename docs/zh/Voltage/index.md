---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Force/
      linkText: 体积流量单位转换
  - - link: /zh/Force/index
      linkText: 体积流量单位单位换算
head:
  - - meta
    - name: description
      content: "本页面提供体积流量单位换算工具，涵盖公制与英制单位，包括立方毫米每秒、加仑每分钟等。同时介绍流量测量意义、单位换算原理及行业应用场景。"
  - - meta
    - name: keywords
      content: "体积流量单位换算,公制单位,英制单位,流量测量,单位转换"
---
# 体积流量单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Force } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "立方毫米每秒 (mm³/s)", "value": "mm3/s" },
  { "label": "立方厘米每秒 (cm³/s)", "value": "cm3/s" },
  { "label": "毫升每秒 (ml/s)", "value": "ml/s" },
  { "label": "分升每秒 (cl/s)", "value": "cl/s" },
  { "label": "分升每秒 (dl/s)", "value": "dl/s" },
  { "label": "升每秒 (l/s)", "value": "l/s" },
  { "label": "升每分钟 (l/min)", "value": "l/min" },
  { "label": "升每小时 (l/h)", "value": "l/h" },
  { "label": "千升每秒 (kl/s)", "value": "kl/s" },
  { "label": "千升每分钟 (kl/min)", "value": "kl/min" },
  { "label": "千升每小时 (kl/h)", "value": "kl/h" },
  { "label": "立方米每秒 (m³/s)", "value": "m3/s" },
  { "label": "立方米每分钟 (m³/min)", "value": "m3/min" },
  { "label": "立方米每小时 (m³/h)", "value": "m3/h" },
  { "label": "立方千米每秒 (km³/s)", "value": "km3/s" },
  { "label": "茶匙每秒 (tsp/s)", "value": "tsp/s" },
  { "label": "汤匙每秒 (Tbs/s)", "value": "Tbs/s" },
  { "label": "立方英寸每秒 (in³/s)", "value": "in3/s" },
  { "label": "立方英寸每分钟 (in³/min)", "value": "in3/min" },
  { "label": "立方英寸每小时 (in³/h)", "value": "in3/h" },
  { "label": "液量盎司每秒 (fl-oz/s)", "value": "fl-oz/s" },
  { "label": "液量盎司每分钟 (fl-oz/min)", "value": "fl-oz/min" },
  { "label": "液量盎司每小时 (fl-oz/h)", "value": "fl-oz/h" },
  { "label": "杯每秒 (cup/s)", "value": "cup/s" },
  { "label": "品脱每秒 (pnt/s)", "value": "pnt/s" },
  { "label": "品脱每分钟 (pnt/min)", "value": "pnt/min" },
  { "label": "品脱每小时 (pnt/h)", "value": "pnt/h" },
  { "label": "夸脱每秒 (qt/s)", "value": "qt/s" },
  { "label": "加仑每秒 (gal/s)", "value": "gal/s" },
  { "label": "加仑每分钟 (gal/min)", "value": "gal/min" },
  { "label": "加仑每小时 (gal/h)", "value": "gal/h" },
  { "label": "立方英尺每秒 (ft³/s)", "value": "ft3/s" },
  { "label": "立方英尺每分钟 (ft³/min)", "value": "ft3/min" },
  { "label": "立方英尺每小时 (ft³/h)", "value": "ft3/h" },
  { "label": "立方码每秒 (yd³/s)", "value": "yd3/s" },
  { "label": "立方码每分钟 (yd³/min)", "value": "yd3/min" },
  { "label": "立方码每小时 (yd³/h)", "value": "yd3/h" }
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


以下是将上述内容转换为 Markdown 格式后的版本：

### 体积流量单位换算表（以升/秒(L/s)为基准）

| 单位 | 换算系数 (乘以 L/s) | 常见应用领域 |
| --- | --- | --- |
| **公制单位** | | |
| mm³/s | 0.000001 | 微流体、医学检测 |
| cm³/s (ml/s) | 0.001 | 实验室滴定、药剂输送 |
| cl/s | 0.01 | 食品加工 |
| dl/s | 0.1 | 化工反应器 |
| L/s | 1 | 工业管道、水处理 |
| L/min | 60 | 空压机、通风系统 |
| L/h | 3600 | 缓释设备、灌溉 |
| m³/s | 1000 | 水电站、河流水文 |
| m³/min | 60,000 | 风机额定风量  |
| m³/h | 3,600,000 | HVAC 系统、锅炉 |
| km³/s | 1×10¹² | 地质运动、洋流模型 |
| **英制单位** | | |
| tsp/s | 0.00492892 | 烹饪计量 |
| Tbs/s | 0.0147868 | 食品工业 |
| in³/s | 0.0163871 | 发动机排量计算 |
| in³/min | 0.983226 | 机械润滑系统 |
| fl-oz/s | 0.0295735 | 饮料灌装线 |
| cup/s | 0.236588 | 食品加工 |
| pnt/s (pint/s) | 0.473176 | 酿酒工业 |
| qt/s | 0.946353 | 农业灌溉 |
| gal/s | 3.78541 | 消防水枪、油轮装卸 |
| gal/min (GPM) | 227.126 | 水泵性能指标  |
| ft³/s | 28.3168 | 天然气管道 |
| ft³/min (CFM) | 1699.01 | 通风系统、除尘设备  |
| yd³/s | 764.555 | 土方工程、采矿 |

**注**：完整单位转换工具可访问在线计算器 。

### 科普文章：体积流量单位的科学与工程应用

#### 1. 流量测量的核心意义

体积流量描述流体在单位时间内通过截面的体积，是能源、化工、环保等领域的关键参数。例如：

- **通风工程**：需用 CFM（立方英尺/分钟）计算风机风量，确保空气质量达标 ；
- **管道设计**：通过 m³/h 或 GPM（加仑/分钟）确定管径，避免压降过大 。

#### 2. 公制与英制单位的共存逻辑

- **科学一致性**：公制单位（如 m³/s、L/s）基于国际单位制，便于全球科研协作；
- **工程实用性**：英制单位（如 CFM、GPM）在北美沿用，因历史设备标准需兼容 。

**例**：1 CFM = 0.0283 m³/min，转换时需注意温度压力修正 。

#### 3. 流量换算的物理基础

流量单位转换依赖流体密度和状态方程：

$$ [ Q_m = \rho \cdot Q_v ] $$

其中 \( Q_m \) 为质量流量（kg/s），\( Q_v \) 为体积流量（m³/s），\( \rho \) 为密度（kg/m³）。气体流量需额外考虑温度压力补偿 。

#### 4. 行业应用场景解析

| 领域 | 首选单位 | 原因 |
| --- | --- | --- |
| 微流控芯片 | μL/min | 精确控制微量流体反应 |
| 水处理厂 | m³/h | 匹配大型设施处理能力 |
| 航空燃油 | lb/min | 质量流量直接关联发动机功率 |
| 建筑通风 | CFM | 欧美建筑规范标准  |

#### 5. 单位转换的实用建议

- **在线工具**：使用专业计算器（如 23bei.com）自动处理温度、压力补偿 ；
- **避免误差**：气体单位（如 Nm³/h）特指标准状态（0°C, 1atm），直接转换易失真 ；
- **工程校验**：管道流量需结合达西公式验证压降合理性：

$$  \Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho V^2}{2}  $$

其中 \( V \) 为流速，\( D \) 为管径 。

### 结语

流量单位的多样性反映了不同场景的测量需求。掌握换算原理（如 1 m³/h = 16.67 L/min）并善用工具，可显著提升工程效率。深入理解流体力学本质，方能突破单位表象，精准驾驭流动的奥秘。