---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/mg-to-kg
      linkText: Milligram to Kilogram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from milligrams (mg) to kilograms (kg)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, milligram, kilogram, mg, kg, milligram to kilogram, mass conversion guide"
---
# Milligram (mg) to Kilogram (kg) Conversion
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
    const convertedValue = parseFloat(form.number) / 1000000
    form.result = `${form.number}mg = ${convertedValue.toFixed(6)}kg`
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

The formula for converting from **milligrams (mg)** to **kilograms (kg)** is:
$$ kg = mg \div 1000000 $$

## Milligram to Kilogram Conversion Guide

In pharmaceutical dosage calculations and precision measurements, mass unit conversion is a common requirement. This article focuses on the conversion from milligrams (mg) to kilograms (kg), providing detailed formulas and practical examples.

### Why Do We Need mg to kg Conversion?

Milligrams and kilograms are common mass units, particularly important in medicine, pharmacology, and scientific measurements. Through accurate conversion, we can ensure measurement consistency and precision.

### mg to kg Conversion Method

The conversion formula from milligrams to kilograms is:

- **Formula:** `kg = mg ÷ 1000000`

### Practical Application Examples

Here are some common conversion examples:

- 1 mg = 0.000001 kg
- 1000000 mg = 1 kg
- 2500000 mg = 2.5 kg

### Summary

Mastering milligram to kilogram conversion can help you better understand and use these mass units. We hope this guide provides valuable reference for you.

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