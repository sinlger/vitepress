---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Minute-to-Millisecond
      linkText: 分钟到毫秒
head:
  - - meta
    - name: description
      content: "分钟 (min) 到 毫秒 (ms) 的时间单位换算指南。了解如何通过公式 min × 60,000 换算为毫秒。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 分钟, 毫秒, min, ms, 分钟到毫秒, 时间换算指南"
---
# 分钟 (min) 到 毫秒 (ms) 的换算

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
    const convertedValue = parseFloat(form.number) * 60000
    form.result = `${form.number}min = ${convertedValue.toFixed(0)}ms`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="分钟 (min)">
    <n-input-number v-model:value="form.number" placeholder="输入分钟" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **分钟 (min)** 换算到 **毫秒 (ms)** 的公式为：
$$ ms = min \times 60000 $$

### 示例
- 1min = 60000ms
- 5min = 300000ms
- 0.1min = 6000ms
## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Time" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="primary"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>