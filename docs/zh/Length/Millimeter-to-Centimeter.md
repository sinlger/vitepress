---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Length/
      linkText: 长度转换
  - - link: /zh/Length/Millimeter-to-Centimeter
      linkText: 毫米到厘米
head:
  - - meta
    - name: description
      content: "毫米 (mm) 到厘米 (cm) 的长度单位换算指南。了解如何通过公式 mm ÷ 10 转换为厘米。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 毫米, 厘米, mm, cm, 毫米到厘米, 长度转换指南"
---
# 毫米 (mm) 到 厘米 (cm) 的换算
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
    const convertedValue = parseFloat(form.number) / 10
    form.result = `${form.number}mm = ${convertedValue.toFixed(1)}cm`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="毫米 (mm)">
    <n-input-number v-model:value="form.number" placeholder="输入毫米" style="width: 100%" />
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

毫米 (mm) 和厘米 (cm) 是测量小尺寸时常用的单位，在以下场景中非常重要：

- **制造业**：
  - 在精密零件加工中，图纸上常用毫米标注细节尺寸，而整体尺寸则用厘米表示。
  - 示例：某机械零件的厚度为 5mm，即 0.5cm。

- **建筑与工程**：
  - 施工图纸上常用毫米标注详细尺寸，但材料采购清单可能以厘米计算。
  - 示例：某墙体厚度为 200mm，等于 20cm。

- **医学和生物学**：
  - 显微镜载玻片厚度通常以毫米衡量，而实验设备的尺寸则使用厘米。
  - 示例：显微镜载玻片厚度为 1mm，等于 0.1cm。

- **教育和日常测量**：
  - 学生在实验室中使用毫米刻度尺进行测量，但报告中可能需要以厘米表示。
  - 示例：学生测量一本书的厚度为 30mm，等于 3cm。

## 公式

从 **毫米 (mm)** 转换到 **厘米 (cm)** 的公式为：
$$ cm = mm \div 10 $$

### 示例
- 10mm = 1.0cm
- 50mm = 5.0cm
- 100mm = 10.0cm

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