---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Mass/
      linkText: 质量转换
  - - link: /zh/Mass/t-to-kg
      linkText: 吨到千克
head:
  - - meta
    - name: description
      content: "质量单位换算指南，涵盖吨 (t) 到千克 (kg) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "质量, 单位转换, 吨, 千克, t, kg, 吨到千克, 质量转换指南"
---
# 吨 (t) 到 千克 (kg) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Mass } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 1000
    form.result = `${form.number}t = ${convertedValue.toFixed(0)}kg`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="吨 (t)">
    <n-input-number v-model:value="form.number" placeholder="输入吨" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **吨 (t)** 转换到 **千克 (kg)** 的公式为：
$$ kg = t \times 1000 $$

## 吨到千克换算指南

在药物剂量计算和精细化学测量中，质量单位的换算是一个常见需求。本文专注于吨 (t) 到千克 (kg) 的换算，提供了详细的公式与实用示例。

### 为什么需要 t 到 kg 的换算？

吨和千克是常见的质量单位，尤其在医学、药理学以及精细化学品行业中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### t 到 kg 的换算方法

从吨到千克的换算公式为：

- **公式：** `kg = t × 1000`

### 实际应用示例

以下是一些常见的换算实例：

- 1 t = 1000 kg
- 2 t = 2000 kg
- 0.5 t = 500 kg

### 总结

掌握吨到千克的换算可以帮助您更好地理解和使用这些质量单位。希望本指南能为您提供有价值的参考。

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Mass" :key="index">
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