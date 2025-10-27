---
title: "Kilowatt (kW) to Imperial Horsepower (hp) Conversion"
description: "Professional kilowatt (kW) to imperial horsepower (hp) power unit conversion tool, providing precise kW to hp calculation formulas and real-time conversion functions. Covers application scenarios such as automotive engines, marine power, industrial machinery, supporting American equipment power calculations, international trade technical integration, mechanical equipment selection and other professional needs."
keywords:
  - Kilowatt to imperial horsepower
  - kW to hp conversion
  - Power unit conversion
  - What is hp unit
  - Kilowatt unit
  - Power calculation formula
  - Imperial horsepower
  - Automotive engine power
  - Marine power
  - Industrial machinery power
  - American equipment power
  - Mechanical equipment selection
  - International trade technology
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Kilowatt to Imperial Horsepower
    linkText: Kilowatt to Imperial Horsepower
    linkUrl: /zh/Power/kW-to-hp
meta:
  - name: description
    content: "Professional kilowatt (kW) to imperial horsepower (hp) power unit conversion tool, providing precise kW to hp calculation formulas and real-time conversion functions. Covers application scenarios such as automotive engines, marine power, industrial machinery, supporting American equipment power calculations, international trade technical integration, mechanical equipment selection and other professional needs."
  - name: keywords
    content: "Kilowatt to imperial horsepower,kW to hp conversion,Power unit conversion,What is hp unit,Kilowatt unit,Power calculation formula,Imperial horsepower,Automotive engine power,Marine power,Industrial machinery power,American equipment power,Mechanical equipment selection,International trade technology"
---
# Kilowatt (kW) to Imperial Horsepower (hp) Conversion

The conversion from kilowatt (kW) to imperial horsepower (hp) is an important calculation in international trade and cross-standard engineering applications. This tool provides precise kW to hp conversion functionality, supporting automotive engine power comparison, marine power system design, American industrial equipment selection and other professional applications. Widely used in automotive engineering, shipbuilding, industrial machinery, petrochemical and other fields for power calculations and technical integration.

<script setup>
import { ref, computed } from 'vue'

const seoKey = [
  'Kilowatt to imperial horsepower',
  'kW to hp conversion',
  'What is hp unit',
  'Kilowatt unit',
  'Power calculation formula',
  'Imperial horsepower',
  'Automotive engine power',
  'Marine power',
  'Industrial machinery power',
  'American equipment power',
  'Mechanical equipment selection',
  'International trade technology'
]

const form = ref({
  number: 0,
  from: 'kW',
  to: 'hp',
  result: ''
})

const options = [
  { "label": "Kilowatt (kW)", "value": "kW" },
  { "label": "Imperial Horsepower (hp)", "value": "hp" }
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
  if (form.value.from === 'kW' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} kW = ${(form.value.number * 1.34102).toFixed(2)} hp`
  } else if (form.value.from === 'hp' && form.value.to === 'kW') {
    form.value.result = `${form.value.number} hp = ${(form.value.number / 1.34102).toFixed(4)} kW`
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
  title="Kilowatt to Imperial Horsepower Conversion"
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

The conversion between kilowatt (kW) and imperial horsepower (hp) is based on the relationship between metric and imperial power units:

**Basic Formula:**
- 1 kW = 1.34102 hp
- 1 hp = 0.7457 kW

**Conversion Formulas:**
- kW to hp: hp = kW × 1.34102
- hp to kW: kW = hp ÷ 1.34102

**Conversion Reference Table:**
| Kilowatt (kW) | Imperial Horsepower (hp) | Application |
|---------------|--------------------------|-------------|
| 50 kW | 67.05 hp | Small Car Engine |
| 100 kW | 134.10 hp | Mid-size Car Engine |
| 150 kW | 201.15 hp | Large Car Engine |
| 200 kW | 268.20 hp | Performance Car Engine |
| 300 kW | 402.31 hp | High-Performance Engine |

## Application Examples

### Automotive Engines
- **Compact Car**: 75 kW = 100.58 hp
- **Mid-size Sedan**: 120 kW = 160.92 hp
- **SUV Engine**: 180 kW = 241.38 hp
- **Sports Car**: 250 kW = 335.26 hp
- **Muscle Car**: 400 kW = 536.41 hp

### Marine Applications
- **Small Boat Engine**: 30 kW = 40.23 hp
- **Yacht Engine**: 150 kW = 201.15 hp
- **Fishing Vessel**: 300 kW = 402.31 hp
- **Commercial Ship**: 1000 kW = 1341.02 hp
- **Large Vessel**: 2000 kW = 2682.05 hp

### Industrial Equipment
- **Small Generator**: 10 kW = 13.41 hp
- **Industrial Motor**: 50 kW = 67.05 hp
- **Compressor**: 75 kW = 100.58 hp
- **Pump System**: 100 kW = 134.10 hp
- **Heavy Machinery**: 500 kW = 670.51 hp

### Agricultural Machinery
- **Small Tractor**: 25 kW = 33.53 hp
- **Medium Tractor**: 60 kW = 80.46 hp
- **Large Tractor**: 120 kW = 160.92 hp
- **Combine Harvester**: 200 kW = 268.20 hp
- **Heavy Farm Equipment**: 300 kW = 402.31 hp

## Usage Recommendations

1. **Automotive Industry**: Convert between kW and hp for American market specifications
2. **Marine Engineering**: Compare power ratings for international vessel specifications
3. **Equipment Selection**: Evaluate American vs. metric equipment power ratings
4. **Technical Documentation**: Ensure consistency in international projects
5. **Performance Analysis**: Compare engine and machinery performance across standards

## Technical Notes

### Unit Background
- **hp (Horsepower)**: Imperial horsepower, commonly used in the United States
- **kW (Kilowatt)**: International standard power unit
- **Conversion Factor**: 1 hp = 745.7 watts exactly

### Regional Usage
- **American Market**: hp commonly used for automotive and machinery specifications
- **International Standard**: kW preferred for technical and scientific applications
- **Documentation**: Both units often specified for global compatibility

### Engineering Applications
- **Automotive Design**: American cars typically rated in hp, European in kW
- **Marine Industry**: International shipping uses both units depending on region
- **Industrial Equipment**: American manufacturers use hp, international use kW

## Frequently Asked Questions

**Q: What is the difference between hp and PS?**
A: hp (imperial horsepower) = 745.7W, while PS (metric horsepower) = 735.5W. hp is slightly larger than PS and is commonly used in the United States.

**Q: Why is hp used in the American automotive industry?**
A: hp is the traditional American standard for automotive power rating, deeply embedded in American automotive culture and consumer understanding.

**Q: When should I use kW vs hp?**
A: Use kW for technical and engineering calculations, hp for consumer-facing specifications in American markets, especially automotive applications.

**Q: How accurate is the conversion?**
A: The conversion factor 1 hp = 745.7W is exact by definition, making conversions mathematically precise.

**Q: Which unit is better for international trade?**
A: kW is preferred for international technical specifications as it's part of the SI system, but hp may be needed for American market documentation.

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