---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Fahrenheit-to-Rankine
      linkText: 华氏度转兰金度

head:
  - - meta
    - name: description
      content: "华氏度 (°F) 换算到 兰金度 (R) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "华氏度, 兰金度, 温度换算, °F 到 K, 在线换算工具, 单位换算"
---
# 华氏度 (°F) 到 兰金度 (R) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';
const seoKey = [
  '华氏度转兰金度',
  '华氏度换算兰金度',
  '°F转R',
  '华氏度与兰金度换算',
  '温度换算',
  '单位换算',
  '在线温度转换',
  '华氏度',
  '兰金度',
  '华氏度转兰金度公式'
]
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) + 459.67
    form.result = `${form.number}°F = ${convertedValue.toFixed(2)}R`
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
  title="华氏度转兰金度换算结果"
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
    </div>
  </template>
</n-card>

## 如何将华氏度转换为兰金度

从华氏度 (°F) 转换为兰金度 (R) 的换算在工程和科学领域中非常有用。本页面的在线换算工具可以帮助您轻松完成这一操作。输入华氏度温度，即可立即获得对应的兰金度值。此外，还提供了转换公式和实际示例，让您完全掌握华氏度到兰金度的换算方法。

## 公式

从 **华氏度 (°F)** 换算到 **兰金度 (R)** 的公式为：
$$ R = °F + 459.67 $$

### 示例
- 32°F = 491.67R
- 77°F = 536.67R
- 212°F = 671.67R

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