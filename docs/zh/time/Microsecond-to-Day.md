# 微秒 (μs) 到 天 (d) 的换算

<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage } from 'naive-ui'
import { defineClientComponent } from 'vitepress'

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 86400000000
    form.result = `${form.number}μs = ${convertedValue.toFixed(12)}d`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="微秒 (μs)">
    <n-input-number v-model:value="form.number" placeholder="输入微秒" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **微秒 (μs)** 转换到 **天 (d)** 的公式为：
$$ d = \frac{\mu s}{8.64 \times 10^{10}} $$

### 示例
- 8.64 × 10¹⁰ μs = 1d
- 8.64 × 10⁹ μs = 0.1d
- 4.32 × 10¹⁰ μs = 0.5d