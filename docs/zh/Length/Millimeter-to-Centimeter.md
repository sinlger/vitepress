---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Millimeter-to-Centimeter
      linkText: 毫米到厘米
head:
  - - meta
    - name: description
      content: "毫米 (mm) 到厘米 (cm) 的长度单位换算指南。了解如何通过公式 mm ÷ 10 换算为厘米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 毫米, 厘米, mm, cm, 毫米到厘米, 长度换算指南"
---
# 毫米 (mm) 到 厘米 (cm) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';
const seoKey = ['单位转换器','单位换算','长度单位转换器','长度单位转换','尺寸换算','长度单位换算','长度单位换算表','厘米和毫米换算','mm是毫米吗','毫米和厘米换算','m cm','毫米换算','厘米毫米换算','一毫米等于多少厘米','cm和mm换算','毫米单位','一毫米等于多少米','mm换算cm','mm和cm换算','ｍｍ','毫米换算厘米','毫米英文','mm单位','mm换算m','英寸转毫米','分米单位','.mm','mm和m换算','cm mm','厘米换算毫米','mm cm','毫米和米换算','一厘米等于多少毫米','平方毫米','一米等于多少毫米','毫米和厘米','毫米换算米','mm是什么单位','mm to m','mm to cm','um','nm','cm','mm','mi','m']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '毫米 (mm) 到厘米 (cm) 的长度单位换算'

})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 10
    form.result = `${form.number}mm = ${convertedValue.toFixed(1)}cm`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="毫米 (mm)">
    <n-input-number v-model:value="form.number" placeholder="输入毫米" style="width: 100%" />
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

毫米 (mm) 和厘米 (cm) 是测量小尺寸时常用的单位，在以下场景中非常重要：

- **制造业**：
  - 在精密零件加工中，图纸上常用毫米标注细节尺寸，而整体尺寸则用厘米表示。
  - 示例：某机械零件的厚度为 5mm，即 0.5cm。

- **建筑与工程**：
  - 施工图纸上常用毫米标注详细尺寸，但材料采购清单可能以厘米计算。
  - 示例：某墙体厚度为 200mm，等于 20cm。

- **医学和生物学**：
  - 显微镜载玻片厚度通常以毫米衡量，而实验设备的尺寸则使用厘米。
  - 示例：显微镜载玻片厚度为 1mm，等于 0.1cm。

- **教育和日常测量**：
  - 学生在实验室中使用毫米刻度尺进行测量，但报告中可能需要以厘米表示。
  - 示例：学生测量一本书的厚度为 30mm，等于 3cm。

## 公式

从 **毫米 (mm)** 换算到 **厘米 (cm)** 的公式为：
$$ cm = mm \div 10 $$

### 示例
- 10mm = 1.0cm
- 50mm = 5.0cm
- 100mm = 10.0cm

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