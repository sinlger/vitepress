---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Celsius-to-Kelvin
      linkText: 摄氏度转开尔文
head:
  - - meta
    - name: description
      content: "摄氏度 (°C) 换算到 开尔文 (K) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "摄氏度, 开尔文, 温度换算, °C 到 K, 在线换算工具, 单位换算"
---
# 摄氏度 (°C) 到 开尔文 (K) 的换算
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
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) + 273.15
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}K`
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
  title="摄氏度 (°C) 到 开尔文 (K) 的换算结果"
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

从 **摄氏度 (°C)** 换算到 **开尔文 (K)** 的公式为：
$$ K = °C + 273.15 $$

### 示例
- 0°C = 273.15K
- 25°C = 298.15K
- 100°C = 373.15K

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