---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Volume/index
      linkText: Volume Unit Conversion
  - - link: /Volume/cm3-to-ml
      linkText: Cubic Centimeter to Milliliter Conversion
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: Cubic centimeter (cm³) to milliliter (ml) unit conversion tool, 1 cubic centimeter equals 1 milliliter.
  - - meta
    - name: keywords
      content: cubic centimeter,milliliter,unit conversion,cm³,ml
---

# Cubic Centimeter (cm³) to Milliliter (ml) Conversion

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Volume } from '../files';

const convert = inject('convert')
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur"
  }
}
const form = reactive({
  number:null,
  result:'',
  title:'Cubic Centimeter (cm³) to Milliliter (ml) Conversion'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} cm³ = ${convert(form.number).from('cm3').to('ml')} ml`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="Value" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="Enter cubic centimeter value" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
  </n-form-item>
</n-form>
<n-card embedded :bordered="false" hoverable>
  <div style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## Conversion Formula
1 cubic centimeter (cm³) = 1 milliliter (ml)

### Conversion Principle
Cubic centimeter (cm³) and milliliter (ml) are equivalent volume units. 1 cubic centimeter equals 1 milliliter.

## Common Conversion Values
| Cubic Centimeter (cm³) | Milliliter (ml) | Real-world Reference                |
|------------------------|------------------|-------------------------------------|
| 1                      | 1                | Standard dice volume                |
| 5                      | 5                | One teaspoon of liquid volume       |
| 10                     | 10               | One tablespoon of liquid volume     |
| 15                     | 15               | Standard medicine bottle volume     |
| 30                     | 30               | Small shot glass volume             |

## Application Scenarios
### Laboratory Applications
- Chemical reagent proportioning
- Experimental liquid volume measurement
- Standard solution preparation

### Medical Field
- Drug dosage measurement
- Syringe capacity calculation
- Medical liquid volume measurement

### Daily Life
- Cooking seasoning measurement
- Beverage capacity measurement
- Cosmetic usage calculation

### Industrial Manufacturing
- Small container capacity measurement
- Precision liquid volume control
- Micro product capacity calculation

## Unit Conversion Tips
1. **Direct Equivalence**:
   - Cubic centimeter and milliliter have the same numerical value

2. **Memory Mnemonic**:
   "Cubic centimeter and milliliter, same value easy to remember"

## Important Notes
- Use standard measuring tools for measurement
- High-precision measurements need to consider temperature effects
- Liquid surface tension may affect measurement accuracy

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Volume" :key="index">
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