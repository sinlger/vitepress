---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Foot-us-to-Mile
      linkText: 英尺-us到英里
head:
  - - meta
    - name: description
      content: "美制英尺 (ft-us) 到英里 (mi) 的长度单位换算指南。了解如何通过公式 mi = ft-us × 0.00018939 换算为英里。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 美制英尺, 英里, ft-us, mi, 英尺-us到英里, 长度换算指南"
---
# 美制英尺 (ft-us) 到 英里 (mi) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.00018939
    form.result = `${form.number}ft-us = ${convertedValue.toFixed(6)}mi`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="美制英尺 (ft-us)">
    <n-input-number v-model:value="form.number" placeholder="输入美制英尺" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

美制英尺 (ft-us) 和英里 (mi) 是测量日常物体尺寸和宏观距离时常用的单位，在以下真实场景中非常重要：

- **航空航天工程**：
  - 某些卫星组件的加工精度达到美制英尺级别，但其轨道高度通常以英里衡量。
  - 示例：某卫星天线的安装误差为 200ft-us，等于 0.037878mi。

- **制造业**：
  - 精密机械零件的尺寸以美制英尺标注，但其运输距离可能跨越数千英里。
  - 示例：某机械零件长度为 200ft-us（即 60.96m），等于 0.037878mi。

- **半导体制造**：
  - 芯片上的晶体管尺寸以美制英尺表示，而设备运输距离则使用英里计算。
  - 示例：某芯片封装厚度为 5ft-us，等于 0.00094695mi。

- **国际物流**：
  - 在跨国运输过程中，精密仪器的包装厚度常以美制英尺标注，但运输距离则使用英里计算。
  - 示例：某精密仪器包装厚度为 50ft-us，运输距离为 1000mi。

## 公式

从 **美制英尺 (ft-us)** 换算到 **英里 (mi)** 的公式为：
$$ mi = ft-us \times 0.00018939 $$

### 示例
- 5280ft-us = 1.0000mi
- 2640ft-us = 0.5000mi
- 528ft-us = 0.1000mi

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