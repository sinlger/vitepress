---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/oz-to-mt
      linkText: Ounce to Metric Ton
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from ounce (oz) to metric ton (mt)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, ounce, metric ton, oz, mt, ounce to metric ton, mass conversion guide"
---
# Ounce (oz) to Metric Ton (mt) Conversion
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
    const convertedValue = parseFloat(form.number) * 0.000028349523125
    form.result = `${form.number}oz = ${convertedValue.toFixed(9)}mt`
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

**1 ounce (oz) = 0.000028349523125 metric tons (mt)**

The conversion formula is:
```
Metric Tons = Ounces × 0.000028349523125
```

## Conversion Guide

### Why Convert Ounces to Metric Tons?

1. **Industrial Applications**: Large-scale manufacturing and production calculations
2. **International Trade**: Converting between imperial and metric systems for global commerce
3. **Shipping and Logistics**: Cargo weight calculations for international freight
4. **Scientific Research**: Large-scale measurements in engineering and research

### Conversion Method

To convert ounces to metric tons:
1. Take the number of ounces
2. Multiply by 0.000028349523125
3. The result is the equivalent in metric tons

### Practical Examples

- **1 oz** = 0.000028350 mt
- **1,000 oz** = 0.028350 mt
- **10,000 oz** = 0.283495 mt
- **35,274 oz** ≈ 1.000000 mt (approximately 1 metric ton)
- **100,000 oz** = 2.834952 mt

## Summary

Converting ounces to metric tons involves multiplying by 0.000028349523125. This conversion is essential in industrial applications, international trade, shipping and logistics, and scientific research where large-scale metric measurements are required.

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
        <div><a href="/Mass/oz-to-mg">Ounce to Milligram</a></div>
        <div><a href="/Mass/oz-to-st">Ounce to Stone</a></div>
        <div><a href="/Mass/oz-to-t">Ounce to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
  <n-gi>
    <n-card title="Metric Ton Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">mt conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/mt-to-g">Metric Ton to Gram</a></div>
        <div><a href="/Mass/mt-to-kg">Metric Ton to Kilogram</a></div>
        <div><a href="/Mass/mt-to-lb">Metric Ton to Pound</a></div>
        <div><a href="/Mass/mt-to-mcg">Metric Ton to Microgram</a></div>
        <div><a href="/Mass/mt-to-mg">Metric Ton to Milligram</a></div>
        <div><a href="/Mass/mt-to-oz">Metric Ton to Ounce</a></div>
        <div><a href="/Mass/mt-to-st">Metric Ton to Stone</a></div>
        <div><a href="/Mass/mt-to-t">Metric Ton to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>