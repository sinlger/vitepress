---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/W-to-kW
      linkText: Watts to Kilowatts
head:
  - - meta
    - name: description
      content: Provides unit conversion formulas and practical application scenarios for Watts (W) to Kilowatts (kW).
  - - meta
    - name: keywords
      content: watts to kilowatts,W to kW conversion,power unit conversion formula,power unit conversion tool,household appliance power units
---

# Watts (W) to Kilowatts (kW) Conversion

This is a detailed introduction to **Watts to Kilowatts conversion** and provides a practical **power unit conversion tool**.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "Watts (W)","value": "W" },
  { "label": "Kilowatts (kW)","value": "kW" }
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
  title:'Watts to Kilowatts',
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

<n-card title="Watts (W) to Kilowatts (kW) Converter" embedded :bordered="false" hoverable>
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
- **1 Watt (W) = 0.001 kW**
- **1 Kilowatt (kW) = 1,000 Watts (W)**

### Detailed Calculation Process
**W to kW:** kW = W ÷ 1,000
**kW to W:** W = kW × 1,000

### Common Value Reference Table
| Watts (W) | Kilowatts (kW) | Application Scenario |
|-----------|----------------|---------------------|
| 100 W | 0.1 kW | Light bulb |
| 500 W | 0.5 kW | Microwave oven |
| 1,000 W | 1 kW | Electric heater |
| 2,000 W | 2 kW | Hair dryer |
| 5,000 W | 5 kW | Electric stove |

## Application Examples

### Household Appliances
- **Refrigerator**: Typically consumes 150-400 W (0.15-0.4 kW)
- **Air conditioner**: Usually ranges from 1,000-3,000 W (1-3 kW)
- **Washing machine**: Generally uses 500-2,000 W (0.5-2 kW)

### Electronic Devices
- **Desktop computer**: Consumes about 300-500 W (0.3-0.5 kW)
- **Television**: Modern TVs use 50-200 W (0.05-0.2 kW)
- **Gaming console**: Typically uses 100-200 W (0.1-0.2 kW)

### Industrial Equipment
- **Small motors**: Range from 1-10 kW for various applications
- **Welding equipment**: Often rated between 3-15 kW
- **Commercial ovens**: Usually consume 5-20 kW

## Usage Recommendations
- **Household applications**: Use kilowatts for major appliances and energy bills
- **Small devices**: Use watts for electronics and small appliances
- **Energy efficiency**: kW ratings help compare appliance energy consumption
- **Electrical planning**: Use kW for calculating circuit and panel requirements

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