---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Centimeter-to-Meter
      linkText: 厘米到米
head:
  - - meta
    - name: description
      content: "厘米到米转换�?- 专业的长度单位换算工具。支持厘米、米、毫米、千米等多种单位转换，提供精确的换算公式和实用转换表�?
  - - meta
    - name: keywords
      content: "厘米到米转换�? 长度单位转换�? 单位换算, 厘米转换, 米换�? cm转换, m换算, 尺寸换算�? 长度换算, 厘米和米换算, 米尺, 量尺, 直尺在线测量, 厘米换算�? 公制单位转换"
---
# 厘米 (cm) �?�?(m) 的换�?

厘米到米转换器是一个专业的长度单位换算工具，帮助您快速准确地在厘�?cm)和米(m)之间进行转换。本工具广泛应用于建筑设计、工程测量、日常生活等领域，支持高精度计算和实时转换�?

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../files';
const seoKey = ['单位转换�?,'单位换算','长度单位转换�?,'长度单位转换','尺寸换算','长度单位换算','长度单位换算�?,'厘米转换','厘米和米换算','米厘米分米毫米的换算','cm和m换算','cm是什�?,'厘米单位','cm换算','厘米和米的换算公�?,'厘米 英寸','一厘米等于多少�?,'公分是什么单�?,'cm是什么意�?,'厘米和米','尺寸转换�?,'量尺','米尺','长度换算�?,'厘米换算','一厘米','cm是什么单�?,'长度转换','直尺在线测量','英尺换算厘米','英寸 厘米','尺寸换算�?,'长度','分米','尺寸转换','刻度�?,'厘米换算�?,'一厘米等于多少毫米','长度单位','毫米和厘�?,'�?,'英尺和厘米的换算','�?,'一米等于多少厘�?,'长度换算','公分','尺寸','一公分等于多少厘米','英尺换算','cm','长度单位换算','尺寸换算','英寸换算','mm','厘米换算英寸']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: '厘米到米的换�?,
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) / 100
    form.result = `${form.number}cm = ${convertedValue.toFixed(2)}m`
  } else {
    form.result = '请输入有效的数值�?
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="厘米 (cm)">
    <n-input-number v-model:value="form.number" placeholder="输入厘米" style="width: 100%" />
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

## 常用转换公式

### 厘米到米转换
- **1厘米 = 0.01�?*
- **1�?= 100厘米**

### 其他常用长度单位转换
- **厘米到毫�?*: 1cm = 10mm
- **厘米到千�?*: 1cm = 0.00001km
- **米到千米**: 1m = 0.001km
- **米到毫米**: 1m = 1000mm
- **米到英尺**: 1m = 3.28084ft

## 长度单位换算�?

| 厘米(cm) | �?m) | 毫米(mm) | 千米(km) | 英尺(ft) |
|----------|-------|----------|----------|----------|
| 1 | 0.01 | 10 | 0.00001 | 0.032808 |
| 10 | 0.1 | 100 | 0.0001 | 0.32808 |
| 50 | 0.5 | 500 | 0.0005 | 1.6404 |
| 100 | 1 | 1,000 | 0.001 | 3.2808 |
| 200 | 2 | 2,000 | 0.002 | 6.5617 |

## 实际应用

厘米 (cm) 和米 (m) 是测量日常物体尺寸时最常用的单位，在以下真实场景中非常重要�?

- **建筑与装�?*�?
  - 房间尺寸通常以米为单位，但细节装修（如瓷砖、踢脚线）则用厘米标注�?
  - 示例：某房间长度�?5m，踢脚线高度�?10cm�?

- **服装设计**�?
  - 人体身高用米表示，但服装的细节尺寸（如袖长、领围）用厘米衡量�?
  - 示例：某人身�?1.75m，衬衫袖长为 65cm�?

- **家具制�?*�?
  - 家具的整体尺寸用米标注，但零件厚度、间隙等用厘米表示�?
  - 示例：某书桌长度�?1.2m，桌面厚度为 3cm�?

- **体育运动**�?
  - 运动场地的长度用米衡量，但器材规格用厘米标注�?
  - 示例：篮球场长度�?28m，篮球直径约�?24cm�?

## 公式

�?**厘米 (cm)** 换算�?**�?(m)** 的公式为�?
$$ m = cm \div 100 $$

### 示例
- 100cm = 1.00m
- 50cm = 0.50m
- 10cm = 0.10m

## 常见问题 (FAQ)

### 1. 米是什么单位？
�?m)是国际单位制中长度的基本单位�?米等�?00厘米。它是世界上最广泛使用的长度单位，用于测量房间尺寸、人体身高、物体长度等�?

### 2. 厘米和米的换算公式是什么？
厘米到米的换算公式为：米 = 厘米 ÷ 100
米到厘米的换算公式为：厘�?= �?× 100

### 3. 什么时候使用米单位�?
米主要用于测量中等长度的物体，如房间尺寸、人体身高、家具尺寸、运动场地等。在建筑、工程、日常生活中都广泛使用�?

### 4. 如何快速估算厘米到米的转换�?
可以记住�?00厘米等于1米。因此，厘米数除�?00可以得到米数。例如：150cm = 1.5m�?50cm = 2.5m�?

### 5. 常见的米和厘米对应关系？
- 1�?= 100厘米
- 1厘米 = 0.01�?
- 1毫米 = 0.1厘米 = 0.001�?
- 1千米 = 100,000厘米 = 1000�?

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
