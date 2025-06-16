---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间转换
  - - link: /Time/Week-to-Year
      linkText: 周到年
head:
  - - meta
    - name: description
      content: "周 (week) 到 年 (year) 的时间单位换算指南。了解如何通过公式 week ÷ 52.1428571429 转换为年。"
  - - meta
    - name: keywords
      content: "时间, 单位转换, 周, 年, week, year, 周到年, 时间转换指南"
---
# 周 (week) 到 年 (year) 的换算

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
    const convertedValue = parseFloat(form.number) / 52.143
    form.result = `${form.number}week = ${convertedValue.toFixed(4)}year`
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **周 (week)** 转换到 **年 (year)** 的公式为：
$$ year = \frac{week}{52.143} $$

### 示例
- 52.143week = 1year
- 5.2143week = 0.1year
- 26.0715week = 0.5year
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