---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Centimeter-to-Meter
      linkText: 厘米到米
head:
  - - meta
    - name: description
      content: "厘米 (cm) 到米 (m) 的长度单位换算指南。了解如何通过公式 cm ÷ 100 换算为米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 厘米, 米, cm, m, 厘米到米, 长度换算指南"
---
# 厘米 (cm) 到 米 (m) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';
const seoKey = ['单位转换器','单位换算','长度单位转换器','长度单位转换','尺寸换算','长度单位换算','长度单位换算表','厘米转换','厘米和米换算','米厘米分米毫米的换算','cm和m换算','cm是什么','厘米单位','cm换算','厘米和米的换算公式','厘米 英寸','一厘米等于多少米','公分是什么单位','cm是什么意思','厘米和米','尺寸转换器','量尺','米尺','长度换算器','厘米换算','一厘米','cm是什么单位','长度转换','直尺在线测量','英尺换算厘米','英寸 厘米','尺寸换算器','长度','分米','尺寸转换','刻度尺','厘米换算米','一厘米等于多少毫米','长度单位','毫米和厘米','寸','英尺和厘米的换算','尺','一米等于多少厘米','长度换算','公分','尺寸','一公分等于多少厘米','英尺换算','cm','长度单位换算','尺寸换算','英寸换算','mm','厘米换算英寸']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '厘米到米的换算',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 100
    form.result = `${form.number}cm = ${convertedValue.toFixed(2)}m`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="厘米 (cm)">
    <n-input-number v-model:value="form.number" placeholder="输入厘米" style="width: 100%" />
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

厘米 (cm) 和米 (m) 是测量日常物体尺寸时常用的单位，在以下场景中非常重要：

- **建筑与工程**：
  - 施工图纸上常用厘米标注尺寸，而整体建筑高度或跨度通常以米计算。
  - 示例：某建筑物的层高为 300cm，等于 3.00m。

- **教育和实验**：
  - 学生在实验室中使用厘米刻度尺进行测量，但报告中可能需要以米表示。
  - 示例：学生测量一本书的厚度为 30cm，等于 0.30m。

- **医学和健康**：
  - 人体身高通常以厘米衡量，但在大规模数据分析中可能换算为米。
  - 示例：某人身高为 175cm，即 1.75m。

- **制造业**：
  - 精密机械零件的尺寸以厘米标注，但设备的整体尺寸则使用米。
  - 示例：某机械零件长度为 50cm，等于 0.50m。

## 公式

从 **厘米 (cm)** 换算到 **米 (m)** 的公式为：
$$ m = cm \div 100 $$

### 示例
- 100cm = 1.00m
- 50cm = 0.50m
- 10cm = 0.10m

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