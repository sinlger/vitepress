---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Nanosecond-to-Microsecond
      linkText: 纳秒到微秒
head:
  - - meta
    - name: description
      content: "纳秒 (ns) 到 微秒 (μs) 的时间单位换算指南。了解如何通过公式 ns ÷ 1,000 换算为微秒。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 纳秒, 微秒, ns, μs, 纳秒到微秒, 时间换算指南"
---
# 纳秒 (ns) 到 微秒 (μs) 的换算

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
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}ns = ${convertedValue.toFixed(6)}μs`
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
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **纳秒 (ns)** 换算到 **微秒 (μs)** 的公式为：
$$ \mu s = \frac{ns}{1000} $$

### 示例
- 1000ns = 1μs
- 5000ns = 5μs
- 1000000ns = 1000μs
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