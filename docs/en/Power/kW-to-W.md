---
title: "Kilowatt (kW) to Watt (W) Conversion"
description: "Professional kilowatt (kW) to watt (W) power unit conversion tool, providing precise conversion formulas, engineering application examples, and technical specification guidance, suitable for power engineering, appliance design, renewable energy, and other fields' power calculations."
keywords:
  - Kilowatt to Watt
  - kW to W conversion
  - Power unit conversion
  - Power engineering calculation
  - Appliance power rating
  - Renewable energy power
  - Motor power conversion
  - Power unit converter
  - Watt kilowatt conversion formula
  - Power system power calculation
  - Household appliance power
  - Industrial equipment power
  - Power load calculation
  - Power conversion tool
  - Power engineering design
breadcrumbs:
  - name: Home
    linkText: Home
    linkUrl: /
  - name: Power Conversion
    linkText: Power Conversion
    linkUrl: /zh/Power/
  - name: Kilowatt to Watt Conversion
    linkText: Kilowatt to Watt Conversion
    linkUrl: /zh/Power/kW-to-W
meta:
  - name: description
    content: "Professional kilowatt (kW) to watt (W) power unit conversion tool, providing precise conversion formulas, engineering application examples, and technical specification guidance, suitable for power engineering, appliance design, renewable energy, and other fields' power calculations."
  - name: keywords
    content: "Kilowatt to Watt,kW to W conversion,Power unit conversion,Power engineering calculation,Appliance power rating,Renewable energy power,Motor power conversion,Power unit converter,Watt kilowatt conversion formula,Power system power calculation,Household appliance power,Industrial equipment power,Power load calculation,Power conversion tool,Power engineering design"
---

# Kilowatt (kW) to Watt (W) Conversion

Kilowatt (kW) and watt (W) are the most fundamental power units in the International System of Units, widely used in power engineering, appliance design, renewable energy systems, and other fields. A kilowatt is 1000 times a watt, mainly used for marking high-power equipment, while watts are suitable for low-power appliances and precision calculations. Mastering the conversion relationship between kW and W is of great significance for power system design, equipment selection, and energy consumption calculation.

This tool provides professional **kilowatt to watt** conversion functionality, supporting bidirectional conversion, suitable for engineering design, technical specification development, and daily power calculation needs.

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  number: 0,
  to: 'W'
})

const options = [
  { label: 'Kilowatt to Watt', value: 'kW to W' },
  { label: 'kW to W conversion', value: 'Power unit conversion' },
  { label: 'Power engineering calculation', value: 'Appliance power rating' },
  { label: 'Renewable energy power', value: 'Motor power conversion' },
  { label: 'Power unit converter', value: 'Watt kilowatt conversion formula' },
  { label: 'Power system power calculation', value: 'Household appliance power' },
  { label: 'Industrial equipment power', value: 'Power load calculation' },
  { label: 'Power conversion tool', value: 'Power engineering design' }
]

const rules = {
  number: {
    required: true,
    message: 'Please enter a number',
    trigger: ['blur', 'input']
  }
}

const result = ref('')

const convertHandler = () => {
  if (form.value.to === 'W') {
    result.value = (form.value.number * 1000).toFixed(0) + ' W'
  } else {
    result.value = (form.value.number / 1000).toFixed(3) + ' kW'
  }
}
</script>

<n-card title="Kilowatt (kW) to Watt (W) Converter" embedded :bordered="false" hoverable>
<n-form :model="form" :rules="rules" ref="formRef">
<n-form-item label="Value" path="number">
<n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="Enter the value to convert" />
</n-form-item>
<n-form-item label="To" path="to">
<n-select size="large" :options="options" v-model:value="form.to" placeholder="Select conversion unit" />
</n-form-item>
<n-form-item>
<n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
</n-form-item>
<n-form-item v-if="result">
<n-text type="success" style="font-size: 18px; font-weight: bold;">{{ result }}</n-text>
</n-form-item>
</n-form>
</n-card>

## Conversion Formula

### Basic Conversion Relationship
- 1 Kilowatt (kW) = 1,000 Watts (W)
- 1 Watt (W) = 0.001 Kilowatts (kW)

### Conversion Formulas
- **kW to W**: W = kW × 1,000
- **W to kW**: kW = W ÷ 1,000

### Common Value Reference Table
| Kilowatts (kW) | Watts (W) |
|----------------|-----------|
| 0.1 | 100 |
| 0.5 | 500 |
| 1 | 1,000 |
| 2 | 2,000 |
| 5 | 5,000 |
| 10 | 10,000 |
| 50 | 50,000 |
| 100 | 100,000 |

## Application Examples

### Household Appliances
- **Microwave oven**: 1.2 kW = 1,200 W
- **Electric water heater**: 3 kW = 3,000 W
- **Air conditioner**: 2.5 kW = 2,500 W
- **Induction cooktop**: 2.2 kW = 2,200 W

### Industrial Equipment
- **Small motor**: 5.5 kW = 5,500 W
- **Welding machine**: 15 kW = 15,000 W
- **Industrial fan**: 7.5 kW = 7,500 W
- **Compressor**: 22 kW = 22,000 W

### Renewable Energy
- **Household solar system**: 5 kW = 5,000 W
- **Small wind turbine**: 10 kW = 10,000 W
- **Energy storage system**: 20 kW = 20,000 W

## Usage Recommendations

### When to Use kW
- Large appliance power rating
- Industrial equipment specifications
- Power system load calculation
- Energy consumption statistics

### When to Use W
- Small appliance power marking
- Electronic device power consumption
- Precision power measurement
- Laboratory equipment specifications

### Conversion Considerations
- **Precision requirements**: Engineering calculations recommend retaining 3 significant figures
- **Unit consistency**: Ensure all calculations use the same unit system
- **Safety margin**: Equipment selection should consider 10-20% power margin

## FAQ

**Q: What is the conversion relationship between kW and W?**
A: 1 kilowatt (kW) = 1000 watts (W), this is the standard conversion relationship in the International System of Units.

**Q: Why use kW instead of W for large power values?**
A: Using kW can simplify numerical expression and avoid too many zeros. For example, 5000 W is more concisely expressed as 5 kW.

**Q: What should be noted in power conversion?**
A: Pay attention to unit consistency, precision requirements, and consider equipment efficiency and safety margins in practical applications.

**Q: How to calculate electricity consumption?**
A: Electricity consumption (kWh) = Power (kW) × Time (h). For example, a 2 kW appliance running for 3 hours consumes 6 kWh.

**Q: What's the difference between rated power and actual power?**
A: Rated power is the maximum power under standard conditions, while actual power varies with load and operating conditions. Actual power is usually 70-90% of rated power.

## Related Links
- [Watt to Kilowatt Conversion](/zh/Power/W-to-kW)
- [Kilowatt to Megawatt Conversion](/zh/Power/kW-to-mW)
- [Power Unit Conversion](/zh/Power/)