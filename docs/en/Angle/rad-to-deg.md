---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home

  - - link: /Angle/index
      linkText: Angle Conversion
  - - link: /Angle/rad-to-deg
      linkText: Radians (rad) to Degrees (°) Conversion
head:
  - - meta
    - name: description
      content: "Online tool and conversion formula for converting radians (rad) to degrees (°). Provides an easy-to-use angle unit conversion calculator."
  - - meta
    - name: keywords
      content: "angle conversion, radians to degrees, rad to ° conversion, online calculator, math tools, unit conversion"
---
# Radians (rad) to Degrees (°) Conversion
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
    const convertedValue = parseFloat(form.number) * 180 / Math.PI
    form.result = `${form.number}rad = ${convertedValue.toFixed(4)}°`
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

The formula for converting from **radians (rad)** to **degrees (°)** is:
$$ ° = rad \times \frac{180}{\pi} $$

## Radians to Degrees Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely used in geometry, physics, and computer graphics. This article will introduce how to convert radians (rad) to degrees (°) and provide some practical examples.

### Why is rad to ° conversion needed?

Radians and degrees are two commonly used angle units. Among them, degrees are more commonly used in daily life and basic education because they are more intuitive. Through precise conversion, calculation consistency and accuracy can be ensured.

### rad to ° conversion method

The conversion formula from radians to degrees is:

- **Formula:** `° = rad × 180 ÷ π`

### Practical Application Examples

Here are some common conversion examples:

- 0 rad = 0°
- π/6 rad ≈ 30°
- π/4 rad ≈ 45°
- π/3 rad ≈ 60°
- π/2 rad ≈ 90°
- π rad ≈ 180°
- 2π rad ≈ 360°

### Summary

Mastering radians to degrees conversion can help you better understand and use these angle units. We hope this guide provides valuable reference for you.

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