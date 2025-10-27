---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/st-to-oz
      linkText: Stone to Ounce
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from stone (st) to ounce (oz)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, stone, ounce, st, oz, stone to ounce, mass conversion guide"
---
# Stone (st) to Ounce (oz) Conversion
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
    const convertedValue = parseFloat(form.number) * 224
    form.result = `${form.number}st = ${convertedValue.toFixed(0)}oz`
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

**1 stone (st) = 224 ounces (oz)**

The conversion formula is:
```
Ounces = Stones × 224
```

## Conversion Guide

### Why Convert Stones to Ounces?

1. **Cooking and Baking**: Converting body weight references to ingredient measurements
2. **Postal Services**: Converting traditional measurements for shipping calculations
3. **Retail Applications**: Converting weight specifications for product descriptions
4. **Sports and Fitness**: Converting body weight to smaller units for precise tracking

### Conversion Method

To convert stones to ounces:
1. Take the number of stones
2. Multiply by 224
3. The result is the equivalent in ounces

### Practical Examples

- **1 st** = 224 oz
- **0.5 st** = 112 oz
- **2 st** = 448 oz
- **10 st** = 2,240 oz
- **14 st** = 3,136 oz (average adult weight)

## Summary

Converting stones to ounces involves multiplying by 224. This conversion is essential for cooking and baking, postal services, retail applications, and sports and fitness where traditional weight measurements need to be expressed in smaller imperial units.

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
        <div><a href="/Mass/st-to-mt">Stone to Metric Ton</a></div>
        <div><a href="/Mass/st-to-t">Stone to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
  <n-gi>
    <n-card title="Ounce Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">oz conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
        <div><a href="/Mass/oz-to-g">Ounce to Gram</a></div>
        <div><a href="/Mass/oz-to-kg">Ounce to Kilogram</a></div>
        <div><a href="/Mass/oz-to-lb">Ounce to Pound</a></div>
        <div><a href="/Mass/oz-to-mcg">Ounce to Microgram</a></div>
        <div><a href="/Mass/oz-to-mg">Ounce to Milligram</a></div>
        <div><a href="/Mass/oz-to-mt">Ounce to Metric Ton</a></div>
        <div><a href="/Mass/oz-to-st">Ounce to Stone</a></div>
        <div><a href="/Mass/oz-to-t">Ounce to Ton</a></div>
      </div>
    </n-card>
  </n-gi>
</n-grid>