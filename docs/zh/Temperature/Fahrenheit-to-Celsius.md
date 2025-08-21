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
      content: "在线华氏度(°F)到摄氏度(°C)转换工具。轻松进行温度单位换算，提供详细的换算公式、示例和常见问题解答，帮助您快速完成华氏度与摄氏度的转换。"
  - - meta
    - name: keywords
      content: "华氏度转摄氏度, 华氏度与摄氏度的换算, 温度转换, 温度换算, 华氏度与摄氏度换算, 华氏度的符号, 摄氏度和华氏度的换算"
---
# 华氏度 (°F) 到 摄氏度 (°C) 的换算

需要快速将**华氏度 (°F)** 转换为**摄氏度 (°C)** 吗？这个页面提供了简单易用的在线**温度转换**工具，以及详细的**华氏度与摄氏度的换算**公式和示例，让您轻松掌握**华氏度与摄氏度换算**。

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';
const seoKey = [
  '摄氏度与开尔文换算',
  '摄氏度的符号',
  '温度转换',
  'k和摄氏度换算',
  '温度换算',
  '摄氏度和开尔文的换算',
  '开尔文和摄氏度的换算',
  '摄氏度和华氏度的换算',
  '华氏度转摄氏度',
  '华氏度转开尔文',
  '单位转换',
  '摄氏度',
  '摄氏度符号 °c  '
]
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '暂无结果',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) - 32) / 1.8
    form.result = `${form.number}°F = ${convertedValue.toFixed(2)}°C`
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


<n-card
  title="华氏度 (°F) 到 摄氏度 (°C) 的算结果"
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
      <span>使用我们的工具，快速进行华氏度到摄氏度的转换！</span>
    </div>
  </template>
</n-card>

## 换算公式

从**华氏度 (°F)** 换算到**摄氏度 (°C)** 的公式为：
$$ °C = \frac{°F - 32}{1.8} $$
这个公式是所有**摄氏度和华氏度的换算**的基础。

### 换算示例
- **32°F (水的冰点) 等于多少摄氏度？**
  - `0°C`
- **77°F (室温) 等于多少摄氏度？**
  - `25°C`
- **212°F (水的沸点) 等于多少摄氏度？**
  - `100°C`

## 常见问题

### 华氏度的符号是什么？
**华氏度的符号**是 **°F**。在书写时，请确保使用正确的符号。

### 摄氏度和华氏度的换算关系是什么？
**摄氏度和华氏度的换算**关系是：`°C = (°F - 32) / 1.8`。这是全球范围内最常用的温度换算之一。

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