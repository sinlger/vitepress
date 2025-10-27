---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/W-to-PS
      linkText: Watts to Metric Horsepower
head:
  - - meta
    - name: description
      content: Provides unit conversion formulas and practical application scenarios for Watts (W) to Metric Horsepower (PS).
  - - meta
    - name: keywords
      content: watts to metric horsepower,W to PS conversion,power unit conversion formula,power unit conversion tool,automotive engine power units
---

# Watts (W) to Metric Horsepower (PS) Conversion

This is a detailed introduction to **Watts to Metric Horsepower conversion** and provides a practical **power unit conversion tool**.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "Watts (W)","value": "W" },
  { "label": "Metric Horsepower (PS)","value": "PS" }
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
    message: 'Please select source unit'
  }
}
const form = reactive({
  number:null,
  to:'',
  from:'',
  result:'',
  title:'Watts to Metric Horsepower',
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

<n-card title="Watts (W) to Metric Horsepower (PS) Converter" embedded :bordered="false" hoverable>
  <n-form size="large" :model="form" ref='formRef' :rules="rules">
    <n-form-item label="Value"  path="number">
      <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="Enter the value to convert" />
    </n-form-item>
    <n-form-item label="From" path="from">
      <n-select  size="large" :options="options" v-model:value="form.from" placeholder="Select source unit" />
    </n-form-item>
    <n-form-item label="To" path="to">
      <n-select  size="large" :options="options" v-model:value="form.to" placeholder="Select conversion unit" />
    </n-form-item>
    <n-form-item>
      <n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
    </n-form-item>
  </n-form>
  <n-card  embedded :bordered="false" hoverable>
    <div  style="text-align:center;font-size:20px;">
      <strong>{{form.result}}</strong>
    </div>
  </n-card>
</n-card>

## Conversion Formula

### Basic Conversion Relationship
- **1 Watt (W) = 0.00135962 PS**
- **1 Metric Horsepower (PS) = 735.5 Watts (W)**

### Detailed Calculation Process
**W to PS:** PS = W ÷ 735.5
**PS to W:** W = PS × 735.5

### Common Value Reference Table
| Watts (W) | Metric Horsepower (PS) | Application Scenario |
|-----------|------------------------|---------------------|
| 735.5 W | 1 PS | Small engine |
| 1,471 W | 2 PS | Motorcycle engine |
| 7,355 W | 10 PS | Small car engine |
| 73,550 W | 100 PS | Mid-size car engine |
| 147,100 W | 200 PS | Sports car engine |

## Application Examples

### Automotive Industry
- **European car engines**: Most European manufacturers rate engines in PS
- **Motorcycle engines**: Common rating system for European and Asian bikes
- **Small vehicles**: Scooters and compact cars often use PS ratings

### Industrial Applications
- **Small motors**: Industrial equipment often rated in PS in metric countries
- **Agricultural machinery**: Tractors and farm equipment power ratings
- **Marine engines**: Boat motors in metric markets use PS ratings

### Power Equipment
- **Generators**: Portable generators often rated in PS
- **Pumps**: Water pumps and hydraulic systems
- **Compressors**: Air compressors in metric specifications

## Usage Recommendations
- **European markets**: Use PS for automotive and machinery specifications
- **Engineering calculations**: Use watts for precise scientific calculations
- **Equipment comparison**: Consider both units when comparing international products
- **Technical documentation**: Follow regional standards for power ratings

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file,index) in Power" :key="index">
    <n-card size="small" hoverable>
      <template #header>
        <a :href="file.link" style="text-decoration: none; color: inherit;">
          {{ file.title }}
        </a>
      </template>
    </n-card>
  </n-gi>
</n-grid>