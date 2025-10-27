---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/ft-lb_s-to-Btu_s
      linkText: ft-lb/s to Btu/s
head:
  - - meta
    - name: description
      content: Professional ft-lb/s (foot-pound per second) to Btu/s (British thermal unit per second) power unit conversion tool. Provides precise power unit conversion formulas, practical application scenarios, and detailed conversion relationships. Suitable for HVAC, mechanical engineering, refrigeration systems, and other fields requiring power calculations and unit conversions.
  - - meta
    - name: keywords
      content: ft-lb/s to Btu/s conversion,ft-lb/s to Btu/s calculator,power unit conversion formula,power unit conversion tool,HVAC and mechanical engineering power units,British thermal unit conversion,mechanical power conversion,refrigeration power calculation,HVAC power,engineering power units,Btu power conversion,ft-lb power unit,Imperial power conversion,thermal power unit,mechanical engineering calculation
---
# Foot-Pound per Second (ft-lb/s) to British Thermal Unit per Second (Btu/s) Conversion

This is a detailed introduction to **ft-lb/s to Btu/s conversion** and provides a practical **power unit conversion tool**. Foot-pound per second (ft-lb/s) is a commonly used power unit in mechanical engineering, while British thermal unit per second (Btu/s) is widely used in HVAC and refrigeration systems. This tool helps you quickly and accurately convert between these two power units, suitable for engineering design, equipment selection, and technical calculations.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  'ft-lb/s to Btu/s conversion',
  'ft-lb/s to Btu/s calculator',
  'power unit conversion formula',
  'power unit conversion tool',
  'HVAC and mechanical engineering power units',
  'British thermal unit conversion',
  'mechanical power conversion',
  'refrigeration power calculation',
  'HVAC power',
  'engineering power units',
  'Btu power conversion',
  'ft-lb power unit',
  'Imperial power conversion',
  'thermal power unit',
  'mechanical engineering calculation',
  'foot-pound per second',
  'BTU per second',
  'power conversion',
  'power unit conversion'
]

const message = useMessage()
const formValue = reactive({
  inputValue: 1,
  outputValue: 0.000947817,
  inputUnit: 'ft-lb/s',
  outputUnit: 'Btu/s'
})

const handleConvert = () => {
  if (formValue.inputValue === null || formValue.inputValue === undefined) {
    message.warning('Please enter a valid number')
    return
  }
  
  // Conversion formula: 1 ft-lb/s = 0.000947817 Btu/s
  formValue.outputValue = Number((formValue.inputValue * 0.000947817).toFixed(9))
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

<n-card title="ft-lb/s to Btu/s Converter" style="margin: 20px 0;">
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
            :precision="9"
            placeholder="Btu/s result"
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

The conversion formula from ft-lb/s to Btu/s is:

**1 ft-lb/s = 0.000947817 Btu/s**

Therefore:
- **Btu/s = ft-lb/s × 0.000947817**

## Conversion Guide

### What is ft-lb/s (Foot-Pound per Second)?

ft-lb/s (foot-pound per second) is a unit of power in the Imperial system, representing the rate at which work is done. One ft-lb/s equals the power required to perform one foot-pound of work in one second.

**Common applications:**
- Mechanical engineering calculations
- Motor and engine power ratings
- Industrial machinery specifications
- Pump and compressor power
- Mechanical system design

### What is Btu/s (British Thermal Unit per Second)?

Btu/s (British thermal unit per second) is a unit of power representing the rate of heat energy transfer. One Btu/s equals the power required to transfer one British thermal unit of heat energy in one second.

**Common applications:**
- HVAC system power rating
- Boiler and furnace capacity
- Heat pump performance
- Refrigeration system power
- Thermal energy calculations

## Why Convert ft-lb/s to Btu/s?

Converting between ft-lb/s and Btu/s is essential in many engineering applications:

1. **HVAC system design**: Converting mechanical power to thermal power equivalents
2. **Energy efficiency analysis**: Understanding the relationship between mechanical and thermal power
3. **Equipment specification**: Matching mechanical components with thermal systems
4. **Cross-disciplinary engineering**: Bridging mechanical and thermal engineering calculations
5. **System integration**: Combining mechanical and thermal components in unified systems

## Conversion Method

### Step-by-step conversion:

1. **Identify the ft-lb/s value** you want to convert
2. **Apply the conversion factor**: Multiply by 0.000947817
3. **Calculate the result**: ft-lb/s × 0.000947817 = Btu/s
4. **Round appropriately** based on your precision requirements

### Example Calculations:

**Example 1: Small Motor**
- Input: 100 ft-lb/s
- Calculation: 100 × 0.000947817 = 0.0947817 Btu/s
- Result: 100 ft-lb/s = 0.095 Btu/s

**Example 2: Industrial Pump**
- Input: 5000 ft-lb/s
- Calculation: 5000 × 0.000947817 = 4.739085 Btu/s
- Result: 5000 ft-lb/s = 4.74 Btu/s

**Example 3: Large Compressor**
- Input: 50000 ft-lb/s
- Calculation: 50000 × 0.000947817 = 47.39085 Btu/s
- Result: 50000 ft-lb/s = 47.39 Btu/s

## Practical Applications

### HVAC and Building Systems
- **Heat pump sizing**: Converting mechanical compressor power to thermal capacity
- **Boiler system design**: Understanding mechanical input versus thermal output
- **Ventilation systems**: Calculating fan power in thermal terms
- **Energy auditing**: Comparing mechanical and thermal energy consumption

### Industrial Applications
- **Process heating**: Converting mechanical drive power to thermal equivalent
- **Steam generation**: Understanding mechanical input for thermal output
- **Refrigeration systems**: Analyzing compressor power in thermal terms
- **Heat recovery**: Evaluating mechanical energy conversion to thermal energy

### Mechanical Engineering
- **Power transmission**: Converting mechanical power to thermal losses
- **Efficiency calculations**: Understanding energy conversion between mechanical and thermal forms
- **System design**: Balancing mechanical and thermal components
- **Performance analysis**: Evaluating overall system efficiency

### Energy Systems
- **Combined heat and power**: Understanding mechanical-thermal relationships
- **Waste heat recovery**: Converting mechanical losses to useful thermal energy
- **Energy storage**: Analyzing mechanical-thermal energy conversion
- **System optimization**: Balancing mechanical and thermal energy flows

## Understanding Power Scale

### Typical Mechanical Power (ft-lb/s)
- **Small motors**: 100-1,000 ft-lb/s
- **Industrial pumps**: 1,000-10,000 ft-lb/s
- **Large compressors**: 10,000-100,000 ft-lb/s
- **Industrial drives**: 50,000-500,000 ft-lb/s

### Equivalent Thermal Power (Btu/s)
- **0.095-0.95 Btu/s**: Small heating applications
- **0.95-9.5 Btu/s**: Residential heating systems
- **9.5-95 Btu/s**: Commercial heating systems
- **47-474 Btu/s**: Industrial heating applications

## Energy Efficiency Considerations

### Mechanical-to-Thermal Conversion
- **Heat pumps**: 300-500% efficiency (COP 3-5)
- **Electric resistance heating**: 100% efficiency
- **Mechanical friction**: Nearly 100% conversion to heat
- **Compressor systems**: 80-95% mechanical efficiency

### System Design Considerations
- **Energy source**: Consider availability and cost of mechanical versus thermal energy
- **Efficiency requirements**: Choose appropriate conversion technology
- **Environmental impact**: Evaluate overall system efficiency
- **Economic factors**: Compare operating costs of different energy forms

## Power Measurement and Standards

### Measurement Accuracy
- **Mechanical power**: Measured using torque and speed sensors
- **Thermal power**: Measured using flow rates and temperature differences
- **Conversion precision**: Important for system sizing and efficiency calculations
- **Calibration standards**: Ensure measurement equipment accuracy

### Engineering Standards
- **Imperial units**: ft-lb/s and Btu/s are both Imperial system units
- **Conversion factors**: Standardized values ensure consistency
- **Technical documentation**: Use appropriate units for target audience
- **International compatibility**: Consider metric equivalents when needed

## Common Applications by Industry

### Manufacturing and Industry
- **Process design**: Balancing mechanical and thermal energy needs
- **Equipment specification**: Matching mechanical drives with thermal loads
- **Energy management**: Optimizing overall energy consumption
- **Cost control**: Managing mechanical and thermal energy expenses

### Building and Construction
- **HVAC design**: Converting mechanical equipment power to thermal capacity
- **Energy codes**: Meeting efficiency standards and regulations
- **System selection**: Choosing between mechanical and thermal solutions
- **Performance verification**: Validating system thermal performance

### Power and Utilities
- **Cogeneration**: Understanding mechanical-thermal energy relationships
- **Efficiency programs**: Promoting energy-efficient technologies
- **Load management**: Balancing mechanical and thermal energy demands
- **System planning**: Designing integrated energy systems

## Conversion Accuracy and Precision

### Factors Affecting Accuracy
- **Temperature dependence**: Btu definition varies slightly with temperature
- **Measurement precision**: Equipment accuracy affects conversion results
- **Rounding errors**: Multiple conversions can accumulate errors
- **Standard definitions**: Use consistent conversion factors

### Best Practices
- **Use standard conversion factors**: Ensure consistency across calculations
- **Consider significant figures**: Match precision to measurement accuracy
- **Document assumptions**: Note any special conditions or definitions used
- **Verify results**: Cross-check with alternative calculation methods

## Summary

ft-lb/s to Btu/s conversion is essential for engineers working with both mechanical and thermal systems. This conversion enables proper system sizing, energy efficiency analysis, and cost-effective design decisions across various industries.

Understanding the relationship between mechanical and thermal power helps in optimizing energy systems, comparing different technologies, and making informed decisions about energy conversion and utilization strategies.

## Related Conversions

- [ft-lb/s to Watts (W)](/Power/ft-lb_s-to-W)
- [ft-lb/s to Kilowatts (kW)](/Power/ft-lb_s-to-kW)
- [ft-lb/s to Horsepower (hp)](/Power/ft-lb_s-to-hp)
- [Btu/s to Watts (W)](/Power/Btu_s-to-W)
- [Btu/s to Horsepower (hp)](/Power/Btu_s-to-hp)
- [Btu/s to ft-lb/s](/Power/Btu_s-to-ft-lb_s)