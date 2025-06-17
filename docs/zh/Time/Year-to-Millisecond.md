---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Year-to-Millisecond
      linkText: 年到毫秒
head:
  - - meta
    - name: description
      content: "年 (year) 到 毫秒 (ms) 的时间单位换算指南。了解如何通过公式 year × 3.1536 × 10⁷ 换算为毫秒。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 年, 毫秒, year, ms, 年到毫秒, 时间换算指南"
---
# 年 (year) 到 毫秒 (ms) 的换算

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
    const convertedValue = parseFloat(form.number) * 31536000000
    form.result = `${form.number}年 = ${convertedValue.toFixed(0)}毫秒`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="年">
    <n-input-number v-model:value="form.number" placeholder="输入年数" style="width: 100%" />
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

从 **年** 换算到 **毫秒** 的公式为：
$$ ms = year \times 31536000000 $$

### 示例
- 1年 = 31536000000毫秒
- 2年 = 63072000000毫秒
- 0.5年 = 15768000000毫秒
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