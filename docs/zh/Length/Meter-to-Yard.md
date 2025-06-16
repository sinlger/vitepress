---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度转换
  - - link: /Length/Meter-to-Yard
      linkText: 米到码
head:
  - - meta
    - name: description
      content: "米 (m) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = m × 1.0936 转换为码。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 米, 码, m, yd, 米到码, 长度转换指南"
---
# 米 (m) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 1.0936
    form.result = `${form.number}m = ${convertedValue.toFixed(4)}yd`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="米 (m)">
    <n-input-number v-model:value="form.number" placeholder="输入米" style="width: 100%" />
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

米 (m) 和码 (yd) 是测量中等距离和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在布料制造过程中，纤维直径以米衡量，而布料的长度通常以码计算。
  - 示例：某种纳米纤维长度为 2m，但一卷布料长度为 100yd（即 91.44m）。

- **体育场地建设**：
  - 田径跑道的设计精度可能达到米级别，但比赛距离则常用码表示。
  - 示例：某跑道总长度为 100m，等于 109.36yd。

- **制造业**：
  - 精密机械零件的运输距离以米标注，但其安装空间可能使用码衡量。
  - 示例：某机械零件运输距离为 200m，等于 218.72yd。

- **建筑与工程**：
  - 施工图纸上常用米标注详细尺寸，但在国际项目中可能需要将整体尺寸转换为码。
  - 示例：某桥梁护栏长度为 100m，即 109.36yd。

## 公式

从 **米 (m)** 转换到 **码 (yd)** 的公式为：
$$ yd = m \times 1.0936 $$

### 示例
- 1m = 1.0936yd
- 50m = 54.68yd
- 100m = 109.36yd

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