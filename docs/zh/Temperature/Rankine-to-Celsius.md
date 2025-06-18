---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Rankine-to-Celsius
      linkText: 兰金度转摄氏度

head:
  - - meta
    - name: description
      content: "兰金度 (R) 换算到 摄氏度 (°C) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "兰金度, 摄氏度, 温度换算, R 到 °C, 在线换算工具, 单位换算"
---
# 兰金度 (R) 到 摄氏度 (°C) 的换算
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
    const convertedValue = (parseFloat(form.number) / 1.8) - 273.15
    form.result = `${form.number}R = ${convertedValue.toFixed(2)}°C`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="兰金度 (R)">
    <n-input-number v-model:value="form.number" placeholder="输入兰金度" style="width: 100%" />
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

从 **兰金度 (R)** 换算到 **摄氏度 (°C)** 的公式为：
$$ °C = \frac{R}{1.8} - 273.15 $$

### 示例
- 491.67R = 0°C
- 536.67R = 25°C
- 671.67R = 100°C

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