---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Rankine-to-Fahrenheit
      linkText: 兰金度转华氏度

head:
  - - meta
    - name: description
      content: "兰金度 (R) 换算到 华氏度 (°F) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "兰金度, 华氏度, 温度换算, R 到 °F, 在线换算工具, 单位换算"
---
# 兰金度 (R) 到 华氏度 (°F) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';
const seoKey = ['摄氏度到兰金度（°R）的转换', '兰金度（°R）到华氏度 (°F)','开氏温度', '温度转换', '温度换算','单位转换']

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) - 459.67
    form.result = `${form.number}R = ${convertedValue.toFixed(2)}°F`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card
  title="兰金度 (R)转华氏度 (°F)的换算结果"
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

从 **兰金度 (R)** 换算到 **华氏度 (°F)** 的公式为：
$$ °F = R - 459.67 $$

### 示例
- 491.67R = 32°F
- 536.67R = 77°F
- 671.67R = 212°F

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