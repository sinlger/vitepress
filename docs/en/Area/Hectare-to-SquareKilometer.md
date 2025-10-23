---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页

  - - link: /Area/Hectare-to-SquareKilometer
      linkText: 公顷到平方千�?
head:
  - - meta
    - name: description
      content: "面积单位换算指南，涵盖公�?(ha) 到平方千�?(km²) 的详细换算公式与说明�?
  - - meta
    - name: keywords
      content: "面积, 单位换算, 公顷, 平方千米, ha, km², 公顷到平方千�? 面积换算指南, 公顷换算平方千米, 公顷到平方千�? 平方千米换算, 面积单位换算, 公顷转平方千�? 平方千米计算, 大面积土地测�? 农业土地面积, 公顷符号, 平方千米符号, 面积单位对照, 公顷换算�? 平方千米换算公式, 面积转换工具, 公顷计算, 平方千米计算�? 面积换算公式, 国际测量单位, 农场面积计算, 地理面积测量, 公顷到平方千米公�? 平方千米面积计算, 面积单位转换, 国际土地单位, 农业规划面积, 公顷平方千米对照�? 面积计算工具, 国际农业单位"
---
# 公顷 (ha) �?平方千米 (km²) 的换�?
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Area } from '../files';
const seoKey = ['公顷平方千米','公顷和平方千米的换算','一公顷等于多少平方千米','公顷转平方千�?,'hectares km²','公顷换算','平方千米换算','面积换算','单位换算','公顷到平方千�?,'ha km²','公顷平方千米转换','面积单位换算','公顷平方千米计算�?,'公顷平方千米对照�?,'长度换算','单位转换','公顷平方千米换算�?,'平方千米长度','公顷长度','面积计算','单位换算公式','公顷平方千米计算','面积换算�?,'平方千米单位换算','公顷单位换算','面积单位转换�?,'公顷平方千米转换�?]
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '公顷 (ha) �?平方千米 (km²) 的换�?
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 100
    form.result = `${form.number}ha = ${convertedValue.toFixed(4)}km²`
  } else {
    form.result = '请输入有效的数值�?
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="公顷 (ha)">
    <n-input-number v-model:value="form.number" placeholder="输入公顷" style="width: 100%" />
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
      <span v-for="item of seoKey">{{item}}�?/span>
    </div>
  </template>
</n-card>

## 公式

�?**公顷 (ha)** 换算�?**平方千米 (km²)** 的公式为�?
$$ km² = ha \div 100 $$

## 公顷到平方千米换算指�?

在地理测量和城市规划中，面积单位的换算是一个常见需求。本文专注于公顷 (ha) 到平方千�?(km²) 的换算，提供了详细的公式与实用示例�?

### 为什么需�?ha �?km² 的换算？

公顷和平方千米是常见的面积单位，尤其在土地规划、农业以及大规模地理测量中尤为重要。通过精确的换算，可以确保测量的一致性和准确性�?

### ha �?km² 的换算方�?

从公顷到平方千米的换算公式为�?

- **公式�?* `km² = ha ÷ 100`

### 实际应用示例

以下是一些常见的换算实例�?

- 1 ha = 0.01 km²
ddd
- 100 ha = 1 km²
- 500 ha = 5 km²

### 总结

掌握公顷到平方千米的换算可以帮助您更好地理解和使用这些面积单位。希望本指南能为您提供有价值的参考�?

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Area" :key="index">
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
