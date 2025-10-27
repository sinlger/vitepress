---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/W-to-hp
      linkText: Watts to Horsepower
head:
  - - meta
    - name: description
      content: "Provides unit conversion formulas and practical application scenarios for Watts (W) to Horsepower (hp)."
  - - meta
    - name: keywords
      content: "watts to horsepower,W to hp conversion,power unit conversion formula,power unit conversion tool,automotive power units"
---
# Watts (W) to Horsepower (hp) Conversion

This is a detailed introduction to **Watts to Horsepower conversion** and provides a practical **power unit conversion tool**.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "Watts (W)","value": "W" },
  { "label": "Horsepower (hp)","value": "hp" }
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
  title:'Watts to Horsepower',
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

<n-card title="Watts (W) to Horsepower (hp) Converter" embedded :bordered="false" hoverable>
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
- **1 Watt (W) = 0.00134102 hp**
- **1 Horsepower (hp) = 745.7 Watts (W)**

### Detailed Calculation Process
**W to hp:** hp = W ÷ 745.7
**hp to W:** W = hp × 745.7

### Common Value Reference Table
| Watts (W) | Horsepower (hp) | Application Scenario |
|-----------|-----------------|---------------------|
| 745.7 W | 1 hp | Small engine |
| 1,491.4 W | 2 hp | Lawn mower |
| 7,457 W | 10 hp | Small boat engine |
| 74,570 W | 100 hp | Car engine |
| 149,140 W | 200 hp | Sports car engine |

## Application Examples

### Automotive Industry
- **Car engines**: Typical passenger car engines range from 100-300 hp
- **Motorcycle engines**: Usually between 10-200 hp depending on size
- **Truck engines**: Heavy-duty trucks can have 300-600 hp

### Industrial Equipment
- **Electric motors**: Industrial motors commonly rated in hp
- **Pumps and compressors**: Power ratings often specified in horsepower
- **Agricultural machinery**: Tractors and harvesters rated by hp output

### Marine Applications
- **Boat engines**: Outboard motors typically rated in hp
- **Ship propulsion**: Large vessels use thousands of horsepower
- **Personal watercraft**: Jet skis usually 100-300 hp

## Usage Recommendations
- **Automotive applications**: Use horsepower for traditional engine specifications
- **Engineering calculations**: Use watts for precise scientific calculations
- **Equipment selection**: Consider both units when comparing international products
- **Energy efficiency**: Watts provide better precision for energy consumption analysis

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