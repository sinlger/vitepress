---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Nanosecond-to-Day
      linkText: 纳秒到天
head:
  - - meta
    - name: description
      content: "纳秒 (ns) 到 天 (day) 的时间单位换算指南。了解如何通过公式 ns ÷ 8.64 × 10¹³ 换算为天。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 纳秒, 天, ns, day, 纳秒到天, 时间换算指南"
---
# 纳秒 (ns) 到 天 (d) 的换算

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
    const convertedValue = parseFloat(form.number) / 86400000000000
    form.result = `${form.number}ns = ${convertedValue.toFixed(14)}d`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="纳秒 (ns)">
    <n-input-number v-model:value="form.number" placeholder="输入纳秒" style="width: 100%" />
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

从 **纳秒 (ns)** 换算到 **天 (d)** 的公式为：
$$ d = \frac{ns}{8.64 \times 10^{13}} $$

### 示例
- 8.64 × 10¹³ ns = 1d
- 8.64 × 10¹² ns = 0.1d
- 4.32 × 10¹³ ns = 0.5d
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