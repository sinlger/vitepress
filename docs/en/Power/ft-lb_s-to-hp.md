---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/ft-lb_s-to-hp
      linkText: ft-lb/s to hp
head:
  - - meta
    - name: description
      content: "Professional ft-lb/s (foot-pound per second) to hp (horsepower) power unit conversion tool. Provides precise power unit conversion formulas, detailed application scenarios, and practical calculator. Suitable for mechanical engineering, automotive industry, industrial equipment, and other power conversion requirements."
  - - meta
    - name: keywords
      content: "ft-lb/s to hp conversion,ft-lb/s to hp calculator,power unit conversion,horsepower converter,mechanical power,automotive power,engine power conversion,industrial power units,engineering power conversion,mechanical engineering"
---
# Foot-Pound per Second (ft-lb/s) to Horsepower (hp) Conversion

**ft-lb/s to hp conversion tool** is a professional power unit converter designed for mechanical engineering applications. Foot-pound per second (ft-lb/s) is an Imperial power unit representing the rate of work done, while horsepower (hp) is a widely used power unit in automotive, industrial, and mechanical applications. This tool provides precise conversion formulas and real-time calculation functions to help engineers, technicians, and professionals perform accurate power unit conversions.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  'ft-lb/s to hp conversion',
  'ft-lb/s to hp calculator',
  'power unit conversion',
  'horsepower converter',
  'mechanical power',
  'automotive power',
  'engine power conversion',
  'industrial power units',
  'engineering power conversion',
  'mechanical engineering',
  'foot-pound per second',
  'horsepower power',
  'motor power rating',
  'engine specifications',
  'automotive engineering',
  'industrial machinery',
  'power transmission',
  'mechanical systems',
  'power measurement',
  'engineering calculations'
]

const message = useMessage()
const formValue = reactive({
  inputValue: 1,
  outputValue: 0.0018181818,
  inputUnit: 'ft-lb/s',
  outputUnit: 'hp'
})

const handleConvert = () => {
  if (formValue.inputValue === null || formValue.inputValue === undefined) {
    message.warning('Please enter a valid number')
    return
  }
  
  // Conversion formula: 1 ft-lb/s = 0.0018181818 hp
  formValue.outputValue = Number((formValue.inputValue * 0.0018181818).toFixed(10))
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

<n-card title="ft-lb/s to hp Converter" style="margin: 20px 0;">
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
            :precision="10"
            placeholder="hp result"
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

The conversion formula from ft-lb/s to hp is:

**1 ft-lb/s = 0.0018181818 hp**

Therefore:
- **hp = ft-lb/s × 0.0018181818**
- **hp = ft-lb/s ÷ 550**

## Conversion Guide

### What is ft-lb/s (Foot-Pound per Second)?

ft-lb/s (foot-pound per second) is a unit of power in the Imperial system, representing the rate at which work is done. One ft-lb/s equals the power required to perform one foot-pound of work in one second.

**Common applications:**
- Mechanical engineering calculations
- Motor and engine power analysis
- Industrial machinery specifications
- Pump and compressor power ratings
- Mechanical system design

### What is hp (Horsepower)?

hp (horsepower) is a unit of power originally defined to compare the output of steam engines with the power of draft horses. One mechanical horsepower equals 550 foot-pounds per second or 745.7 watts.

**Common applications:**
- Automotive engine ratings
- Industrial motor specifications
- Agricultural machinery power
- Marine engine power
- HVAC system ratings

## Why Convert ft-lb/s to hp?

Converting between ft-lb/s and hp is essential in various engineering applications:

1. **Automotive engineering**: Converting engine power calculations to standard horsepower ratings
2. **Industrial equipment**: Standardizing motor and machinery power specifications
3. **Mechanical design**: Comparing different power sources and requirements
4. **Performance analysis**: Evaluating system efficiency and power output
5. **Equipment selection**: Choosing appropriate motors and engines for applications

## Conversion Method

### Step-by-step conversion:

1. **Identify the ft-lb/s value** you want to convert
2. **Apply the conversion factor**: Multiply by 0.0018181818 (or divide by 550)
3. **Calculate the result**: ft-lb/s × 0.0018181818 = hp
4. **Round to appropriate precision** based on application requirements

### Example Calculations:

**Example 1: Small Motor**
- Input: 275 ft-lb/s
- Calculation: 275 × 0.0018181818 = 0.5 hp
- Result: 275 ft-lb/s = 0.5 hp

**Example 2: Industrial Motor**
- Input: 2,750 ft-lb/s
- Calculation: 2,750 × 0.0018181818 = 5 hp
- Result: 2,750 ft-lb/s = 5 hp

**Example 3: Large Engine**
- Input: 55,000 ft-lb/s
- Calculation: 55,000 × 0.0018181818 = 100 hp
- Result: 55,000 ft-lb/s = 100 hp

## Practical Applications

### Automotive Industry
- **Engine specifications**: Converting calculated power to standard horsepower ratings
- **Performance tuning**: Analyzing engine modifications and improvements
- **Transmission design**: Calculating power requirements for drivetrain components
- **Vehicle testing**: Standardizing power measurements across different test methods

### Industrial Equipment
- **Motor selection**: Choosing appropriate motors for specific applications
- **Pump systems**: Calculating pump power requirements and efficiency
- **Compressor design**: Determining compressor power needs for various applications
- **Manufacturing equipment**: Specifying power requirements for production machinery

### Mechanical Engineering
- **System design**: Balancing power requirements across mechanical systems
- **Efficiency analysis**: Comparing power input and output in mechanical systems
- **Equipment sizing**: Determining appropriate power ratings for components
- **Performance optimization**: Analyzing and improving system power efficiency

### Agricultural Machinery
- **Tractor specifications**: Converting engine power to standard horsepower ratings
- **Implement requirements**: Calculating power needs for agricultural equipment
- **Irrigation systems**: Determining pump power for water management systems
- **Harvesting equipment**: Specifying power requirements for processing machinery

## Understanding Power Relationships

### Mechanical Power Fundamentals
- **Power = Force × Velocity**: Basic relationship in mechanical systems
- **Power = Torque × Angular velocity**: For rotational systems
- **Efficiency considerations**: Real-world power losses in mechanical systems
- **Load characteristics**: How power requirements vary with operating conditions

### Horsepower Variations
- **Mechanical horsepower**: 550 ft-lb/s (standard in US)
- **Metric horsepower**: 542.5 ft-lb/s (European standard)
- **Electrical horsepower**: 746 watts (electrical equivalent)
- **Brake horsepower**: Actual power output measured at engine/motor shaft

## Common Power Ranges

### Typical ft-lb/s Values
- **Small appliances**: 50-500 ft-lb/s
- **Household tools**: 500-2,000 ft-lb/s
- **Industrial motors**: 2,000-50,000 ft-lb/s
- **Large engines**: 50,000-500,000 ft-lb/s

### Equivalent Horsepower
- **0.1-1 hp**: Small appliances and tools
- **1-10 hp**: Medium industrial equipment
- **10-100 hp**: Large industrial motors
- **100-1000 hp**: Heavy industrial and automotive applications

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

### Performance Analysis
- **Power curves**: Understanding how power varies with operating conditions
- **Efficiency mapping**: Analyzing system efficiency across operating range
- **Load matching**: Optimizing power source and load characteristics
- **System optimization**: Improving overall power system performance

## Applications by Industry

### Automotive and Transportation
- **Engine development**: Converting test data to standard horsepower ratings
- **Performance comparison**: Standardizing power measurements across vehicles
- **Transmission design**: Calculating power handling requirements
- **Fuel efficiency**: Analyzing power-to-weight ratios for efficiency optimization

### Manufacturing and Industrial
- **Production equipment**: Specifying motor power for manufacturing machinery
- **Process optimization**: Analyzing power consumption in industrial processes
- **Equipment maintenance**: Monitoring power output for predictive maintenance
- **Energy management**: Optimizing power usage across industrial facilities

### Marine and Aerospace
- **Propulsion systems**: Converting engine power to standard ratings
- **Auxiliary systems**: Calculating power requirements for support equipment
- **Performance analysis**: Evaluating propulsion efficiency and power output
- **System integration**: Balancing power requirements across multiple systems

### Construction and Heavy Equipment
- **Equipment specifications**: Standardizing power ratings for construction machinery
- **Job planning**: Calculating power requirements for construction tasks
- **Equipment selection**: Choosing appropriate machinery for specific applications
- **Performance monitoring**: Tracking equipment power output and efficiency

## Measurement and Testing

### Power Measurement Methods
- **Dynamometer testing**: Direct measurement of mechanical power output
- **Torque and speed measurement**: Calculating power from torque and RPM
- **Electrical measurement**: Using electrical power as proxy for mechanical power
- **Performance testing**: Standardized test procedures for power measurement

### Calibration and Standards
- **Measurement standards**: Ensuring traceability to national standards
- **Calibration procedures**: Regular calibration of power measurement equipment
- **Uncertainty analysis**: Understanding and quantifying measurement uncertainty
- **Quality assurance**: Maintaining measurement accuracy and reliability

## Summary

ft-lb/s to hp conversion is fundamental in mechanical engineering, providing a bridge between calculated mechanical power and standardized horsepower ratings. Understanding this conversion enables engineers to properly specify equipment, analyze performance, and communicate power requirements effectively across different industries and applications.

The simple conversion factor of 1 ft-lb/s = 0.0018181818 hp (or 1 hp = 550 ft-lb/s) makes this conversion straightforward while maintaining the precision required for engineering applications.

## Related Conversions

- [ft-lb/s to Watts (W)](/Power/ft-lb_s-to-W)
- [ft-lb/s to Kilowatts (kW)](/Power/ft-lb_s-to-kW)
- [ft-lb/s to PS (Metric Horsepower)](/Power/ft-lb_s-to-PS)
- [hp to Watts (W)](/Power/hp-to-W)
- [hp to Kilowatts (kW)](/Power/hp-to-kW)
- [hp to ft-lb/s](/Power/hp-to-ft-lb_s)