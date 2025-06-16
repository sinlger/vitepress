---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度转换
  - - link: /Length/Centimeter-to-Kilometer
      linkText: 厘米到千米
head:
  - - meta
    - name: description
      content: "厘米 (cm) 到千米 (km) 的长度单位换算指南。了解如何通过公式 cm ÷ 100000 转换为千米。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 厘米, 千米, cm, km, 厘米到千米, 长度转换指南"
---
# 厘米 (cm) 到 千米 (km) 的换算
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
    const convertedValue = parseFloat(form.number) / 100000
    form.result = `${form.number}cm = ${convertedValue.toFixed(5)}km`
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

厘米 (cm) 和千米 (km) 是测量日常物体尺寸和宏观距离时常用的单位，在以下场景中非常重要：

- **航天工程**：
  - 在卫星制造过程中，零件的精密加工以厘米表示，而卫星轨道高度则用千米衡量。
  - 示例：某卫星零件厚度为 50cm，等于 0.0005km。

- **医学和生物学**：
  - 显微镜载玻片厚度通常以厘米衡量，而全球病毒传播的距离则以千米计算。
  - 示例：显微镜载玻片厚度为 1cm，即 0.00001km。

- **制造业**：
  - 精密机械零件的尺寸以厘米标注，但其运输距离可能跨越数千米。
  - 示例：某机械零件长度为 20cm，等于 0.0002km。

- **建筑与工程**：
  - 施工图纸上常用厘米标注详细尺寸，但整体项目规模可能以千米衡量。
  - 示例：某桥梁总长为 100000cm，即 1.00000km。

## 公式

从 **厘米 (cm)** 转换到 **千米 (km)** 的公式为：
$$ km = cm \div 100000 $$

### 示例
- 100000cm = 1.00000km
- 50000cm = 0.50000km
- 1000cm = 0.01000km

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