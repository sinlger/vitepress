---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Mass/index
      linkText: 质量换算
  - - link: /Mass/mt-to-st
      linkText: 公吨到英�?
head:
  - - meta
    - name: description
      content: "质量单位换算指南，涵盖公�?(mt) 到英�?(st) 的详细换算公式与说明�?
  - - meta
    - name: keywords
      content: "质量, 单位换算, 公吨, 英石, mt, st, 公吨到英�? 质量换算指南"
---
# 公吨 (mt) �?英石 (st) 的换�?
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Mass } from '../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 157.473
    form.result = `${form.number}mt = ${convertedValue.toFixed(3)}st`
  } else {
    form.result = '请输入有效的数值�?
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="公吨 (mt)">
    <n-input-number v-model:value="form.number" placeholder="输入公吨" style="width: 100%" />
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

�?**公吨 (mt)** 换算�?**英石 (st)** 的公式为�?
$$ st = mt \times 157.473 $$

## 公吨到英石换算指�?

在药物剂量计算和精细化学测量中，质量单位的换算是一个常见需求。本文专注于公吨 (mt) 到英�?(st) 的换算，提供了详细的公式与实用示例�?

### 为什么需�?mt �?st 的换算？

公吨和英石是常见的质量单位，尤其在医学、药理学以及精细化学品行业中尤为重要。通过精确的换算，可以确保测量的一致性和准确性�?

### mt �?st 的换算方�?

从公吨到英石的换算公式为�?

- **公式�?* `st = mt × 157.473`

### 实际应用示例

以下是一些常见的换算实例�?

- 1 mt = 157.473 st
- 2 mt = 314.946 st
- 0.5 mt = 78.7365 st

### 总结

掌握公吨到英石的换算可以帮助您更好地理解和使用这些质量单位。希望本指南能为您提供有价值的参考�?

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
