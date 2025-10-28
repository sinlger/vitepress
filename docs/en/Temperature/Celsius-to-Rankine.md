---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Temperature/index
      linkText: Temperature Conversion
  - - link: /Temperature/Celsius-to-Rankine
      linkText: Celsius to Rankine

head:
  - - meta
    - name: description
      content: "Online Celsius (°C) to Rankine (R) conversion tool. Easily convert temperature units with detailed conversion formulas, examples, and FAQs to help you quickly complete Celsius to Rankine conversions."
  - - meta
    - name: keywords
      content: "celsius to rankine, celsius rankine conversion, temperature conversion, temperature calculator, celsius rankine formula, celsius symbol, rankine celsius conversion"
---
# Celsius (°C) to Rankine (R) Conversion

Need to quickly convert **Celsius (°C)** to **Rankine (R)**? This page provides an easy-to-use online **temperature conversion** tool, along with detailed **Celsius to Rankine conversion** formulas and examples to help you master **Celsius and Rankine conversions**.

---
<script setup>
    const seoKey =["temperature units","celsius rankine conversion","celsius rankine conversion formula","celsius fahrenheit conversion","celsius kelvin conversion","celsius symbol","celsius to fahrenheit","temperature conversion","celsius rankine calculator","fahrenheit celsius conversion","celsius english","temperature calculator","temperature units","celsius symbol °C","celsius kelvin conversion","celsius symbol","fahrenheit celsius conversion","temperature symbols","kelvin celsius conversion","celsius fahrenheit conversion","fahrenheit to celsius","celsius symbol °C"]
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../files';

const convert = inject('convert')

const form = reactive({
  number: null,
  result: 'No result yet',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) + 273.15) * 1.8
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}R`
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
  title="Celsius (°C) to Rankine (R) Conversion Result"
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
      <span>Use our tool for quick Celsius to Rankine conversions!</span>
    </div>
  </template>
</n-card>

## Conversion Formula

The formula to convert from **Celsius (°C)** to **Rankine (R)** is:
$$ R = (°C + 273.15) \times 1.8 $$
This formula is the foundation for all **Rankine and Celsius conversions**.

### Conversion Examples
- **What is 0°C in Rankine?**
  - `491.67R`
- **What is 25°C (room temperature) in Rankine?**
  - `536.67R`
- **What is 100°C (water boiling point) in Rankine?**
  - `671.67R`

## Frequently Asked Questions

### What is the symbol for Celsius?
The **Celsius symbol** is **°C**. Please ensure you use the correct symbol when writing.

### What is the relationship between Rankine and Celsius conversion?
The **Rankine and Celsius conversion** relationship is: `R = (°C + 273.15) × 1.8`. Rankine is an absolute temperature scale commonly used in engineering fields.

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