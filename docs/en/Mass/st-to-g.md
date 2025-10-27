---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/st-to-g
      linkText: Stone to Gram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from stone (st) to gram (g)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, stone, gram, st, g, stone to gram, mass conversion guide"
---
# Stone (st) to Gram (g) Conversion
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
    const convertedValue = parseFloat(form.number) * 6350.29318
    form.result = `${form.number}st = ${convertedValue.toFixed(3)}g`
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

**1 stone (st) = 6,350.29318 grams (g)**

The conversion formula is:
```
Grams = Stones × 6,350.29318
```

## Conversion Guide

### Why Convert Stones to Grams?

1. **Medical Applications**: Converting body weight from British units to metric for medical records
2. **Scientific Research**: Converting traditional measurements to metric for scientific calculations
3. **International Communication**: Converting British measurements to universally understood metric units
4. **Nutritional Analysis**: Converting body weight for dietary and fitness calculations

### Conversion Method

To convert stones to grams:
1. Take the number of stones
2. Multiply by 6,350.29318
3. The result is the equivalent in grams

### Practical Examples

- **1 st** = 6,350.293 g
- **2 st** = 12,700.586 g
- **5 st** = 31,751.466 g
- **10 st** = 63,502.932 g
- **14 st** = 88,904.105 g (average adult weight)

## Summary

Converting stones to grams involves multiplying by 6,350.29318. This conversion is useful for medical applications, scientific research, international communication, and nutritional analysis where British weight measurements need to be expressed in metric units.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Stone Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">st conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/st-to-kg">Stone to Kilogram</a></div>
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
    <n-card title="Gram Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">g conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/g-to-kg">Gram to Kilogram</a></div>
        <div><a href="/Mass/g-to-lb">Gram to Pound</a></div>
        <div><a href="/Mass/g-to-mcg">Gram to Microgram</a></div>
        <div><a href="/Mass/g-to-mg">Gram to Milligram</a></div>
        <div><a href="/Mass/g-to-mt">Gram to Metric Ton</a></div>
        <div><a href="/Mass/g-to-oz">Gram to Ounce</a></div>
        <div><a href="/Mass/g-to-st">Gram to Stone</a></div>
        <div><a href="/Mass/g-to-t">Gram to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>