---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Yard-to-Foot
      linkText: 码到英尺
head:
  - - meta
    - name: description
      content: "码 (yd) 到英尺 (ft) 的长度单位换算指南。了解如何通过公式 ft = yd × 3.0 换算为英尺。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 码, 英尺, yd, ft, 码到英尺, 长度换算指南"
---
# 码 (yd) 到 英尺 (ft) 的换算
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
    const convertedValue = parseFloat(form.number) * 3.0
    form.result = `${form.number}yd = ${convertedValue.toFixed(2)}ft`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="码 (yd)">
    <n-input-number v-model:value="form.number" placeholder="输入码" style="width: 100%" />
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

码 (yd) 和英尺 (ft) 是测量中等距离和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **建筑与工程**：
  - 在施工过程中，建筑材料的细节尺寸通常以码标注，但整体结构尺寸可能使用英尺衡量。
  - 示例：某建筑物墙体厚度为 20yd，等于 60ft。

- **制造业**：
  - 精密机械零件的运输距离以码标注，但设备安装空间可能使用英尺衡量。
  - 示例：某机械零件运输距离为 30yd，等于 90ft。

- **家具制造**：
  - 家具设计图纸上常用码标注整体尺寸，但在出口市场中可能需要以英尺表示。
  - 示例：一张桌子的长度为 10yd，即 30ft。

- **教育和实验**：
  - 学生在实验室中使用码尺进行测量，但报告中可能需要以英尺表示。
  - 示例：学生测量一本书的厚度为 0.5yd，等于 1.5ft。

## 公式

从 **码 (yd)** 换算到 **英尺 (ft)** 的公式为：
$$ ft = yd \times 3.0 $$

### 示例
- 1yd = 3ft
- 2yd = 6ft
- 10yd = 30ft

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