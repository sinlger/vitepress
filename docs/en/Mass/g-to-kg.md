---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/g-to-kg
      linkText: Grams to Kilograms
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from grams (g) to kilograms (kg)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, grams, kilograms, g, kg, grams to kilograms, mass conversion guide"
---
# Grams (g) to Kilograms (kg) Conversion
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
    form.result = `${form.number}g = ${convertedValue.toFixed(3)}kg`
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

The formula for converting from **grams (g)** to **kilograms (kg)** is:
$$ kg = g \div 1000 $$

## Grams to Kilograms Conversion Guide

In pharmaceutical dosage calculations and precision chemical measurements, mass unit conversion is a common requirement. This article focuses on converting grams (g) to kilograms (kg), providing detailed formulas and practical examples.

### Why Do We Need g to kg Conversion?

Grams and kilograms are common mass units, particularly important in medicine, pharmacology, and fine chemical industries. Through precise conversion, we can ensure measurement consistency and accuracy.

### g to kg Conversion Method

The conversion formula from grams to kilograms is:

- **Formula:** `kg = g ÷ 1000`

### Practical Application Examples

Here are some common conversion examples:

- 1 g = 0.001 kg
- 1000 g = 1 kg
- 500 g = 0.5 kg

### Summary

Mastering grams to kilograms conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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