---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/kg-to-st
      linkText: Kilogram to Stone
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from kilogram (kg) to stone (st)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, kilogram, stone, kg, st, kilogram to stone, mass conversion guide"
---
# Kilogram (kg) to Stone (st) Conversion
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Mass } from '../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.157473
    form.result = `${form.number}kg = ${convertedValue.toFixed(4)}st`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Kilogram (kg)">
    <n-input-number v-model:value="form.number" placeholder="Enter kilograms" style="width: 100%" />
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

The formula for converting from **kilogram (kg)** to **stone (st)** is:
$$ st = kg \times 0.157473 $$

## Kilogram to Stone Conversion Guide

In British and Irish weight measurements, mass unit conversion is a common requirement. This article focuses on the conversion from kilogram (kg) to stone (st), providing detailed formulas and practical examples.

### Why Do We Need kg to st Conversion?

Kilogram and stone are common mass units, particularly important in British and Irish weight measurements and health monitoring. Through accurate conversion, we can ensure measurement consistency and precision.

### kg to st Conversion Method

The conversion formula from kilogram to stone is:

- **Formula:** `st = kg × 0.157473`

### Practical Application Examples

Here are some common conversion examples:

- 1 kg = 0.157473 st
- 2 kg = 0.314946 st
- 0.5 kg = 0.0787365 st

### Summary

Mastering kilogram to stone conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Mass" :key="index">
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