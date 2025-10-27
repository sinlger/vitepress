---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/ft-lb_s-to-kW
      linkText: ft-lb/s to kW
head:
  - - meta
    - name: description
      content: "Professional ft-lb/s (foot-pound per second) to kW (kilowatt) power unit conversion tool. Provides precise power unit conversion formulas, detailed application scenarios, and practical calculator. Suitable for industrial equipment, motor power, mechanical engineering, and other international standard power unit conversion requirements."
  - - meta
    - name: keywords
      content: "ft-lb/s to kW conversion,ft-lb/s to kW calculator,power unit conversion,kilowatt converter,industrial equipment power,motor power conversion,mechanical engineering power,international standard power,engineering power calculation,equipment power conversion"
---
# Foot-Pound per Second (ft-lb/s) to Kilowatt (kW) Conversion

**ft-lb/s to kW conversion tool** is a professional power unit converter designed for international engineering standards. Foot-pound per second (ft-lb/s) is an Imperial power unit, while kilowatt (kW) is an international standard power unit widely used in industrial equipment, motor systems, mechanical engineering, and other fields. This tool provides precise conversion formulas and real-time calculation functions to help engineers, technicians, and equipment professionals perform accurate power unit conversions, particularly suitable for international projects and cross-standard equipment selection.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  'ft-lb/s to kW conversion',
  'ft-lb/s to kW calculator',
  'power unit conversion',
  'kilowatt converter',
  'industrial equipment power',
  'motor power conversion',
  'mechanical engineering power',
  'international standard power',
  'engineering power calculation',
  'equipment power conversion',
  'foot-pound per second',
  'kilowatt power',
  'motor specifications',
  'industrial machinery',
  'power system design',
  'electrical engineering',
  'mechanical systems',
  'power measurement',
  'energy conversion',
  'engineering calculations'
]

const message = useMessage()
const formValue = reactive({
  inputValue: 1,
  outputValue: 0.0013558179,
  inputUnit: 'ft-lb/s',
  outputUnit: 'kW'
})

const handleConvert = () => {
  if (formValue.inputValue === null || formValue.inputValue === undefined) {
    message.warning('Please enter a valid number')
    return
  }
  
  // Conversion formula: 1 ft-lb/s = 0.0013558179 kW
  formValue.outputValue = Number((formValue.inputValue * 0.0013558179).toFixed(10))
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

<n-card title="ft-lb/s to kW Converter" style="margin: 20px 0;">
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
            placeholder="kW result"
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

The conversion formula from ft-lb/s to kW is:

**1 ft-lb/s = 0.0013558179 kW**

Therefore:
- **kW = ft-lb/s × 0.0013558179**
- **kW = ft-lb/s × 1.3558179 × 10⁻³**

## Conversion Guide

### What is ft-lb/s (Foot-Pound per Second)?

ft-lb/s (foot-pound per second) is a unit of power in the Imperial system, representing the rate at which work is done. One ft-lb/s equals the power required to perform one foot-pound of work in one second.

**Common applications:**
- Mechanical engineering calculations
- Motor and engine power analysis
- Industrial machinery specifications
- Pump and compressor power ratings
- Mechanical system design

### What is kW (Kilowatt)?

kW (kilowatt) is a unit of power in the International System of Units (SI), equal to 1,000 watts. It is widely used in electrical and mechanical engineering to express power ratings of motors, generators, and various industrial equipment.

**Common applications:**
- Electric motor ratings
- Generator capacity specifications
- Industrial equipment power consumption
- HVAC system ratings
- Renewable energy system capacity

## Why Convert ft-lb/s to kW?

Converting between ft-lb/s and kW is essential in various engineering applications:

1. **International projects**: Bridging Imperial and metric unit systems
2. **Equipment specification**: Standardizing power ratings for global markets
3. **Energy efficiency analysis**: Comparing power consumption across different systems
4. **Motor selection**: Converting mechanical power requirements to electrical ratings
5. **System integration**: Matching power sources with load requirements

## Conversion Method

### Step-by-step conversion:

1. **Identify the ft-lb/s value** you want to convert
2. **Apply the conversion factor**: Multiply by 0.0013558179
3. **Calculate the result**: ft-lb/s × 0.0013558179 = kW
4. **Round to appropriate precision** based on application requirements

### Example Calculations:

**Example 1: Small Motor**
- Input: 737 ft-lb/s
- Calculation: 737 × 0.0013558179 = 1.0 kW
- Result: 737 ft-lb/s = 1.0 kW

**Example 2: Industrial Motor**
- Input: 3,685 ft-lb/s
- Calculation: 3,685 × 0.0013558179 = 5.0 kW
- Result: 3,685 ft-lb/s = 5.0 kW

**Example 3: Large Motor**
- Input: 73,700 ft-lb/s
- Calculation: 73,700 × 0.0013558179 = 100 kW
- Result: 73,700 ft-lb/s = 100 kW

## Practical Applications

### Industrial Equipment
- **Motor specifications**: Converting mechanical power requirements to electrical ratings
- **Pump systems**: Calculating electrical power needs for hydraulic systems
- **Compressor design**: Determining electrical motor requirements for air compression
- **Manufacturing equipment**: Specifying power requirements for production machinery

### Electrical Engineering
- **Power system design**: Balancing mechanical loads with electrical generation capacity
- **Motor selection**: Choosing appropriate electrical motors for mechanical applications
- **Energy management**: Analyzing power consumption across industrial facilities
- **Grid planning**: Understanding mechanical load requirements in electrical terms

### Mechanical Engineering
- **System integration**: Matching mechanical power sources with electrical loads
- **Efficiency analysis**: Comparing mechanical input power with electrical output
- **Equipment sizing**: Determining appropriate power ratings for components
- **Performance optimization**: Analyzing and improving system power efficiency

### International Projects
- **Standards harmonization**: Converting between Imperial and metric power units
- **Equipment procurement**: Standardizing specifications for global sourcing
- **Technical documentation**: Ensuring consistent power units across project teams
- **Regulatory compliance**: Meeting local power rating requirements

## Understanding Power Relationships

### Mechanical vs. Electrical Power
- **Mechanical power**: Force × velocity or torque × angular velocity
- **Electrical power**: Voltage × current × power factor
- **Conversion efficiency**: Real-world losses in mechanical-to-electrical conversion
- **System considerations**: How power requirements vary with operating conditions

### Power Rating Standards
- **Nameplate ratings**: Standard power ratings for motors and equipment
- **Continuous vs. peak power**: Understanding different power rating types
- **Efficiency classes**: How efficiency affects actual power consumption
- **Operating conditions**: Environmental factors affecting power output

## Common Power Ranges

### Typical ft-lb/s Values
- **Small motors**: 100-1,000 ft-lb/s
- **Medium motors**: 1,000-10,000 ft-lb/s
- **Large motors**: 10,000-100,000 ft-lb/s
- **Industrial systems**: 100,000+ ft-lb/s

### Equivalent kW Ratings
- **0.1-1.4 kW**: Small motors and appliances
- **1.4-14 kW**: Medium industrial equipment
- **14-136 kW**: Large industrial motors
- **136+ kW**: Heavy industrial applications

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

### Motor Selection Criteria
- **Power requirements**: Matching motor power to load requirements
- **Efficiency ratings**: Selecting high-efficiency motors for energy savings
- **Starting characteristics**: Understanding motor starting power requirements
- **Variable speed operation**: Considering power requirements across speed range

## Applications by Industry

### Manufacturing
- **Production equipment**: Specifying motor power for manufacturing machinery
- **Process optimization**: Analyzing power consumption in industrial processes
- **Equipment maintenance**: Monitoring power output for predictive maintenance
- **Energy management**: Optimizing power usage across manufacturing facilities

### HVAC and Building Systems
- **Fan and pump motors**: Calculating power requirements for building systems
- **Chiller systems**: Determining compressor motor power requirements
- **Energy efficiency**: Optimizing building power consumption
- **System commissioning**: Verifying actual vs. design power consumption

### Water and Wastewater Treatment
- **Pump systems**: Calculating motor power for water treatment processes
- **Aeration equipment**: Determining blower motor power requirements
- **Process optimization**: Balancing treatment efficiency with power consumption
- **Energy cost management**: Optimizing power usage in treatment facilities

### Mining and Heavy Industry
- **Conveyor systems**: Calculating motor power for material handling
- **Crushing equipment**: Determining power requirements for ore processing
- **Ventilation systems**: Sizing fan motors for mine ventilation
- **Process equipment**: Specifying power for heavy industrial machinery

## Measurement and Standards

### Power Measurement Methods
- **Mechanical power measurement**: Torque and speed sensors
- **Electrical power measurement**: Voltage, current, and power factor meters
- **Efficiency testing**: Standardized procedures for motor efficiency measurement
- **Performance monitoring**: Continuous monitoring of power consumption

### International Standards
- **IEC standards**: International electrotechnical commission motor standards
- **NEMA standards**: National electrical manufacturers association ratings
- **ISO standards**: International organization for standardization guidelines
- **Energy efficiency regulations**: Government mandates for motor efficiency

## Summary

ft-lb/s to kW conversion is essential for bridging mechanical and electrical engineering disciplines, enabling proper equipment specification, energy analysis, and system design. Understanding this conversion allows engineers to work effectively with both Imperial and metric power units while ensuring accurate power calculations for international projects.

The conversion factor of 0.0013558179 provides the precise relationship needed for professional engineering applications, supporting everything from small motor selection to large industrial system design.

## Related Conversions

- [ft-lb/s to Watts (W)](/Power/ft-lb_s-to-W)
- [ft-lb/s to Horsepower (hp)](/Power/ft-lb_s-to-hp)
- [ft-lb/s to PS (Metric Horsepower)](/Power/ft-lb_s-to-PS)
- [kW to Watts (W)](/Power/kW-to-W)
- [kW to Horsepower (hp)](/Power/kW-to-hp)
- [kW to ft-lb/s](/Power/kW-to-ft-lb_s)