---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页

  - - link: /Area/SquareKilometer-to-Hectare
      linkText: 平方千米到公顷
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖平方千米 (km²) 到公顷 (ha) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "面积, 单位换算, 平方千米, 公顷, km², ha, 平方千米到公顷, 面积换算指南, 平方千米转公顷, 公顷换算平方千米, 平方千米和公顷的换算, 一平方千米等于多少公顷, 公顷和平方千米换算, 平方千米单位, 公顷单位换算, 平方千米符号, 公顷符号, 平方千米换算公顷, 公顷和平方千米, 平方千米到公顷, 公顷到平方千米, 面积单位换算, 一公顷等于多少平方千米, 平方千米和公顷, 土地面积换算, 农业面积单位, 公顷换算, 平方千米换算, 面积计算, 土地测量单位, 公顷面积, 平方千米面积, 大面积单位, 土地规划单位, 农田面积换算, 林地面积单位"
---
# 平方千米 (km²) 到 公顷 (ha) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Area } from '../../files';
const seoKey = [
  '平方千米转公顷',
  '公顷换算平方千米',
  '平方千米和公顷的换算',
  '一平方千米等于多少公顷',
  '公顷和平方千米换算',
  '平方千米单位',
  '公顷单位换算',
  '平方千米符号',
  '公顷符号',
  '平方千米换算公顷',
  '公顷和平方千米',
  '平方千米到公顷',
  '公顷到平方千米',
  '面积单位换算',
  '一公顷等于多少平方千米',
  '平方千米和公顷',
  '土地面积换算',
  '农业面积单位',
  '公顷换算',
  '平方千米换算',
  '面积计算',
  '土地测量单位',
  '公顷面积',
  '平方千米面积',
  '大面积单位',
  '土地规划单位',
  '农田面积换算',
  '林地面积单位'
]
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '平方千米 (km²) 到 公顷 (ha) 的换算',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 100
    form.result = `${form.number}km² = ${convertedValue.toFixed(2)}ha`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="平方千米 (km²)">
    <n-input-number v-model:value="form.number" placeholder="输入平方千米" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  
  :title="form.title"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
    <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## 公式

从 **平方千米 (km²)** 换算到 **公顷 (ha)** 的公式为：
$$ ha = km² \times 100 $$

## 平方千米到公顷换算指南

在土地测量和农业规划中，面积单位的换算是一个常见需求。本文专注于平方千米 (km²) 到公顷 (ha) 的换算，提供了详细的公式与实用示例。

### 为什么需要 km² 到 ha 的换算？

平方千米和公顷是常见的面积单位，尤其在农业、林业以及大规模土地测量中尤为重要。通过精确的换算，可以确保测量的一致性和准确性。

### km² 到 ha 的换算方法

从平方千米到公顷的换算公式为：

- **公式：** `ha = km² × 100`

### 实际应用示例

以下是一些常见的换算实例：

- 1 km² = 100 ha
- 5 km² = 500 ha
- 10 km² = 1000 ha

### 总结

掌握平方千米到公顷的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考。

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