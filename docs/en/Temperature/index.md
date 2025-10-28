---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Temperature/index
      linkText: Temperature Conversion
head:
  - - meta
    - name: description
      content: "Comprehensive temperature unit conversion guide to help you easily convert between Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (R). This article provides detailed temperature conversion formulas, online calculators, and frequently asked questions, making it an essential tool for scientific research, learning, or daily temperature conversion and unit conversion needs."
  - - meta
    - name: keywords
      content: "temperature conversion, temperature calculator, unit conversion, celsius, fahrenheit, kelvin, rankine, celsius kelvin conversion, celsius fahrenheit conversion, fahrenheit to celsius, kelvin celsius conversion, celsius symbol"
---
# Temperature Unit Conversion: Celsius, Fahrenheit, Kelvin Conversion Guide

Whether you're performing scientific calculations, processing weather data, or cooking in the kitchen, **temperature conversion** is a common requirement. This guide will provide you with detailed information about the most commonly used temperature units—Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (R)—as well as **unit conversion** methods between them. Using our online tools, you can quickly complete **Celsius and Kelvin conversion**, **Celsius and Fahrenheit conversion**, and any other temperature unit conversions.

---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../files';
const seoKey = [
  'celsius kelvin conversion',
  'celsius symbol',
  'temperature conversion',
  'kelvin celsius conversion',
  'temperature calculator',
  'celsius kelvin conversion',
  'kelvin celsius conversion',
  'celsius fahrenheit conversion',
  'fahrenheit to celsius',
  'unit conversion',
  'celsius',
  'celsius symbol °C'
]
const convert = inject('convert')
const options =  [
  { label: 'Celsius (°C)', value: 'C' },
  { label: 'Kelvin (K)', value: 'K' },
  { label: 'Fahrenheit (°F)', value: 'F' },
  { label: 'Rankine (R)', value: 'R' }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur",
    message: 'Please enter a number'
  },
  to:{
    required: true,
    trigger: "select",
    message: 'Please select conversion unit'
  },
  from:{
    required: true,
    trigger: "select",
    message: 'Please select original unit'
  }
}
const form = reactive({
  number:null,
  to:'',
  from:'',
  result:'',
  title:'Temperature Unit Conversion',
})
const convertHandler = (e) => {
   e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number}${form.from} = ${convert(form.number).from(form.from).to(form.to)}${form.to}`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="Value"  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="Enter the value to convert" />
  </n-form-item>
  <n-form-item label="From" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="Select original unit" />
  </n-form-item>
  <n-form-item label="To" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="Select conversion unit" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
  </n-form-item>
</n-form>
<n-card
  title="Temperature Conversion Result"
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

## Temperature Unit Definitions and Conversion Formulas

To accurately perform **temperature conversion**, it's essential to first understand the definitions of each unit. The table below clearly shows the definitions and core **conversion formulas** for Celsius, Kelvin, Fahrenheit, and Rankine.

| Unit Symbol | English Name | Unit Name   | Definition                                                                                     | Conversion Formulas                                                                                     |
|----------|----------|------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| °C       | Celsius| Celsius      | At standard atmospheric pressure, pure water freezes at 0°C and boils at 100°C. The **Celsius symbol** is °C.                           | - → K: ( K = °C + 273.15 )  <br> - → °F: ( °F = °C × 1.8 + 32 )  <br> - → R: ( R = (°C + 273.15) * 1.8 )  |
| K        | Kelvin| Kelvin      | Thermodynamic temperature scale, absolute zero = 0K. **Kelvin and Celsius conversion** is very simple and is the preferred choice in scientific research.    | - → °C: ( °C = K - 273.15 )  <br> - → °F: ( °F = (K - 273.15) × 1.8 + 32 )  <br> - → R: ( R = K * 1.8 )     |
| °F       | Fahrenheit  | Fahrenheit      | At standard atmospheric pressure, pure water freezes at 32°F and boils at 212°F. Commonly used in the United States.                     | - → °C: ( °C = (°F - 32) ÷ 1.8 )  <br> - → K: ( K = (°F - 32) ÷ 1.8 + 273.15 )  <br> - → R: ( R = °F + 459.67 )  |
| R       | Rankine | Rankine    | Absolute temperature scale in imperial units, absolute zero = 0R. Mainly used in engineering fields.                             | - → °F: ( °F = R - 459.67 )  <br> - → K: ( K = R / 1.8 )  <br> - → °C: ( °C = (R / 1.8) - 273.15 ) |

## Common Temperature Conversion Details

### Celsius to Kelvin Conversion (C to K)
**Celsius and Kelvin conversion** is one of the most common conversions in scientific calculations. Since they have the same temperature scale intervals, the conversion is very straightforward.
- **From Celsius to Kelvin**: `K = °C + 273.15`
- **From Kelvin to Celsius**: `°C = K - 273.15`

### Celsius to Fahrenheit Conversion (C to F)
This is the most common **temperature conversion** in daily life, especially between different countries.
- **From Celsius to Fahrenheit**: `°F = °C × 1.8 + 32`
- **From Fahrenheit to Celsius**: `°C = (°F - 32) ÷ 1.8`

### What is Absolute Zero?
Absolute zero is the theoretical lower limit of temperature, where the kinetic energy of matter's molecules is zero. In the Kelvin (K) and Rankine (R) temperature scales, 0 degrees represents absolute zero.
- `0 K = -273.15 °C`
- `0 R = -459.67 °F`

### Daily Applications of Temperature Units
- **Celsius (°C)**: The standard unit used by the vast majority of countries worldwide and in scientific fields.
- **Fahrenheit (°F)**: Mainly used in the United States and its territories, commonly seen in weather forecasts and daily body temperature measurements.
- **Kelvin (K)**: The base unit of the International System of Units (SI), widely used in physics, chemistry, and other scientific research.
- **Rankine (R)**: Mainly used in specific engineering fields (such as thermodynamics), very rare in daily life.

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