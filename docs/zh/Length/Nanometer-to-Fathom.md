---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Nanometer-to-Fathom
      linkText: 纳米到英寻
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到英寻 (fathom) 的长度单位换算指南。了解如何通过公式 fathom = nm × 0.00000000054681 换算为英寻。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 纳米, 英寻, nm, fathom, 纳米到英寻, 长度换算指南"
---
# 纳米 (nm) 到 英寻 (fathom) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.00000000054681
    form.result = `${form.number}nm = ${convertedValue.toFixed(13)}fathom`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="纳米 (nm)">
    <n-input-number v-model:value="form.number" placeholder="输入纳米" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>


以下是 1nm 到 100000nm 每隔 10000nm 对应的英寻值（基于公式 `fathom = nm × 0.00000000054681`）：

| 纳米 (nm) | 英寻 (fathom) |
|----------|----------------|
| 10000    | 0.0000000054681   |
| 20000    | 0.0000000109362   |
| 30000    | 0.0000000164043   |
| 40000    | 0.0000000218724   |
| 50000    | 0.0000000273405   |
| 60000    | 0.0000000328086   |
| 70000    | 0.0000000382767   |
| 80000    | 0.0000000437448   |
| 90000    | 0.0000000492129   |
| 100000   | 0.0000000546810   |

## 公式

从 **纳米 (nm)** 换算到 **英寻 (fathom)** 的公式为：
$$ fathom = nm \times 0.00000000054681 $$

### 示例
- 1000000000nm = 0.5468100000000fathom
- 500000000nm = 0.2734050000000fathom
- 1000nm = 0.0000005468100fathom

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Length" :key="index">
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