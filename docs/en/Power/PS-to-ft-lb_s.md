---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/PS-to-ft-lb_s
      linkText: Metric Horsepower to Foot-Pound per Second
head:
  - - meta
    - name: description
      content: "Professional metric horsepower (PS) to foot-pound per second (ft-lb/s) conversion tool, providing precise power unit conversion formulas and practical application scenarios. Covers automotive engines, mechanical transmission, small power equipment and other cross-field power conversion needs, supports PS to ft-lb/s online calculation."
  - - meta
    - name: keywords
      content: "metric horsepower to foot-pound per second,PS to ft-lb/s conversion,power unit conversion formula,horsepower conversion,mechanical power conversion,engine power,small power equipment,PS conversion tool,ft-lb/s calculation,power unit conversion,European horsepower standard,American power units,mechanical transmission power,torque power conversion,small engine power"
---
# Metric Horsepower (PS) to Foot-Pound per Second (ft-lb/s) Conversion

This is a detailed introduction to **metric horsepower to foot-pound per second** conversion, providing a practical **power unit conversion tool**. Metric horsepower (PS) is the standard power unit for European automotive industry and mechanical equipment, while foot-pound per second (ft-lb/s) is a commonly used mechanical power unit in American engineering. Accurate conversion between these units is of great significance for international mechanical engineering projects, equipment selection, and technical communication, particularly in small engines, mechanical transmission systems, and precision mechanical equipment power matching.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const seoKey = [
  'metric horsepower to foot-pound per second', 'PS to ft-lb/s conversion', 'horsepower conversion', 'mechanical power conversion', 'engine power',
  'small power equipment', 'PS conversion tool', 'ft-lb/s calculation', 'power unit conversion', 'European horsepower standard',
  'American power units', 'mechanical transmission power', 'torque power conversion', 'small engine power', 'power unit conversion formula'
];
const options =  [
  { "label": "Metric Horsepower (PS)","value": "PS" },
  { "label": "Foot-Pound per Second (ft-lb/s)","value": "ft-lb/s" }
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
  to: 'ft-lb/s'
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

<NCard title="Metric Horsepower to Foot-Pound per Second Converter">
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

The conversion between metric horsepower (PS) and foot-pound per second (ft-lb/s) is based on the following relationship:

**1 PS = 542.48 ft-lb/s**
**1 ft-lb/s = 0.001843 PS**

### Conversion Formula:
- **PS to ft-lb/s**: ft-lb/s = PS × 542.48
- **ft-lb/s to PS**: PS = ft-lb/s × 0.001843

## Conversion Guide

### Why Convert Between PS and ft-lb/s?

1. **International Engineering**: Converting between European and American mechanical power standards
2. **Equipment Specification**: Matching power requirements across different measurement systems
3. **Technical Documentation**: Facilitating communication between international engineering teams
4. **System Integration**: Combining European and American mechanical components
5. **Standards Compliance**: Meeting different regional mechanical power requirements

### Conversion Method

1. **Identify the source unit** (PS or ft-lb/s)
2. **Apply the appropriate conversion factor**
3. **Consider the mechanical context** of the application
4. **Use appropriate precision** for engineering calculations

## Practical Examples

### Example 1: Small Engine Power Rating
A European small engine rated at 5 PS. Convert to ft-lb/s:
- **Calculation**: 5 PS × 542.48 = 2,712.4 ft-lb/s
- **Application**: Understanding power output for American equipment integration

### Example 2: Mechanical Drive System
A mechanical drive system requires 10,000 ft-lb/s. Convert to PS:
- **Calculation**: 10,000 ft-lb/s × 0.001843 = 18.43 PS
- **Application**: Selecting appropriate European motor for the drive system

### Example 3: Motorcycle Engine Comparison
A 25 PS motorcycle engine converted to ft-lb/s:
- **Calculation**: 25 PS × 542.48 = 13,562 ft-lb/s
- **Application**: Comparing with American motorcycle specifications

### Example 4: Industrial Equipment Sizing
A pump requires 50,000 ft-lb/s of power. Express in PS:
- **Calculation**: 50,000 ft-lb/s × 0.001843 = 92.15 PS
- **Application**: Selecting appropriate European industrial motor

## Applications in Different Fields

### Automotive Industry
- **Engine Specifications**: Converting European engine ratings to American standards
- **Performance Comparison**: Comparing power outputs across different measurement systems
- **Component Matching**: Ensuring compatibility between European and American parts

### Mechanical Engineering
- **Drive System Design**: Matching motor power to mechanical load requirements
- **Equipment Selection**: Converting power specifications for international procurement
- **System Integration**: Combining components from different regional manufacturers

### Small Engine Applications
- **Lawn Equipment**: Converting power ratings for international markets
- **Generator Sets**: Matching power output specifications
- **Marine Engines**: Converting between European and American marine power standards

## Power Conversion Context

### Understanding the Units
- **Metric Horsepower (PS)**: Based on 75 kg⋅m/s, equals 735.5 watts
- **Foot-Pound per Second (ft-lb/s)**: Mechanical power unit based on force and distance
- **Relationship**: Both measure mechanical power but use different base units

### Practical Considerations
- **Torque vs Power**: ft-lb/s is power, not to be confused with torque (ft-lb)
- **Speed Dependency**: Power varies with rotational speed in rotating machinery
- **Efficiency Factors**: Consider mechanical efficiency in real applications

## Summary

The conversion between metric horsepower and foot-pound per second facilitates international mechanical engineering collaboration. This conversion is essential for:

- **Cross-Border Projects**: Working with different regional power standards
- **Equipment Integration**: Combining European and American mechanical systems
- **Technical Communication**: Ensuring clear understanding across measurement systems
- **Standards Compliance**: Meeting various regional mechanical power requirements

Understanding this conversion helps mechanical engineers work effectively across different measurement systems, facilitating better equipment selection and system design.

## Related Conversions

- [Metric Horsepower to Watt (PS to W)](/Power/PS-to-W)
- [Metric Horsepower to Kilowatt (PS to kW)](/Power/PS-to-kW)
- [Metric Horsepower to Horsepower (PS to hp)](/Power/PS-to-hp)
- [Foot-Pound per Second to Watt (ft-lb/s to W)](/Power/ft-lb_s-to-W)
- [Foot-Pound per Second to Kilowatt (ft-lb/s to kW)](/Power/ft-lb_s-to-kW)
- [Foot-Pound per Second to Horsepower (ft-lb/s to hp)](/Power/ft-lb_s-to-hp)