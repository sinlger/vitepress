---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/g-to-st
      linkText: Grams to Stones
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from grams (g) to stones (st)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, grams, stones, g, st, grams to stones, mass conversion guide"
---
# Grams (g) to Stones (st) Conversion
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
    const convertedValue = parseFloat(form.number) * 0.000157473
    form.result = `${form.number}g = ${convertedValue.toFixed(6)}st`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Grams (g)">
    <n-input-number v-model:value="form.number" placeholder="Enter grams" style="width: 100%" />
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

The formula for converting from **grams (g)** to **stones (st)** is:
$$ st = g \times 0.000157473 $$

## Grams to Stones Conversion Guide

In pharmaceutical dosage calculations and precision chemical measurements, mass unit conversion is a common requirement. This article focuses on converting grams (g) to stones (st), providing detailed formulas and practical examples.

### Why Do We Need g to st Conversion?

Grams and stones are common mass units, particularly important in medicine, pharmacology, and fine chemical industries. Through precise conversion, we can ensure measurement consistency and accuracy.

### g to st Conversion Method

The conversion formula from grams to stones is:

- **Formula:** `st = g × 0.000157473`

### Practical Application Examples

Here are some common conversion examples:

- 1 g = 0.000157473 st
- 10000 g = 1.57473 st
- 5000 g = 0.787365 st

### Summary

Mastering grams to stones conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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