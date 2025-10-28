---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Temperature/index
      linkText: Temperature Conversion
  - - link: /Temperature/Rankine-to-Celsius
      linkText: Rankine to Celsius

head:
  - - meta
    - name: description
      content: "Professional online Rankine to Celsius conversion tool, supporting Celsius to Rankine (°R) conversion, Kelvin temperature conversion, etc. Provides detailed temperature conversion formulas and unit conversion explanations, making it your best choice for temperature conversion."
  - - meta
    - name: keywords
      content: "celsius to rankine conversion, kelvin temperature, temperature conversion, temperature conversion, unit conversion"
---
# Rankine (R) to Celsius (°C) Conversion

Need to perform **Celsius to Rankine (°R) conversion**? This page provides professional **temperature conversion** tools, supporting **temperature conversion** between Rankine and Celsius. We provide detailed **Kelvin temperature** conversion formulas and examples to help you easily master various **unit conversion** methods.
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../files';
const seoKey = ['celsius to rankine conversion', 'kelvin temperature', 'temperature conversion', 'temperature conversion', 'unit conversion']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = (parseFloat(form.number) / 1.8) - 273.15
    form.result = `${form.number}R = ${convertedValue.toFixed(2)}°C`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Rankine (R)">
    <n-input-number v-model:value="form.number" placeholder="Enter Rankine value" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
</n-form>
<n-card
  title="Rankine (R) to Celsius (°C) Conversion Result"
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
      <span v-for="item of seoKey">{{item}}, </span>
    </div>
  </template>
</n-card>

## Conversion Formula

### Rankine to Celsius Formula
The formula for converting from **Rankine (R)** to **Celsius (°C)** is:
$$ °C = \frac{R}{1.8} - 273.15 $$

### Celsius to Rankine Conversion Formula
The reverse **Celsius to Rankine (°R) conversion** formula is:
$$ R = (°C + 273.15) \times 1.8 $$

### Conversion Examples
Here are some common **temperature conversion** examples:
- **491.67R (water freezing point)** = 0°C
- **536.67R (room temperature)** = 25°C
- **671.67R (water boiling point)** = 100°C

## Frequently Asked Questions

### What is Rankine?
Rankine (°R) is an absolute temperature scale based on Fahrenheit degrees, but starting from absolute zero. It has important applications in engineering and scientific calculations.

### What are the applications of Celsius to Rankine conversion?
**Celsius to Rankine (°R) conversion** is widely used in:
- Thermodynamic calculations
- Engineering design
- Scientific research
- Energy system analysis

### What is Kelvin temperature?
**Kelvin temperature** refers to the Kelvin temperature scale, which is the base temperature unit in the International System of Units. In **temperature conversion**, Kelvin temperature is often used as an intermediate conversion unit.

### Why do we need temperature conversion?
**Temperature conversion** has important significance in different scientific and engineering fields. **Unit conversion** helps us perform accurate **temperature conversion** between different temperature scales.

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