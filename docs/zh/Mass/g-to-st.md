---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Mass/index
      linkText: 质量换算
  - - link: /Mass/g-to-st
      linkText: 克到英石
head:
  - - meta
    - name: description
      content: "质量单位换算指南，涵盖克 (g) 到英石 (st) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "质量, 单位换算, 克, 英石, g, st, 克到英石, 质量换算指南"
---
# 克 (g) 到 英石 (st) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.000157473
    form.result = `${form.number}g = ${convertedValue.toFixed(6)}st`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="克 (g)">
    <n-input-number v-model:value="form.number" placeholder="输入克" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 公式

从 **克 (g)** 换算到 **英石 (st)** 的公式为：
$$ st = g \times 0.000157473 $$

## 克到英石换算指南

在药物剂量计算和精细化学测量中，质量单位的换算是一个常见需求。本文专注于克 (g) 到英石 (st) 的换算，提供了详细的公式与实用示例。

### 为什么需要 g 到 st 的换算？

克和英石是常见的质量单位，尤其在医学、药理学以及精细化学品行业中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### g 到 st 的换算方法

从克到英石的换算公式为：

- **公式：** `st = g × 0.000157473`

### 实际应用示例

以下是一些常见的换算实例：

- 1 g = 0.000157473 st
- 10000 g = 1.57473 st
- 5000 g = 0.787365 st

### 总结

掌握克到英石的换算可以帮助您更好地理解和使用这些质量单位。希望本指南能为您提供有价值的参考。

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Mass" :key="index">
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