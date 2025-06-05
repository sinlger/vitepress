---
sidebar: false
aside: false
lastUpdated: false
---
# 天 (d) 到 微秒 (μs) 的换算

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 86400000000
    form.result = `${form.number}d = ${convertedValue.toFixed(0)}μs`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="天 (d)">
    <n-input-number v-model:value="form.number" placeholder="输入天" style="width: 100%" />
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

从 **天 (d)** 转换到 **微秒 (μs)** 的公式为：
$$ \mu s = d \times 8.64 \times 10^{10} $$

### 示例
- 1d = 8.64 × 10¹⁰ μs
- 5d = 4.32 × 10¹¹ μs
- 0.1d = 8.64 × 10⁹ μs