---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/W-to-ft-lb_s
      linkText: Watts to ft-lb/s
head:
  - - meta
    - name: description
      content: "Provides unit conversion formulas and practical application scenarios for Watts (W) to foot-pounds per second (ft-lb/s)."
  - - meta
    - name: keywords
      content: "watts to foot pounds per second,W to ft-lb/s conversion,power unit conversion formula,power unit conversion tool,mechanical engineering power units"
---
# Watts (W) to Foot-Pounds per Second (ft-lb/s) Conversion

This is a detailed introduction to **Watts to ft-lb/s conversion** and provides a practical **power unit conversion tool**.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "Watts (W)","value": "W" },
  { "label": "Foot-pounds per second (ft-lb/s)","value": "ft-lb/s" }
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
  title:'Watts to ft-lb/s',
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

<n-card title="Watts (W) to ft-lb/s Converter" embedded :bordered="false" hoverable>
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
- **1 Watt (W) = 0.737562 ft-lb/s**
- **1 ft-lb/s = 1.35582 Watts (W)**

### Detailed Calculation Process
**W to ft-lb/s:** ft-lb/s = W × 0.737562
**ft-lb/s to W:** W = ft-lb/s × 1.35582

### Common Value Reference Table
| Watts (W) | ft-lb/s | Application Scenario |
|-----------|---------|---------------------|
| 100 W | 73.76 ft-lb/s | Small motor |
| 500 W | 368.78 ft-lb/s | Power tool |
| 1000 W | 737.56 ft-lb/s | Industrial equipment |
| 5000 W | 3687.81 ft-lb/s | Heavy machinery |

## Application Examples

### Mechanical Engineering
- **Motor power rating**: Converting electrical power to mechanical power output
- **Machine design**: Calculating torque and rotational speed relationships
- **Power transmission**: Analyzing power transfer in mechanical systems

### Automotive Industry
- **Engine power**: Converting between different power measurement standards
- **Drivetrain analysis**: Power loss calculations in transmission systems
- **Performance testing**: Standardizing power measurements across different units

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