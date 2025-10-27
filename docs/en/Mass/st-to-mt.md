---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/st-to-mt
      linkText: Stone to Metric Ton
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from stone (st) to metric ton (mt)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, stone, metric ton, st, mt, stone to metric ton, mass conversion guide"
---
# Stone (st) to Metric Ton (mt) Conversion
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
    const convertedValue = parseFloat(form.number) * 0.00635029318
    form.result = `${form.number}st = ${convertedValue.toFixed(8)}mt`
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

**1 stone (st) = 0.00635029318 metric tons (mt)**

The conversion formula is:
```
Metric Tons = Stones × 0.00635029318
```

## Conversion Guide

### Why Convert Stones to Metric Tons?

1. **Industrial Applications**: Converting personal weight to industrial scale measurements
2. **Shipping and Logistics**: Converting traditional measurements for cargo calculations
3. **Engineering Projects**: Converting weight specifications for large-scale projects
4. **Agricultural Applications**: Converting livestock weight to bulk measurements

### Conversion Method

To convert stones to metric tons:
1. Take the number of stones
2. Multiply by 0.00635029318
3. The result is the equivalent in metric tons

### Practical Examples

- **1 st** = 0.00635029 mt
- **10 st** = 0.06350293 mt
- **100 st** = 0.63502932 mt
- **157 st** = 0.99699643 mt (approximately 1 metric ton)
- **1000 st** = 6.35029318 mt

## Summary

Converting stones to metric tons involves multiplying by 0.00635029318. This conversion is essential for industrial applications, shipping and logistics, engineering projects, and agricultural applications where traditional weight measurements need to be expressed in larger metric units.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Stone Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">st conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/st-to-g">Stone to Gram</a></div>
        <div><a href="/Mass/st-to-kg">Stone to Kilogram</a></div>
        <div><a href="/Mass/st-to-lb">Stone to Pound</a></div>
        <div><a href="/Mass/st-to-mcg">Stone to Microgram</a></div>
        <div><a href="/Mass/st-to-mg">Stone to Milligram</a></div>
        <div><a href="/Mass/st-to-oz">Stone to Ounce</a></div>
        <div><a href="/Mass/st-to-t">Stone to Ton</a></div>
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