---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页

  - - link: /Area/Hectare-to-SquareKilometer
      linkText: 公顷到平方千米
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖公顷 (ha) 到平方千米 (km²) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "面积, 单位换算, 公顷, 平方千米, ha, km², 公顷到平方千米, 面积换算指南"
---
# 公顷 (ha) 到 平方千米 (km²) 的换算
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
    const convertedValue = parseFloat(form.number) / 100
    form.result = `${form.number}ha = ${convertedValue.toFixed(4)}km²`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="公顷 (ha)">
    <n-input-number v-model:value="form.number" placeholder="输入公顷" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **公顷 (ha)** 换算到 **平方千米 (km²)** 的公式为：
$$ km² = ha \div 100 $$

## 公顷到平方千米换算指南

在地理测量和城市规划中，面积单位的换算是一个常见需求。本文专注于公顷 (ha) 到平方千米 (km²) 的换算，提供了详细的公式与实用示例。

### 为什么需要 ha 到 km² 的换算？

公顷和平方千米是常见的面积单位，尤其在土地规划、农业以及大规模地理测量中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### ha 到 km² 的换算方法

从公顷到平方千米的换算公式为：

- **公式：** `km² = ha ÷ 100`

### 实际应用示例

以下是一些常见的换算实例：

- 1 ha = 0.01 km²
ddd
- 100 ha = 1 km²
- 500 ha = 5 km²

### 总结

掌握公顷到平方千米的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考。

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