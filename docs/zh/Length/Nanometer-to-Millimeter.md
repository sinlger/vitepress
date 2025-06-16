---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Nanometer-to-Millimeter
      linkText: 纳米到毫米
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到毫米 (mm) 的长度单位换算指南。了解如何通过公式 nm ÷ 1000000 转换为毫米。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 纳米, 毫米, nm, mm, 纳米到毫米, 长度转换指南"
---
# 纳米 (nm) 到 毫米 (mm) 的换算
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
    const convertedValue = parseFloat(form.number) / 1000000
    form.result = `${form.number}nm = ${convertedValue.toFixed(6)}mm`
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

纳米 (nm) 和毫米 (mm) 是测量微小尺寸时常用的单位，在以下场景中非常重要：

- **半导体制造**：
  - 在芯片设计中，晶体管的栅极长度可能以纳米表示，而整个芯片的尺寸通常以毫米衡量。
  - 示例：某芯片的晶体管栅极长度为 5nm，相当于 0.005mm。

- **医学和生物学**：
  - 病毒大小通常在纳米级别，而显微镜载玻片厚度则用毫米表示。
  - 示例：新冠病毒直径约为 100nm，等于 0.0001mm。

- **材料科学**：
  - 纳米级涂层厚度用于保护精密部件，而整体材料厚度可能以毫米计算。
  - 示例：某纳米防护膜厚度为 200nm，即 0.0002mm。

- **光学工程**：
  - 光学镜头的表面粗糙度常以纳米衡量，而透镜厚度则使用毫米。
  - 示例：高精度透镜表面粗糙度为 50nm，即 0.00005mm。

## 公式

从 **纳米 (nm)** 转换到 **毫米 (mm)** 的公式为：
$$ mm = nm \div 1000000 $$

### 示例
- 1000000nm = 1.000000mm
- 500000nm = 0.500000mm
- 1000nm = 0.001000mm

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