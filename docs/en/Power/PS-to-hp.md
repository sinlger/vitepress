---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/PS-to-hp
      linkText: Metric Horsepower to Horsepower
head:
  - - meta
    - name: description
      content: "Professional metric horsepower (PS) to horsepower (hp) conversion tool, providing precise power unit conversion formulas and calculation methods. Suitable for automotive engineering, marine power, industrial machinery and other fields for international technical communication, supports power conversion between European standards and North American standards, meeting international trade and technical cooperation needs."
  - - meta
    - name: keywords
      content: "metric horsepower to horsepower,PS to hp conversion,automotive engine power,marine power conversion,industrial machinery power,European horsepower standard,North American horsepower standard,international technical communication,power unit comparison,engine specification conversion,mechanical equipment selection,international trade power"
---
# Metric Horsepower (PS) to Horsepower (hp) Conversion

This is a detailed introduction to **metric horsepower to horsepower** conversion, providing a practical **power unit conversion tool**. Metric horsepower (PS) is the standard power unit for European automotive industry and mechanical equipment, while horsepower (hp) is widely used in North America. Accurate conversion between these units is of great significance for international automotive trade, cross-border mechanical engineering projects, marine power systems, and industrial equipment selection, particularly in technical specification comparison, equipment import/export, and international cooperation projects.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const seoKey = [
  'metric horsepower to horsepower', 'PS to hp conversion', 'automotive engine power', 'marine power conversion', 'industrial machinery power',
  'European horsepower standard', 'North American horsepower standard', 'international technical communication', 'power unit comparison', 'engine specification conversion',
  'mechanical equipment selection', 'international trade power', 'hp power unit', 'horsepower conversion tool', 'power standard comparison'
];
const options =  [
  { "label": "Metric Horsepower (PS)","value": "PS" },
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
const message = useMessage()
const formValue = reactive({
  number: 1,
  from: 'PS',
  to: 'hp'
})
const result = ref('')
const handleValidateClick = (e) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      result.value = convert(formValue.number, formValue.from, formValue.to, Power)
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<NCard title="Metric Horsepower to Horsepower Converter">
<NForm ref="formRef" :model="formValue" :rules="rules">
<NGrid :cols="24" :x-gap="12">
<NGi :span="24">
<NFormItem path="number" label="Enter Value">
<NInputNumber v-model:value="formValue.number" placeholder="Enter the value to convert" />
</NFormItem>
</NGi>
<NGi :span="12">
<NFormItem path="from" label="From">
<NSelect v-model:value="formValue.from" placeholder="Select source unit" :options="options" />
</NFormItem>
</NGi>
<NGi :span="12">
<NFormItem path="to" label="To">
<NSelect v-model:value="formValue.to" placeholder="Select target unit" :options="options" />
</NFormItem>
</NGi>
<NGi :span="24">
<NFormItem>
<NButton type="primary" @click="handleValidateClick">
Convert
</NButton>
</NFormItem>
</NGi>
</NGrid>
</NForm>
<div v-if="result" style="margin-top: 20px;">
<h3>Conversion Result:</h3>
<p>{{ result }}</p>
</div>
</NCard>

## Conversion Formula

The conversion between metric horsepower (PS) and horsepower (hp) is based on the following relationship:

**1 PS = 0.9863 hp**
**1 hp = 1.0139 PS**

### Conversion Formula:
- **PS to hp**: hp = PS × 0.9863
- **hp to PS**: PS = hp × 1.0139

## Conversion Guide

### Why Convert Between PS and hp?

1. **International Trade**: Converting between European and North American automotive specifications
2. **Technical Documentation**: Facilitating communication between different regional standards
3. **Equipment Selection**: Matching power requirements across different measurement systems
4. **Performance Comparison**: Comparing engine and machinery specifications globally
5. **Standards Compliance**: Meeting different regional power rating requirements

### Conversion Method

1. **Identify the source unit** (PS or hp)
2. **Apply the appropriate conversion factor**
3. **Consider the application context** (automotive, marine, industrial)
4. **Use appropriate precision** for the specific application

## Practical Examples

### Example 1: European Car Engine
A European car engine rated at 150 PS. Convert to hp:
- **Calculation**: 150 PS × 0.9863 = 147.95 hp
- **Application**: Understanding power output for North American market specifications

### Example 2: American Truck Engine
An American truck engine rated at 400 hp. Convert to PS:
- **Calculation**: 400 hp × 1.0139 = 405.56 PS
- **Application**: Comparing with European truck specifications

### Example 3: Marine Engine Comparison
A marine engine rated at 250 PS. Express in hp:
- **Calculation**: 250 PS × 0.9863 = 246.58 hp
- **Application**: Comparing with American marine engine specifications

### Example 4: Industrial Equipment
An industrial motor rated at 75 hp. Express in PS:
- **Calculation**: 75 hp × 1.0139 = 76.04 PS
- **Application**: Matching with European industrial equipment standards

## Applications in Different Fields

### Automotive Industry
- **Engine Specifications**: Converting between European and North American engine ratings
- **Performance Testing**: Standardizing power measurements across different markets
- **Import/Export**: Meeting regional certification requirements

### Marine Industry
- **Boat Engines**: Converting between different regional marine power standards
- **Propulsion Systems**: Matching engine power to propeller and hull requirements
- **Regulatory Compliance**: Meeting different maritime authority requirements

### Industrial Machinery
- **Equipment Selection**: Matching motor power to machinery requirements
- **International Procurement**: Converting specifications for global sourcing
- **System Integration**: Combining equipment from different regional manufacturers

## Power Standard Context

### Understanding the Difference
- **Metric Horsepower (PS)**: Based on 75 kg⋅m/s, equals 735.5 watts
- **Horsepower (hp)**: Based on 550 ft⋅lb/s, equals 745.7 watts
- **Difference**: hp is approximately 1.4% higher than PS

### Historical Background
- **PS (Pferdestärke)**: Developed in Europe, based on metric units
- **hp (Horsepower)**: Developed by James Watt, based on imperial units
- **Modern Usage**: Both remain important in their respective regions

## Summary

The conversion between metric horsepower and horsepower facilitates international technical communication and trade. This conversion is essential for:

- **Global Commerce**: Enabling equipment trade between European and North American markets
- **Technical Standards**: Bridging different regional power measurement systems
- **Performance Comparison**: Allowing accurate comparison of engines and machinery
- **Regulatory Compliance**: Meeting different regional certification requirements

Understanding this conversion helps engineers and technicians work effectively across different power measurement standards.

## Related Conversions

- [Metric Horsepower to Watt (PS to W)](/Power/PS-to-W)
- [Metric Horsepower to Kilowatt (PS to kW)](/Power/PS-to-kW)
- [Horsepower to Watt (hp to W)](/Power/hp-to-W)
- [Horsepower to Kilowatt (hp to kW)](/Power/hp-to-kW)
- [Horsepower to Foot-Pound per Second (hp to ft-lb/s)](/Power/hp-to-ft-lb_s)
- [Metric Horsepower to Foot-Pound per Second (PS to ft-lb/s)](/Power/PS-to-ft-lb_s)