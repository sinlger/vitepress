---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页

  - - link: /Area/SquareMeter-to-Hectare
      linkText: 平方米到公顷
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖平方米 (m²) 到公�?(ha) 的详细换算公式与说明�?
  - - meta
    - name: keywords
      content: "面积, 单位换算, 平方�? 公顷, m², ha, 平方米到公顷, 面积换算指南, 平方米到公顷换算, m²到ha换算, 平方米转公顷, 米平方到公顷, 平方米公顷换算器, m²转ha, 平方米换算公�? 米平方转公顷, 平方米到公顷转换, m²公顷换算, 平方米公顷计�? 米平方公顷换�? 平方米转换公�? m²到公�? 平方米公顷转换器, 米平方到公顷换算, 平方米公顷换算公�? m²转换公顷, 平方米到公顷计算, 米平方转换公�? 平方米公顷换算表, m²公顷转换, 平方米转公顷计算, 米平方公顷转�? 平方米到公顷换算工具, m²到公顷换�? 平方米公顷单位换�? 面积换算"
---
# 平方�?(m²) �?公顷 (ha) 的换�?
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Area } from '../files';
const seoKey = [
  '平方米换算公�?,
  '平方米到公顷',
  '公顷换算',
  '面积单位换算',
  '平方米转公顷',
  '公顷计算',
  '土地面积换算',
  '农田面积计算',
  '平方米公顷对照表',
  '公顷面积单位',
  '平方米换算表',
  '公顷换算公式',
  '面积换算�?,
  '平方米符�?,
  '公顷符号',
  '土地测量单位',
  '农业面积单位',
  '面积转换工具',
  '平方米计�?,
  '公顷计算�?,
  '面积单位对照',
  '土地面积测量',
  '农田面积换算',
  '平方米到公顷公式',
  '公顷面积计算',
  '面积换算公式',
  '土地单位换算',
  '农业用地计算'
]
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '平方�?(m²) 到公�?(ha) 的换�?,
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 10000
    form.result = `${form.number}m² = ${convertedValue.toFixed(4)}ha`
  } else {
    form.result = '请输入有效的数值�?
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="平方�?(m²)">
    <n-input-number v-model:value="form.number" placeholder="输入平方�? style="width: 100%" />
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
      <span v-for="item of seoKey">{{item}}�?/span>
    </div>
  </template>
</n-card>

## 公式

�?**平方�?(m²)** 换算�?**公顷 (ha)** 的公式为�?
$$ ha = m² \div 10000 $$

## 平方米到公顷换算指南

在土地测量和农业规划中，面积单位的换算是一个常见需求。本文专注于平方�?(m²) 到公�?(ha) 的换算，提供了详细的公式与实用示例�?

### 为什么需�?m² �?ha 的换算？

平方米和公顷是常见的面积单位，尤其在农业、林业和土地规划中尤为重要。通过精确的换算，可以确保测量的一致性和准确性�?

### m² �?ha 的换算方�?

从平方米到公顷的换算公式为：

- **公式�?* `ha = m² ÷ 10000`

### 实际应用示例

以下是一些常见的换算实例�?

- 100 m² = 0.01 ha
- 10000 m² = 1 ha
- 50000 m² = 5 ha

### 总结

掌握平方米到公顷的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考�?

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
