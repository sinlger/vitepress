---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Temperature/index
      linkText: Temperature Conversion
  - - link: /Temperature/Celsius-to-Kelvin
      linkText: Celsius to Kelvin
head:
  - - meta
    - name: description
      content: "Online Celsius (°C) to Kelvin (K) conversion tool. Easily convert temperature units with detailed conversion formulas, examples, and FAQs to help you quickly complete Celsius to Kelvin conversions."
  - - meta
    - name: keywords
      content: "celsius to kelvin, celsius kelvin conversion, temperature conversion, temperature calculator, celsius kelvin formula, celsius symbol, kelvin celsius conversion, temperature units"

---
# Celsius (°C) to Kelvin (K) Conversion

Need to quickly convert **Celsius (°C)** to **Kelvin (K)**? This page provides an easy-to-use online **temperature conversion** tool, along with detailed **Celsius to Kelvin conversion** formulas and examples to help you master **Celsius and Kelvin conversions**.

---
<script setup>
  const seoKey =["temperature units","kelvin celsius conversion","kelvin celsius conversion formula","celsius fahrenheit conversion","celsius kelvin conversion","celsius symbol","celsius to fahrenheit","temperature conversion","kelvin celsius calculator","fahrenheit celsius conversion","celsius english","temperature calculator","temperature units","celsius symbol °C","celsius kelvin conversion","celsius symbol","fahrenheit celsius conversion","temperature symbols","kelvin celsius conversion","celsius fahrenheit conversion","fahrenheit to celsius","celsius symbol °C"]
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
    const convertedValue = parseFloat(form.number) + 273.15
    form.result = `${form.number}°C = ${convertedValue.toFixed(2)}K`
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
  title="Celsius (°C) to Kelvin (K) Conversion Result"
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
      <span>Use our tool for quick Celsius to Kelvin conversions!</span>
    </div>
  </template>

</n-card>

## Conversion Formula

The formula to convert from **Celsius (°C)** to **Kelvin (K)** is simple:
$$ K = °C + 273.15 $$
This formula is the foundation for all **Kelvin and Celsius conversions**.

### Conversion Examples
- **What is 0°C in Kelvin?**
  - `273.15K`
- **What is 25°C (room temperature) in Kelvin?**
  - `298.15K`
- **What is 100°C (water boiling point) in Kelvin?**
  - `373.15K`

## Frequently Asked Questions

### What is the symbol for Celsius?
The **Celsius symbol** is **°C**. Please ensure you use the correct symbol when writing.

### What is the relationship between Kelvin and Celsius conversion?
The **Kelvin and Celsius conversion** relationship is: `K = °C + 273.15`. Kelvin is the international unit for thermodynamic temperature, while Celsius is one of the most commonly used temperature units in daily life.

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