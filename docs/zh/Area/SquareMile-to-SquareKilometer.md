---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页

  - - link: /Area/SquareMile-to-SquareKilometer
      linkText: 平方英里到平方千米
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖平方英里 (mi²) 到平方千米 (km²) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "面积, 单位换算, 平方英里, 平方千米, mi², km², 平方英里到平方千米, 面积换算指南"
---
# 平方英里 (mi²) 到 平方千米 (km²) 的换算
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
    const convertedValue = parseFloat(form.number) * 2.589988110336
    form.result = `${form.number}mi² = ${convertedValue.toFixed(4)}km²`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 公式

从 **平方英里 (mi²)** 换算到 **平方千米 (km²)** 的公式为：
$$ km² = mi² \times 2.589988110336 $$

## 平方英里到平方千米换算指南

在地理测量和大面积土地规划中，面积单位的换算是一个常见需求。本文专注于平方英里 (mi²) 到平方千米 (km²) 的换算，提供了详细的公式与实用示例。

### 为什么需要 mi² 到 km² 的换算？

平方英里和平方千米是常见的面积单位，尤其在农业、土地规划以及大规模地理测量中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### mi² 到 km² 的换算方法

从平方英里到平方千米的换算公式为：

- **公式：** `km² = mi² × 2.589988110336`

### 实际应用示例

以下是一些常见的换算实例：

- 1 mi² = 2.5899 km²
- 5 mi² = 12.9499 km²
- 10 mi² = 25.8999 km²

### 总结

掌握平方英里到平方千米的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考。

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Area" :key="index">
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