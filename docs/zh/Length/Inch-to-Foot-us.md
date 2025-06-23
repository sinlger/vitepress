---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Inch-to-Foot-us
      linkText: 英寸到英尺-us
head:
  - - meta
    - name: description
      content: "英寸 (in) 到美制英尺 (ft-us) 的长度单位换算指南。了解如何通过公式 ft-us = in × 0.083333 换算为美制英尺。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 英寸, 美制英尺, in, ft-us, 英寸到美制英尺, 长度换算指南"
---
# 英寸 (in) 到 美制英尺 (ft-us) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.083333
    form.result = `${form.number}in = ${convertedValue.toFixed(6)}ft-us`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="英寸 (in)">
    <n-input-number v-model:value="form.number" placeholder="输入英寸" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 实际应用

英寸 (in) 和美制英尺 (ft-us) 是测量日常物体尺寸和中等距离时常用的单位，在以下真实场景中非常重要：

- **建筑与工程**：
  - 在施工过程中，建筑材料的细节尺寸通常以英寸标注，但整体结构尺寸可能使用美制英尺衡量。
  - 示例：某建筑物墙体厚度为 20in，等于 1.66666ft-us。

- **制造业**：
  - 精密机械零件的尺寸以英寸标注，但设备安装空间可能使用美制英尺衡量。
  - 示例：某机械零件长度为 30in，等于 2.49999ft-us。

- **家具制造**：
  - 家具设计图纸上常用英寸标注详细尺寸，但在出口市场中可能需要以美制英尺表示。
  - 示例：一张桌子的长度为 120in，即 10ft-us。

- **教育和实验**：
  - 学生在实验室中使用英寸刻度尺进行测量，但报告中可能需要以美制英尺表示。
  - 示例：学生测量一本书的厚度为 3in，等于 0.249999ft-us。

## 公式

从 **英寸 (in)** 换算到 **美制英尺 (ft-us)** 的公式为：
$$ ft-us = in \times 0.083333 $$

### 示例
- 12in = 1.00000ft-us
- 24in = 2.00000ft-us
- 36in = 3.00000ft-us

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