---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度转换
  - - link: /Length/Nanometer-to-Mile
      linkText: 纳米到英里
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到英里 (mi) 的长度单位换算指南。了解如何通过公式 mi = nm × 0.00000000000062137 转换为英里。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 纳米, 英里, nm, mi, 纳米到英里, 长度转换指南"
---
# 纳米 (nm) 到 英里 (mi) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.00000000000062137
    form.result = `${form.number}nm = ${convertedValue.toFixed(15)}mi`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="纳米 (nm)">
    <n-input-number v-model:value="form.number" placeholder="输入纳米" style="width: 100%" />
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

## 实际应用

以下是 1nm 到 100000nm 每隔 10000nm 对应的英里值（基于公式 `mi = nm × 0.00000000000062137`）：

| 纳米 (nm) | 英里 (mi) |
|----------|-------------|
| 10000    | 0.0000000000062137 |
| 20000    | 0.0000000000124274 |
| 30000    | 0.0000000000186411 |
| 40000    | 0.0000000000248548 |
| 50000    | 0.0000000000310685 |
| 60000    | 0.0000000000372822 |
| 70000    | 0.0000000000434959 |
| 80000    | 0.0000000000497096 |
| 90000    | 0.0000000000559233 |
| 100000   | 0.0000000000621370 |

## 公式

从 **纳米 (nm)** 转换到 **英里 (mi)** 的公式为：
$$ mi = nm \times 0.00000000000062137 $$

### 示例
- 1000000000000nm = 0.621370000000000mi
- 500000000000nm = 0.310685000000000mi
- 1000nm = 0.000000000000621mi

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Length" :key="index">
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