---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/oz-to-mg
      linkText: Ounce to Milligram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from ounce (oz) to milligram (mg)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, ounce, milligram, oz, mg, ounce to milligram, mass conversion guide"
---
# Ounce (oz) to Milligram (mg) Conversion
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
    const convertedValue = parseFloat(form.number) * 28349.523125
    form.result = `${form.number}oz = ${convertedValue.toFixed(3)}mg`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Ounce (oz)">
    <n-input-number v-model:value="form.number" placeholder="Enter ounces" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
  <n-form-item>
    <n-input v-model:value="form.result" readonly placeholder="Conversion result" />
  </n-form-item>
</n-form>

## Conversion Formula

**1 ounce (oz) = 28,349.523125 milligrams (mg)**

The conversion formula is:
```
Milligrams = Ounces × 28,349.523125
```

## Conversion Guide

### Why Convert Ounces to Milligrams?

1. **Medical and Pharmaceutical**: Drug dosage calculations and medical prescriptions
2. **Nutritional Analysis**: Vitamin and supplement content measurements
3. **Laboratory Work**: Scientific measurements requiring precision
4. **Chemical Analysis**: Precise measurements in analytical chemistry

### Conversion Method

To convert ounces to milligrams:
1. Take the number of ounces
2. Multiply by 28,349.523125
3. The result is the equivalent in milligrams

### Practical Examples

- **1 oz** = 28,349.523 mg
- **0.5 oz** = 14,174.762 mg
- **0.1 oz** = 2,834.952 mg
- **0.01 oz** = 283.495 mg
- **2 oz** = 56,699.046 mg

## Summary

Converting ounces to milligrams involves multiplying by 28,349.523125. This conversion is essential in medical and pharmaceutical applications, nutritional analysis, laboratory work, and chemical analysis where precise measurements are required.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Ounce Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">oz conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/oz-to-g">Ounce to Gram</a></div>
        <div><a href="/Mass/oz-to-kg">Ounce to Kilogram</a></div>
        <div><a href="/Mass/oz-to-lb">Ounce to Pound</a></div>
        <div><a href="/Mass/oz-to-mcg">Ounce to Microgram</a></div>
        <div><a href="/Mass/oz-to-mt">Ounce to Metric Ton</a></div>
        <div><a href="/Mass/oz-to-st">Ounce to Stone</a></div>
        <div><a href="/Mass/oz-to-t">Ounce to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
  <n-gi>
    <n-card title="Milligram Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">mg conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/mg-to-g">Milligram to Gram</a></div>
        <div><a href="/Mass/mg-to-kg">Milligram to Kilogram</a></div>
        <div><a href="/Mass/mg-to-lb">Milligram to Pound</a></div>
        <div><a href="/Mass/mg-to-mcg">Milligram to Microgram</a></div>
        <div><a href="/Mass/mg-to-mt">Milligram to Metric Ton</a></div>
        <div><a href="/Mass/mg-to-oz">Milligram to Ounce</a></div>
        <div><a href="/Mass/mg-to-st">Milligram to Stone</a></div>
        <div><a href="/Mass/mg-to-t">Milligram to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>