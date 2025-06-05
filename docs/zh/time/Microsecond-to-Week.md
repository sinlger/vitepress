---
sidebar: false
aside: false
lastUpdated: false
---
# 微秒 (μs) 到 周 (week) 的换算

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage, NList, NListItem } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Time } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  history: []
})

const message = useMessage()

const convertHandler = () => {
  const input = parseFloat(form.number)
  
  if (isNaN(input)) {
    message.error('请输入有效的数字')
    form.result = ''
    return
  }
  
  if (input < 0) {
    message.error('请输入非负数')
    form.result = ''
    return
  }

  const convertedValue = input / 604800000000
  const formattedValue = convertedValue > 1e-6 ? convertedValue.toFixed(15) : convertedValue.toExponential(15)
  form.result = `${input}μs = ${formattedValue}week`
  
  // 添加到历史记录
  form.history.unshift({
    id: Date.now(),
    input: `${input}μs`,
    output: `${formattedValue}week`
  })
}

const clearHistory = () => {
  form.history = []
  message.success('历史记录已清除')
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="微秒 (μs)">
    <n-input-number v-model:value="form.number" placeholder="输入微秒" style="width: 100%" :show-button="true" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card title="换算结果" :bordered="false" :hoverable="true">
  <div v-if="form.result" class="result-display">{{ form.result }}</div>
  <div v-else class="no-result">等待转换结果...</div>
</n-card>

<n-card title="转换历史" :bordered="false" :hoverable="true" v-if="form.history.length > 0">
  <n-list>
    <n-list-item v-for="item in form.history" :key="item.id">
      <div class="history-item">
        <span class="history-input">{{ item.input }}</span>
        <span class="history-arrow">→</span>
        <span class="history-output">{{ item.output }}</span>
      </div>
    </n-list-item>
  </n-list>
  <n-button @click="clearHistory" block style="margin-top: 10px;">清除历史</n-button>
</n-card>

## 公式

从 **微秒 (μs)** 转换到 **周 (week)** 的公式为：
$$ week = \frac{\mu s}{6.048 \times 10^{11}} $$
或
$$ week = \mu s \times 1.6534391534391535 \times 10^{-12} $$

### 示例
- 6.048 × 10¹¹ μs = 1 week (7天)
- 8.64 × 10¹⁰ μs = 1 天
- 3.6 × 10¹⁰ μs = 1 小时
- 6 × 10⁸ μs = 1 分钟
- 1 × 10⁶ μs = 1 秒

### 换算说明
1周 = 7天 = 168小时 = 10,080分钟 = 604,800秒 = 604,800,000,000 微秒 (6.048 × 10¹¹ μs)
## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Time" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="primary"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>