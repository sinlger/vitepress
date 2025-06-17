---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Second-to-Nanosecond
      linkText: 秒到纳秒
head:
  - - meta
    - name: description
      content: "秒 (s) 到 纳秒 (ns) 的时间单位换算指南。了解如何通过公式 s × 1,000,000,000 换算为纳秒。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 秒, 纳秒, s, ns, 秒到纳秒, 时间换算指南"
---
# 秒 (s) 到 纳秒 (ns) 的换算

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
    const convertedValue = parseFloat(form.number) * 1000000000
    form.result = `${form.number}s = ${convertedValue.toFixed(0)}ns`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="秒 (s)">
    <n-input-number v-model:value="form.number" placeholder="输入秒" style="width: 100%" />
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

从 **秒 (s)** 换算到 **纳秒 (ns)** 的公式为：
$$ ns = s \times 10^{9} $$

### 示例
- 1s = 1,000,000,000ns
- 5s = 5,000,000,000ns
- 0.1s = 100,000,000ns
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