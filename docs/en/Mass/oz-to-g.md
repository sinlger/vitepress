---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/oz-to-g
      linkText: Ounce to Gram
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations from ounce (oz) to gram (g)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, ounce, gram, oz, g, ounce to gram, mass conversion guide"
---
# Ounce (oz) to Gram (g) Conversion
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
    const convertedValue = parseFloat(form.number) * 28.349523125
    form.result = `${form.number}oz = ${convertedValue.toFixed(3)}g`
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

**1 ounce (oz) = 28.349523125 grams (g)**

The conversion formula is:
```
Grams = Ounces × 28.349523125
```

## Conversion Guide

### Why Convert Ounces to Grams?

1. **Cooking and Baking**: Converting recipe measurements between imperial and metric systems
2. **International Trade**: Standardizing measurements for global commerce
3. **Scientific Applications**: Laboratory work often requires metric measurements
4. **Nutrition and Health**: Food labeling and dietary calculations often use grams

### Conversion Method

To convert ounces to grams:
1. Take the number of ounces
2. Multiply by 28.349523125
3. The result is the equivalent in grams

### Practical Examples

- **1 oz** = 28.350 g
- **2 oz** = 56.699 g
- **4 oz** = 113.398 g (quarter pound)
- **8 oz** = 226.796 g (half pound)
- **16 oz** = 453.592 g (one pound)

## Summary

Converting ounces to grams involves multiplying by 28.349523125. This conversion is essential in cooking, international trade, scientific applications, and nutrition where precise metric measurements are required.

## Related Links

<n-grid :cols="2" :x-gap="12" :y-gap="8">
  <n-gi>
    <n-card title="Other Ounce Conversions" size="small">
      <template #header-extra>
        <span style="font-size: 12px; color: #666;">oz conversions</span>
      </template>
      <div style="font-size: 13px; line-height: 1.6;">
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