---
sidebar: false
aside: false
lastUpdated: false
---
# 分钟 (min) 到 微秒 (μs) 的换算

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
    const convertedValue = parseFloat(form.number) * 60000000
    form.result = `${form.number}min = ${convertedValue.toFixed(0)}μs`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="分钟 (min)">
    <n-input-number v-model:value="form.number" placeholder="输入分钟" style="width: 100%" />
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

从 **分钟 (min)** 转换到 **微秒 (μs)** 的公式为：
$$ \mu s = min \times 6 \times 10^{7} $$

### 示例
- 1min = 6 × 10⁷ μs
- 5min = 3 × 10⁸ μs
- 0.1min = 6 × 10⁶ μs