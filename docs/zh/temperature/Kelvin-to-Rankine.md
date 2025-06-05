---
sidebar: false
aside: false
lastUpdated: false
---
# 开尔文 (K) 到 兰金度 (R) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage } from 'naive-ui'
import { defineClientComponent } from 'vitepress'

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 1.8
    form.result = `${form.number}K = ${convertedValue.toFixed(2)}R`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="开尔文 (K)">
    <n-input-number v-model:value="form.number" placeholder="输入开尔文" style="width: 100%" />
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

从 **开尔文 (K)** 转换到 **兰金度 (R)** 的公式为：
$$ R = K \times 1.8 $$

### 示例
- 273.15K = 491.67R
- 298.15K = 536.67R
- 373.15K = 671.67R

## 相关链接

* [摄氏度 (°C) 到 开尔文 (K)](Celsius-to-Kelvin.md)
* [摄氏度 (°C) 到 华氏度 (°F)](Celsius-to-Fahrenheit.md)
* [摄氏度 (°C) 到 兰金度 (R)](Celsius-to-Rankine.md)
* [开尔文 (K) 到 摄氏度 (°C)](Kelvin-to-Celsius.md)
* [开尔文 (K) 到 华氏度 (°F)](Kelvin-to-Fahrenheit.md)
* [开尔文 (K) 到 兰金度 (R)](Kelvin-to-Rankine.md)
* [华氏度 (°F) 到 摄氏度 (°C)](Fahrenheit-to-Celsius.md)
* [华氏度 (°F) 到 开尔文 (K)](Fahrenheit-to-Kelvin.md)
* [华氏度 (°F) 到 兰金度 (R)](Fahrenheit-to-Rankine.md)
* [兰金度 (R) 到 摄氏度 (°C)](Rankine-to-Celsius.md)
* [兰金度 (R) 到 开尔文 (K)](Rankine-to-Kelvin.md)
* [兰金度 (R) 到 华氏度 (°F)](Rankine-to-Fahrenheit.md)