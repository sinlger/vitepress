---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home

  - - link: /Angle/index
      linkText: Angle Conversion
  - - link: /Angle/grad-to-deg
      linkText: Gradians (grad) to Degrees (°) Conversion
head:
  - - meta
    - name: description
      content: "Online tool and conversion formula for converting gradians (grad) to degrees (°). Provides an easy-to-use angle unit conversion calculator."
  - - meta
    - name: keywords
      content: "angle conversion, gradians to degrees, grad to ° conversion, online calculator, math tools, unit conversion"
---
# Gradians (grad) to Degrees (°) Conversion
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
    const convertedValue = parseFloat(form.number) * 180 / 200
    form.result = `${form.number}grad = ${convertedValue.toFixed(4)}°`
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

The conversion formula from **gradians (grad)** to **degrees (°)** is:
$$ ° = grad \times \frac{180}{200} $$

## Gradians to Degrees Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely used in geometry, physics, and computer graphics. This article will introduce how to convert gradians (grad) to degrees (°) and provide some practical examples.

### Why do we need grad to ° conversion?

Gradians and degrees are two commonly used angle units. Among them, degrees are more commonly used in daily life and basic education because they are more intuitive. Through precise conversion, the consistency and accuracy of calculations can be ensured.

### grad to ° conversion method

The conversion formula from gradians to degrees is:

- **Formula:** `° = grad × 180 ÷ 200`

### Practical Application Examples

Here are some common conversion examples:

- 0 grad = 0°
- 33.3333 grad ≈ 30°
- 50 grad ≈ 45°
- 100 grad ≈ 90°
- 200 grad ≈ 180°

### Summary

Mastering gradians to degrees conversion can help you better understand and use these angle units. We hope this guide provides valuable reference for you.

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