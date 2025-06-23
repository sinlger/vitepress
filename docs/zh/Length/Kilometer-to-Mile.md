---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Kilometer-to-Mile
      linkText: 千米到英里
head:
  - - meta
    - name: description
      content: "千米 (km) 到英里 (mi) 的长度单位换算指南。了解如何通过公式 mi = km × 0.62137 换算为英里。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 千米, 英里, km, mi, 千米到英里, 长度换算指南"
---
# 千米 (km) 到 英里 (mi) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.62137
    form.result = `${form.number}km = ${convertedValue.toFixed(5)}mi`
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
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 实际应用

千米 (km) 和英里 (mi) 是测量宏观距离时常用的单位，在以下真实场景中非常重要：

- **航空航天工程**：
  - 某些卫星组件的加工精度达到千米级别，但其轨道高度通常以英里衡量。
  - 示例：某卫星天线的安装误差为 2km，等于 1.24274mi。

- **制造业**：
  - 精密机械零件的运输距离以千米标注，但其跨国运输距离则使用英里计算。
  - 示例：某机械零件运输距离为 200km，等于 124.274mi。

- **交通与导航**：
  - 地图上的长距离通常以千米表示，而国际导航系统上常用英里表示。
  - 示例：导航显示到目的地还有 500km，即 310.685mi。

- **国际物流**：
  - 在跨国运输过程中，货物的运输路径常以千米标注，但运输距离则使用英里计算。
  - 示例：某精密仪器运输路径为 1000km，运输距离为 621.37mi。

## 公式

从 **千米 (km)** 换算到 **英里 (mi)** 的公式为：
$$ mi = km \times 0.62137 $$

### 示例
- 1km = 0.62137mi
- 5km = 3.10685mi
- 10km = 6.21370mi

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