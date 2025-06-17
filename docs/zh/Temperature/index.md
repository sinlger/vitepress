---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/index
      linkText: 温度单位换算
head:
  - - meta
    - name: description
      content: "温度单位换算指南。了解如何在摄氏度、华氏度、开尔文和兰金之间进行换算。"
  - - meta
    - name: keywords
      content: "温度, 单位换算, 摄氏度, 华氏度, 开尔文, 兰金, 温度换算指南"
---
# 温度单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { temperatureFiles } from '../../files';

const convert = inject('convert')
const options =  [
  { label: '摄氏度', value: 'C' },
  { label: '开尔文', value: 'K' },
  { label: '华氏度', value: 'F' },
  { label: '兰金度', value: 'R' }
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
  title:'温度单位换算',
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


## 定义及换算公式

| 单位符号 | 英文名称 | 单位名称   | 定义                                                                                     | 换算公式                                                                                     |
|----------|----------|------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| °C       | Celsius| 摄氏度      | 标准大气压下，纯水冰点为 0°C，沸点为 100°C（百分温标）。                           | - → K: ( K = °C + 273.15 )  <br> - → °F: ( °F = °C × 1.8 + 32 )  <br> - → R: ( R = (°C + 273.15) ×  )  |
| K        | Kelvin| 开尔文      | 热力学温标起点，绝对零度 = 0K（分子动能为零）。水的冰点 273.15K，沸点 373.15K .    | - → °C: ( °C = K - 273.15 )  <br> - → °F: ( °F = (K - 273.15) × 1.8 + 32 )  <br> - → R: ( R = K ×  )     |
| °F       | Fahrenheit  | 华氏度      | 标准大气压下，纯水冰点为 32°F，沸点为 212°F（180 等分）。                     | - → °C: ( °C = (°F - 32) ÷ 1.8 )  <br> - → K: ( K = (°F - 32) ÷ 1.8 + 273.15 )  <br> - → R: ( R = °F + 459.67 )  |
| R       | Rankine | 兰金温标    | 绝对温标的英制单位，绝对零度 = 0R。与华氏度线性相关。                             | - → °F: ( °F = R - 459.67 )  <br> - → K: ( K = R ×  )  <br> - → °C: ( °C = (R × ) - 273.15 ) |

## 补充说明

### 绝对零度
- 开尔文（K）和兰金（R）的零点均表示 “分子动能最低的理论极限”（即 -273.15°C / -459.67°F）。

### 日常使用场景
- **°C**：全球通用（除美国外），科学和日常生活；
- **°F**：美国常用，气象与体温；
- **K**：科学领域（热力学、天文），国际单位制基本单位；
- **R**：工程领域（如热力学分析），较少见。

### 科学严谨性
- 开尔文（K）是国际单位制（SI）基本单位，定义不依赖物质特性，优于摄氏温标。

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in temperatureFiles" :key="index">
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