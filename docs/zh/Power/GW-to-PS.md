---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/GW-to-PS
      linkText: 吉瓦转公制马力
head:
  - - meta
    - name: description
      content: "提供吉瓦 (GW) 到公制马力 (PS) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "吉瓦转公制马力,GW到PS换算,功率单位换算公式,功率单位换算工具,国家级能源设施与机械设备功率单位"
---
# 吉瓦 (GW) 到公制马力 (PS) 换算

这是关于 **吉瓦转公制马力** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "吉瓦 (GW)","value": "GW" },
  { "label": "公制马力 (PS)","value": "PS" }
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
  number:null,
  to:'',
  from:'',
  result:'',
  title:'吉瓦转公制马力',
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
    <n-button type="info" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 换算公式

1 公制马力 (PS) ≈ 0.7355 千瓦 (kW) = 0.0007355 兆瓦 (MW) = 0.0000007355 吉瓦 (GW)

## 生活中的应用示例

- **大型工业设备功率标注**：如万吨级压机或重型运输带的动力系统以 GW 表示输出功率。
- **跨国机械设备进出口匹配**：用于将国际标准 GW 换算为欧洲常用 PS 进行设备选型。
- **船舶推进系统功率分析**：万吨级货轮发动机功率可达数千 PS，即数百 MW 或数 GW。

## 使用建议

- **跨标准重型机械分析**：适用于从国际单位制（GW）到欧洲标准（PS）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W 或兆瓦 MW），便于统一标准。

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file,index) in Power" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="info"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>