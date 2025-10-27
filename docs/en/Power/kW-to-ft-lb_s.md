---
title: "Kilowatt (kW) to Foot-Pound per Second (ft-lb/s) Conversion"
description: "Professional kilowatt (kW) to foot-pound per second (ft-lb/s) power unit conversion tool, providing precise kW to ft-lb/s calculation formulas and real-time conversion functions. Covers application scenarios such as mechanical engineering, power transmission, hydraulic systems, supporting accurate conversion between US engineering units and international units, suitable for mechanical equipment power calculations and engineering design."
keywords:
  - Kilowatt to foot-pound per second
  - kW to ft-lb/s conversion
  - Power unit conversion
  - Power calculation formula
  - Mechanical engineering power
  - Power transmission calculation
  - Hydraulic system power
  - US power units
  - Engineering unit conversion
  - Power units
  - Watt unit
  - Kilowatt unit
  - How to calculate power
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Kilowatt to Foot-Pound per Second
    linkText: Kilowatt to Foot-Pound per Second
    linkUrl: /zh/Power/kW-to-ft-lb_s
meta:
  - name: description
    content: "Professional kilowatt (kW) to foot-pound per second (ft-lb/s) power unit conversion tool, providing precise kW to ft-lb/s calculation formulas and real-time conversion functions. Covers application scenarios such as mechanical engineering, power transmission, hydraulic systems, supporting accurate conversion between US engineering units and international units, suitable for mechanical equipment power calculations and engineering design."
  - name: keywords
    content: "Kilowatt to foot-pound per second,kW to ft-lb/s conversion,Power unit conversion,Power calculation formula,Mechanical engineering power,Power transmission calculation,Hydraulic system power,US power units,Engineering unit conversion,Power units,Watt unit,Kilowatt unit,How to calculate power"
---
# Kilowatt (kW) to Foot-Pound per Second (ft-lb/s) Conversion

The conversion from kilowatt (kW) to foot-pound per second (ft-lb/s) is an important calculation in mechanical engineering and power system design. This tool provides precise kW to ft-lb/s conversion functionality, supporting accurate conversion between US engineering units and international units. Widely used in mechanical equipment power calculations, power transmission system design, hydraulic system engineering and other professional fields, helping engineers quickly complete power unit conversions.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Kilowatt to foot-pound per second',
  'kW to ft-lb/s conversion',
  'Power unit conversion',
  'Power calculation formula',
  'Mechanical engineering power',
  'Power transmission calculation',
  'Hydraulic system power',
  'US power units',
  'Engineering unit conversion',
  'Power units',
  'Watt unit',
  'Kilowatt unit'
]

const form = ref({
  number: 0,
  from: 'kW',
  to: 'ft-lb/s',
  result: ''
})

const options = [
  { "label": "Kilowatt (kW)", "value": "kW" },
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
  if (form.value.from === 'kW' && form.value.to === 'ft-lb/s') {
    form.value.result = `${form.value.number} kW = ${(form.value.number * 737.56).toFixed(2)} ft-lb/s`
  } else if (form.value.from === 'ft-lb/s' && form.value.to === 'kW') {
    form.value.result = `${form.value.number} ft-lb/s = ${(form.value.number / 737.56).toFixed(6)} kW`
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
  title="Kilowatt to Foot-Pound per Second Conversion"
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

The conversion between kilowatt (kW) and foot-pound per second (ft-lb/s) is based on the relationship between metric and imperial power units:

**Basic Formula:**
- 1 kW = 737.56 ft-lb/s
- 1 ft-lb/s = 0.001356 kW

**Conversion Formulas:**
- kW to ft-lb/s: ft-lb/s = kW × 737.56
- ft-lb/s to kW: kW = ft-lb/s ÷ 737.56

## Application Examples

### Industrial Motors
- **Electric Motor**: 10 kW = 7,375.6 ft-lb/s
- **Pump Motor**: 5 kW = 3,687.8 ft-lb/s
- **Compressor Motor**: 15 kW = 11,063.4 ft-lb/s
- **Fan Motor**: 3 kW = 2,212.7 ft-lb/s

### Hydraulic Systems
- **Hydraulic Pump**: 20 kW = 14,751.2 ft-lb/s
- **Hydraulic Motor**: 8 kW = 5,900.5 ft-lb/s
- **Power Unit**: 25 kW = 18,439.0 ft-lb/s
- **Servo System**: 2 kW = 1,475.1 ft-lb/s

### Power Transmission
- **Gearbox**: 50 kW = 36,878.0 ft-lb/s
- **Belt Drive**: 12 kW = 8,850.7 ft-lb/s
- **Chain Drive**: 18 kW = 13,276.1 ft-lb/s
- **Coupling**: 30 kW = 22,126.8 ft-lb/s

### Manufacturing Equipment
- **CNC Machine**: 7.5 kW = 5,531.7 ft-lb/s
- **Conveyor System**: 4 kW = 2,950.2 ft-lb/s
- **Mixer**: 22 kW = 16,226.3 ft-lb/s
- **Press Machine**: 35 kW = 25,814.6 ft-lb/s

## Usage Recommendations

1. **Engineering Design**: Convert between metric and imperial power units
2. **Equipment Specification**: Standardize power ratings across different systems
3. **Performance Analysis**: Compare equipment performance in different unit systems
4. **Technical Documentation**: Ensure consistency in international projects
5. **System Integration**: Match components with different power unit specifications

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