---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Inch-to-Fathom
      linkText: 英寸到英寻
head:
  - - meta
    - name: description
      content: "英寸 (in) 到英寻 (fathom) 的长度单位换算指南。了解如何通过公式 fathom = in × 0.013889 转换为英寻。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 英寸, 英寻, in, fathom, 英寸到英寻, 长度转换指南"
---
# 英寸 (in) 到 英寻 (fathom) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.013889
    form.result = `${form.number}in = ${convertedValue.toFixed(6)}fathom`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="英寸 (in)">
    <n-input-number v-model:value="form.number" placeholder="输入英寸" style="width: 100%" />
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

英寸 (in) 和英寻 (fathom) 是测量日常物体尺寸和水下距离时常用的单位，在以下真实场景中非常重要：

- **潜艇制造**：
  - 潜艇表面涂层可能采用纳米材料进行防腐蚀处理，而潜艇的活动范围通常以英寻衡量。
  - 示例：某潜艇表面纳米涂层厚度为 200in，等于 2.7778fathom，但其巡航深度可达数百英寻。

- **海洋科学研究**：
  - 科学家在研究深海微生物或纳米级颗粒物时，实验室测量其尺寸（以英寸表示），而在报告中描述这些生物的分布范围时则使用英寻。
  - 示例：某次海洋调查发现某种英寸级浮游生物分布在 10 米深度范围内，相当于约 5.4681fathom 的垂直距离。

- **精密水下仪器制造**：
  - 某些高精度声呐系统需要英寸级别的制造精度，但它们探测的距离可能跨越数英寻。
  - 示例：某声呐系统的分辨率达到 10in（即 0.13889fathom），能够探测 10 英寻范围内的物体。

- **航海与潜水作业**：
  - 在潜水作业中，设备的耐压外壳厚度常以英寸标注，而潜水深度则使用英寻计算。
  - 示例：某潜水器外壳厚度为 50in，等于 0.69445fathom，但其最大下潜深度可达 100 英寻。

## 公式

从 **英寸 (in)** 转换到 **英寻 (fathom)** 的公式为：
$$ fathom = in \times 0.013889 $$

### 示例
- 72in = 1.000008fathom
- 144in = 2.000016fathom
- 360in = 5.00004fathom

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