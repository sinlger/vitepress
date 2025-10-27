---
title: "Kilowatt (kW) to Metric Horsepower (PS) Conversion"
description: "Professional kilowatt (kW) to metric horsepower (PS) power unit conversion tool, providing precise kW to PS calculation formulas and real-time conversion functions. Covers application scenarios such as automotive engines, agricultural machinery, industrial equipment, supporting European equipment power calculations, automotive engineering design, mechanical equipment selection and other professional needs."
keywords:
  - Kilowatt to metric horsepower
  - kW to PS conversion
  - Power unit conversion
  - What is PS unit
  - Kilowatt unit
  - Power calculation formula
  - Metric horsepower
  - Automotive engine power
  - Agricultural machinery power
  - Industrial equipment power
  - European equipment power
  - Automotive engineering design
  - Mechanical equipment selection
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Kilowatt to Metric Horsepower
    linkText: Kilowatt to Metric Horsepower
    linkUrl: /zh/Power/kW-to-PS
meta:
  - name: description
    content: "Professional kilowatt (kW) to metric horsepower (PS) power unit conversion tool, providing precise kW to PS calculation formulas and real-time conversion functions. Covers application scenarios such as automotive engines, agricultural machinery, industrial equipment, supporting European equipment power calculations, automotive engineering design, mechanical equipment selection and other professional needs."
  - name: keywords
    content: "Kilowatt to metric horsepower,kW to PS conversion,Power unit conversion,What is PS unit,Kilowatt unit,Power calculation formula,Metric horsepower,Automotive engine power,Agricultural machinery power,Industrial equipment power,European equipment power,Automotive engineering design,Mechanical equipment selection"
---
# Kilowatt (kW) to Metric Horsepower (PS) Conversion

The conversion from kilowatt (kW) to metric horsepower (PS) is an important calculation in European automotive industry and mechanical engineering. This tool provides precise kW to PS conversion functionality, supporting automotive engine power rating, agricultural machinery selection, European industrial equipment configuration and other professional applications. Widely used in automotive engineering, agricultural machinery, industrial manufacturing, energy equipment and other fields for power calculations and technical integration.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Kilowatt to metric horsepower',
  'kW to PS conversion',
  'What is PS unit',
  'Kilowatt unit',
  'Power calculation formula',
  'Metric horsepower',
  'Automotive engine power',
  'Agricultural machinery power',
  'Industrial equipment power',
  'European equipment power',
  'Automotive engineering design',
  'Mechanical equipment selection'
]

const form = ref({
  number: 0,
  from: 'kW',
  to: 'PS',
  result: ''
})

const options = [
  { "label": "Kilowatt (kW)", "value": "kW" },
  { "label": "Metric Horsepower (PS)", "value": "PS" }
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
  if (form.value.from === 'kW' && form.value.to === 'PS') {
    form.value.result = `${form.value.number} kW = ${(form.value.number * 1.35962).toFixed(2)} PS`
  } else if (form.value.from === 'PS' && form.value.to === 'kW') {
    form.value.result = `${form.value.number} PS = ${(form.value.number / 1.35962).toFixed(4)} kW`
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
  title="Kilowatt to Metric Horsepower Conversion"
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

The conversion between kilowatt (kW) and metric horsepower (PS) is based on the relationship between metric power units:

**Basic Formula:**
- 1 kW = 1.35962 PS
- 1 PS = 0.7355 kW

**Conversion Formulas:**
- kW to PS: PS = kW × 1.35962
- PS to kW: kW = PS ÷ 1.35962

**Conversion Reference Table:**
| Kilowatt (kW) | Metric Horsepower (PS) | Application |
|---------------|------------------------|-------------|
| 50 kW | 67.98 PS | Small Car Engine |
| 100 kW | 135.96 PS | Mid-size Car Engine |
| 150 kW | 203.94 PS | Large Car Engine |
| 200 kW | 271.92 PS | Performance Car Engine |
| 300 kW | 407.89 PS | High-Performance Engine |

## Application Examples

### Automotive Engines
- **Compact Car**: 75 kW = 101.97 PS
- **Mid-size Sedan**: 120 kW = 163.15 PS
- **SUV Engine**: 180 kW = 244.73 PS
- **Sports Car**: 250 kW = 339.91 PS
- **Supercar**: 400 kW = 543.85 PS

### Agricultural Machinery
- **Small Tractor**: 25 kW = 33.99 PS
- **Medium Tractor**: 60 kW = 81.58 PS
- **Large Tractor**: 120 kW = 163.15 PS
- **Combine Harvester**: 200 kW = 271.92 PS
- **Heavy Farm Equipment**: 300 kW = 407.89 PS

### Industrial Equipment
- **Small Generator**: 10 kW = 13.60 PS
- **Industrial Motor**: 50 kW = 67.98 PS
- **Compressor**: 75 kW = 101.97 PS
- **Pump System**: 100 kW = 135.96 PS
- **Heavy Machinery**: 500 kW = 679.81 PS

### Marine Applications
- **Small Boat Engine**: 30 kW = 40.79 PS
- **Yacht Engine**: 150 kW = 203.94 PS
- **Fishing Vessel**: 300 kW = 407.89 PS
- **Commercial Ship**: 1000 kW = 1359.62 PS
- **Large Vessel**: 2000 kW = 2719.24 PS

## Usage Recommendations

1. **Automotive Industry**: Convert between kW and PS for European market specifications
2. **Equipment Selection**: Compare power ratings across different manufacturer standards
3. **Technical Documentation**: Ensure consistency in international projects
4. **Performance Analysis**: Evaluate engine and machinery performance in preferred units
5. **Regulatory Compliance**: Meet regional power rating requirements

## Technical Notes

### Unit Background
- **PS (Pferdestärke)**: German metric horsepower, commonly used in Europe
- **kW (Kilowatt)**: International standard power unit
- **Conversion Factor**: 1 PS = 735.5 watts exactly

### Regional Usage
- **European Market**: PS commonly used for automotive and machinery specifications
- **International Standard**: kW preferred for technical and scientific applications
- **Documentation**: Both units often specified for global compatibility

## Frequently Asked Questions

**Q: What is the difference between PS and HP?**
A: PS (metric horsepower) = 735.5W, while HP (imperial horsepower) = 745.7W. PS is slightly smaller than HP and is commonly used in Europe.

**Q: Why is PS used in the automotive industry?**
A: PS is the traditional European standard for automotive power rating, especially in German automotive engineering, and remains widely used for consumer specifications.

**Q: When should I use kW vs PS?**
A: Use kW for technical and engineering calculations, PS for consumer-facing specifications in European markets, especially automotive applications.

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