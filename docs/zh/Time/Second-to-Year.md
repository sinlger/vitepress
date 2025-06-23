---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间换算
  - - link: /Time/Second-to-Year
      linkText: 秒到年
head:
  - - meta
    - name: description
      content: "秒 (s) 到 年 (year) 的时间单位换算指南。了解如何通过公式 s ÷ 31,536,000 换算为年。"
  - - meta
    - name: keywords
      content: "时间, 单位换算, 秒, 年, s, year, 秒到年, 时间换算指南"
---
# 秒 (s) 到 年 (year) 的换算

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
    const convertedValue = parseFloat(form.number) / 31536000
    form.result = `${form.number}s = ${convertedValue.toFixed(8)}year`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 公式

从 **秒 (s)** 换算到 **年 (year)** 的公式为：
$$ year = \frac{s}{3.1536 \times 10^{7}} $$

### 示例
- 3.1536 × 10⁷ s = 1year
- 3.1536 × 10⁶ s = 0.1year
- 1.5768 × 10⁷ s = 0.5year
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