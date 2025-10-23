---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home

  - - link: /Angle/index
      linkText: Angle Conversion
  - - link: /Angle/grad-to-rad
      linkText: Gradians (grad) to Radians (rad) Conversion
head:
  - - meta
    - name: description
      content: "Online tool and conversion formula for converting gradians (grad) to radians (rad). Provides an easy-to-use angle unit conversion calculator."
  - - meta
    - name: keywords
      content: "angle conversion, gradians to radians, grad to rad conversion, online calculator, math tools, unit conversion"
---
# Gradians (grad) to Radians (rad) Conversion
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
    const convertedValue = parseFloat(form.number) * Math.PI / 200
    form.result = `${form.number}grad = ${convertedValue.toFixed(4)}rad`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Gradians (grad)">
    <n-input-number v-model:value="form.number" placeholder="Enter gradians" style="width: 100%" />
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

The conversion formula from **gradians (grad)** to **radians (rad)** is:
$$ rad = grad \times \frac{\pi}{200} $$

## Gradians to Radians Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely used in geometry, physics, and computer graphics. This article will introduce how to convert gradians (grad) to radians (rad) and provide some practical examples.

### Why do we need grad to rad conversion?

Gradians and radians are two commonly used angle units. Among them, radians are more commonly used in mathematical calculations because the derivatives and integrals of trigonometric functions have more concise forms when using radians. Through precise conversion, the consistency and accuracy of calculations can be ensured.

### grad to rad conversion method

The conversion formula from gradians to radians is:

- **Formula:** `rad = grad × π ÷ 200`

### Practical Application Examples

Here are some common conversion examples:

- 0 grad = 0 rad
- 33.3333 grad ≈ 0.5236 rad
- 50 grad ≈ 0.7854 rad
- 100 grad ≈ 1.5708 rad
- 200 grad ≈ 3.1416 rad

### Summary

Mastering gradians to radians conversion can help you better understand and use these angle units. We hope this guide provides valuable reference for you.

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