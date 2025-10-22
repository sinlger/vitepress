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
      content: "在线摄氏度(°C)到兰金度(R)转换工具。轻松进行温度单位换算，提供详细的换算公式、示例和常见问题解答，帮助您快速完成摄氏度与兰金度的转换。"
  - - meta
    - name: keywords
      content: "摄氏度转兰金度, 摄氏度与兰金度的换算, 温度转换, 温度换算, 摄氏度与兰金度换算, 摄氏度的符号, 兰金度和摄氏度的换算"
---
# 摄氏度 (°C) 到 兰金度 (R) 的换算

需要快速将**摄氏度 (°C)** 转换为**兰金度 (R)** 吗？这个页面提供了简单易用的在线**温度转换**工具，以及详细的**摄氏度与兰金度的换算**公式和示例，让您轻松掌握**摄氏度与兰金度换算**。

---
<script setup>
    const seoKey =["温度的单位","开尔文温度与摄氏温度的换算","开氏温度和摄氏温度换算公式","华氏摄氏度与摄氏度转换","摄氏度与开尔文换算","摄氏度的符号","摄氏度转华氏度","温度转换","k和摄氏度换算","华氏温度和摄氏温度换算","摄氏度英文","温度换算","温度单位","摄氏度符号 °C怎么打","摄氏度和开尔文的换算","摄氏度符号","华氏度和摄氏度的换算","温度符号","开尔文和摄氏度的换算","摄氏度和华氏度的换算","华氏度转摄氏度","摄氏度符号 °C"]
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '暂无结果',
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card
  title="摄氏度 (°C) 到 兰金度 (R) 的换算结果"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span>使用我们的工具，快速进行摄氏度到兰金度的转换！</span>
    </div>
  </template>
</n-card>

## 换算公式

从**摄氏度 (°C)** 换算到**兰金度 (R)** 的公式为：
$$ R = (°C + 273.15) \times 1.8 $$
这个公式是所有**兰金度和摄氏度的换算**的基础。

### 换算示例
- **0°C 等于多少兰金度？**
  - `491.67R`
- **25°C (室温) 等于多少兰金度？**
  - `536.67R`
- **100°C (水的沸点) 等于多少兰金度？**
  - `671.67R`

## 常见问题

### 摄氏度的符号是什么？
**摄氏度的符号**是 **°C**。在书写时，请确保使用正确的符号。

### 兰金度和摄氏度的换算关系是什么？
**兰金度和摄氏度的换算**关系是：`R = (°C + 273.15) × 1.8`。兰金度是一种绝对温标，常用于工程领域。

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