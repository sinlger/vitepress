---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Nanometer-to-Kilometer
      linkText: 纳米到千米
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到千米 (km) 的长度单位换算指南。了解如何通过公式 nm ÷ 1000000000000 换算为千米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 纳米, 千米, nm, km, 纳米到千米, 长度换算指南"
---
# 纳米 (nm) 到 千米 (km) 的换算
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
    const convertedValue = parseFloat(form.number) / 1000000000000
    form.result = `${form.number}nm = ${convertedValue.toFixed(12)}km`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

纳米 (nm) 和千米 (km) 是测量极小尺寸和宏观距离时常用的单位，在以下场景中非常重要：

- **航天工程**：
  - 在卫星制造中，材料表面的纳米级涂层用于防护，而卫星轨道高度则用千米表示。
  - 示例：某卫星表面涂层厚度为 200nm，等于 0.0000000002km。

- **医学和生物学**：
  - 病毒大小通常在纳米级别，而全球病毒传播的距离则以千米衡量。
  - 示例：新冠病毒直径约为 100nm，即 0.0000000001km。

- **纳米科技**：
  - 纳米机器人用于微观操作，但其部署位置可能跨越数千米。
  - 示例：某纳米机器人尺寸为 50nm，即 0.00000000005km。

- **精密仪器制造**：
  - 光学设备的表面粗糙度以纳米衡量，而设备运输距离则使用千米。
  - 示例：高精度透镜表面粗糙度为 50nm，即 0.00000000005km。

## 公式

从 **纳米 (nm)** 换算到 **千米 (km)** 的公式为：
$$ km = nm \div 1000000000000 $$

### 示例
- 1000000000000nm = 1.000000000000km
- 500000000000nm = 0.500000000000km
- 1000000000nm = 0.001000000000km

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Length" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="info"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>