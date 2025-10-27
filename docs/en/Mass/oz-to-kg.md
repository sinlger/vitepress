---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/oz-to-kg
      linkText: Ounce to Kilogram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from ounce (oz) to kilogram (kg)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, ounce, kilogram, oz, kg, ounce to kilogram, mass conversion guide"
---
# Ounce (oz) to Kilogram (kg) Conversion
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
    const convertedValue = parseFloat(form.number) * 0.028349523125
    form.result = `${form.number}oz = ${convertedValue.toFixed(6)}kg`
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

**1 ounce (oz) = 0.028349523125 kilograms (kg)**

The conversion formula is:
```
Kilograms = Ounces × 0.028349523125
```

## Conversion Guide

### Why Convert Ounces to Kilograms?

1. **International Trade**: Converting between imperial and metric systems for global commerce
2. **Scientific Research**: Laboratory measurements often require metric units
3. **Cooking and Nutrition**: Recipe conversions and dietary calculations
4. **Shipping and Logistics**: Weight calculations for international shipping

### Conversion Method

To convert ounces to kilograms:
1. Take the number of ounces
2. Multiply by 0.028349523125
3. The result is the equivalent in kilograms

### Practical Examples

- **1 oz** = 0.028350 kg
- **10 oz** = 0.283495 kg
- **16 oz** = 0.453592 kg (one pound)
- **32 oz** = 0.907185 kg (two pounds)
- **100 oz** = 2.834952 kg

## Summary

Converting ounces to kilograms involves multiplying by 0.028349523125. This conversion is essential in international trade, scientific research, cooking, and logistics where metric measurements are standard.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Ounce Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">oz conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/oz-to-g">Ounce to Gram</a></div>
        <div><a href="/Mass/oz-to-lb">Ounce to Pound</a></div>
        <div><a href="/Mass/oz-to-mcg">Ounce to Microgram</a></div>
        <div><a href="/Mass/oz-to-mg">Ounce to Milligram</a></div>
        <div><a href="/Mass/oz-to-mt">Ounce to Metric Ton</a></div>
        <div><a href="/Mass/oz-to-st">Ounce to Stone</a></div>
        <div><a href="/Mass/oz-to-t">Ounce to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
  <n-gi>
    <n-card title="Kilogram Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">kg conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/kg-to-g">Kilogram to Gram</a></div>
        <div><a href="/Mass/kg-to-lb">Kilogram to Pound</a></div>
        <div><a href="/Mass/kg-to-mcg">Kilogram to Microgram</a></div>
        <div><a href="/Mass/kg-to-mg">Kilogram to Milligram</a></div>
        <div><a href="/Mass/kg-to-mt">Kilogram to Metric Ton</a></div>
        <div><a href="/Mass/kg-to-oz">Kilogram to Ounce</a></div>
        <div><a href="/Mass/kg-to-st">Kilogram to Stone</a></div>
        <div><a href="/Mass/kg-to-t">Kilogram to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>