---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/st-to-kg
      linkText: Stone to Kilogram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from stone (st) to kilogram (kg)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, stone, kilogram, st, kg, stone to kilogram, mass conversion guide"
---
# Stone (st) to Kilogram (kg) Conversion
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
    const convertedValue = parseFloat(form.number) * 6.35029318
    form.result = `${form.number}st = ${convertedValue.toFixed(4)}kg`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Stone (st)">
    <n-input-number v-model:value="form.number" placeholder="Enter stones" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
  <n-form-item>
    <n-input v-model:value="form.result" readonly placeholder="Conversion result" />
  </n-form-item>
</n-form>

## Conversion Formula

**1 stone (st) = 6.35029318 kilograms (kg)**

The conversion formula is:
```
Kilograms = Stones × 6.35029318
```

## Conversion Guide

### Why Convert Stones to Kilograms?

1. **Medical Records**: Converting British body weight measurements to metric for international medical standards
2. **Fitness and Health**: Converting traditional weight measurements for modern fitness tracking
3. **Scientific Applications**: Converting to metric system for scientific calculations and research
4. **International Standards**: Converting British measurements to globally recognized metric units

### Conversion Method

To convert stones to kilograms:
1. Take the number of stones
2. Multiply by 6.35029318
3. The result is the equivalent in kilograms

### Practical Examples

- **1 st** = 6.3503 kg
- **2 st** = 12.7006 kg
- **5 st** = 31.7515 kg
- **10 st** = 63.5029 kg
- **14 st** = 88.9041 kg (average adult weight)

## Summary

Converting stones to kilograms involves multiplying by 6.35029318. This conversion is essential for medical records, fitness tracking, scientific applications, and international communication where British weight measurements need to be expressed in metric units.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Stone Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">st conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/st-to-g">Stone to Gram</a></div>
        <div><a href="/Mass/st-to-lb">Stone to Pound</a></div>
        <div><a href="/Mass/st-to-mcg">Stone to Microgram</a></div>
        <div><a href="/Mass/st-to-mg">Stone to Milligram</a></div>
        <div><a href="/Mass/st-to-mt">Stone to Metric Ton</a></div>
        <div><a href="/Mass/st-to-oz">Stone to Ounce</a></div>
        <div><a href="/Mass/st-to-t">Stone to Ton</a></div>
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