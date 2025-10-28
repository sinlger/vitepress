---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: Home
  - - link: /Temperature/index
      linkText: Temperature Conversion
  - - link: /Temperature/Celsius-to-Fahrenheit
      linkText: Celsius to Fahrenheit
head:
  - - meta
    - name: description
      content: "Online Celsius (°C) to Fahrenheit (°F) conversion tool. Easily perform temperature unit conversions with detailed formulas, examples, and FAQs to help you quickly complete Celsius to Fahrenheit conversions."
  - - meta
    - name: keywords
      content: "celsius to fahrenheit, celsius fahrenheit conversion, temperature conversion, temperature calculator, celsius fahrenheit formula, temperature units, celsius symbol, fahrenheit symbol, temperature converter"

---
# Celsius (°C) to Fahrenheit (°F) Conversion

Need to quickly convert **Celsius (°C)** to **Fahrenheit (°F)**? This page provides an easy-to-use online **temperature conversion** tool, along with detailed **Celsius to Fahrenheit conversion** formulas and examples to help you master **temperature unit conversions**.

---
<script setup>
const seoKey =["temperature units","kelvin celsius conversion","temperature conversion formula","celsius fahrenheit conversion","celsius kelvin conversion","celsius symbol","celsius to fahrenheit","temperature conversion","kelvin celsius calculator","fahrenheit celsius conversion","celsius english","temperature calculator","temperature units","celsius symbol °C","celsius kelvin conversion","celsius symbol","fahrenheit celsius conversion","temperature symbols","kelvin celsius conversion","celsius fahrenheit conversion","fahrenheit to celsius","celsius symbol °C"]
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: 'No result yet',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) * 1.8) + 32
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}°F`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Celsius (°C)">
    <n-input-number v-model:value="form.number" placeholder="Enter Celsius temperature" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
</n-form>
<n-card
  title="Celsius (°C) to Fahrenheit (°F) Conversion Result"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span>Use our tool for quick Celsius to Fahrenheit conversions!</span>
    </div>
  </template>
</n-card>

## Conversion Formula

The formula to convert from **Celsius (°C)** to **Fahrenheit (°F)** is simple:
$$ °F = °C \times 1.8 + 32 $$
This formula is the foundation for all **Celsius to Fahrenheit temperature conversions**.

### Conversion Examples
- **What is 0°C in Fahrenheit?**
  - `32°F`
- **What is 25°C (room temperature) in Fahrenheit?**
  - `77°F`
- **What is 100°C (water boiling point) in Fahrenheit?**
  - `212°F`

## Frequently Asked Questions

### What is the symbol for Celsius?
The **Celsius symbol** is **°C**. Please ensure you use the correct symbol when writing.

### How to convert between Kelvin and Celsius?
While this page focuses on Celsius to Fahrenheit conversion, understanding **Kelvin and Celsius conversion** is also useful. The relationship between Kelvin (K) and Celsius is: `K = °C + 273.15`.

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Temperature" :key="index">
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