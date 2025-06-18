---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: Celsius-to-Fahrenheit
      linkText: 摄氏度转华氏度
head:
  - - meta
    - name: description
      content: "摄氏度 (°C) 转 华氏度 (°F) 的在线换算工具。了解如何进行温度单位换算并获取精确结果。"
  - - meta
    - name: keywords
      content: "摄氏度, 华氏度, 温度换算, °C 到 °F, 在线换算工具, 摄氏度转华氏度"

---
# 摄氏度 (°C) 到 华氏度 (°F) 的换算
---
<script setup>
const seoKey =["温度的单位","开尔文温度与摄氏温度的换算","开氏温度和摄氏温度换算公式","华氏摄氏度与摄氏度转换","摄氏度与开尔文换算","摄氏度的符号","摄氏度转华氏度","温度转换","k和摄氏度换算","华氏温度和摄氏温度换算","摄氏度英文","温度换算","温度单位","摄氏度符号 °C怎么打","摄氏度和开尔文的换算","摄氏度符号","华氏度和摄氏度的换算","温度符号","开尔文和摄氏度的换算","摄氏度和华氏度的换算","华氏度转摄氏度","摄氏度符号 °C"]
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '暂无结果',
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>
<n-card
  title="摄氏度 (°C) 到 华氏度 (°F) 的换算结果"
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
      <span v-for="item of seoKey">{{item}}，</span>
      <a href="">温度单位转换</a>，
      <a href="">摄氏度转华氏度</a>
    </div>
  </template>
</n-card>

## 公式

从 **摄氏度 (°C)** 换算到 **华氏度 (°F)** 的公式为：
$$ °F = °C \times 1.8 + 32 $$

### 示例
- 0°C = 32°F
- 25°C = 77°F
- 100°C = 212°F

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