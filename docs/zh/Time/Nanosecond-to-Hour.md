---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Nanosecond-to-Hour
      linkText: 纳秒到小时
head:
  - - meta
    - name: description
      content: "纳秒 (ns) 到 小时 (hour) 的时间单位换算指南。了解如何通过公式 ns ÷ 3.6 × 10¹² 换算为小时。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 纳秒, 小时, ns, hour, 纳秒到小时, 时间换算指南"
---
# 纳秒 (ns) 到 小时 (h) 的换算

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
    const convertedValue = parseFloat(form.number) / 3600000000000
    form.result = `${form.number}ns = ${convertedValue.toFixed(12)}h`
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
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 公式

从 **纳秒 (ns)** 换算到 **小时 (h)** 的公式为：
$$ h = \frac{ns}{3.6 \times 10^{12}} $$

### 示例
- 3.6 × 10¹² ns = 1h
- 1.8 × 10¹³ ns = 5h
- 3.6 × 10¹¹ ns = 0.1h
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