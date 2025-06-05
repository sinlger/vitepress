# 微秒 (μs) 到 毫秒 (ms) 的换算

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
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}μs = ${convertedValue.toFixed(6)}ms`
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

从 **微秒 (μs)** 转换到 **毫秒 (ms)** 的公式为：
$$ ms = \frac{\mu s}{1000} $$

### 示例
- 1000μs = 1ms
- 5000μs = 5ms
- 1000000μs = 1000ms