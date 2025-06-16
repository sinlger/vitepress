---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间转换
  - - link: /Time/Second-to-Week
      linkText: 秒到周
head:
  - - meta
    - name: description
      content: "秒 (s) 到 周 (week) 的时间单位换算指南。了解如何通过公式 s ÷ 604,800 转换为周。"
  - - meta
    - name: keywords
      content: "时间, 单位转换, 秒, 周, s, week, 秒到周, 时间转换指南"
---
# 秒 (s) 到 周 (week) 的换算

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
    const convertedValue = parseFloat(form.number) / 604800
    form.result = `${form.number}s = ${convertedValue.toFixed(6)}week`
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **秒 (s)** 转换到 **周 (week)** 的公式为：
$$ week = \frac{s}{604800} $$

### 示例
- 604800s = 1week
- 60480s = 0.1week
- 302400s = 0.5week
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