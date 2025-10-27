---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Mass/index
      linkText: Mass Conversion
  - - link: /Mass/index
      linkText: Mass Unit Conversion
head:
  - - meta
    - name: description
      content: "Mass unit conversion guide covering detailed conversion formulas and explanations for grams (g), kilograms (kg), tonnes (t), pounds (lb), and ounces (oz)."
  - - meta
    - name: keywords
      content: "mass, unit conversion, grams, kilograms, tonnes, pounds, ounces, conversion formulas, unit conversion guide"
---
# Mass Unit Conversion
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Mass } from '../files';

const convert = inject('convert')
const options =  [
  { "label": "Microgram", "value": "mcg" },
  { "label": "Milligram", "value": "mg" },
  { "label": "Gram", "value": "g" },
  { "label": "Kilogram", "value": "kg" },
  { "label": "Ounce", "value": "oz" },
  { "label": "Pound", "value": "lb" },
  { "label": "Metric Ton", "value": "mt" },
  { "label": "Short Ton", "value": "st" },
  { "label": "Tonne", "value": "t" }
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
    message: 'Please select target unit'
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
  title:'Mass Unit Conversion',
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

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="Value"  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="Enter the value to convert" />
  </n-form-item>
  <n-form-item label="From" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="Select source unit" />
  </n-form-item>
  <n-form-item label="To" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="Select target unit" />
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

## Unit Conversion Table

| Unit Symbol | Unit Name | English Name | Conversion Relationship (based on kilogram kg) |
| ---- | ---- | ------------- | -------------------------------- |
| mcg  | Microgram   | microgram     | 1 mcg = 0.000000001 kg (10⁻⁹ kg) |
| mg   | Milligram   | milligram     | 1 mg = 0.000001 kg (10⁻⁶ kg)     |
| g    | Gram    | gram          | 1 g = 0.001 kg (10⁻³ kg)         |
| kg   | Kilogram   | kilogram      | 1 kg = 1 kg (base unit)                |
| oz   | Ounce   | ounce         | 1 oz ≈ 0.0311035 kg              |
| lb   | Pound    | pound         | 1 lb ≈ 0.45359 kg                |
| mt   | Metric Ton   | metric ton    | 1 mt = 1000 kg                   |
| st   | Short Ton   | short ton     | 1 st ≈ 907.1847 kg               |
| t    | Tonne   | tonne (metric) | 1 t = 1000 kg (equivalent to mt)           |


## Conversion Instructions

### Unit Relationships

- **Microgram (mcg) and Milligram (mg)**: 1 mg = 1000 mcg 
- **Milligram (mg) and Gram (g)**: 1 g = 1000 mg 
- **Metric Ton (mt/t) and Kilogram (kg)**: 1 mt = 1 t = 1000 kg 
- **Short Ton (st) and Pound (lb)**: 1 st = 2000 lb 

### Important Notes

- **mcg vs mg**: Strict distinction is required in medications or nutritional supplements to avoid confusion (e.g., 1000 mcg = 1 mg).
- **Ounce Types**: The ounce in the table refers to troy ounce (for precious metals); avoirdupois ounce 1 oz ≈ 0.02835 kg.
- **Ton Differences**:
  - Metric Ton (mt/t): Internationally used, 1000 kg;
  - Short Ton (st): US unit, approximately 907 kg;
  - Long Ton (lt): Imperial unit, approximately 1016 kg.

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Mass" :key="index">
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