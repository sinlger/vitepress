---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Centimeter-to-Yard
      linkText: 厘米到码
head:
  - - meta
    - name: description
      content: "厘米 (cm) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = cm × 0.010936 转换为码。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 厘米, 码, cm, yd, 厘米到码, 长度转换指南"
---
# 厘米 (cm) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.010936
    form.result = `${form.number}cm = ${convertedValue.toFixed(5)}yd`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="厘米 (cm)">
    <n-input-number v-model:value="form.number" placeholder="输入厘米" style="width: 100%" />
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

厘米 (cm) 和码 (yd) 是测量日常物体尺寸和中等距离时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在布料制造过程中，纤维直径以厘米衡量，而布料的长度通常以码计算。
  - 示例：某种纳米纤维直径为 5cm，但一卷布料长度为 100yd（即 9144cm）。

- **体育场地建设**：
  - 田径跑道的设计精度可能达到厘米级别，但比赛距离则常用码表示。
  - 示例：某跑道厚度误差为 2cm，即 0.021872yd。

- **制造业**：
  - 精密机械零件的尺寸以厘米标注，但其运输距离可能跨越数千码。
  - 示例：某机械零件长度为 200cm，等于 2.1872yd。

- **建筑与工程**：
  - 施工图纸上常用厘米标注详细尺寸，但在国际项目中可能需要将整体尺寸转换为码。
  - 示例：某桥梁护栏高度为 100cm，即 1.0936yd。

## 公式

从 **厘米 (cm)** 转换到 **码 (yd)** 的公式为：
$$ yd = cm \times 0.010936 $$

### 示例
- 100cm = 1.09360yd
- 50cm = 0.54680yd
- 10cm = 0.10936yd

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