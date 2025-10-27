---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Power/index
      linkText: Power Conversion
  - - link: /Power/PS-to-kW
      linkText: PS to kW Conversion
head:
  - - meta
    - name: description
      content: "Professional PS (metric horsepower) to kW (kilowatt) conversion tool, suitable for precise power unit conversion in automotive engineering, industrial equipment, motor power and other fields, providing detailed conversion formulas and practical application guidance."
  - - meta
    - name: keywords
      content: "PS to kW conversion,metric horsepower to kilowatt,power unit conversion formula,automotive engine power,motor power conversion,industrial equipment power,energy engineering calculation,international standard power unit"
---
# PS (Metric Horsepower) to kW (Kilowatt) Conversion

**PS (metric horsepower) to kW (kilowatt) conversion** is one of the most commonly used power unit conversions in engineering and technical fields. Kilowatt, as a power unit in the International System of Units (SI), is widely used in motor power labeling, energy engineering calculations, industrial equipment specifications, and other fields. This tool provides precise PS to kW conversion functionality, supporting power unit conversion needs in automotive engineering, power systems, industrial machinery, and other professional fields.

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';

const seoKey = [
  'PS to kW conversion', 'metric horsepower to kilowatt', 'power unit conversion', 'automotive engine power',
  'motor power conversion', 'industrial equipment power', 'energy engineering calculation', 'international standard power unit',
  'automotive engineering power', 'power system power', 'mechanical equipment power', 'PS kilowatt converter'
];
const convert = inject('convert')
const options =  [
  { "label": "Metric Horsepower (PS)","value": "PS" },
  { "label": "Kilowatt (kW)","value": "kW" }
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
  title:'PS to kW Conversion',
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

<n-card title="PS (Metric Horsepower) to kW (Kilowatt) Converter" embedded :bordered="false" hoverable>
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
  <template #footer>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: #666;">
      <span v-for="keyword in seoKey" :key="keyword" style="background: #f5f5f5; padding: 2px 6px; border-radius: 4px;">{{ keyword }}</span>
    </div>
  </template>
</n-card>

## Conversion Formula

### Basic Conversion Relationship

**PS to kW Conversion:**
- 1 PS = 0.7355 kW
- kW = PS × 0.7355

**kW to PS Conversion:**
- 1 kW = 1.3596 PS
- PS = kW × 1.3596

### Detailed Calculation Process

**Physical Definition:**
- 1 PS = 75 kg·m/s = 735.5 W = 0.7355 kW
- 1 kW = 1000 W = 1000 ÷ 735.5 PS = 1.3596 PS

**Conversion Steps:**
1. PS → W: PS value × 735.5
2. W → kW: W value ÷ 1000
3. Direct conversion: PS value × 0.7355 = kW value

### Common Value Reference Table

| PS Value | kW Value | Application Scenario |
|----------|----------|---------------------|
| 50 PS | 36.8 kW | Small car engine |
| 100 PS | 73.6 kW | Family sedan engine |
| 150 PS | 110.3 kW | Mid-size car engine |
| 200 PS | 147.1 kW | Performance car engine |
| 300 PS | 220.7 kW | Luxury car/sports car |
| 500 PS | 367.8 kW | Supercar |
| 1000 PS | 735.5 kW | Industrial equipment/racing car |

## Application Examples

### Automotive Engineering Applications

**Engine Power Rating:**
- Volkswagen 1.4T engine: 150 PS = 110.3 kW
- Mercedes 2.0T engine: 245 PS = 180.2 kW
- Used for automotive technical specification comparison and performance evaluation

**Electric Vehicle Power:**
- Tesla Model 3: 283 PS = 208.1 kW
- BYD Han EV: 272 PS = 200.0 kW
- Facilitates power comparison between traditional fuel and electric vehicles

### Industrial Equipment Applications

**Motor Power Conversion:**
- Industrial fan: 75 PS = 55.2 kW
- Compressor motor: 200 PS = 147.1 kW
- Used for equipment selection and energy consumption calculation

**Power Generation Equipment:**
- Diesel generator: 500 PS = 367.8 kW
- Gas turbine: 10000 PS = 7355 kW
- Facilitates power generation capacity planning and load matching

### Agricultural Machinery Applications

**Tractor Power:**
- Small tractor: 40 PS = 29.4 kW
- Large tractor: 300 PS = 220.7 kW
- Used for agricultural machinery selection and operational efficiency assessment

**Harvesting Equipment:**
- Combine harvester: 180 PS = 132.4 kW
- Corn harvester: 250 PS = 183.9 kW
- Facilitates standardized power management of agricultural machinery

## Usage Recommendations

### Engineering Calculation Precision Control

**Conversion Precision Requirements:**
- Automotive engineering: Keep 1 decimal place, e.g., 150.0 PS = 110.3 kW
- Electrical engineering: Keep 2 decimal places, e.g., 100.00 PS = 73.55 kW
- Industrial equipment: Keep whole numbers, e.g., 200 PS = 147 kW

**Unit Standardization:**
- International standard: Prioritize kW as the power unit
- Technical documentation: Uniformly use SI unit system
- Equipment nameplate: Label both PS and kW for easy comparison

### Equipment Selection Applications

**Motor Selection:**
- Power matching: Select appropriate power rating based on load requirements
- Efficiency consideration: Consider motor efficiency impact on actual output power
- Safety factor: Reserve 10-20% power margin

**System Design:**
- Load calculation: Accurately calculate total system power requirements
- Electrical design: Design electrical systems based on kW values
- Thermal design: Design cooling solutions based on power density

### Energy Management Applications

**Energy Consumption Analysis:**
- Equipment power statistics: Uniformly use kW for energy consumption calculation
- Cost accounting: Calculate electricity costs based on kW·h
- Efficiency assessment: Compare power efficiency of different equipment

**Energy Saving Optimization:**
- Power monitoring: Real-time monitoring of equipment power consumption
- Load optimization: Reasonably distribute equipment loads to improve efficiency
- Equipment upgrade: Select more efficient equipment for replacement

## Frequently Asked Questions (FAQ)

### Q1: Why is kW the international standard power unit?
**A:** Reasons why kW is the international standard:
- **SI Unit System**: Kilowatt is the power unit in the International System of Units (SI)
- **Scientific Foundation**: Based on watt (W), named after physicist James Watt
- **Universal Applicability**: Widely adopted in global scientific and engineering fields
- **Calculation Convenience**: Perfect match with power systems and energy calculations

### Q2: How is the PS to kW conversion factor 0.7355 derived?
**A:** Physical derivation of the conversion factor:
- **PS Definition**: 1 PS = 75 kg·m/s = 735.5 W
- **kW Definition**: 1 kW = 1000 W
- **Conversion Relationship**: 735.5 ÷ 1000 = 0.7355
- **Precise Value**: 0.7355 kW/PS (international standard value)

### Q3: Why do electric vehicles more commonly use kW for power rating?
**A:** Reasons electric vehicles use kW:
- **Electrical System**: Electric vehicles are essentially electric drive systems
- **Charging Power**: Charging stations also use kW rating for consistency
- **International Trend**: Global electric vehicle industry standardization trend
- **Technical Precision**: kW is more suitable for precise expression of motor power

### Q4: How to verify the accuracy of PS to kW conversion?
**A:** Verification methods include:
- **Reverse Calculation**: kW × 1.3596 should equal the original PS value
- **Watt Verification**: PS × 735.5 = W, W ÷ 1000 = kW
- **Online Tools**: Use multiple conversion tools for cross-verification
- **Official Data**: Compare with manufacturer's official specifications

### Q5: What are the differences in power rating for different types of motors?
**A:** Motor power rating characteristics:
- **Rated Power**: Continuous output power of motor under rated conditions
- **Maximum Power**: Peak power the motor can achieve for short periods
- **Input Power**: Electrical power absorbed by motor from the grid
- **Output Power**: Actual mechanical power output at motor shaft

### Q6: How to consider power margin when selecting industrial equipment?
**A:** Power margin design principles:
- **Safety Factor**: Usually reserve 15-25% power margin
- **Starting Impact**: Consider power peaks during equipment startup
- **Load Variation**: Reserve power for load fluctuation response
- **Efficiency Degradation**: Consider efficiency decline due to equipment aging

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file,index) in Power" :key="index">
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