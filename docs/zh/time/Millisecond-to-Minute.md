# 毫秒 (ms) 到 分钟 (min) 的换算

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
    const convertedValue = parseFloat(form.number) / 60000
    form.result = `${form.number}ms = ${convertedValue.toFixed(6)}min`
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

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **毫秒 (ms)** 转换到 **分钟 (min)** 的公式为：
$$ min = \frac{ms}{60000} $$

### 示例
- 60000ms = 1min
- 30000ms = 0.5min
- 6000ms = 0.1min