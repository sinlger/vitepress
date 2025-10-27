---
title: "Imperial Horsepower (hp) to Metric Horsepower (PS) Conversion"
description: "Professional imperial horsepower (hp) to metric horsepower (PS) power unit conversion tool. Provides precise conversion formulas, real-time calculator, automotive engineering application cases and technical guidance, suitable for horsepower unit conversion needs in automotive engineering, mechanical equipment, marine power and other fields."
keywords:
  - Imperial horsepower to metric horsepower
  - hp to PS conversion
  - Horsepower unit conversion
  - Automotive horsepower conversion
  - Engine power conversion
  - Mechanical equipment horsepower
  - Marine horsepower conversion
  - Power unit conversion tool
  - hp conversion formula
  - PS calculator
  - Automotive engineering horsepower
  - European and American horsepower standards
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Imperial Horsepower to Metric Horsepower
    linkText: Imperial Horsepower to Metric Horsepower
    linkUrl: /zh/Power/hp-to-PS
meta:
  - name: description
    content: "Professional imperial horsepower (hp) to metric horsepower (PS) power unit conversion tool. Provides precise conversion formulas, real-time calculator, automotive engineering application cases and technical guidance, suitable for horsepower unit conversion needs in automotive engineering, mechanical equipment, marine power and other fields."
  - name: keywords
    content: "Imperial horsepower to metric horsepower,hp to PS conversion,Horsepower unit conversion,Automotive horsepower conversion,Engine power conversion,Mechanical equipment horsepower,Marine horsepower conversion,Power unit conversion tool,hp conversion formula,PS calculator,Automotive engineering horsepower,European and American horsepower standards"
---
# Imperial Horsepower (hp) to Metric Horsepower (PS) Conversion

Imperial horsepower (hp) to metric horsepower (PS) conversion is a common power unit conversion in automotive engineering and mechanical equipment fields. Imperial horsepower is mainly used for automotive and mechanical equipment marking in North America, while metric horsepower is widely used in Europe, Asia and other regions. This conversion is of great significance in international automotive trade, engine technology exchange and mechanical equipment selection.

This tool provides professional hp to PS conversion functions, supporting high-precision calculations and real-time conversion, suitable for the professional needs of automotive engineers, mechanical designers and equipment procurement personnel.

<script setup>
import { ref, computed } from 'vue'

// SEO keywords array
const seoKey = [
  'Imperial horsepower conversion', 'hp to PS', 'Metric horsepower calculation', 'Automotive horsepower conversion', 
  'Engine power conversion', 'Mechanical equipment horsepower', 'Marine horsepower conversion', 'European and American horsepower standards',
  'Automotive engineering horsepower', 'PS calculator', 'Horsepower unit conversion', 'Power conversion tool'
]

const form = ref({
  number: 0,
  from: 'hp',
  to: 'PS',
  result: ''
})

const options = [
  { "label": "Imperial Horsepower (hp)", "value": "hp" },
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
  if (form.value.from === 'hp' && form.value.to === 'PS') {
    form.value.result = `${form.value.number} hp = ${(form.value.number * 1.01387).toFixed(6)} PS`
  } else if (form.value.from === 'PS' && form.value.to === 'hp') {
    form.value.result = `${form.value.number} PS = ${(form.value.number / 1.01387).toFixed(6)} hp`
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
  title="Imperial Horsepower to Metric Horsepower Conversion"
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

The conversion between imperial horsepower (hp) and metric horsepower (PS) is based on their different definitions:

**Basic Formula:**
- 1 hp = 745.7 watts
- 1 PS = 735.5 watts
- 1 hp = 1.01387 PS
- 1 PS = 0.98632 hp

**Conversion Formulas:**
- Imperial to Metric: PS = hp × 1.01387
- Metric to Imperial: hp = PS ÷ 1.01387

## Application Examples

### Automotive Industry
- **American Cars**: Ford Mustang GT 5.0L V8 engine produces 450 hp, equivalent to 456.2 PS
- **European Cars**: BMW M3 engine produces 480 PS, equivalent to 473.4 hp
- **Japanese Cars**: Honda Civic Type R engine produces 320 PS, equivalent to 315.6 hp

### Marine Engines
- **Outboard Motors**: Mercury 300 hp outboard motor equals 304.2 PS
- **Yacht Engines**: Caterpillar C32 marine engine 1,925 hp equals 1,951.7 PS
- **Commercial Vessels**: Large ship engines often exceed 10,000 hp (10,138.7 PS)

### Industrial Equipment
- **Agricultural Machinery**: John Deere 9620R tractor 620 hp equals 628.6 PS
- **Construction Equipment**: Caterpillar 797F mining truck 4,000 hp equals 4,055.5 PS
- **Power Generation**: Industrial generators rated in hp need PS conversion for international markets

## Usage Recommendations

1. **Automotive Engineering**: Use PS for European markets, hp for North American markets
2. **International Trade**: Always provide both units in specifications
3. **Technical Documentation**: Include conversion factors in engineering drawings
4. **Equipment Selection**: Consider regional standards when specifying power requirements
5. **Performance Comparison**: Use consistent units when comparing different engines

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