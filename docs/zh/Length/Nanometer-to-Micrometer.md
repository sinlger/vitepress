---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Nanometer-to-Micrometer
      linkText: 纳米到微米
head:
  - - meta
    - name: description
      content: "纳米 (nm) 到微米 (μm) 的长度单位换算指南。了解如何通过公式 nm ÷ 1000 换算为微米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 纳米, 微米, nm, μm, 纳米到微米, 长度换算指南"
---
# 纳米 (nm) 到 微米 (μm) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';
const seoKey = ['单位转换器','单位换算','长度单位转换器','长度单位转换','尺寸换算','长度单位换算','长度单位换算表','纳米微米','纳米和微米','纳米单位','一纳米等于多少微米','纳米到微米换算','nm μm','纳米和微米的换算单位','纳米微米转换','μm是什么单位','纳米和微米','纳米换算','nm','微米单位','长度换算公式','纳米转微米','微米换算','纳米计算器','微米计算器','长度单位','纳米到微米公式','微米转换器','纳米微米对照表','长度转换','单位换算表','纳米微米换算器','微米长度','纳米长度','长度计算','单位转换公式','纳米微米计算','长度换算器','微米单位换算','纳米单位换算','长度单位转换表','纳米微米转换表']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '纳米 (nm) 到 微米 (μm) 的换算'
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}nm = ${convertedValue.toFixed(3)}μm`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  
  :title="form.title"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
    <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## 实际应用

以下是 1nm 到 1000nm 每隔 100nm 对应的微米值（基于公式 `μm = nm ÷ 1000`）：

| 纳米 (nm) | 微米 (μm) |
|----------|-------------|
| 1        | 0.001       |
| 100      | 0.100       |
| 200      | 0.200       |
| 300      | 0.300       |
| 400      | 0.400       |
| 500      | 0.500       |
| 600      | 0.600       |
| 700      | 0.700       |
| 800      | 0.800       |
| 900      | 0.900       |
| 1000     | 1.000       |

## 公式

从 **纳米 (nm)** 换算到 **微米 (μm)** 的公式为：
$$ μm = nm \div 1000 $$

### 示例
- 1000nm = 1.000μm
- 500nm = 0.500μm
- 100nm = 0.100μm

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Length" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="info"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>