---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Foot-us-to-Fathom
      linkText: 英尺-us到英寻
head:
  - - meta
    - name: description
      content: "美制英尺 (ft-us) 到英寻 (fathom) 的长度单位换算指南。了解如何通过公式 fathom = ft-us × 0.166667 换算为英寻。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 美制英尺, 英寻, ft-us, fathom, 英尺-us到英寻, 长度换算指南"
---
# 美制英尺 (ft-us) 到 英寻 (fathom) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.166667
    form.result = `${form.number}ft-us = ${convertedValue.toFixed(6)}fathom`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="美制英尺 (ft-us)">
    <n-input-number v-model:value="form.number" placeholder="输入美制英尺" style="width: 100%" />
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

美制英尺 (ft-us) 和英寻 (fathom) 是测量日常物体尺寸和水下距离时常用的单位，在以下真实场景中非常重要：

- **潜艇制造**：
  - 潜艇表面涂层可能采用纳米材料进行防腐蚀处理，而潜艇的活动范围通常以英寻衡量。
  - 示例：某潜艇表面纳米涂层厚度为 200ft-us，等于 33.3334fathom，但其巡航深度可达数百英寻。

- **海洋科学研究**：
  - 科学家在研究深海微生物或纳米级颗粒物时，实验室测量其尺寸（以美制英尺表示），而在报告中描述这些生物的分布范围时则使用英寻。
  - 示例：某次海洋调查发现某种美制英尺级浮游生物分布在 10 米深度范围内，相当于约 5.4681fathom 的垂直距离。

- **精密水下仪器制造**：
  - 某些高精度声呐系统需要美制英尺级别的制造精度，但它们探测的距离可能跨越数英寻。
  - 示例：某声呐系统的分辨率达到 10ft-us（即 1.66667fathom），能够探测 10 英寻范围内的物体。

- **航海与潜水作业**：
  - 在潜水作业中，设备的耐压外壳厚度常以美制英尺标注，而潜水深度则使用英寻计算。
  - 示例：某潜水器外壳厚度为 50ft-us，等于 8.33335fathom，但其最大下潜深度可达 100 英寻。

## 公式

从 **美制英尺 (ft-us)** 换算到 **英寻 (fathom)** 的公式为：
$$ fathom = ft-us \times 0.166667 $$

### 示例
- 6ft-us = 1.000002fathom
- 12ft-us = 2.000004fathom
- 30ft-us = 5.00001fathom

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