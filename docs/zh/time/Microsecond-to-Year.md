# 微秒 (μs) 到 年 (year) 的换算

<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage } from 'naive-ui'
import { defineClientComponent } from 'vitepress'

const convert = inject('convert')

// 常量定义
const MICROSECONDS_IN_YEAR = 3.1536e13 // 3.1536 × 10^13 μs per year

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  const input = parseFloat(form.number)

  if (isNaN(input) || input < 0) {
    form.result = '请输入一个有效的非负数值。'
    return
  }

  const convertedValue = input / MICROSECONDS_IN_YEAR
  if (convertedValue < Number.EPSILON) {
    form.result = '结果非常小，接近于零。'
  } else {
    form.result = `${input.toLocaleString()}μs = ${convertedValue.toExponential(5)}year`
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

从 **微秒 (μs)** 转换到 **年 (year)** 的公式为：
$$ year = \frac{\mu s}{3.1536 \times 10^{13}} $$
其中分母 $ 3.1536 \times 10^{13} $ 表示一年中总的微秒数（基于每年 365 天计算）。

### 示例
- $ 3.1536 \times 10^{13} \, \mu s = 1 \, \text{year} $
- $ 3.1536 \times 10^{12} \, \mu s = 0.1 \, \text{year} $
- $ 1.5768 \times 10^{13} \, \mu s = 0.5 \, \text{year} $