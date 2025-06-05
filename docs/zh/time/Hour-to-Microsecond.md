---
sidebar: false
aside: false
lastUpdated: false
---
# 小时 (h) 到 微秒 (μs) 的换算

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
    const convertedValue = parseFloat(form.number) * 3600000000
    form.result = `${form.number}h = ${convertedValue.toFixed(0)}μs`
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

从 **小时 (h)** 转换到 **微秒 (μs)** 的公式为：
$$ \mu s = h \times 3.6 \times 10^{9} $$

### 示例
- 1h = 3.6 × 10⁹ μs
- 5h = 1.8 × 10¹⁰ μs
- 0.1h = 3.6 × 10⁸ μs