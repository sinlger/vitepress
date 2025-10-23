---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home

  - - link: /Angle/index
      linkText: Angle Conversion
  - - link: /Angle/rad-to-grad
      linkText: Radians (rad) to Gradians (grad) Conversion
head:
  - - meta
    - name: description
      content: "Online tool and conversion formula for converting radians (rad) to gradians (grad). Provides an easy-to-use angle unit conversion calculator."
  - - meta
    - name: keywords
      content: "angle conversion, radians to gradians, rad to grad conversion, online calculator, math tools, unit conversion"
---
# Radians (rad) to Gradians (grad) Conversion
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Angle } from '../files';
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 200 / Math.PI
    form.result = `${form.number}rad = ${convertedValue.toFixed(4)}grad`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Radians (rad)">
    <n-input-number v-model:value="form.number" placeholder="Enter radians" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
</n-form>

<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## Formula

The formula for converting from **radians (rad)** to **gradians (grad)** is:
$$ grad = rad \times \frac{200}{\pi} $$

## Radians to Gradians Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely used in geometry, physics, and computer graphics. This article will introduce how to convert radians (rad) to gradians (grad) and provide some practical examples.

### Why is rad to grad conversion needed?

Radians and gradians are two commonly used angle units. Among them, gradians are more commonly used in engineering calculations because their decimal system simplifies slope calculations. Through precise conversion, the consistency and accuracy of calculations can be ensured.

### rad to grad conversion method

The conversion formula from radians to gradians is:

- **Formula:** `grad = rad × 200 ÷ π`

### Practical Application Examples

Here are some common conversion examples:

- 0 rad = 0 grad
- 0.5236 rad ≈ 33.3333 grad
- 0.7854 rad ≈ 50 grad
- 1.5708 rad ≈ 100 grad
- 3.1416 rad ≈ 200 grad

### Summary

Mastering the conversion from radians to gradians can help you better understand and use these angle units. We hope this guide provides valuable reference for you.

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Angle" :key="index">
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