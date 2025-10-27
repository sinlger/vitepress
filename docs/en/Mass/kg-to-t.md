---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/kg-to-t
      linkText: Kilogram to Tonne
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from kilogram (kg) to tonne (t)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, kilogram, tonne, kg, t, kilogram to tonne, mass conversion guide"
---
# Kilogram (kg) to Tonne (t) Conversion
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
    const convertedValue = parseFloat(form.number) / 1000
    form.result = `${form.number}kg = ${convertedValue.toFixed(3)}t`
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

The formula for converting from **kilogram (kg)** to **tonne (t)** is:
$$ t = kg \div 1000 $$

## Kilogram to Tonne Conversion Guide

In large-scale industrial and commercial measurements, mass unit conversion is a common requirement. This article focuses on the conversion from kilogram (kg) to tonne (t), providing detailed formulas and practical examples.

### Why Do We Need kg to t Conversion?

Kilogram and tonne are common mass units, particularly important in industrial, commercial, and shipping applications. Through accurate conversion, we can ensure measurement consistency and precision.

### kg to t Conversion Method

The conversion formula from kilogram to tonne is:

- **Formula:** `t = kg ÷ 1000`

### Practical Application Examples

Here are some common conversion examples:

- 1 kg = 0.001 t
- 1000 kg = 1 t
- 500 kg = 0.5 t

### Summary

Mastering kilogram to tonne conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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