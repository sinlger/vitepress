---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Energy/index
      linkText: Energy and Power Unit Converter
  - - link: /Energy/index
      linkText: Energy and Power Unit Converter
head:
  - - meta
    - name: description
      content: Energy and power unit conversion guide, covering detailed conversion formulas and explanations for Joule (J), Kilojoule (kJ), Megajoule (MJ), Gigajoule (GJ), Watt-second (Ws), Watt-meter (Wm), Watt-hour (Wh), Milliwatt-hour (mWh), Kilowatt-hour (kWh), Megawatt-hour (MWh), Gigawatt-hour (GWh).
  - - meta
    - name: keywords
      content: energy, power, unit conversion, joule, kilojoule, megajoule, gigajoule, watt-second, watt-meter, watt-hour, milliwatt-hour, kilowatt-hour, megawatt-hour, gigawatt-hour, conversion formula, energy and power unit conversion guide
---

# Energy and Power Unit Converter
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Force } from '../files';
const convert = inject('convert')
const options =  [
  { "label": "Joule (J)", "value": "J" },
  { "label": "Kilojoule (kJ)", "value": "kJ" },
  { "label": "Megajoule (MJ)", "value": "MJ" },
  { "label": "Gigajoule (GJ)", "value": "GJ" },
  { "label": "Watt-second (Ws)", "value": "Ws" },
  { "label": "Watt-meter (Wm)", "value": "Wm" },
  { "label": "Watt-hour (Wh)", "value": "Wh" },
  { "label": "Milliwatt-hour (mWh)", "value": "mWh" },
  { "label": "Kilowatt-hour (kWh)", "value": "kWh" },
  { "label": "Megawatt-hour (MWh)", "value": "MWh" },
  { "label": "Gigawatt-hour (GWh)", "value": "GWh" }
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
  title:'Energy Unit Converter',
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


## I. Energy Unit Conversion Table

| Unit       | Equivalent Value      | Common Application Scenarios |
|------------|-----------------------|-----------------------------|
| Ws         | 1 Watt-second         | Instantaneous power consumption measurement |
| Wm         | 0.06 Joule (J)        | Research micro devices       |
| Wh         | 3.6×10³ Joule (J)     | Household appliance energy consumption |
| mWh        | 3.6 Joule (J)         | Small battery capacity (e.g., Bluetooth earphones) |
| kWh        | 3.6×10⁶ Joule (J)=1000Wh | Household electricity metering (1 kWh) |
| MWh        | 3.6×10⁹ Joule (J)=1000kWh | Medium-scale energy storage stations, central air conditioning system metering |
| GWh        | 3.6×10¹² Joule (J)=1000MWh | Large battery factory annual capacity (approximately for 100,000-300,000 vehicles) |
| J          | International standard unit | Basic physics calculations   |
| kJ         | 1000 Joule (J)        | Food calorie labeling        |
| MJ         | 10⁶ Joule (J)         | Automotive fuel energy value |
| GJ         | 10⁹ Joule (J)≈278kWh  | District heating/industrial energy metering |

**Key Conversion Formulas:**
- 1kWh = 3.6×10⁶J
- 1GJ = 10⁹J ≈ 278kWh
- **Battery Energy (Wh) = Capacity (Ah) × Voltage (V)** 

## II. Educational Explanation: Why Do We Need Multiple Energy Units?

### 1. Scenario-Driven Unit Differentiation

**Micro to Macro Scale**

- Milliwatt-hours (mWh) are used for micro devices like button batteries (e.g., smartwatches), while gigawatt-hours (GWh) describe Tesla's Gigafactory annual capacity.
- Joule (J) as an international unit is suitable for precise laboratory calculations, but daily life requires more intuitive units (like "kWh").

**Industry Convention Differences**

- **Power Industry**: Uses kWh as the billing basis, with power generation often measured in hundreds of millions of kWh (e.g., Sichuan's annual power generation of 432.95 billion kWh ≈ 43.3TWh).
- **HVAC**: Heating and cooling meters commonly use GJ to measure central air conditioning system energy consumption (1GJ ≈ 278kWh).
- **Battery Field**:
  - mAh represents charge capacity (needs × voltage to convert to energy)
  - Wh/mWh directly represents energy value

**💡 Beware of False Advertising:** Some merchants use 11500mWh instead of 3100mAh to inflate numbers (calculated at 3.7V).

### 2. Typical Problems with Unit Confusion

**Battery Purchase Misconceptions:**
- "20000mAh power bank = 1 kWh"? Wrong! Calculated at 3.7V voltage, it's actually only 74Wh (0.074 kWh).

**Energy Report Misinterpretation:**
- "Energy storage station capacity 1GWh" ≠ "Power generation 1GW", the latter is a power unit (1GW continuous power supply for 1 hour = 1GWh).

### 3. Future Trends: The Era of TWh

With global electrification and renewable energy storage demands, terawatt-hours (TWh=10¹²Wh) are becoming the new benchmark for energy strategy:
- 1TWh ≈ 1000GWh, can meet the annual electricity needs of 5 million electric vehicles.
- Equivalent to 1 trillion yuan in output value (estimated at 1 yuan/Wh cost).

### Summary and Recommendations

- **Daily Electricity Use:** Focus on kWh, reduce standby power consumption.
- **Battery Purchase:** Look for Wh/mWh rather than mAh, avoid false advertising.
- **Industry Reports:** Pay attention to the essential difference between GWh/TWh and GW (energy vs power).

Units are the key to understanding the energy world, clear conversion can penetrate the data fog 🌟
