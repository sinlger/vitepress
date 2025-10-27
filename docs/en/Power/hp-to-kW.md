---
title: "Horsepower (hp) to Kilowatt (kW) Conversion"
description: "Professional horsepower (hp) to kilowatt (kW) power unit conversion tool. Provides precise conversion formulas, real-time calculator, engineering application examples and technical guidance for automotive industry, mechanical equipment, motor selection and other power unit conversion needs."
keywords:
  - Horsepower to kilowatt
  - hp to kW conversion
  - Power unit conversion
  - Horsepower calculator
  - Kilowatt calculation
  - Automotive engine power
  - Motor power conversion
  - Industrial equipment power
  - Mechanical power calculation
  - Power unit conversion tool
  - hp conversion formula
  - kW calculator
  - Engine power conversion
  - Motor selection calculation
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Horsepower to Kilowatt
    linkText: Horsepower to Kilowatt
    linkUrl: /zh/Power/hp-to-kW
meta:
  - name: description
    content: "Professional horsepower (hp) to kilowatt (kW) power unit conversion tool. Provides precise conversion formulas, real-time calculator, engineering application examples and technical guidance for automotive industry, mechanical equipment, motor selection and other power unit conversion needs."
  - name: keywords
    content: "Horsepower to kilowatt,hp to kW conversion,Power unit conversion,Horsepower calculator,Kilowatt calculation,Automotive engine power,Motor power conversion,Industrial equipment power,Mechanical power calculation,Power unit conversion tool,hp conversion formula,kW calculator,Engine power conversion,Motor selection calculation"
---
# Horsepower (hp) to Kilowatt (kW) Conversion

The conversion from horsepower (hp) to kilowatt (kW) is one of the most commonly used power unit conversions in engineering technology. Horsepower is primarily used for power ratings of automobiles, ships, and traditional mechanical equipment, while kilowatt is the power unit in the International System of Units, widely used in motors, power generation equipment, and modern industrial systems. Accurate unit conversion is crucial for equipment selection, performance comparison, and engineering design.

This tool provides professional hp to kW conversion functionality, supporting bidirectional conversion and real-time calculation, suitable for the daily work needs of automotive engineers, mechanical designers, electrical engineers, and equipment procurement personnel.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Horsepower conversion', 'hp to kW', 'Kilowatt calculation', 'Power unit conversion', 
  'Automotive engine power', 'Motor power conversion', 'Industrial equipment power', 'Mechanical power calculation',
  'Engine power conversion', 'Motor selection calculation', 'Horsepower calculator', 'kW calculator'
]

const form = ref({
  number: 0,
  from: 'hp',
  to: 'kW',
  result: ''
})

const options = [
  { "label": "Horsepower (hp)", "value": "hp" },
  { "label": "Kilowatt (kW)", "value": "kW" }
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
  if (form.value.from === 'hp' && form.value.to === 'kW') {
    form.value.result = `${form.value.number} hp = ${(form.value.number * 0.745699872).toFixed(6)} kW`
  } else if (form.value.from === 'kW' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} kW = ${(form.value.number / 0.745699872).toFixed(6)} hp`
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
  title="Horsepower to Kilowatt Conversion"
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

The conversion between horsepower (hp) and kilowatt (kW) is based on the standard definition:

**Basic Formula:**
- 1 hp = 0.745699872 kW
- 1 kW = 1.34102209 hp

**Conversion Formulas:**
- hp to kW: kW = hp × 0.745699872
- kW to hp: hp = kW × 1.34102209

## Application Examples

### Automotive Industry
- **Compact Car Engine**: 150 hp = 111.85 kW
- **Mid-size Car Engine**: 200 hp = 149.14 kW
- **Sports Car Engine**: 400 hp = 298.28 kW
- **Truck Engine**: 500 hp = 372.85 kW

### Industrial Motors
- **Small Industrial Motor**: 5 hp = 3.73 kW
- **Medium Industrial Motor**: 50 hp = 37.28 kW
- **Large Industrial Motor**: 200 hp = 149.14 kW
- **Heavy Duty Motor**: 1000 hp = 745.70 kW

### Marine Applications
- **Outboard Motor**: 25 hp = 18.64 kW
- **Yacht Engine**: 300 hp = 223.71 kW
- **Commercial Vessel**: 2000 hp = 1491.40 kW
- **Large Ship Engine**: 10000 hp = 7457.00 kW

### Power Generation
- **Backup Generator**: 100 hp = 74.57 kW
- **Industrial Generator**: 500 hp = 372.85 kW
- **Emergency Generator**: 1500 hp = 1118.55 kW

## Usage Recommendations

1. **Equipment Selection**: Compare power ratings across different manufacturers and standards
2. **Performance Analysis**: Evaluate engine and motor efficiency across different power ranges
3. **System Design**: Calculate total power requirements for industrial systems
4. **Cost Estimation**: Determine operating costs based on power consumption
5. **Compliance**: Meet international standards and regulations for power specifications

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