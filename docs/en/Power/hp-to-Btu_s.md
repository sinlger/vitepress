---
title: "Imperial Horsepower (hp) to British Thermal Unit per Second (Btu/s) Conversion"
description: "Professional imperial horsepower (hp) to British thermal unit per second (Btu/s) conversion tool, providing precise power unit conversion formulas and calculator. Covers HVAC, refrigeration equipment, industrial heating systems and other application scenarios, supports horsepower power conversion, BTU power calculation, HVAC equipment selection and other engineering needs. Suitable for mechanical engineers, HVAC engineers and equipment selection professionals."
keywords:
  - Imperial horsepower to BTU per second
  - hp to Btu/s conversion
  - Horsepower power conversion
  - BTU power calculation
  - Power unit conversion formula
  - Power unit conversion tool
  - HVAC power conversion
  - Refrigeration equipment power calculation
  - HVAC power units
  - Industrial heating power
  - Mechanical engineering power conversion
  - Equipment selection power calculation
  - Imperial power units
  - Thermal power conversion
  - Horsepower
  - Imperial horsepower
  - British thermal unit
  - Power converter
  - hp conversion
  - Btu/s conversion
  - HVAC engineering
  - Refrigeration engineering
  - Industrial equipment power
  - Power calculator
  - Imperial unit conversion
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Imperial Horsepower to BTU per Second
    linkText: Imperial Horsepower to BTU per Second
    linkUrl: /zh/Power/hp-to-Btu_s
meta:
  - name: description
    content: "Professional imperial horsepower (hp) to British thermal unit per second (Btu/s) conversion tool, providing precise power unit conversion formulas and calculator. Covers HVAC, refrigeration equipment, industrial heating systems and other application scenarios, supports horsepower power conversion, BTU power calculation, HVAC equipment selection and other engineering needs. Suitable for mechanical engineers, HVAC engineers and equipment selection professionals."
  - name: keywords
    content: "Imperial horsepower to BTU per second,hp to Btu/s conversion,Horsepower power conversion,BTU power calculation,Power unit conversion formula,Power unit conversion tool,HVAC power conversion,Refrigeration equipment power calculation,HVAC power units,Industrial heating power,Mechanical engineering power conversion,Equipment selection power calculation,Imperial power units,Thermal power conversion,Horsepower,Imperial horsepower,British thermal unit,Power converter,hp conversion,Btu/s conversion,HVAC engineering,Refrigeration engineering,Industrial equipment power,Power calculator,Imperial unit conversion"
---
# Imperial Horsepower (hp) to British Thermal Unit per Second (Btu/s) Conversion

Imperial horsepower to British thermal unit per second conversion is an important calculation in HVAC, refrigeration equipment and industrial heating systems. This tool provides precise hp to Btu/s power unit conversion, helping engineers with equipment selection, system design and power matching calculations. Whether you are designing HVAC systems, selecting refrigeration equipment or calculating industrial heating power, this tool provides accurate conversion results and professional engineering guidance.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Imperial horsepower to BTU per second',
  'hp to Btu/s conversion',
  'Horsepower power conversion',
  'BTU power calculation',
  'Power unit conversion',
  'HVAC power',
  'Refrigeration equipment power',
  'HVAC power units',
  'Industrial heating power',
  'Mechanical engineering power',
  'Equipment selection power',
  'Imperial power units',
  'Thermal power conversion',
  'Horsepower converter',
  'hp power conversion',
  'Btu/s power calculation',
  'HVAC engineering conversion',
  'Refrigeration engineering calculation',
  'Industrial equipment power conversion',
  'Power calculator',
]

const form = ref({
  number: 0,
  from: 'hp',
  to: 'Btu/s',
  result: ''
})

const options = [
  { "label": "Imperial Horsepower (hp)", "value": "hp" },
  { "label": "British Thermal Unit per Second (Btu/s)", "value": "Btu/s" }
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
  if (form.value.from === 'hp' && form.value.to === 'Btu/s') {
    form.value.result = `${form.value.number} hp = ${(form.value.number * 0.70707).toFixed(6)} Btu/s`
  } else if (form.value.from === 'Btu/s' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} Btu/s = ${(form.value.number / 0.70707).toFixed(6)} hp`
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
  title="Imperial Horsepower to BTU per Second Conversion"
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

The conversion between imperial horsepower (hp) and British thermal unit per second (Btu/s) is based on their energy definitions:

**Basic Formula:**
- 1 hp = 745.7 watts
- 1 Btu/s = 1,055.06 watts
- 1 hp = 0.70707 Btu/s
- 1 Btu/s = 1.41427 hp

**Conversion Formulas:**
- hp to Btu/s: Btu/s = hp × 0.70707
- Btu/s to hp: hp = Btu/s × 1.41427

## Application Examples

### HVAC Systems
- **Central Air Conditioning**: 5-ton AC unit requires 17.5 hp (12.37 Btu/s) compressor
- **Heat Pumps**: Residential heat pump 3 hp motor equals 2.12 Btu/s heating capacity
- **Ventilation Fans**: Industrial exhaust fan 2 hp motor equals 1.41 Btu/s power consumption

### Refrigeration Equipment
- **Commercial Refrigerators**: Walk-in cooler compressor 7.5 hp equals 5.30 Btu/s
- **Ice Machines**: Large ice machine 10 hp compressor equals 7.07 Btu/s
- **Cold Storage**: Warehouse refrigeration system 50 hp equals 35.35 Btu/s

### Industrial Heating
- **Boiler Systems**: Industrial boiler 100 hp equals 70.7 Btu/s thermal output
- **Process Heating**: Manufacturing process heater 25 hp equals 17.68 Btu/s
- **Steam Generation**: Steam boiler 200 hp equals 141.4 Btu/s capacity

## Usage Recommendations

1. **HVAC Design**: Use Btu/s for thermal calculations, hp for motor specifications
2. **Equipment Selection**: Consider both mechanical power (hp) and thermal capacity (Btu/s)
3. **Energy Efficiency**: Compare equipment using consistent units for accurate analysis
4. **System Sizing**: Account for efficiency losses when converting between units
5. **Cost Analysis**: Use appropriate units for energy consumption calculations

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