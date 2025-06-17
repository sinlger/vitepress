---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度换算
  - - link: /Length/index
      linkText: 长度单位换算
head:
  - - meta
    - name: description
      content: "长度单位换算指南，包括公制与英制单位之间的换算方法和公式。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 公制, 英制, 换算公式, 米, 千米, 英寸, 码"
---
# 长度单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';
const convert = inject('convert')
const options =  [
  { label: '纳米', value: 'nm' },
  { label: '微米', value: 'μm' },
  { label: '毫米', value: 'mm' },
  { label: '厘米', value: 'cm' },   
  { label: '米', value: 'm' },
  { label: '千米', value: 'km' },
  { label: '英寸', value: 'in' },
  { label: '码', value: 'yd' },
  { label: '英尺-us', value: 'ft-us' },
  { label: '英尺', value: 'ft' },
  { label: '拓', value: 'fathom' },
  { label: '英里', value: 'mi' },
  { label: '海里', value: 'nMi' }
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
  title:'长度单位换算',
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
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要换算的数值" />
  </n-form-item>
  <n-form-item label="从" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="到" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择换算单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 长度单位换算表

单位符号| 英文全称| 中文名称| 换算公式（以米为基准）| 示例换算
---|---|---|---|---
nm| Nanometer| 纳米| 1 nm = 10⁻⁹ m| 1 m = 1,000,000,000 nm
μm| Micrometer| 微米| 1 μm = 10⁻⁶ m| 1 m = 1,000,000 μm
mm| Millimeter| 毫米| 1 mm = 10⁻³ m| 1 m = 1,000 mm
cm| Centimeter| 厘米| 1 cm = 10⁻² m| 1 m = 100 cm
m| Meter| 米| 基准单位| 1m = 1m
km| Kilometer| 千米| 1 km = 10³ m| 1 m = 0.001 km
in| Inch| 英寸| 1 in = 0.0254 m | 1 m ≈ 39.37 in
yd| Yard| 码| 1 yd = 0.9144 m | 1 m ≈ 1.0936 yd
ft-us| U.S. Survey Foot| 美制英尺| 1 ft-us ≈ 0.3048006 m| 1 m ≈ 3.28084 ft-us
ft| Foot| 英尺| 1 ft = 0.3048 m | 1 m ≈ 3.28084 ft
fathom| Fathom| 英寻| 1 fathom = 1.8288 m | 1 m ≈ 0.5468 fathom
mi| Mile| 英里| 1 mi = 1,609.344 m | 1 m ≈ 0.00062137 mi
nMi| Nautical mile| 海里| 1 nMi = 1,852 m| 1 m ≈ 0.00053996 nMi
## 换算方法说明

### 公制单位换算（nm/km）

进率规则：相邻单位进率为 10（如 `1 cm = 10 mm`）。

公式：`目标单位值 = 原值 × 10^(原单位指数 - 目标单位指数)`

例：`5 km → m = 5 × 10³ = 5,000 m`

### 英制 / 特殊单位换算（in/nMi）

直接乘法：`目标值 = 原值 × 换算系数`（见上表）

例：`10 in → m = 10 × 0.0254 = 0.254 m`

反向换算：`原值 = 目标值 ÷ 换算系数`

例：`100 m → mi = 100 ÷ 1609.344 ≈ 0.0621 mi`

## 实用提示

- **单位差异注意**：
  - 美制英尺（`ft-us`）与标准英尺（`ft`）差异极小（约 0.0000006 m），日常可通用。
  - 海里（`nMi`）专用于航海 / 航空，与英里（`mi`）不同。

- **更多工具**：
  - 如需批量计算，推荐使用在线换算器，支持实时互转。

此表综合了国际标准（SI）、英制及特殊用途单位，数据源自权威计量资料。若有特定场景需求（如科学计算或工程精度），可进一步提供细分换算系数。
## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Length" :key="index">
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
