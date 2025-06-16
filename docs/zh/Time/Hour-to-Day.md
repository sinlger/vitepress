---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Time/index
      linkText: 时间转换
  - - link: /Time/Hour-to-Day
      linkText: 小时到天
head:
  - - meta
    - name: description
      content: "小时 (h) 到 天 (d) 的时间单位换算指南。了解如何通过公式 h ÷ 24 转换为天。"
  - - meta
    - name: keywords
      content: "时间, 单位转换, 小时, 天, h, d, 小时到天, 时间转换指南"
---
# 小时 (h) 到 天 (d) 的换算

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
    const convertedValue = parseFloat(form.number) / 24
    form.result = `${form.number}h = ${convertedValue.toFixed(3)}d`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="小时 (h)">
    <n-input-number v-model:value="form.number" placeholder="输入小时" style="width: 100%" />
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

从 **小时 (h)** 转换到 **天 (d)** 的公式为：
$$ d = \frac{h}{24} $$

### 示例
- 24h = 1d
- 12h = 0.5d
- 2.4h = 0.1d
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