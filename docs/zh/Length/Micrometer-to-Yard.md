---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度转换
  - - link: /Length/Micrometer-to-Yard
      linkText: 微米到码
head:
  - - meta
    - name: description
      content: "微米 (μm) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = μm × 0.0000010936 转换为码。"
  - - meta
    - name: keywords
      content: "长度, 单位转换, 微米, 码, μm, yd, 微米到码, 长度转换指南"
---
# 微米 (μm) 到 码 (yd) 的换算
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
    const convertedValue = parseFloat(form.number) * 0.0000010936
    form.result = `${form.number}μm = ${convertedValue.toFixed(8)}yd`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="微米 (μm)">
    <n-input-number v-model:value="form.number" placeholder="输入微米" style="width: 100%" />
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

微米 (μm) 和码 (yd) 是测量极小尺寸和宏观距离时常用的单位，在以下真实场景中非常重要：

- **纺织工业**：
  - 在高精度纤维制造中，纤维直径以微米衡量，而布料的长度则常用码计算。
  - 示例：某种纳米纤维直径为 50μm，但一卷布料长度为 100yd。

- **精密仪器制造**：
  - 光学镜头的表面粗糙度常以微米衡量，而实验室空间布局可能使用码作为单位。
  - 示例：高精度透镜表面粗糙度为 20μm，即 0.000021872yd。

- **航空航天工程**：
  - 某些卫星组件的加工精度达到微米级别，但其轨道距离通常以码衡量。
  - 示例：某卫星天线的加工误差为 100μm，即 0.00010936yd。

- **半导体制造**：
  - 芯片上的晶体管尺寸以微米表示，而设备运输距离则使用码。
  - 示例：某芯片的晶体管栅极长度为 7μm，等于 0.0000076552yd。

## 公式

从 **微米 (μm)** 转换到 **码 (yd)** 的公式为：
$$ yd = μm \times 0.0000010936 $$

### 示例
- 1000000μm = 1.09360000yd
- 500000μm = 0.54680000yd
- 1000μm = 0.00109360yd

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