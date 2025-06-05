---
sidebar: false
aside: false
lastUpdated: false
---
# 纳秒 (ns) 到 天 (d) 的换算

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
    const convertedValue = parseFloat(form.number) / 86400000000000
    form.result = `${form.number}ns = ${convertedValue.toFixed(14)}d`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="纳秒 (ns)">
    <n-input-number v-model:value="form.number" placeholder="输入纳秒" style="width: 100%" />
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

从 **纳秒 (ns)** 转换到 **天 (d)** 的公式为：
$$ d = \frac{ns}{8.64 \times 10^{13}} $$

### 示例
- 8.64 × 10¹³ ns = 1d
- 8.64 × 10¹² ns = 0.1d
- 4.32 × 10¹³ ns = 0.5d