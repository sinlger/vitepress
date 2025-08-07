---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Millimeter-to-Yard
      linkText: 毫米到码
head:
  - - meta
    - name: description
      content: "毫米 (mm) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = mm × 0.0010936 换算为码。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 毫米, 码, mm, yd, 毫米到码, 长度换算指南"
---
# 毫米 (mm) 到 码 (yd) 的换算
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
  title: '毫米 (mm) 到码 (yd) 的长度单位换算'
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.0010936
    form.result = `${form.number}mm = ${convertedValue.toFixed(5)}yd`
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

毫米 (mm) 和码 (yd) 是测量小尺寸和日常物体尺寸时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在布料制造过程中，纤维直径以毫米衡量，而布料的长度通常以码计算。
  - 示例：某种纳米纤维直径为 0.5mm，但一卷布料长度为 100yd（即 91440mm）。

- **体育场地建设**：
  - 田径跑道的设计精度可能达到毫米级别，但比赛距离则常用码表示。
  - 示例：某跑道厚度误差为 2mm，即 0.0021872yd。

- **制造业**：
  - 精密机械零件的尺寸以毫米标注，但其运输距离可能跨越数千码。
  - 示例：某机械零件长度为 200mm，等于 0.21872yd。

- **建筑与工程**：
  - 施工图纸上常用毫米标注详细尺寸，但在国际项目中可能需要将整体尺寸换算为码。
  - 示例：某桥梁护栏高度为 1000mm，即 1.0936yd。

## 公式

从 **毫米 (mm)** 换算到 **码 (yd)** 的公式为：
$$ yd = mm \times 0.0010936 $$

### 示例
- 1000mm = 1.09360yd
- 500mm = 0.54680yd
- 100mm = 0.10936yd

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