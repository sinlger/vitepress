---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/ft-lb_s-to-PS
      linkText: ft-lb/s to PS
head:
  - - meta
    - name: description
      content: "Professional ft-lb/s (foot-pound per second) to PS (metric horsepower) power unit conversion tool. Provides precise power unit conversion formulas, detailed application scenarios, and practical calculator. Suitable for automotive engineering, industrial equipment, mechanical systems, and international power unit conversion requirements."
  - - meta
    - name: keywords
      content: "ft-lb/s to PS conversion,ft-lb/s to PS calculator,power unit conversion,metric horsepower converter,automotive power,industrial equipment power,mechanical engineering power,international power standards,engine power calculation,motor power conversion"
---
# Foot-Pound per Second (ft-lb/s) to PS (Metric Horsepower) Conversion

**ft-lb/s to PS conversion tool** is a professional power unit converter designed for automotive and mechanical engineering applications. Foot-pound per second (ft-lb/s) is an Imperial power unit, while PS (Pferdestärke) is a metric horsepower unit commonly used in European automotive and industrial applications. This tool provides precise conversion formulas and real-time calculation functions to help engineers, technicians, and automotive professionals perform accurate power unit conversions, particularly suitable for international automotive projects and cross-standard equipment specifications.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  'ft-lb/s to PS conversion',
  'ft-lb/s to PS calculator',
  'power unit conversion',
  'metric horsepower converter',
  'automotive power',
  'industrial equipment power',
  'mechanical engineering power',
  'international power standards',
  'engine power calculation',
  'motor power conversion',
  'foot-pound per second',
  'metric horsepower',
  'automotive engineering',
  'engine specifications',
  'power system design',
  'mechanical systems',
  'European power standards',
  'power measurement',
  'energy conversion',
  'engineering calculations'
]

const message = useMessage()
const formValue = reactive({
  inputValue: 1,
  outputValue: 0.0018398,
  inputUnit: 'ft-lb/s',
  outputUnit: 'PS'
})

const handleConvert = () => {
  if (formValue.inputValue === null || formValue.inputValue === undefined) {
    message.warning('Please enter a valid number')
    return
  }
  
  // Conversion formula: 1 ft-lb/s = 0.0018398 PS
  formValue.outputValue = Number((formValue.inputValue * 0.0018398).toFixed(8))
}

const handleSwap = () => {
  const tempValue = formValue.inputValue
  const tempUnit = formValue.inputUnit
  
  formValue.inputValue = formValue.outputValue
  formValue.inputUnit = formValue.outputUnit
  formValue.outputValue = tempValue
  formValue.outputUnit = tempUnit
  
  handleConvert()
}

onMounted(() => {
  handleConvert()
})
</script>

<n-card title="ft-lb/s to PS Converter" style="margin: 20px 0;">
  <n-form>
    <n-grid :cols="24" :gutter="12">
      <n-gi :span="11">
        <n-form-item label="Input Value">
          <n-input-number 
            v-model:value="formValue.inputValue" 
            :precision="6"
            placeholder="Enter ft-lb/s value"
            style="width: 100%"
            @input="handleConvert"
          />
        </n-form-item>
      </n-gi>
      <n-gi :span="2" style="display: flex; align-items: end; justify-content: center;">
        <n-button @click="handleSwap" style="margin-bottom: 24px;">⇄</n-button>
      </n-gi>
      <n-gi :span="11">
        <n-form-item label="Result">
          <n-input-number 
            v-model:value="formValue.outputValue" 
            :precision="8"
            placeholder="PS result"
            style="width: 100%"
            readonly
          />
        </n-form-item>
      </n-gi>
    </n-grid>
    <n-grid :cols="24" :gutter="12" style="margin-top: 12px;">
      <n-gi :span="11">
        <n-form-item label="Input Unit">
          <n-input v-model:value="formValue.inputUnit" readonly />
        </n-form-item>
      </n-gi>
      <n-gi :span="2"></n-gi>
      <n-gi :span="11">
        <n-form-item label="Output Unit">
          <n-input v-model:value="formValue.outputUnit" readonly />
        </n-form-item>
      </n-gi>
    </n-grid>
  </n-form>
</n-card>

## Conversion Formula

The conversion formula from ft-lb/s to PS is:

**1 ft-lb/s = 0.0018398 PS**

Therefore:
- **PS = ft-lb/s × 0.0018398**
- **PS = ft-lb/s × 1.8398 × 10⁻³**

## Conversion Guide

### What is ft-lb/s (Foot-Pound per Second)?

ft-lb/s (foot-pound per second) is a unit of power in the Imperial system, representing the rate at which work is done. One ft-lb/s equals the power required to perform one foot-pound of work in one second.

**Common applications:**
- Mechanical engineering calculations
- Motor and engine power analysis
- Industrial machinery specifications
- Pump and compressor power ratings
- Mechanical system design

### What is PS (Metric Horsepower)?

PS (Pferdestärke) is a metric unit of power equal to 735.5 watts, commonly used in European automotive and industrial applications. It is slightly different from the Imperial horsepower (hp) and is widely used in automotive specifications, particularly in Europe.

**Common applications:**
- Automotive engine power ratings
- European industrial equipment specifications
- Motor and generator power ratings
- Agricultural machinery power specifications
- Marine engine power ratings

## Why Convert ft-lb/s to PS?

Converting between ft-lb/s and PS is essential in various engineering applications:

1. **Automotive engineering**: Converting mechanical power measurements to standard automotive power ratings
2. **International projects**: Bridging Imperial and European metric power standards
3. **Equipment specification**: Standardizing power ratings for European markets
4. **Technical documentation**: Ensuring consistent power units across international teams
5. **Regulatory compliance**: Meeting European automotive and industrial power rating standards

## Conversion Method

### Step-by-step conversion:

1. **Identify the ft-lb/s value** you want to convert
2. **Apply the conversion factor**: Multiply by 0.0018398
3. **Calculate the result**: ft-lb/s × 0.0018398 = PS
4. **Round to appropriate precision** based on application requirements

### Example Calculations:

**Example 1: Small Engine**
- Input: 543.5 ft-lb/s
- Calculation: 543.5 × 0.0018398 = 1.0 PS
- Result: 543.5 ft-lb/s = 1.0 PS

**Example 2: Medium Engine**
- Input: 2,717 ft-lb/s
- Calculation: 2,717 × 0.0018398 = 5.0 PS
- Result: 2,717 ft-lb/s = 5.0 PS

**Example 3: Large Engine**
- Input: 54,350 ft-lb/s
- Calculation: 54,350 × 0.0018398 = 100 PS
- Result: 54,350 ft-lb/s = 100 PS

## Practical Applications

### Automotive Engineering
- **Engine specifications**: Converting mechanical power measurements to automotive power ratings
- **Performance testing**: Standardizing power output measurements for European markets
- **Vehicle development**: Specifying engine power for international automotive projects
- **Regulatory compliance**: Meeting European automotive power rating standards

### Industrial Equipment
- **Motor specifications**: Converting mechanical power requirements to European industrial standards
- **Equipment procurement**: Standardizing power ratings for European suppliers
- **System design**: Matching power sources with load requirements using European standards
- **Performance analysis**: Comparing equipment performance using metric horsepower units

### Marine Engineering
- **Engine specifications**: Converting marine engine power to European standards
- **Propulsion systems**: Calculating power requirements for marine applications
- **Performance optimization**: Analyzing marine engine efficiency using PS units
- **International compliance**: Meeting European marine power rating standards

### Agricultural Machinery
- **Tractor specifications**: Converting mechanical power to agricultural equipment standards
- **Implement matching**: Ensuring proper power matching between tractors and implements
- **Performance evaluation**: Analyzing agricultural equipment efficiency using PS units
- **Equipment selection**: Choosing appropriate machinery based on PS power ratings

## Understanding Power Relationships

### Power Unit Comparisons
- **1 PS = 735.5 watts**
- **1 PS = 0.9863 hp (Imperial horsepower)**
- **1 ft-lb/s = 1.3558 watts**
- **543.5 ft-lb/s = 1 PS**

### Automotive Power Standards
- **European standards**: PS is the standard automotive power unit in Europe
- **German automotive**: Pferdestärke (PS) originated in Germany
- **International harmonization**: Growing trend toward standardized power units
- **Regulatory requirements**: European automotive regulations specify power in PS

## Common Power Ranges

### Typical ft-lb/s Values
- **Small engines**: 500-5,000 ft-lb/s
- **Medium engines**: 5,000-50,000 ft-lb/s
- **Large engines**: 50,000-500,000 ft-lb/s
- **Industrial motors**: 1,000-100,000 ft-lb/s

### Equivalent PS Ratings
- **1-10 PS**: Small engines and motors
- **10-100 PS**: Medium automotive and industrial applications
- **100-1,000 PS**: Large automotive and industrial engines
- **1,000+ PS**: Heavy industrial and marine applications

## Engineering Considerations

### Conversion Accuracy
- **Precision requirements**: Choose appropriate decimal places for application
- **Measurement uncertainty**: Consider accuracy of original measurements
- **Rounding effects**: Understand impact of rounding on final calculations
- **Standards compliance**: Ensure conversions meet industry standards

### System Design Implications
- **Power matching**: Ensure power sources match load requirements
- **Safety factors**: Include appropriate margins in power calculations
- **Efficiency considerations**: Account for losses in power transmission
- **Operating conditions**: Consider how environment affects power output

### Automotive Applications
- **Engine performance**: Understanding power output across operating range
- **Transmission design**: Matching engine power with transmission capabilities
- **Vehicle dynamics**: Calculating power requirements for vehicle performance
- **Fuel efficiency**: Optimizing power output for fuel consumption

## Applications by Industry

### Automotive Industry
- **Engine development**: Specifying engine power for European markets
- **Performance testing**: Standardizing power measurements across test facilities
- **Vehicle certification**: Meeting European automotive certification requirements
- **Marketing specifications**: Providing consistent power ratings for consumers

### Industrial Manufacturing
- **Motor selection**: Choosing appropriate motors based on PS ratings
- **Equipment specification**: Standardizing power requirements for European suppliers
- **System integration**: Matching power sources with industrial loads
- **Energy management**: Optimizing power consumption using metric standards

### Marine Industry
- **Engine specifications**: Converting marine engine power to European standards
- **Propulsion design**: Calculating power requirements for marine vessels
- **Performance optimization**: Analyzing engine efficiency using PS units
- **Regulatory compliance**: Meeting European marine power standards

### Agricultural Sector
- **Equipment specification**: Standardizing tractor and implement power ratings
- **Performance analysis**: Evaluating agricultural equipment efficiency
- **Equipment matching**: Ensuring proper power matching for agricultural operations
- **International trade**: Facilitating equipment sales in European markets

## Measurement and Standards

### Power Measurement Methods
- **Dynamometer testing**: Standard method for measuring engine power output
- **Torque and speed measurement**: Calculating power from torque and rotational speed
- **Electrical power measurement**: Converting electrical measurements to mechanical power
- **Performance monitoring**: Continuous monitoring of power output

### International Standards
- **DIN standards**: German industrial standards for power measurement
- **ISO standards**: International organization for standardization guidelines
- **European regulations**: EU automotive and industrial power rating requirements
- **Certification procedures**: Standardized testing and certification protocols

## Power Rating Considerations

### Automotive Power Ratings
- **Maximum power**: Peak power output under optimal conditions
- **Continuous power**: Sustained power output under normal operating conditions
- **Power curves**: Power output variation across engine speed range
- **Environmental factors**: Impact of temperature and altitude on power output

### Industrial Power Ratings
- **Nameplate ratings**: Standard power ratings for motors and equipment
- **Service factors**: Allowable power output above nameplate rating
- **Duty cycles**: Power output requirements for different operating patterns
- **Efficiency considerations**: Relationship between input and output power

## Conversion Accuracy and Precision

### Measurement Considerations
- **Instrument accuracy**: Understanding limitations of measurement equipment
- **Environmental conditions**: Impact of temperature and pressure on measurements
- **Calibration requirements**: Ensuring measurement accuracy through proper calibration
- **Uncertainty analysis**: Quantifying measurement uncertainty in power conversions

### Engineering Applications
- **Design margins**: Including appropriate safety factors in power calculations
- **Performance specifications**: Setting realistic power requirements for equipment
- **Quality control**: Ensuring consistent power output in manufacturing
- **Optimization strategies**: Maximizing power efficiency in system design

## Summary

ft-lb/s to PS conversion is essential for bridging Imperial and European metric power standards, enabling proper equipment specification, automotive engineering, and international project collaboration. Understanding this conversion allows engineers to work effectively with both Imperial and metric horsepower units while ensuring accurate power calculations for European applications.

The conversion factor of 0.0018398 provides the precise relationship needed for professional engineering applications, supporting everything from automotive engine specifications to industrial equipment selection in European markets.

## Related Conversions

- [ft-lb/s to Horsepower (hp)](/Power/ft-lb_s-to-hp)
- [ft-lb/s to Watts (W)](/Power/ft-lb_s-to-W)
- [ft-lb/s to Kilowatts (kW)](/Power/ft-lb_s-to-kW)
- [PS to Horsepower (hp)](/Power/PS-to-hp)
- [PS to Watts (W)](/Power/PS-to-W)
- [PS to ft-lb/s](/Power/PS-to-ft-lb_s)