---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/Btu_s-to-hp
      linkText: 英热单位每秒转英制马力
head:
  - - meta
    - name: description
      content: "提供英热单位每秒 (Btu/s) 到英制马力 (hp) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "英热单位每秒转英制马力,Btu/s到hp换算,功率单位换算公式,功率单位换算工具,暖通与美系机械设备功率单位"
---
# 英热单位每秒 (Btu/s) 到英制马力 (hp) 换算

这是关于 **英热单位每秒转英制马力** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" },
  { "label": "英制马力 (hp)","value": "hp" }
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
  title:'英热单位每秒转英制马力',
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

1 英制马力 (hp) ≈ 0.7457 千瓦 (kW) ≈ 0.7068 英热单位每秒 (Btu/s)

## 生活中的应用示例

- **美系汽车发动机功率标注**：如 200 hp ≈ 149.14 kW ≈ 211.28 Btu/s。
- **船舶引擎功率匹配**：用于将暖通设备以 Btu/s 表示的功率换算为北美常用 hp 进行选型。
- **工业机械动力系统对比**：在进口美系压缩机或泵时，需进行 Btu/s 与 hp 的互换计算。

## 使用建议

- **跨标准机械设备选型**：适用于从国际单位（Btu/s）到北美单位（hp）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W 或千瓦 kW），便于统一标准。

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