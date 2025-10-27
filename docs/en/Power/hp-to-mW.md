---
title: "Horsepower (hp) to Milliwatt (mW) Conversion"
description: "Professional horsepower (hp) to milliwatt (mW) power unit conversion tool. Provides precise conversion formulas, real-time calculator, and technical guidance for applications ranging from large machinery to micro-electronic devices."
keywords:
  - Horsepower to milliwatt
  - hp to mW conversion
  - Power unit conversion
  - Horsepower calculator
  - Milliwatt calculation
  - Large machinery power
  - Micro-electronic devices
  - Power system conversion
  - hp conversion formula
  - mW calculator
  - Power unit conversion tool
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Horsepower to Milliwatt
    linkText: Horsepower to Milliwatt
    linkUrl: /zh/Power/hp-to-mW
meta:
  - name: description
    content: "Professional horsepower (hp) to milliwatt (mW) power unit conversion tool. Provides precise conversion formulas, real-time calculator, and technical guidance for applications ranging from large machinery to micro-electronic devices."
  - name: keywords
    content: "Horsepower to milliwatt,hp to mW conversion,Power unit conversion,Horsepower calculator,Milliwatt calculation,Large machinery power,Micro-electronic devices,Power system conversion,hp conversion formula,mW calculator,Power unit conversion tool"
---
# Horsepower (hp) to Milliwatt (mW) Conversion

The conversion from horsepower (hp) to milliwatt (mW) involves a transformation from traditional mechanical power units to micro-power electronic device units. This conversion spans an enormous range from large machinery and engines to ultra-low power electronic components and sensors. Horsepower is commonly used to describe the power of engines, motors, and large mechanical equipment, while milliwatts are used for micro-electronic devices, sensors, and low-power circuits.

This tool provides professional hp to mW conversion functionality, supporting high-precision calculations and real-time conversion, suitable for engineers working across different scales of power systems, from automotive and industrial applications to IoT and electronic device design.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Horsepower conversion', 'hp to mW', 'Milliwatt calculation', 'Large power conversion', 
  'Engine power', 'Micro-electronic power', 'Industrial equipment power', 'Power system conversion',
  'Large machinery', 'mW calculator', 'Engine power conversion', 'Micro-power device calculation'
]

const form = ref({
  number: 0,
  from: 'hp',
  to: 'mW',
  result: ''
})

const options = [
  { "label": "Horsepower (hp)", "value": "hp" },
  { "label": "Milliwatt (mW)", "value": "mW" }
]

const rules = {
  number: {
    required: true,
    message: 'Please enter a number',
    trigger: ['blur', 'input']
  },
  to: {
    required: true,
    message: 'Please select conversion unit',
    trigger: 'select'
  },
  from: {
    required: true,
    message: 'Please select original unit',
    trigger: 'select'
  }
}

const convertHandler = () => {
  if (form.value.from === 'hp' && form.value.to === 'mW') {
    form.value.result = `${form.value.number} hp = ${(form.value.number * 745699.872).toFixed(3)} mW`
  } else if (form.value.from === 'mW' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} mW = ${(form.value.number / 745699.872).toFixed(9)} hp`
  } else {
    form.value.result = `${form.value.number} ${form.value.from} = ${form.value.number} ${form.value.to}`
  }
}
</script>

<n-form size="large" :model="form" :rules="rules">
  <n-form-item label="Value" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="Enter the value to convert" />
  </n-form-item>
  <n-form-item label="From" path="from">
    <n-select size="large" :options="options" v-model:value="form.from" placeholder="Select original unit" />
  </n-form-item>
  <n-form-item label="To" path="to">
    <n-select size="large" :options="options" v-model:value="form.to" placeholder="Select conversion unit" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
  </n-form-item>
</n-form>
<n-card  
  title="Horsepower to Milliwatt Conversion"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}, </span>
    </div>
  </template>
</n-card>

## Conversion Formula

The conversion between horsepower (hp) and milliwatt (mW) involves a large scale difference:

**Basic Formula:**
- 1 hp = 745.699872 W = 745,699.872 mW
- 1 mW = 0.000001341 hp (approximately)

**Conversion Formulas:**
- hp to mW: mW = hp × 745,699.872
- mW to hp: hp = mW ÷ 745,699.872

## Application Examples

### Large Power Sources (hp Range)
- **Car Engine**: 200 hp = 149,139,974.4 mW
- **Industrial Motor**: 50 hp = 37,284,993.6 mW
- **Generator**: 100 hp = 74,569,987.2 mW
- **Marine Engine**: 500 hp = 372,849,936 mW

### Micro Power Devices (mW Range)
- **Smartphone Processor**: 2,000 mW = 0.00268 hp
- **IoT Sensor**: 10 mW = 0.0000134 hp
- **Bluetooth Module**: 50 mW = 0.0000671 hp
- **Smartwatch**: 100 mW = 0.000134 hp

### Scale Comparison
- **Motorcycle Engine**: 25 hp = 18,642,496.8 mW
- **Laptop Computer**: 65,000 mW = 0.0872 hp
- **Electric Drill**: 5 hp = 3,728,499.36 mW
- **LED Light**: 10,000 mW = 0.0134 hp

## Usage Recommendations

1. **Automotive Engineering**: Compare engine power with electronic system power consumption
2. **Industrial Design**: Analyze power requirements from machinery to control systems
3. **Energy Efficiency**: Evaluate power consumption across different scales
4. **System Integration**: Balance mechanical and electronic power requirements
5. **Power Budget Planning**: Understand total system power from engines to sensors

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file,index) in Power" :key="index">
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