---
sidebar: false
aside: false
lastUpdated: false
head:
  - - meta
    - name: description
      content: 千米到英寸转换器，支持km转in、英尺换算、英制单位转换。提供长度单位换算表、米换算英尺、英寸厘米换算等多种单位转换功能�?
  - - meta
    - name: keywords
      content: 单位转换�?单位换算,长度单位转换�?长度单位转换,尺寸换算,长度单位换算,英尺换算,英寸换算,英制单位,ft单位,英尺和米换算,英寸和厘米换�?一英尺等于多少�?一英寸等于多少厘米
---
# 长度单位换算

千米到英寸转换器是一个专业的长度单位换算工具，支持公制和英制单位之间的精确转换。无论您需要进行km转in、英尺换算、还是英寸厘米换算，我们的转换器都能为您提供准确的结果。本工具特别适用于工程设计、建筑测量、国际贸易等需要精确长度单位转换的场景�?

---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
const seoKey = ['单位转换�?,'单位换算','长度单位转换�?,'长度单位转换','尺寸换算','长度单位换算','长度单位换算�?,'一海里等于多少公里','一英里等于多少�?,'miles','海里和公里怎么换算','mile','一英里等于多少公里','英里和公里换�?,'米换算英�?,'英尺单位','英制','英尺和英寸的换算','英尺英寸','英尺和米换算','ft单位','英尺 �?,'一米等于多少英�?,'英尺厘米换算','英寸和英�?,'ft to m','�?,'英尺换算�?,'英尺转换','ft和m换算','六英�?,'英尺和米','一英尺等于多少英寸','feet 多少�?,'米和英尺换算','feet是什么单�?,'英尺换算厘米','英制单位','英尺和英�?,'英寸 厘米','一英尺','一英尺等于多少�?,'公尺','来源','ft是什么单�?,'一英尺等于多少厘米','英尺和厘米的换算','英里','foot','厘米和英寸换�?,'英尺和米的换�?,'英尺换算','ft','一英寸等于多少厘米','英寸换算','英寸和厘米的换算']
const convert = inject('convert')
const options =  [
  { label: '纳米', value: 'nm' },
  { label: '微米', value: 'μm' },
  { label: '毫米', value: 'mm' },
  { label: '厘米', value: 'cm' },
  { label: '�?, value: 'm' },
  { label: '千米', value: 'km' },
  { label: '英寸', value: 'in' },
  { label: '�?, value: 'yd' },
  { label: '英尺-us', value: 'ft-us' },
  { label: '英尺', value: 'ft' },
  { label: '�?, value: 'fathom' },
  { label: '英里', value: 'mi' },
  { label: '海里', value: 'nMi' }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur",
    message: '请输入数�?
  },
  to:{
    required: true,
    trigger: "select",
    message: '请选择转换单位'
  },
  from:{
    required: true,
    trigger: "select",
    message: '请选择原始单位'
  }
}
const form = reactive({
  number:1,
  to:'in',
  from:'km',
  result:'',
  title:'长度单位换算',
})
if(form.number){
  form.result = `${form.number}${form.from} = ${convert(form.number).from(form.from).to(form.to)}${form.to}`
}
const convertHandler = (e) => {
   e?.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number}${form.from} = ${convert(form.number).from(form.from).to(form.to)}${form.to}`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�?  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要换算的数�? />
  </n-form-item>
  <n-form-item label="�? path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="�? path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择换算单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card 
  :title="form.title"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}�?/span>
    </div>
  </template>
</n-card>

## 常用长度单位转换公式

### 千米到英寸转�?
- **千米转英�?*�? km = 39,370.08 in
- **英寸转千�?*�? in = 0.0000254 km
- **转换公式**：英寸数 = 千米�?× 39,370.08

### 英尺和米的换�?
- **英尺转米**�? ft = 0.3048 m
- **米转英尺**�? m = 3.28084 ft
- **一英尺等于多少英寸**�? ft = 12 in

### 英寸和厘米换�?
- **英寸转厘�?*�? in = 2.54 cm
- **厘米转英�?*�? cm = 0.3937 in
- **一英寸等于多少厘米**�? in = 2.54 cm

## 长度单位换算�?

单位符号| 英文全称| 中文名称| 换算公式（以米为基准）| 示例换算
---|---|---|---|---
km| Kilometer| 千米| 1 km = 10³ m| 1 m = 0.001 km
m| Meter| 米| 1 m = 1 m| 基准单位
ft| Foot| 英尺| 1 ft = 0.3048 m| 1 m �?3.281 ft
in| Inch| 英寸| 1 in = 0.0254 m | 1 m �?39.37 in
cm| Centimeter| 厘米| 1 cm = 0.01 m| 1 m = 100 cm

## 换算方法说明

### 公制单位换算（nm/km�?

进率规则：相邻单位进率为 10（如 `1 cm = 10 mm`）�?

公式：`目标单位�?= 原�?× 10^(原单位指�?- 目标单位指数)`

例：`5 km �?m = 5 × 10³ = 5,000 m`

### 英制 / 特殊单位换算（in/nMi�?

直接乘法：`目标�?= 原�?× 换算系数`（见上表�?

例：`10 in �?m = 10 × 0.0254 = 0.254 m`

反向换算：`原�?= 目标�?÷ 换算系数`

例：`100 m �?mi = 100 ÷ 1609.344 �?0.0621 mi`

## 实用提示

- **单位差异注意**�?
  - 海里（`nMi`）专用于航海 / 航空，与英里（`mi`）不同�?
  - 英制单位（英尺、英寸）与公制单位（米、厘米）换算需要特定系数�?

- **更多工具**�?
  - 如需批量计算，推荐使用在线换算器，支持实时互转�?

## 常见问题解答

### ft是什么单位？
ft是英尺（foot）的缩写，是英制长度单位�?英尺等于12英寸，约等于30.48厘米�?.3048米�?

### feet是什么单位？
feet是foot的复数形式，即英尺的复数。在测量中，feet通常用来表示多个英尺的长度�?

### 一英尺等于多少米？
一英尺等于0.3048米，这是国际标准的换算比例。反过来，一米约等于3.28084英尺�?

### 一英尺等于多少厘米�?
一英尺等于30.48厘米。这个换算在日常生活和工程测量中经常用到�?

### 一英寸等于多少厘米�?
一英寸等于2.54厘米，这是英制和公制长度单位之间最常用的换算关系之一�?

### 英制单位有哪些？
常见的英制长度单位包括：英寸(in)、英�?ft)、码(yd)、英�?mi)等。这些单位主要在美国、英国等国家使用�?

### 六英尺是多少米？
六英尺等�?.8288米（6 × 0.3048 = 1.8288）。这个高度在人体身高测量中比较常见�
