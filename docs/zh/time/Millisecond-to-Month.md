---
sidebar: false
aside: false
lastUpdated: false
---
# 毫秒 (ms) 到 月 (month) 的换算

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
    const convertedValue = parseFloat(form.number) / 2592000000
    form.result = `${form.number}ms = ${convertedValue.toFixed(10)}month`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="毫秒 (ms)">
    <n-input-number v-model:value="form.number" placeholder="输入毫秒" style="width: 100%" />
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

从 **毫秒 (ms)** 转换到 **月 (month)** 的公式为：
$$ month = \frac{ms}{2.592 \times 10^{9}} $$

### 示例
- 2.592 × 10⁹ ms = 1month
- 2.592 × 10⁸ ms = 0.1month
- 1.296 × 10⁹ ms = 0.5month