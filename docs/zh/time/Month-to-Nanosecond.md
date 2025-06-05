# 月 (month) 到 纳秒 (ns) 的换算

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
    const convertedValue = parseFloat(form.number) * 2592000000000000
    form.result = `${form.number}month = ${convertedValue.toFixed(0)}ns`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="月 (month)">
    <n-input-number v-model:value="form.number" placeholder="输入月" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **月 (month)** 转换到 **纳秒 (ns)** 的公式为：
$$ ns = month \times 2.592 \times 10^{15} $$

### 示例
- 1month = 2.592 × 10¹⁵ ns
- 5month = 1.296 × 10¹⁶ ns
- 0.1month = 2.592 × 10¹⁴ ns