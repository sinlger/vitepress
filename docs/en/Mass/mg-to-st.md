---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/mg-to-st
      linkText: Milligram to Stone
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from milligrams (mg) to stones (st)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, milligram, stone, mg, st, milligram to stone, mass conversion guide"
---
# Milligram (mg) to Stone (st) Conversion
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
    const convertedValue = parseFloat(form.number) / 6350293.18
    form.result = `${form.number}mg = ${convertedValue.toFixed(10)}st`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Milligram (mg)">
    <n-input-number v-model:value="form.number" placeholder="Enter milligrams" style="width: 100%" />
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

The formula for converting from **milligrams (mg)** to **stones (st)** is:
$$ st = mg \div 6350293.18 $$

## Milligram to Stone Conversion Guide

In pharmaceutical dosage calculations and precision measurements, mass unit conversion is a common requirement. This article focuses on the conversion from milligrams (mg) to stones (st), providing detailed formulas and practical examples.

### Why Do We Need mg to st Conversion?

Milligrams and stones are common mass units, particularly important in medicine, pharmacology, and body weight measurements. Through accurate conversion, we can ensure measurement consistency and precision.

### mg to st Conversion Method

The conversion formula from milligrams to stones is:

- **Formula:** `st = mg ÷ 6350293.18`

### Practical Application Examples

Here are some common conversion examples:

- 1 mg = 0.0000001575 st
- 6350293 mg = 1 st
- 12700586 mg = 2 st

### Summary

Mastering milligram to stone conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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