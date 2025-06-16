---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/
      linkText: 功率转换
  - - link: /Power/PS-to-GW
      linkText: 公制马力转吉瓦
head:
  - - meta
    - name: description
      content: "提供公制马力 (PS) 到吉瓦 (GW) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "公制马力转吉瓦,PS到GW换算,功率单位转换公式,功率单位换算工具,汽车动力与国家级能源设施功率单位"
---
# 公制马力 (PS) 到吉瓦 (GW) 换算

这是关于 **公制马力转吉瓦** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "公制马力 (PS)","value": "PS" },
  { "label": "吉瓦 (GW)","value": "GW" }
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
  title:'公制马力转吉瓦',
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

## 换算公式

1 吉瓦 (GW) ≈ 1,359,621.62 公制马力 (PS)

## 生活中的应用示例

- **核电站输出功率统计**：单机组容量可达 1 GW，即约 136 万 PS。
- **大型光伏电站发电能力分析**：如 10 GW 电站年发电量可满足 400 万户家庭用电。
- **跨国电网能耗调度**：用于将多个 GW 级发电站整合为 PS 单位进行本地化设备匹配。

## 使用建议

- **国家级能源系统管理**：适用于从国际单位（GW）到欧洲常用单位（PS）的能量转换计算。
- **科学计算**：使用国际单位制（瓦特 W 或兆瓦 MW），便于统一标准。

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