# 天 (d) 到 年 (year) 的换算

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
    const convertedValue = parseFloat(form.number) / 365
    form.result = `${form.number}d = ${convertedValue.toFixed(4)}year`
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

从 **天 (d)** 转换到 **年 (year)** 的公式为：
$$ year = \frac{d}{365} $$

### 示例
- 365d = 1year
- 36.5d = 0.1year
- 182.5d = 0.5year