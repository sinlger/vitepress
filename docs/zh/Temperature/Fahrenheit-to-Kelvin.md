---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Fahrenheit-to-Celsius
      linkText: 华氏度转摄氏度

head:
  - - meta
    - name: description
      content: "华氏度 (°F) 换算到 摄氏度 (°C) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "华氏度, 摄氏度, 温度换算, °F 到 °C, 在线换算工具, 单位换算"
---
# 华氏度 (°F) 到 开尔文 (K) 的换算
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
    const convertedValue = (parseFloat(form.number) - 32) / 1.8 + 273.15
    form.result = `${form.number}°F = ${convertedValue.toFixed(2)}K`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="华氏度 (°F)">
    <n-input-number v-model:value="form.number" placeholder="输入华氏度" style="width: 100%" />
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

## 公式

从 **华氏度 (°F)** 换算到 **开尔文 (K)** 的公式为：
$$ K = \frac{°F - 32}{1.8} + 273.15 $$

### 示例
- 32°F = 273.15K
- 77°F = 298.15K
- 212°F = 373.15K

## 相关链接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Temperature" :key="index">
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