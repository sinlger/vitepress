---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Angle/
      linkText: 角度转换
  - - link: /zh/Angle/grad-to-rad
      linkText: 梯度 (grad) 到 弧度 (rad) 换算
head:
  - - meta
    - name: description
      content: "将梯度(grad)转换为弧度(rad)的在线工具和换算公式。提供简单易用的角度单位转换计算器。"
  - - meta
    - name: keywords
      content: "角度转换, 梯度转弧度, grad到rad换算, 在线计算器, 数学工具, 单位转换"
---
# 梯度 (grad) 到 弧度 (rad) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Angle } from '../../files';
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * Math.PI / 200
    form.result = `${form.number}grad = ${convertedValue.toFixed(4)}rad`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="梯度 (grad)">
    <n-input-number v-model:value="form.number" placeholder="输入梯度" style="width: 100%" />
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

从 **梯度 (grad)** 转换到 **弧度 (rad)** 的公式为：
$$ rad = grad \times \frac{\pi}{200} $$

## 梯度到弧度换算指南

角度测量是数学和工程领域中的基础概念之一，尤其在几何学、物理学以及计算机图形学中应用广泛。本文将介绍如何将梯度 (grad) 转换为弧度 (rad)，并提供一些实用示例。

### 为什么需要 grad 到 rad 的换算？

梯度和弧度是两种常用的角度单位。其中，弧度在数学计算中更为常用，因为三角函数的导数和积分在使用弧度时具有更简洁的形式。通过精确的换算，可以确保计算的一致性和准确性。

### grad 到 rad 的换算方法

从梯度到弧度的换算公式为：

- **公式：** `rad = grad × π ÷ 200`

### 实际应用示例

以下是一些常见的换算实例：

- 0 grad = 0 rad
- 33.3333 grad ≈ 0.5236 rad
- 50 grad ≈ 0.7854 rad
- 100 grad ≈ 1.5708 rad
- 200 grad ≈ 3.1416 rad

### 总结

掌握梯度到弧度的换算可以帮助您更好地理解和使用这些角度单位。希望本指南能为您提供有价值的参考。

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file, index) in Angle" :key="index">
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