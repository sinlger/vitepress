---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: Home
  - - link: /Voltage/index
      linkText: Voltage Conversion
  - - link: /Voltage/index
      linkText: Voltage Unit Conversion
head:
  - - meta
    - name: description
      content: Professional voltage unit conversion tools and voltage knowledge platform. Provides accurate conversion between volts (V), millivolts (mV), and kilovolts (kV). Comprehensive guide covering what is voltage, relationship between current and voltage, phase voltage vs line voltage, voltage formulas, and electrical fundamentals. Includes voltage symbols, voltage units, power calculation formulas for electricians, electronic engineers, students, and voltage-related professionals.
  - - meta
    - name: keywords
      content: voltage unit conversion,voltage conversion,voltage unit converter,what is voltage,current and voltage relationship,phase voltage line voltage relationship,voltage formula,voltage symbol,line voltage phase voltage relationship,voltage current relationship,voltage units,power calculation formula current voltage,current voltage power calculation formula,voltage in english,voltage current power formula,nominal voltage,line voltage phase voltage,phase voltage line voltage difference,potential difference,voltage definition,phase voltage,line voltage,volt,line voltage phase voltage relationship,voltage english,voltage unit,phase voltage line voltage,potential,current,power,voltage
---
# Voltage Unit Conversion - Voltage Knowledge Guide & Application Manual

**Voltage** is a fundamental physical quantity in electrical engineering that represents the potential difference between two points in a circuit. This page provides professional voltage unit conversion tools and detailed explanations of voltage concepts, calculation formulas, and practical applications to help you understand voltage principles and correctly use voltage units.

---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Voltage } from '../files';
const convert = inject('convert')
const options =  [
  { label: 'Volts', value: 'V' },
  { label: 'Millivolts', value: 'mV' },
  { label: 'Kilovolts', value: 'kV' }
];
const seoKey = [
  'voltage unit conversion','voltage conversion','voltage unit converter','what is voltage','current and voltage relationship',
  'phase voltage line voltage relationship','voltage formula','voltage symbol','line voltage phase voltage relationship',
  'voltage current relationship','voltage units','power calculation formula current voltage','current voltage power calculation formula',
  'voltage in english','voltage current power formula','nominal voltage','line voltage phase voltage',
  'phase voltage line voltage difference','potential difference','voltage definition','phase voltage','line voltage',
  'volt','line voltage phase voltage relationship','voltage english','voltage unit','phase voltage line voltage',
  'potential','current','power','voltage'
]
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
  title:'Voltage Unit Conversion',
})
const convertHandler = (e) => {
   e.preventDefault;
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
<n-card embedded :bordered="false" hoverable style="margin-top: 16px;">
  <template #header>
    <div style="text-align:center;font-size:16px;color:#666;">
      {{form.title}}
    </div>
  </template>
  <div style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div style="text-align:center;font-size:12px;color:#999;">
      <span v-for="(keyword, index) in seoKey" :key="index">
        {{keyword}}<span v-if="index < seoKey.length - 1"> | </span>
      </span>
    </div>
  </template>
</n-card>

## Voltage Fundamentals

### 1. What is Voltage?

**Voltage**, also known as potential difference or electric potential difference, is a physical quantity that measures the difference in electrical potential energy between two points in a circuit. Simply put, voltage is the "driving force" that pushes electric current to flow.

**Voltage Definition:**
- **Physical Definition**: The work done by electric field force when a unit positive charge moves from one point to another
- **Mathematical Expression**: U = W/Q (Voltage = Work/Charge)
- **Voltage Symbol**: Usually represented by letter **U** or **V**
- **Voltage in English**: Voltage, abbreviated as V

### 2. Relationship Between Current and Voltage

**Ohm's Law** is the fundamental law describing the relationship between voltage, current, and resistance:

**Core Formula: U = I × R**
- **U**: Voltage (Volts, V)
- **I**: Current (Amperes, A)  
- **R**: Resistance (Ohms, Ω)

**Characteristics of Voltage and Current Relationship:**
- Voltage is the cause of current flow (voltage drives current flow)
- When resistance is fixed, voltage is proportional to current
- No voltage means no current (in a closed circuit)

### 3. Power Calculation Formulas (Current, Voltage)

**Electric Power** represents the rate at which electrical energy is consumed in a circuit, closely related to voltage and current:

**Basic Power Formulas:**
- **P = U × I** (Power = Voltage × Current)
- **P = U²/R** (Power = Voltage²/Resistance)
- **P = I²R** (Power = Current² × Resistance)

**Current Voltage Power Calculation Formula Applications:**
- Household appliance power calculation: P = 220V × I
- Battery-powered devices: P = Battery voltage × Operating current
- Motor power: P = √3 × U_line × I_line × cosφ (Three-phase motor)

### 4. Relationship Between Phase Voltage and Line Voltage

In three-phase power systems, there are two important voltage concepts:

**Phase Voltage:**
- Definition: Voltage between any phase and neutral point
- Symbol: Up or UΦ
- China's low voltage system: 220V

**Line Voltage:**
- Definition: Voltage between any two phases
- Symbol: Ul or UL
- China's low voltage system: 380V

**Relationship Between Line Voltage and Phase Voltage:**
- **Mathematical Relationship**: Ul = √3 × Up ≈ 1.732 × Up
- **Practical Application**: 380V = √3 × 220V
- **Difference Between Phase Voltage and Line Voltage**:
  - Phase voltage is used for single-phase loads
  - Line voltage is used for three-phase loads
  - Line voltage is √3 times larger than phase voltage

### 5. Voltage Unit Definition and Usage

The international standard unit for voltage is **Volt**, with symbol **V**. To represent different magnitudes of voltage, the following common units are also used:

#### 1. Volt (V) - Basic Unit
- **Definition**: The basic unit of voltage in the International System of Units
- **Named After**: Italian physicist Alessandro Volta
- **Application Range**:
  - Household appliances: 220V (China), 110V (USA)
  - Car battery: 12V
  - Mobile phone battery: 3.7V
  - USB charging: 5V

#### 2. Millivolt (mV) - One Thousandth of a Volt
- **Conversion**: 1V = 1000mV
- **Application Scenarios**:
  - Sensor signals: Usually tens to hundreds of millivolts
  - Audio signals: Microphone output about 1-10mV
  - Bioelectric signals: Electrocardiogram (ECG) about 1mV
  - Precision measuring instruments' small signals

#### 3. Kilovolt (kV) - One Thousand Volts
- **Conversion**: 1kV = 1000V
- **Application Fields**:
  - High voltage transmission lines: 110kV, 220kV, 500kV
  - Substation equipment: 35kV, 10kV
  - X-ray equipment: Tens to hundreds of kV
  - Power system distribution: 6kV, 10kV

### 6. Voltage Unit Conversion Relationships

**Voltage units** follow the International System of Units, with the basic unit being volt (V), and other units are multiples or fractions of volts:

**Common Voltage Units and Conversions:**

| Unit Name | Symbol | Relationship to Volt | Application Scenarios |
|-----------|--------|---------------------|----------------------|
| Kilovolt | kV | 1kV = 1,000V | High voltage transmission, substations |
| Volt | V | Basic unit | Household appliances, batteries |
| Millivolt | mV | 1mV = 0.001V | Sensors, audio signals |
| Microvolt | μV | 1μV = 0.000001V | Weak signals, bioelectricity |

**Detailed Conversion Formulas:**

| Conversion Direction | Formula | Calculation Example | Practical Application |
|---------------------|---------|-------------------|----------------------|
| kV→V | V = kV × 1000 | 10kV = 10,000V | High voltage line voltage |
| V→mV | mV = V × 1000 | 5V = 5,000mV | Electronic circuit design |
| mV→μV | μV = mV × 1000 | 2mV = 2,000μV | Precision measurement |
| **Reverse Conversion** | | | |
| mV→V | V = mV ÷ 1000 | 1500mV = 1.5V | Battery voltage |
| V→kV | kV = V ÷ 1000 | 6600V = 6.6kV | Distribution voltage |
| μV→mV | mV = μV ÷ 1000 | 5000μV = 5mV | Signal processing |

**Quick Memory Methods:**
- **Upward conversion** (large unit→small unit): Multiply by 1000
- **Downward conversion** (small unit→large unit): Divide by 1000
- **Mnemonic**: "Thousand-base conversion, large to small multiply by thousand, small to large divide by thousand"

### 7. Practical Applications and Safety Knowledge

#### 7.1 Nominal Voltage and Practical Applications

**Nominal voltage** is the rated operating voltage of equipment or systems, while actual voltage may fluctuate within certain ranges:

**Common Nominal Voltages:**
- **1.5V**: Dry batteries (AA, AAA)
- **3.7V**: Lithium battery nominal voltage
- **5V**: USB power supply standard
- **12V**: Car battery, LED strips
- **24V**: Industrial control systems
- **220V**: China household single-phase voltage
- **380V**: China industrial three-phase voltage

#### 7.2 Safety Voltage Classification

According to International Electrotechnical Commission (IEC) standards:

| Voltage Level | Voltage Range | Safety Level | Application Scenarios |
|---------------|---------------|--------------|----------------------|
| Safety Extra Low Voltage | ≤42V DC, ≤30V AC | Safe contact | Handheld tools, toys |
| Low Voltage | 50V~1000V AC | Requires protection | Household appliances, industrial equipment |
| High Voltage | 1kV~35kV | Professional operation | Distribution systems, factory power supply |
| Extra High Voltage | 35kV~800kV | Strict protection | Transmission lines, substations |

#### 7.3 Practical Applications of Potential Difference

**Potential difference** is the physical essence of voltage, manifested in practical applications as:

- **Batteries**: Chemical energy converted to potential difference
- **Generators**: Mechanical energy converted to potential difference
- **Solar cells**: Light energy converted to potential difference
- **Sensors**: Physical quantity changes generate potential difference

#### 7.4 Engineering Application Considerations

**Measurement Considerations:**
- Select appropriate range multimeter
- Pay attention to AC/DC voltage differences
- High voltage measurement requires specialized equipment and protection

**Design Considerations:**
- Consider voltage fluctuation range (typically ±10%)
- Reserve safety margin
- Pay attention to voltage level matching

**Common Misconceptions Corrected:**
- ❌ Wrong: 1MV = 0.001V → ✅ Correct: 1MV = 1,000,000V
- ❌ Wrong: kV and kVA are the same → ✅ Correct: kV is voltage unit, kVA is apparent power unit
- ❌ Wrong: Higher voltage means higher power → ✅ Correct: Power = Voltage × Current

### 8. Voltage Knowledge FAQ

#### Q1: Why do different countries have different household voltages?
**A:** Due to historical reasons and different technological development paths:
- **USA/Japan**: 110V-120V (early technical standards)
- **China/Europe**: 220V-240V (higher transmission efficiency)
- **Industrial power**: Most countries use 380V-400V three-phase power

#### Q2: Which is more dangerous, voltage or current?
**A:** Both are important, but **current is the lethal factor**:
- **Safe current**: ≤10mA (human perception threshold)
- **Dangerous current**: Above 30mA (potentially lethal)
- **Voltage role**: Overcomes human body resistance to generate current
- **Key formula**: I = U/R (Ohm's law)

#### Q3: Why is phone charger output 5V?
**A:** USB standard specifications:
- **5V**: Sufficient to drive digital circuits
- **Safety**: Belongs to safety extra low voltage
- **Compatibility**: International universal standard
- **Efficiency**: Suitable for switching power supply conversion

#### Q4: What's the difference between phase voltage and line voltage?
**A:** Two types of voltage in three-phase electrical systems:
- **Phase voltage**: Voltage between any phase line and neutral line (220V)
- **Line voltage**: Voltage between any two phase lines (380V)
- **Relationship**: Line voltage = √3 × Phase voltage ≈ 1.732 × Phase voltage

#### Q5: Why does battery voltage drop?
**A:** Multiple reasons:
- **Increased internal resistance**: Battery aging, internal impedance rises
- **Capacity degradation**: Chemical active substances decrease
- **Temperature effects**: Battery performance drops at low temperatures
- **Load effects**: Voltage drops during high current discharge

#### Q6: How to choose appropriate voltage level?
**A:** Based on application requirements:
- **Power requirements**: P = U × I, high power can choose high voltage
- **Safety requirements**: Choose safe voltage for personnel contact
- **Transmission distance**: Choose high voltage for long-distance transmission
- **Cost considerations**: Balance equipment cost and operating cost

### 9. Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Voltage" :key="index">
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