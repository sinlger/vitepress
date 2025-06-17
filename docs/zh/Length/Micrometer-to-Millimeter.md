---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度换算
  - - link: /Length/Micrometer-to-Millimeter
      linkText: 微米到毫米
head:
  - - meta
    - name: description
      content: "微米 (μm) 到毫米 (mm) 的长度单位换算指南。了解如何通过公式 μm ÷ 1000 换算为毫米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 微米, 毫米, μm, mm, 微米到毫米, 长度换算指南"
---
# 微米 (μm) 到 毫米 (mm) 的换算
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
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}μm = ${convertedValue.toFixed(3)}mm`
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
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

微米 (μm) 和毫米 (mm) 是测量微小尺寸时常用的单位，在以下领域中非常重要：

- **半导体制造**：
  - 在芯片制造过程中，电路线宽通常以纳米表示，而较大的结构可能用微米或毫米标注。
  - 示例：某芯片的晶体管栅极长度为 7μm，等于 0.007mm。

- **生物学和显微镜技术**：
  - 细胞、细菌和病毒的大小通常在纳米到微米级别，而显微镜载玻片厚度则以毫米表示。
  - 示例：红细胞直径约为 7μm，即 0.007mm。

- **材料科学**：
  - 纳米涂层或薄膜厚度常以微米衡量，而整体材料厚度可能用毫米表示。
  - 示例：某纳米防护膜厚度为 20μm，等于 0.02mm。

- **光学工程**：
  - 光学镜头的精度要求极高，表面粗糙度常以微米衡量，而透镜的整体尺寸则使用毫米。
  - 示例：高精度透镜表面粗糙度为 50μm，即 0.05mm。

## 公式

从 **微米 (μm)** 换算到 **毫米 (mm)** 的公式为：
$$ mm = μm \div 1000 $$

### 示例
- 1000μm = 1.000mm
- 500μm = 0.500mm
- 100μm = 0.100mm

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