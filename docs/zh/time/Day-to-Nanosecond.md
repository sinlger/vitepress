# 天 (d) 到 纳秒 (ns) 的换算

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
    const convertedValue = parseFloat(form.number) * 86400000000000
    form.result = `${form.number}d = ${convertedValue.toFixed(0)}ns`
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

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **天 (d)** 转换到 **纳秒 (ns)** 的公式为：
$$ ns = d \times 8.64 \times 10^{13} $$

### 示例
- 1d = 8.64 × 10¹³ ns
- 5d = 4.32 × 10¹⁴ ns
- 0.1d = 8.64 × 10¹² ns