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
      content: "华氏度, 兰金度, 温度换算, °F 到 R, 在线换算工具, 单位换算"
---
# 开尔文 (K) 到 摄氏度 (°C) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';
const seoKey = ['摄氏度与开尔文换算', '开氏温度', 'k是什么单位', 'k和摄氏度换算', '开尔文温度', 'k to c', '摄氏度和开尔文的换算', '开尔文和摄氏度的换算', 'kelvin', '摄氏度']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) - 273.15
    form.result = `${form.number}K = ${convertedValue.toFixed(2)}°C`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card
  title="开尔文 (K)转摄氏度 (°C)的换算结果"
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

## 公式

从 **开尔文 (K)** 换算到 **摄氏度 (°C)** 的公式为：
$$ °C = K - 273.15 $$

### 示例
- 273.15K = 0°C
- 298.15K = 25°C
- 373.15K = 100°C

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