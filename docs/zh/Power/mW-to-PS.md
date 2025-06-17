---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/MW-to-PS
      linkText: 兆瓦转公制马力
head:
  - - meta
    - name: description
      content: "提供兆瓦 (MW) 到公制马力 (PS) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "兆瓦转公制马力,MW到PS换算,功率单位换算公式,功率单位换算工具,工业机械功率单位"
---
# 兆瓦 (MW) 到公制马力 (PS) 换算

这是关于 **兆瓦转公制马力** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "兆瓦 (MW)","value": "MW" },
  { "label": "公制马力 (PS)","value": "PS" }
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
  title:'兆瓦转公制马力',
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

## 换算公式

1 公制马力 (PS) ≈ 0.7355 千瓦 (kW) = 0.0007355 兆瓦 (MW)

## 生活中的应用示例

- **大型机械设备功率标注**：如工业压缩机或液压泵常以 MW 表示输出功率。
- **农业机械动力系统匹配**：用于将欧洲标准 PS 换算为国际通用的 MW 进行功率对比。
- **船舶推进系统功率分析**：万吨级货轮发动机功率可达数百 MW，常用 PS 进行本地化表示。

## 使用建议

- **跨国工业设备选型**：适用于从国际单位 MW 换算为欧洲常用单位 PS 的功率计算。
- **科学计算**：使用国际单位（瓦特 W 或兆瓦 MW），便于统一标准。

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file,index) in Power" :key="index">
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