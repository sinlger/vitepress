---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Time/
      linkText: 时间转换
  - - link: /zh/Time/Microsecond-to-Minute
      linkText: 微秒到分钟
head:
  - - meta
    - name: description
      content: "微秒 (μs) 到 分钟 (min) 的时间单位换算指南。了解如何通过公式 μs ÷ 60,000,000 转换为分钟。"
  - - meta
    - name: keywords
      content: "时间, 单位转换, 微秒, 分钟, μs, min, 微秒到分钟, 时间转换指南"
---
# 微秒 (μs) 到 分钟 (min) 的换算

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
    const convertedValue = parseFloat(form.number) / 60000000
    form.result = `${form.number}μs = ${convertedValue.toFixed(10)}min`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="微秒 (μs)">
    <n-input-number v-model:value="form.number" placeholder="输入微秒" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **微秒 (μs)** 转换到 **分钟 (min)** 的公式为：
$$ min = \frac{\mu s}{6 \times 10^{7}} $$

### 示例
- 60,000,000μs = 1min
- 300,000,000μs = 5min
- 6,000,000μs = 0.1min
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