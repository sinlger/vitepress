---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Week-to-Day
      linkText: 周到天
head:
  - - meta
    - name: description
      content: "周 (week) 到 天 (d) 的时间单位换算指南。了解如何通过公式 week × 7 换算为天。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 周, 天, week, d, 周到天, 时间换算指南"
---
# 周 (week) 到 天 (d) 的换算

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
    const convertedValue = parseFloat(form.number) * 7
    form.result = `${form.number}week = ${convertedValue.toFixed(2)}d`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="周 (week)">
    <n-input-number v-model:value="form.number" placeholder="输入周" style="width: 100%" />
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

从 **周 (week)** 换算到 **天 (d)** 的公式为：
$$ d = week \times 7 $$

### 示例
- 1week = 7d
- 5week = 35d
- 0.1week = 0.7d
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