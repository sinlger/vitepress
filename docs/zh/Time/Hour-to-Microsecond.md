---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Hour-to-Microsecond
      linkText: 小时到微秒
head:
  - - meta
    - name: description
      content: "小时 (h) 到 微秒 (μs) 的时间单位换算指南。了解如何通过公式 h × 3.6 × 10⁹ 换算为微秒。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 小时, 微秒, h, μs, 小时到微秒, 时间换算指南"
---
# 小时 (h) 到 微秒 (μs) 的换算

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
    const convertedValue = parseFloat(form.number) * 3600000000
    form.result = `${form.number}h = ${convertedValue.toFixed(0)}μs`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="小时 (h)">
    <n-input-number v-model:value="form.number" placeholder="输入小时" style="width: 100%" />
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

从 **小时 (h)** 换算到 **微秒 (μs)** 的公式为：
$$ \mu s = h \times 3.6 \times 10^{9} $$

### 示例
- 1h = 3.6 × 10⁹ μs
- 5h = 1.8 × 10¹⁰ μs
- 0.1h = 3.6 × 10⁸ μs
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