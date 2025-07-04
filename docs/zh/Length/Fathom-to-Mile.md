---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Fathom-to-Mile
      linkText: 英寻到英里
head:
  - - meta
    - name: description
      content: "英寻 (fathom) 到英里 (mi) 的长度单位换算指南。了解如何通过公式 mi = fathom × 0.00113636 换算为英里。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 英寻, 英里, fathom, mi, 英寻到英里, 长度换算指南"
---
# 英寻 (fathom) 到 英里 (mi) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.00113636
    form.result = `${form.number}fathom = ${convertedValue.toFixed(6)}mi`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="英寻 (fathom)">
    <n-input-number v-model:value="form.number" placeholder="输入英寻" style="width: 100%" />
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

## 实际应用

英寻 (fathom) 和英里 (mi) 是测量水下距离和宏观距离时常用的单位，在以下真实场景中非常重要：

- **潜艇制造**：
  - 潜艇表面涂层可能采用纳米材料进行防腐蚀处理，而潜艇的巡航半径通常以英里衡量。
  - 示例：某潜艇表面纳米涂层厚度为 200fathom，等于 0.227272mi，但其巡航半径可达数千英里。

- **海洋科学研究**：
  - 科学家在研究深海微生物或纳米级颗粒物时，实验室测量其尺寸（以英寻表示），而在报告中描述这些生物的分布范围时则使用英里。
  - 示例：某次海洋调查发现某种英寻级浮游生物分布在 100 米深度范围内，相当于约 0.054681mi 的垂直距离。

- **精密水下仪器制造**：
  - 某些高精度声呐系统需要英寻级别的制造精度，但它们探测的距离可能跨越数英里。
  - 示例：某声呐系统的分辨率达到 10fathom（即 0.0113636mi），能够探测 10mi 范围内的物体。

- **航海与潜水作业**：
  - 在潜水作业中，设备的耐压外壳厚度常以英寻标注，而潜水路径长度则使用英里计算。
  - 示例：某潜水器外壳厚度为 50fathom，等于 0.056818mi，但其航行路径可达 50mi。

## 公式

从 **英寻 (fathom)** 换算到 **英里 (mi)** 的公式为：
$$ mi = fathom \times 0.00113636 $$

### 示例
- 880fathom = 1.0000mi
- 440fathom = 0.5000mi
- 88fathom = 0.1000mi

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Length" :key="index">
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