---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/
      linkText: 功率转换
  - - link: /Power/GW-to-hp
      linkText: 吉瓦转英制马力
head:
  - - meta
    - name: description
      content: "提供吉瓦 (GW) 到英制马力 (hp) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "吉瓦转英制马力,GW到hp换算,功率单位转换公式,功率单位换算工具,美系重型设备功率单位"
---
# 吉瓦 (GW) 到英制马力 (hp) 换算

这是关于 **吉瓦转英制马力** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "吉瓦 (GW)","value": "GW" },
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
  title:'吉瓦转英制马力',
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

1 英制马力 (hp) ≈ 0.7457 千瓦 (kW) = 0.0007457 兆瓦 (MW) = 0.0000007457 吉瓦 (GW)

## 生活中的应用示例

- **美系大型船舶引擎功率**：如万吨级货轮发动机功率可达数千 hp，即数百 kW 或数 GW。
- **重型机械设备进出口匹配**：用于将国际标准 GW 转换为北美常用 hp 进行设备选型。
- **工业机械动力系统对比**：在进口美系压缩机或泵时，需进行 GW 与 hp 的互换计算。

## 使用建议

- **跨标准重型设备选型**：适用于从国际单位制（GW）到美制单位（hp）的能量转换计算。
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