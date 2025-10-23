---
sidebar: false
aside: false
lastUpdated: false
head:
  - - meta
    - name: description
      content: 米到码转换器，支持m转yd、英尺换算、英制单位转换。提供长度单位换算表、米换算英尺、英寸厘米换算、一米等于多少英尺等多种单位转换功能。
  - - meta
    - name: keywords
      content: 单位转换器,单位换算,长度单位转换器,长度单位转换,尺寸换算,长度单位换算,英尺换算,英寸换算,英制单位,ft单位,英尺和米换算,一米等于多少英尺,英尺厘米换算,ft to m,英尺转换,feet是什么单位
---
# 长度单位换算

米到码转换器是一个专业的长度单位换算工具，支持公制和英制单位之间的精确转换。无论您需要进行m转yd、英尺换算、还是英寸厘米换算，我们的转换器都能为您提供准确的结果。特别适用于体育场地测量、纺织行业、建筑工程等需要精确长度单位转换的场景。

---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
const seoKey = ['单位转换器','单位换算','长度单位转换器','长度单位转换','尺寸换算','长度单位换算','长度单位换算表','一海里等于多少公里','一英里等于多少米','miles','海里和公里怎么换算','mile','一英里等于多少公里','英里和公里换算','米换算英尺','英尺单位','英制','英尺和英寸的换算','英尺英寸','英尺和米换算','ft单位','英尺 米','一米等于多少英尺','英尺厘米换算','英寸和英尺','ft to m','呎','英尺换算米','英尺转换','ft和m换算','六英尺','英尺和米','一英尺等于多少英寸','feet 多少米','米和英尺换算','feet是什么单位','英尺换算厘米','英制单位','英尺和英寸','英寸 厘米','一英尺','一英尺等于多少米','公尺','来源','ft是什么单位','一英尺等于多少厘米','英尺和厘米的换算','英里','foot','厘米和英寸换算','英尺和米的换算','英尺换算','ft','一英寸等于多少厘米','英寸换算','英寸和厘米的换算']
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
    trigger: "blur",
    message: '请输入数字'
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
  to:'yd',
  from:'m',
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
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## 常用长度单位转换公式

### 米到码转换
- **米转码**：1 m = 1.0936 yd
- **码转米**：1 yd = 0.9144 m
- **转换公式**：码数 = 米数 × 1.0936

### 英尺和米的换算
- **英尺转米**：1 ft = 0.3048 m
- **米转英尺**：1 m = 3.28084 ft
- **一米等于多少英尺**：1 m ≈ 3.281 ft

### 英寸和厘米换算
- **英寸转厘米**：1 in = 2.54 cm
- **厘米转英寸**：1 cm = 0.3937 in
- **一英寸等于多少厘米**：1 in = 2.54 cm

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

## 常见问题解答

### ft是什么单位？
ft是英尺（foot）的缩写，是英制长度单位。1英尺等于12英寸，约等于30.48厘米或0.3048米。

### feet是什么单位？
feet是foot的复数形式，即英尺的复数。在测量中，feet通常用来表示多个英尺的长度。

### 一米等于多少英尺？
一米等于3.28084英尺，这是国际标准的换算比例。在实际应用中，通常简化为1米≈3.281英尺。

### 英尺和米换算公式是什么？
- 英尺转米：米数 = 英尺数 × 0.3048
- 米转英尺：英尺数 = 米数 × 3.28084

### ft to m怎么换算？
ft to m的换算很简单：将英尺数乘以0.3048即可得到米数。例如：10 ft = 10 × 0.3048 = 3.048 m

### 英制单位有哪些？
常见的英制长度单位包括：英寸(in)、英尺(ft)、码(yd)、英里(mi)等。这些单位主要在美国、英国等国家使用。

### 六英尺是多少米？
六英尺等于1.8288米（6 × 0.3048 = 1.8288）。这个高度在人体身高测量中比较常见。

此表综合了国际标准（SI）、英制及特殊用途单位，数据源自权威计量资料。若有特定场景需求（如科学计算或工程精度），可进一步提供细分换算系数。
