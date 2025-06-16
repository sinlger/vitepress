---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间转换
  - - link: /Time/Millisecond-to-Hour
      linkText: 毫秒到小时
head:
  - - meta
    - name: description
      content: "毫秒 (ms) 到 小时 (h) 的时间单位换算指南。了解如何通过公式 ms ÷ 3,600,000 转换为小时。"
  - - meta
    - name: keywords
      content: "时间, 单位转换, 毫秒, 小时, ms, h, 毫秒到小时, 时间转换指南"
---
# 毫秒 (ms) 到 小时 (h) 的换算

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
    const convertedValue = parseFloat(form.number) / 3600000
    form.result = `${form.number}ms = ${convertedValue.toFixed(6)}h`
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **毫秒 (ms)** 转换到 **小时 (h)** 的公式为：
$$ h = \frac{ms}{3.6 \times 10^{6}} $$

### 示例
- 3.6 × 10⁶ ms = 1h
- 1.8 × 10⁶ ms = 0.5h
- 3.6 × 10⁵ ms = 0.1h
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