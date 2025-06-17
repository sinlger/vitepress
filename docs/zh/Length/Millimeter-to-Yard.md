---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Millimeter-to-Yard
      linkText: 毫米到码
head:
  - - meta
    - name: description
      content: "毫米 (mm) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = mm × 0.0010936 换算为码。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 毫米, 码, mm, yd, 毫米到码, 长度换算指南"
---
# 毫米 (mm) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.0010936
    form.result = `${form.number}mm = ${convertedValue.toFixed(5)}yd`
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
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

毫米 (mm) 和码 (yd) 是测量小尺寸和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在布料制造过程中，纤维直径以毫米衡量，而布料的长度通常以码计算。
  - 示例：某种纳米纤维直径为 0.5mm，但一卷布料长度为 100yd（即 91440mm）。

- **体育场地建设**：
  - 田径跑道的设计精度可能达到毫米级别，但比赛距离则常用码表示。
  - 示例：某跑道厚度误差为 2mm，即 0.0021872yd。

- **制造业**：
  - 精密机械零件的尺寸以毫米标注，但其运输距离可能跨越数千码。
  - 示例：某机械零件长度为 200mm，等于 0.21872yd。

- **建筑与工程**：
  - 施工图纸上常用毫米标注详细尺寸，但在国际项目中可能需要将整体尺寸换算为码。
  - 示例：某桥梁护栏高度为 1000mm，即 1.0936yd。

## 公式

从 **毫米 (mm)** 换算到 **码 (yd)** 的公式为：
$$ yd = mm \times 0.0010936 $$

### 示例
- 1000mm = 1.09360yd
- 500mm = 0.54680yd
- 100mm = 0.10936yd

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