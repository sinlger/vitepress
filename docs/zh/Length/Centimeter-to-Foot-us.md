---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Centimeter-to-Foot-us
      linkText: 厘米到英尺-us
head:
  - - meta
    - name: description
      content: "厘米 (cm) 到美制英尺 (ft-us) 的长度单位换算指南。了解如何通过公式 ft-us = cm × 0.032808 换算为美制英尺。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 厘米, 美制英尺, cm, ft-us, 厘米到美制英尺, 长度换算指南"
---
# 厘米 (cm) 到 美制英尺 (ft-us) 的换算
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
  title: '厘米到美制英尺-us的换算',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.032808
    form.result = `${form.number}cm = ${convertedValue.toFixed(5)}ft-us`
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

厘米 (cm) 和美制英尺 (ft-us) 是测量日常物体尺寸和中等距离时常用的单位，在以下真实场景中非常重要：

- **建筑与工程**：
  - 在施工过程中，建筑材料的尺寸通常以厘米标注，但整体结构尺寸可能使用美制英尺衡量。
  - 示例：某建筑物墙体厚度为 20cm，等于 0.65616ft-us。

- **制造业**：
  - 精密机械零件的尺寸以厘米标注，但设备安装空间可能使用美制英尺衡量。
  - 示例：某机械零件长度为 30cm，等于 0.98424ft-us。

- **家具制造**：
  - 家具设计图纸上常用厘米标注详细尺寸，但在出口市场中可能需要以美制英尺表示。
  - 示例：一张桌子的长度为 120cm，即 3.9370ft-us。

- **教育和实验**：
  - 学生在实验室中使用厘米刻度尺进行测量，但报告中可能需要以美制英尺表示。
  - 示例：学生测量一本书的厚度为 3cm，等于 0.098424ft-us。

## 公式

从 **厘米 (cm)** 换算到 **美制英尺 (ft-us)** 的公式为：
$$ ft-us = cm \times 0.032808 $$

### 示例
- 100cm = 3.28080ft-us
- 50cm = 1.64040ft-us
- 10cm = 0.32808ft-us

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