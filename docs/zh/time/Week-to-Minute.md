---
sidebar: false
aside: false
lastUpdated: false
---
# 周 (week) 到 分钟 (min) 的换算

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
    const convertedValue = parseFloat(form.number) * 10080
    form.result = `${form.number}week = ${convertedValue.toFixed(2)}min`
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

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 公式

从 **周 (week)** 转换到 **分钟 (min)** 的公式为：
$$ min = week \times 10080 $$

### 示例
- 1week = 10080min
- 5week = 50400min
- 0.1week = 1008min