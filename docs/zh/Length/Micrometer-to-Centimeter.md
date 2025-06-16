---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Micrometer-to-Centimeter
      linkText: 微米到厘米
head:
  - - meta
    - name: description
      content: "微米 (μm) 到厘米 (cm) 的长度单位换算指南。了解如何通过公式 μm ÷ 10000 转换为厘米。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 微米, 厘米, μm, cm, 微米到厘米, 长度转换指南"
---
# 微米 (μm) 到 厘米 (cm) 的换算
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
    const convertedValue = parseFloat(form.number) / 10000
    form.result = `${form.number}μm = ${convertedValue.toFixed(4)}cm`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="微米 (μm)">
    <n-input-number v-model:value="form.number" placeholder="输入微米" style="width: 100%" />
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

微米 (μm) 和厘米 (cm) 是测量微小尺寸和日常物体尺寸时常用的单位，在以下场景中非常重要：

- **半导体制造**：
  - 在芯片设计中，晶体管的栅极长度可能以纳米表示，而整体芯片的尺寸通常以毫米或厘米衡量。
  - 示例：某芯片的晶体管栅极长度为 7μm，相当于 0.0007cm。

- **医学和生物学**：
  - 细胞、细菌和病毒的大小通常在纳米到微米级别，而显微镜载玻片的厚度则用厘米表示。
  - 示例：红细胞直径约为 7μm，即 0.0007cm。

- **材料科学**：
  - 纳米级涂层厚度用于保护精密部件，而整体材料的尺寸可能用厘米计算。
  - 示例：某纳米防护膜厚度为 20μm，等于 0.002cm。

- **光学工程**：
  - 光学镜头的表面粗糙度常以微米衡量，而透镜的整体尺寸则使用厘米。
  - 示例：高精度透镜表面粗糙度为 50μm，即 0.005cm。

## 公式

从 **微米 (μm)** 转换到 **厘米 (cm)** 的公式为：
$$ cm = μm \div 10000 $$

### 示例
- 10000μm = 1.0000cm
- 5000μm = 0.5000cm
- 100μm = 0.0100cm

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