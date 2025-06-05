# 周 (week) 到 小时 (h) 的换算

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
    const convertedValue = parseFloat(form.number) * 168
    form.result = `${form.number}week = ${convertedValue.toFixed(2)}h`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="周 (week)">
    <n-input-number v-model:value="form.number" placeholder="输入周" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card title="换算结果">
  {{ form.result }}
</n-card>

## 公式

从 **周 (week)** 转换到 **小时 (h)** 的公式为：
$$ h = week \times 168 $$

### 示例
- 1week = 168h
- 5week = 840h
- 0.1week = 16.8h