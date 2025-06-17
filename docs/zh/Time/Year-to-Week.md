---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Year-to-Week
      linkText: 年到周
head:
  - - meta
    - name: description
      content: "年 (year) 到 周 (week) 的时间单位换算指南。了解如何通过公式 year × 52.1428571429 换算为周。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 年, 周, year, week, 年到周, 时间换算指南"
---
# 年 (year) 到 周 (week) 的换算

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
    const convertedValue = parseFloat(form.number) * 52
    form.result = `${form.number}年 = ${convertedValue.toFixed(0)}周`
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

从 **年** 换算到 **周** 的公式为：
$$ week = year \times 52 $$

### 示例
- 1年 = 52周
- 2年 = 104周
- 0.5年 = 26周
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