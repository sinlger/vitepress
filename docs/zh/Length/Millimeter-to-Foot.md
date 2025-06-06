---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Length/
      linkText: 长度转换
  - - link: /zh/Length/Millimeter-to-Foot
      linkText: 毫米到英尺
head:
  - - meta
    - name: description
      content: "毫米 (mm) 到英尺 (ft) 的长度单位换算指南。了解如何通过公式 ft = mm × 0.00328084 转换为英尺。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 毫米, 英尺, mm, ft, 毫米到英尺, 长度转换指南"
---
# 毫米 (mm) 到 英尺 (ft) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.00328084
    form.result = `${form.number}mm = ${convertedValue.toFixed(5)}ft`
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

毫米 (mm) 和英尺 (ft) 是测量小尺寸和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **建筑与工程**：
  - 在施工过程中，建筑材料的尺寸通常以毫米标注，但整体结构尺寸可能使用英尺衡量。
  - 示例：某建筑物墙体厚度为 200mm，等于 0.65617ft。

- **制造业**：
  - 精密机械零件的尺寸以毫米标注，但设备安装空间可能使用英尺衡量。
  - 示例：某机械零件长度为 300mm，等于 0.98425ft。

- **家具制造**：
  - 家具设计图纸上常用毫米标注详细尺寸，但在出口市场中可能需要以英尺表示。
  - 示例：一张桌子的长度为 1200mm，即 3.93701ft。

- **教育和实验**：
  - 学生在实验室中使用毫米刻度尺进行测量，但报告中可能需要以英尺表示。
  - 示例：学生测量一本书的厚度为 30mm，等于 0.098425ft。

## 公式

从 **毫米 (mm)** 转换到 **英尺 (ft)** 的公式为：
$$ ft = mm \times 0.00328084 $$

### 示例
- 1000mm = 3.28084ft
- 500mm = 1.64042ft
- 100mm = 0.328084ft

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