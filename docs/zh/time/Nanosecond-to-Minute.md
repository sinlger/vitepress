# 纳秒 (ns) 到 分钟 (min) 的换算

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
    const convertedValue = parseFloat(form.number) / 60000000000
    form.result = `${form.number}ns = ${convertedValue.toFixed(12)}min`
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

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **纳秒 (ns)** 转换到 **分钟 (min)** 的公式为：
$$ min = \frac{ns}{6 \times 10^{10}} $$

### 示例
- 60,000,000,000ns = 1min
- 300,000,000,000ns = 5min
- 6,000,000,000ns = 0.1min