---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/Btu_s-to-ft-lb_s
      linkText: Btu/s to ft-lb/s
head:
  - - meta
    - name: description
      content: "Professional Btu/s (British thermal unit per second) to ft-lb/s (foot-pound per second) power unit conversion tool. Provides precise conversion formulas, practical applications, and detailed calculation methods. Suitable for HVAC, mechanical engineering, small engine power calculations, and other fields requiring US customary unit system power conversions."
  - - meta
    - name: keywords
      content: "Btu/s to ft-lb/s conversion,Btu/s to ft-lb/s calculator,power unit conversion formula,power unit conversion tool,HVAC and mechanical engineering power units,British thermal unit conversion,what is ft-lb/s unit,foot-pound per second,US customary power units,mechanical power conversion,small engine power,torque power conversion,HVAC power,engineering machinery power,hydraulic pump power,air compressor power,lawn mower engine power,agricultural machinery power,power calculation formula,mechanical system power analysis,US unit conversion,engineering power calculation,mechanical engineering units,power measurement units,torque output power,mechanical equipment power matching,industrial machinery power,power unit conversion table,mechanical power formula"
---
# British Thermal Unit per Second (Btu/s) to Foot-Pound per Second (ft-lb/s) Conversion

This is a detailed introduction to **Btu/s to ft-lb/s conversion** and provides a practical **power unit conversion tool**.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  'Btu/s to ft-lb/s conversion',
  'Btu/s to ft-lb/s calculator',
  'power unit conversion formula',
  'power unit conversion tool',
  'HVAC and mechanical engineering power units',
  'British thermal unit conversion',
  'what is ft-lb/s unit',
  'foot-pound per second',
  'US customary power units',
  'mechanical power conversion',
  'small engine power',
  'torque power conversion',
  'HVAC power',
  'engineering machinery power',
  'hydraulic pump power',
  'air compressor power',
  'lawn mower engine power',
  'agricultural machinery power',
  'power calculation formula',
  'mechanical system power analysis',
  'US unit conversion',
  'engineering power calculation',
  'mechanical engineering units',
  'power measurement units',
  'torque output power',
  'mechanical equipment power matching',
  'industrial machinery power',
  'power unit conversion table',
  'mechanical power formula'
]

const message = useMessage()
const formValue = reactive({
  inputValue: 1,
  outputValue: 778.169,
  inputUnit: 'Btu/s',
  outputUnit: 'ft-lb/s'
})

const handleConvert = () => {
  if (formValue.inputValue === null || formValue.inputValue === undefined) {
    message.warning('Please enter a valid number')
    return
  }
  
  // Conversion formula: 1 Btu/s = 778.169 ft-lb/s
  formValue.outputValue = Number((formValue.inputValue * 778.169).toFixed(6))
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

<n-card title="Btu/s to ft-lb/s Converter" style="margin: 20px 0;">
  <n-form>
    <n-grid :cols="24" :gutter="12">
      <n-gi :span="11">
        <n-form-item label="Input Value">
          <n-input-number 
            v-model:value="formValue.inputValue" 
            :precision="6"
            placeholder="Enter Btu/s value"
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
            :precision="6"
            placeholder="ft-lb/s result"
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

The conversion formula from Btu/s to ft-lb/s is:

**1 Btu/s = 778.169 ft-lb/s**

Therefore:
- **ft-lb/s = Btu/s × 778.169**

## Conversion Guide

### What is Btu/s (British Thermal Unit per Second)?

Btu/s (British thermal unit per second) is a unit of power in the British Imperial system, representing the rate of energy transfer. One Btu/s equals the energy required to raise the temperature of one pound of water by one degree Fahrenheit in one second.

**Common applications:**
- HVAC system power rating
- Boiler and furnace capacity
- Heat pump performance
- Industrial heating equipment
- Thermal energy calculations

### What is ft-lb/s (Foot-Pound per Second)?

ft-lb/s (foot-pound per second) is a unit of mechanical power in the US customary system, representing the rate of doing work. One ft-lb/s equals the power required to perform one foot-pound of work in one second.

**Common applications:**
- Small engine power output
- Mechanical equipment power
- Hydraulic system power
- Agricultural machinery
- Power tool specifications

## Why Convert Btu/s to ft-lb/s?

Converting between Btu/s and ft-lb/s is essential in various engineering applications:

1. **Cross-system compatibility**: When working with equipment from different manufacturers using different unit systems
2. **Engineering calculations**: Comparing thermal and mechanical power in integrated systems
3. **Equipment selection**: Matching HVAC thermal capacity with mechanical power requirements
4. **Performance analysis**: Evaluating overall system efficiency across different power types
5. **International projects**: Working with specifications from different countries

## Conversion Method

### Step-by-step conversion:

1. **Identify the Btu/s value** you want to convert
2. **Apply the conversion factor**: Multiply by 778.169
3. **Calculate the result**: Btu/s × 778.169 = ft-lb/s
4. **Round appropriately** based on your precision requirements

### Example Calculations:

**Example 1: Small HVAC Unit**
- Input: 5 Btu/s
- Calculation: 5 × 778.169 = 3,890.845 ft-lb/s
- Result: 5 Btu/s = 3,890.845 ft-lb/s

**Example 2: Industrial Heater**
- Input: 25 Btu/s
- Calculation: 25 × 778.169 = 19,454.225 ft-lb/s
- Result: 25 Btu/s = 19,454.225 ft-lb/s

**Example 3: Large Boiler**
- Input: 100 Btu/s
- Calculation: 100 × 778.169 = 77,816.9 ft-lb/s
- Result: 100 Btu/s = 77,816.9 ft-lb/s

## Practical Applications

### HVAC Engineering
- **Heat pump sizing**: Converting thermal capacity to mechanical power equivalent
- **System integration**: Matching heating capacity with fan motor power
- **Energy audits**: Comparing thermal and mechanical energy consumption

### Mechanical Engineering
- **Equipment specification**: Converting between thermal and mechanical power ratings
- **System design**: Balancing thermal loads with mechanical power requirements
- **Performance testing**: Comparing actual vs. rated power across different measurement systems

### Industrial Applications
- **Process equipment**: Sizing motors for thermal processing equipment
- **Energy management**: Converting between different power measurement systems
- **Equipment procurement**: Comparing specifications from different suppliers

## Summary

Btu/s to ft-lb/s conversion is crucial for engineers working with both thermal and mechanical systems. The conversion factor of 778.169 allows for accurate translation between these power units, enabling proper system design, equipment selection, and performance analysis across different engineering disciplines.

Understanding this conversion helps ensure compatibility between HVAC thermal systems and mechanical power systems, facilitating integrated design approaches in modern engineering projects.

## Related Conversions

- [Btu/s to Watts (W)](/Power/Btu_s-to-W)
- [Btu/s to Kilowatts (kW)](/Power/Btu_s-to-kW)
- [Btu/s to Horsepower (hp)](/Power/Btu_s-to-hp)
- [ft-lb/s to Btu/s](/Power/ft-lb_s-to-Btu_s)
- [ft-lb/s to Watts (W)](/Power/ft-lb_s-to-W)
- [ft-lb/s to Horsepower (hp)](/Power/ft-lb_s-to-hp)