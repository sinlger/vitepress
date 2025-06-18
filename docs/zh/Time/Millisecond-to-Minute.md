---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Millisecond-to-Minute
      linkText: 毫秒到分钟
head:
  - - meta
    - name: description
      content: "毫秒 (ms) 到 分钟 (min) 的时间单位换算指南。了解如何通过公式 ms ÷ 60,000 换算为分钟。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 毫秒, 分钟, ms, min, 毫秒到分钟, 时间换算指南"
---
# 毫秒 (ms) 到 分钟 (min) 的换算

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Time } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 60000
    form.result = `${form.number}ms = ${convertedValue.toFixed(6)}min`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="毫秒 (ms)">
    <n-input-number v-model:value="form.number" placeholder="输入毫秒" style="width: 100%" />
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

从 **毫秒 (ms)** 换算到 **分钟 (min)** 的公式为：
$$ min = \frac{ms}{60000} $$

### 示例
- 60000ms = 1min
- 30000ms = 0.5min
- 6000ms = 0.1min
## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Time" :key="index">
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