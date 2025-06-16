---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Nanometer-to-Yard
      linkText: 纳米到码
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = nm × 0.0000000010936 转换为码。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 纳米, 码, nm, yd, 纳米到码, 长度转换指南"
---
# 纳米 (nm) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.0000000010936
    form.result = `${form.number}nm = ${convertedValue.toFixed(12)}yd`
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

纳米 (nm) 和码 (yd) 是测量极小尺寸和宏观距离时常用的单位，在以下场景中非常重要：

- **航天工程**：
  - 在卫星制造过程中，材料表面的纳米级精度用于防护，而卫星轨道高度则用码衡量。
  - 示例：某卫星表面涂层厚度为 200nm，等于 0.00000000021872yd。

- **医学和生物学**：
  - 细胞结构的细节在纳米级别，而全球病毒传播的距离则以码计算。
  - 示例：新冠病毒直径约为 100nm，即 0.00000000010936yd。

- **制造业**：
  - 精密机械零件的尺寸以纳米标注，但其运输距离可能跨越数万码。
  - 示例：某机械零件尺寸为 500nm，等于 0.0000000005468yd。

- **精密仪器制造**：
  - 光学设备的表面粗糙度常以纳米衡量，而实验室的空间布局则使用码。
  - 示例：高精度透镜表面粗糙度为 50nm，即 0.00000000005468yd。

## 公式

从 **纳米 (nm)** 转换到 **码 (yd)** 的公式为：
$$ yd = nm \times 0.0000000010936 $$

### 示例
- 1000000000nm = 1.093600000000yd
- 500000000nm = 0.546800000000yd
- 1000nm = 0.000001093600yd

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