---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/
      linkText: 时间换算
  - - link: /Time/Year-to-Minute
      linkText: 年到分钟
head:
  - - meta
    - name: description
      content: "年 (year) 到 分钟 (min) 的时间单位换算指南。了解如何通过公式 year × 525600 换算为分钟。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 年, 分钟, year, min, 年到分钟, 时间换算指南"
---
# 年 (year) 到 分钟 (min) 的换算

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
    const convertedValue = parseFloat(form.number) * 525600
    form.result = `${form.number}年 = ${convertedValue.toFixed(0)}分钟`
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

从 **年** 换算到 **分钟** 的公式为：
$$ min = year \times 525600 $$

### 示例
- 1年 = 525600分钟
- 2年 = 1051200分钟
- 0.5年 = 262800分钟
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