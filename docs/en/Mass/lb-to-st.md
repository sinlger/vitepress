---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/lb-to-st
      linkText: Pound to Stone
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from pounds (lb) to stones (st)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, pound, stone, lb, st, pound to stone, mass conversion guide"
---
# Pound (lb) to Stone (st) Conversion
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
    const convertedValue = parseFloat(form.number) * 0.0714286
    form.result = `${form.number}lb = ${convertedValue.toFixed(5)}st`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Pound (lb)">
    <n-input-number v-model:value="form.number" placeholder="Enter pounds" style="width: 100%" />
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

The formula for converting from **pounds (lb)** to **stones (st)** is:
$$ st = lb \times 0.0714286 $$

## Pound to Stone Conversion Guide

In pharmaceutical dosage calculations and precision chemical measurements, mass unit conversion is a common requirement. This article focuses on the conversion from pounds (lb) to stones (st), providing detailed formulas and practical examples.

### Why Do We Need lb to st Conversion?

Pounds and stones are common mass units, particularly important in medicine, pharmacology, and precision chemical industries. Through accurate conversion, we can ensure measurement consistency and precision.

### lb to st Conversion Method

The conversion formula from pounds to stones is:

- **Formula:** `st = lb × 0.0714286`

### Practical Application Examples

Here are some common conversion examples:

- 1 lb = 0.07143 st
- 2 lb = 0.14286 st
- 14 lb = 1 st

### Summary

Mastering pound to stone conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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