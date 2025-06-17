---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度换算
  - - link: /Length/Inch-to-Yard
      linkText: 英寸到码
head:
  - - meta
    - name: description
      content: "英寸 (in) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = in × 0.027778 换算为码。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 英寸, 码, in, yd, 英寸到码, 长度换算指南"
---
# 英寸 (in) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.027778
    form.result = `${form.number}in = ${convertedValue.toFixed(6)}yd`
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
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

英寸 (in) 和码 (yd) 是测量中等距离和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在布料制造过程中，纤维直径以英寸衡量，而布料的长度通常以码计算。
  - 示例：某种纳米纤维直径为 5in，但一卷布料长度为 100yd（即 3600in）。

- **体育场地建设**：
  - 田径跑道的设计精度可能达到英寸级别，但比赛距离则常用码表示。
  - 示例：某跑道厚度误差为 2in，即 0.055556yd。

- **制造业**：
  - 精密机械零件的尺寸以英寸标注，但其运输距离可能跨越数千码。
  - 示例：某机械零件长度为 200in，等于 5.5556yd。

- **建筑与工程**：
  - 施工图纸上常用英寸标注详细尺寸，但在国际项目中可能需要将整体尺寸换算为码。
  - 示例：某桥梁护栏高度为 100in，即 2.7778yd。

## 公式

从 **英寸 (in)** 换算到 **码 (yd)** 的公式为：
$$ yd = in \times 0.027778 $$

### 示例
- 36in = 1.0000yd
- 72in = 2.0000yd
- 100in = 2.7778yd

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