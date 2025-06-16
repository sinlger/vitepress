---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Area/
      linkText: 面积转换
  - - link: /Area/SquareMile-to-Hectare
      linkText: 平方英里到公顷
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖平方英里 (mi²) 到公顷 (ha) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "面积, 单位转换, 平方英里, 公顷, mi², ha, 平方英里到公顷, 面积转换指南"
---
# 平方英里 (mi²) 到 公顷 (ha) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Area } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 258.9988110336
    form.result = `${form.number}mi² = ${convertedValue.toFixed(2)}ha`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="平方英里 (mi²)">
    <n-input-number v-model:value="form.number" placeholder="输入平方英里" style="width: 100%" />
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

从 **平方英里 (mi²)** 转换到 **公顷 (ha)** 的公式为：
$$ ha = mi² \times 258.9988110336 $$

## 平方英里到公顷换算指南

在土地测量和农业规划中，面积单位的换算是一个常见需求。本文专注于平方英里 (mi²) 到公顷 (ha) 的换算，提供了详细的公式与实用示例。

### 为什么需要 mi² 到 ha 的换算？

平方英里和公顷是常见的面积单位，尤其在农业、林业以及大规模土地测量中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### mi² 到 ha 的换算方法

从平方英里到公顷的换算公式为：

- **公式：** `ha = mi² × 258.9988110336`

### 实际应用示例

以下是一些常见的换算实例：

- 1 mi² = 258.9988110336 ha
- 5 mi² = 1294.994055168 ha
- 10 mi² = 2589.988110336 ha

### 总结

掌握平方英里到公顷的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考。

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file, index) in Area" :key="index">
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