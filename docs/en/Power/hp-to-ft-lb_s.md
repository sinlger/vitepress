---
title: "Horsepower (hp) to Foot-Pound per Second (ft-lb/s) Conversion"
description: "Professional horsepower (hp) to foot-pound per second (ft-lb/s) power unit conversion tool. Provides precise conversion formulas, real-time calculator, engineering application examples and technical guidance, suitable for power unit conversion needs in mechanical engineering, automotive industry, marine power and other fields."
keywords:
  - Horsepower to foot-pound per second
  - hp to ft-lb/s conversion
  - Power unit conversion
  - Horsepower calculator
  - Imperial power units
  - Mechanical power calculation
  - Automotive engine power
  - Marine power conversion
  - Industrial equipment power
  - Power unit conversion tool
  - hp conversion formula
  - ft-lb/s calculator
  - US power units
  - Power system conversion
  - Mechanical engineering calculation
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Horsepower to Foot-Pound per Second
    linkText: Horsepower to Foot-Pound per Second
    linkUrl: /zh/Power/hp-to-ft-lb_s
meta:
  - name: description
    content: "Professional horsepower (hp) to foot-pound per second (ft-lb/s) power unit conversion tool. Provides precise conversion formulas, real-time calculator, engineering application examples and technical guidance, suitable for power unit conversion needs in mechanical engineering, automotive industry, marine power and other fields."
  - name: keywords
    content: "Horsepower to foot-pound per second,hp to ft-lb/s conversion,Power unit conversion,Horsepower calculator,Imperial power units,Mechanical power calculation,Automotive engine power,Marine power conversion,Industrial equipment power,Power unit conversion tool,hp conversion formula,ft-lb/s calculator,US power units,Power system conversion,Mechanical engineering calculation"
---
# Horsepower (hp) to Foot-Pound per Second (ft-lb/s) Conversion

The conversion from horsepower (hp) to foot-pound per second (ft-lb/s) is an important calculation in mechanical engineering and power system design. Horsepower is a traditional power unit widely used in automotive, marine and industrial equipment, while foot-pound per second is another commonly used power representation. Accurate unit conversion is crucial for equipment selection, performance evaluation and engineering design.

This tool provides professional hp to ft-lb/s conversion functionality, supporting real-time calculation and precise conversion, suitable for the daily work needs of mechanical engineers, automotive technicians and industrial design professionals.

<script setup>
import { ref, computed } from 'vue'

// SEO keywords array
const seoKey = [
  'Horsepower conversion', 'hp to ft-lb/s', 'Power unit conversion', 'Horsepower calculator', 
  'Imperial power units', 'Mechanical power conversion', 'Automotive engine power', 'Marine power calculation',
  'Industrial equipment power', 'Power system conversion', 'US power units', 'Mechanical engineering calculation'
]

const form = ref({
  number: 0,
  from: 'hp',
  to: 'ft-lb/s',
  result: ''
})

const options = [
  { "label": "Horsepower (hp)", "value": "hp" },
  { "label": "Foot-Pound per Second (ft-lb/s)", "value": "ft-lb/s" }
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
  if (form.value.from === 'hp' && form.value.to === 'ft-lb/s') {
    form.value.result = `${form.value.number} hp = ${(form.value.number * 550).toFixed(2)} ft-lb/s`
  } else if (form.value.from === 'ft-lb/s' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} ft-lb/s = ${(form.value.number / 550).toFixed(6)} hp`
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
  title="Horsepower to Foot-Pound per Second Conversion"
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

The conversion between horsepower (hp) and foot-pound per second (ft-lb/s) is based on the definition of horsepower:

**Basic Formula:**
- 1 hp = 550 ft-lb/s
- 1 ft-lb/s = 0.001818 hp (1/550 hp)

**Conversion Formulas:**
- hp to ft-lb/s: ft-lb/s = hp × 550
- ft-lb/s to hp: hp = ft-lb/s ÷ 550

## Application Examples

### Automotive Industry
- **Car Engine**: 200 hp = 110,000 ft-lb/s
- **Motorcycle Engine**: 100 hp = 55,000 ft-lb/s
- **Truck Engine**: 400 hp = 220,000 ft-lb/s
- **Racing Car**: 800 hp = 440,000 ft-lb/s

### Marine Applications
- **Yacht Engine**: 300 hp = 165,000 ft-lb/s
- **Fishing Boat**: 150 hp = 82,500 ft-lb/s
- **Cargo Ship**: 5,000 hp = 2,750,000 ft-lb/s
- **Speedboat**: 250 hp = 137,500 ft-lb/s

### Industrial Equipment
- **Pump Motor**: 50 hp = 27,500 ft-lb/s
- **Compressor**: 75 hp = 41,250 ft-lb/s
- **Generator**: 500 hp = 275,000 ft-lb/s
- **Conveyor System**: 25 hp = 13,750 ft-lb/s

### Agricultural Machinery
- **Tractor**: 120 hp = 66,000 ft-lb/s
- **Combine Harvester**: 300 hp = 165,000 ft-lb/s
- **Irrigation Pump**: 40 hp = 22,000 ft-lb/s
- **Threshing Machine**: 80 hp = 44,000 ft-lb/s

## Usage Recommendations

1. **Mechanical Design**: Calculate power requirements for mechanical systems
2. **Performance Analysis**: Compare power output of different engines
3. **Equipment Selection**: Choose appropriate motors and engines
4. **Engineering Calculations**: Perform power-related engineering calculations
5. **Technical Documentation**: Convert between different power units in specifications

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