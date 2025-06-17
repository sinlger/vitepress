---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Kilometer-to-Foot-us
      linkText: 千米到英尺-us
head:
  - - meta
    - name: description
      content: "千米 (km) 到美制英尺 (ft-us) 的长度单位换算指南。了解如何通过公式 ft-us = km × 3280.8 换算为美制英尺。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 千米, 美制英尺, km, ft-us, 千米到美制英尺, 长度换算指南"
---
# 千米 (km) 到 美制英尺 (ft-us) 的换算
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
    const convertedValue = parseFloat(form.number) * 3280.8
    form.result = `${form.number}km = ${convertedValue.toFixed(1)}ft-us`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="千米 (km)">
    <n-input-number v-model:value="form.number" placeholder="输入千米" style="width: 100%" />
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

## 实际应用

千米 (km) 和美制英尺 (ft-us) 是测量宏观距离和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **建筑与工程**：
  - 在大型基础设施项目中，施工图纸上常用千米标注整体距离，而设备安装空间可能使用美制英尺衡量。
  - 示例：某隧道总长度为 2km，等于 6561.6ft-us。

- **制造业**：
  - 大型机械零件的运输距离以千米标注，但设备安装空间可能使用美制英尺衡量。
  - 示例：某机械零件运输距离为 30km，等于 98,424ft-us。

- **国际物流**：
  - 在跨国运输过程中，货物的运输路径常以千米标注，但仓储空间则使用美制英尺计算。
  - 示例：某精密仪器运输路径为 500km，仓储空间为 1,640,400ft-us。

- **航空航天工程**：
  - 某些卫星组件的加工精度达到千米级别，但其轨道高度通常以美制英尺衡量。
  - 示例：某卫星天线的安装误差为 1km，即 3280.8ft-us。

## 公式

从 **千米 (km)** 换算到 **美制英尺 (ft-us)** 的公式为：
$$ ft-us = km \times 3280.8 $$

### 示例
- 1km = 3280.8ft-us
- 5km = 16,404ft-us
- 10km = 32,808ft-us

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