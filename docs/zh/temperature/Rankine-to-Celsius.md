---
sidebar: false
aside: false
lastUpdated: false
---
# 兰金度 (R) 到 摄氏度 (°C) 的换算
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **兰金度 (R)** 转换到 **摄氏度 (°C)** 的公式为：
$$ °C = \frac{R}{1.8} - 273.15 $$

### 示例
- 491.67R = 0°C
- 536.67R = 25°C
- 671.67R = 100°C

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