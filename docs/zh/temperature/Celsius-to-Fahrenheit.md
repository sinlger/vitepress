---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: 首页
  - - link: /Temperature
      linkText: 温度转换
  - - link: Celsius-to-Fahrenheit
      linkText: 摄氏度转华氏度
head:
  - - meta
    - name: description
      content: "摄氏度 (°C) 转 华氏度 (°F) 的在线转换工具。了解如何进行温度单位换算并获取精确结果。"
  - - meta
    - name: keywords
      content: "摄氏度, 华氏度, 温度转换, °C 到 °F, 在线转换工具, 摄氏度转华氏度"

---
# 摄氏度 (°C) 到 华氏度 (°F) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { temperatureFiles } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) * 1.8) + 32
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}°F`
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **摄氏度 (°C)** 转换到 **华氏度 (°F)** 的公式为：
$$ °F = °C \times 1.8 + 32 $$

### 示例
- 0°C = 32°F
- 25°C = 77°F
- 100°C = 212°F

## 相关链接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in temperatureFiles" :key="index">
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