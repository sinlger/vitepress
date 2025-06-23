---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Nanometer-to-Centimeter
      linkText: 纳米到厘米
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到厘米 (cm) 的长度单位换算指南。了解如何通过公式 nm ÷ 10000000 换算为厘米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 纳米, 厘米, nm, cm, 纳米到厘米, 长度换算指南"
---
# 纳米 (nm) 到 厘米 (cm) 的换算
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
    const convertedValue = parseFloat(form.number) / 10000000
    form.result = `${form.number}nm = ${convertedValue.toFixed(7)}cm`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 实际应用

纳米 (nm) 和厘米 (cm) 是测量微小尺寸和日常物体尺寸时常用的单位，在以下场景中非常重要：

- **纳米科技**：
  - 纳米材料的研究中，颗粒大小通常以纳米表示，而整体样品的尺寸可能用厘米衡量。
  - 示例：某纳米颗粒直径为 50nm，相当于 0.000005cm。

- **医学和生物学**：
  - 细胞结构的细节在纳米级别，而显微镜载玻片的厚度则用厘米表示。
  - 示例：红细胞直径约为 7000nm，即 0.0007cm。

- **电子制造**：
  - 芯片上的晶体管尺寸以纳米表示，而整个芯片的尺寸通常以厘米计算。
  - 示例：某芯片的晶体管栅极长度为 5nm，等于 0.000005cm。

- **精密工程**：
  - 光学元件的表面粗糙度常以纳米衡量，而透镜的整体尺寸则使用厘米。
  - 示例：高精度透镜表面粗糙度为 50nm，即 0.000005cm。

## 公式

从 **纳米 (nm)** 换算到 **厘米 (cm)** 的公式为：
$$ cm = nm \div 10000000 $$

### 示例
- 10000000nm = 1.0000000cm
- 5000000nm = 0.5000000cm
- 1000nm = 0.0001000cm

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