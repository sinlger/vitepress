---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/st-to-lb
      linkText: Stone to Pound
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from stone (st) to pound (lb)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, stone, pound, st, lb, stone to pound, mass conversion guide"
---
# Stone (st) to Pound (lb) Conversion
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
    const convertedValue = parseFloat(form.number) * 14
    form.result = `${form.number}st = ${convertedValue.toFixed(0)}lb`
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

**1 stone (st) = 14 pounds (lb)**

The conversion formula is:
```
Pounds = Stones × 14
```

## Conversion Guide

### Why Convert Stones to Pounds?

1. **Body Weight Measurement**: Converting between traditional British weight units
2. **Medical Applications**: Converting weight measurements for healthcare records
3. **Sports and Fitness**: Converting weight categories and measurements
4. **Historical Context**: Understanding traditional British weight relationships

### Conversion Method

To convert stones to pounds:
1. Take the number of stones
2. Multiply by 14 (since there are exactly 14 pounds in 1 stone)
3. The result is the equivalent in pounds

### Practical Examples

- **1 st** = 14 lb
- **2 st** = 28 lb
- **5 st** = 70 lb
- **10 st** = 140 lb
- **14 st** = 196 lb (average adult weight)

## Summary

Converting stones to pounds involves multiplying by 14. This is a simple conversion within the British imperial system, commonly used for body weight measurements, medical applications, sports, and understanding traditional weight relationships.

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
        <div><a href="/Mass/st-to-mcg">Stone to Microgram</a></div>
        <div><a href="/Mass/st-to-mg">Stone to Milligram</a></div>
        <div><a href="/Mass/st-to-mt">Stone to Metric Ton</a></div>
        <div><a href="/Mass/st-to-oz">Stone to Ounce</a></div>
        <div><a href="/Mass/st-to-t">Stone to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
  <n-gi>
    <n-card title="Pound Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">lb conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/lb-to-g">Pound to Gram</a></div>
        <div><a href="/Mass/lb-to-kg">Pound to Kilogram</a></div>
        <div><a href="/Mass/lb-to-mcg">Pound to Microgram</a></div>
        <div><a href="/Mass/lb-to-mg">Pound to Milligram</a></div>
        <div><a href="/Mass/lb-to-mt">Pound to Metric Ton</a></div>
        <div><a href="/Mass/lb-to-oz">Pound to Ounce</a></div>
        <div><a href="/Mass/lb-to-st">Pound to Stone</a></div>
        <div><a href="/Mass/lb-to-t">Pound to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>