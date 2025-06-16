---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/
      linkText: 长度转换
  - - link: /Length/Kilometer-to-Yard
      linkText: 千米到码
head:
  - - meta
    - name: description
      content: "千米 (km) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = km × 1093.6 转换为码。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 千米, 码, km, yd, 千米到码, 长度转换指南"
---
# 千米 (km) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 1093.6
    form.result = `${form.number}km = ${convertedValue.toFixed(1)}yd`
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
    <n-button type="primary" @click="convertHandler" block>转换</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 实际应用

千米 (km) 和码 (yd) 是测量宏观距离和中等距离时常用的单位，在以下真实场景中非常重要：

- **体育场地建设**：
  - 田径跑道的总长度通常以千米衡量，而足球场或网球场的尺寸则使用码标注。
  - 示例：某马拉松比赛的总长度为 42.195km，等于 46,147yd。

- **制造业**：
  - 大型设备运输距离常以千米计算，但安装空间可能使用码衡量。
  - 示例：某机械零件运输距离为 200km，等于 218,720yd。

- **建筑与工程**：
  - 地图上的长距离通常以千米表示，而在国际项目中可能需要将整体尺寸转换为码。
  - 示例：某桥梁护栏长度为 100km，即 109,360yd。

- **国际物流**：
  - 在跨国运输过程中，货物的运输路径常以千米标注，但仓储空间则使用码计算。
  - 示例：某精密仪器运输路径为 500km，仓储空间为 546,800yd。

## 公式

从 **千米 (km)** 转换到 **码 (yd)** 的公式为：
$$ yd = km \times 1093.6 $$

### 示例
- 1km = 1093.6yd
- 50km = 54,680yd
- 100km = 109,360yd

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