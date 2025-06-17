---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Mass/
      linkText: 质量换算
  - - link: /Mass/oz-to-mt
      linkText: 盎司到公吨
head:
  - - meta
    - name: description
      content: "质量单位换算指南，涵盖盎司 (oz) 到公吨 (mt) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "质量, 单位换算, 盎司, 公吨, oz, mt, 盎司到公吨, 质量换算指南"
---
# 盎司 (oz) 到 公吨 (mt) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.000028349523125
    form.result = `${form.number}oz = ${convertedValue.toFixed(6)}mt`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="盎司 (oz)">
    <n-input-number v-model:value="form.number" placeholder="输入盎司" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **盎司 (oz)** 换算到 **公吨 (mt)** 的公式为：
$$ mt = oz \times 0.000028349523125 $$

## 盎司到公吨换算指南

在药物剂量计算和精细化学测量中，质量单位的换算是一个常见需求。本文专注于盎司 (oz) 到公吨 (mt) 的换算，提供了详细的公式与实用示例。

### 为什么需要 oz 到 mt 的换算？

盎司和公吨是常见的质量单位，尤其在医学、药理学以及精细化学品行业中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### oz 到 mt 的换算方法

从盎司到公吨的换算公式为：

- **公式：** `mt = oz × 0.000028349523125`

### 实际应用示例

以下是一些常见的换算实例：

- 1 oz = 0.0000283495 mt
- 2 oz = 0.000056699 mt
- 100000 oz = 2.83495 mt

### 总结

掌握盎司到公吨的换算可以帮助您更好地理解和使用这些质量单位。希望本指南能为您提供有价值的参考。

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