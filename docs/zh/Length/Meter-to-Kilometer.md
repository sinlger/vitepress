---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度换算
  - - link: /Length/Meter-to-Kilometer
      linkText: 米到千米
head:
  - - meta
    - name: description
      content: "米 (m) 到千米 (km) 的长度单位换算指南。了解如何通过公式 m ÷ 1000 换算为千米。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 米, 千米, m, km, 米到千米, 长度换算指南"
---
# 米 (m) 到 千米 (km) 的换算
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
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}m = ${convertedValue.toFixed(3)}km`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="米 (m)">
    <n-input-number v-model:value="form.number" placeholder="输入米" style="width: 100%" />
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

米 (m) 和千米 (km) 是日常生活中最常用的长度单位之一，它们之间的换算在许多场景中都非常实用：

- **交通和导航**：
  - 在驾驶或骑行时，地图上的距离通常以千米为单位显示，而短距离（如停车场到商店）则可能以米为单位。
  - 示例：导航显示到目的地还有 5000 米，换算后即为 5.000 千米。

- **运动和健身**：
  - 跑步机或健身应用通常记录用户的跑步或步行距离，短距离以米表示，长距离以千米表示。
  - 示例：某人跑了 2000 米，相当于 2.000 千米。

- **建筑与工程**：
  - 施工图纸上常用米来标注尺寸，而整体项目规模则可能以千米计算。
  - 示例：一条公路的设计长度为 10000 米，即 10.000 千米。

- **旅行规划**：
  - 在规划徒步旅行或登山路线时，起点到终点的距离可能需要从米换算为千米以便更直观地理解。
  - 示例：从山脚到山顶的距离是 3000 米，即 3.000 千米。

## 公式

从 **米 (m)** 换算到 **千米 (km)** 的公式为：
$$ km = m \div 1000 $$

### 示例
- 1000m = 1.000km
- 5000m = 5.000km
- 100m = 0.100km

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