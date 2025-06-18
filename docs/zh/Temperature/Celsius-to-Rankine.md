---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Celsius-to-Rankine
      linkText: 摄氏度转兰金度

head:
  - - meta
    - name: description
      content: "摄氏度 (°C) 换算到 兰金度 (R) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "摄氏度, 兰金度, 温度换算, °C 到 R, 在线换算工具, 单位换算"
---
# 摄氏度 (°C) 到 兰金度 (R) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) + 273.15) * 1.8
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}R`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="摄氏度 (°C)">
    <n-input-number v-model:value="form.number" placeholder="输入摄氏度" style="width: 100%" />
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

## 公式

从 **摄氏度 (°C)** 换算到 **兰金度 (R)** 的公式为：
$$ R = (°C + 273.15) \times 1.8 $$

### 示例
- 0°C = 491.67R
- 25°C = 536.67R
- 100°C = 671.67R

## 相关链接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Temperature" :key="index">
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