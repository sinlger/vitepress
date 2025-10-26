---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Centimeter-to-Foot-us
      linkText: Centimeter to Foot-us
head:
  - - meta
    - name: description
      content: "Centimeter to US foot converter - Professional length unit conversion tool. Supports conversion between centimeters, US feet, meters, inches and other units, providing accurate conversion formulas and practical conversion tables."
  - - meta
    - name: keywords
      content: "centimeter to US foot converter, length unit converter, unit conversion, centimeter conversion, US foot conversion, cm conversion, ft-us conversion, dimension converter, length conversion, centimeter and meter conversion, feet to centimeter conversion, inch centimeter, length unit conversion table, meter ruler, measuring ruler, online ruler measurement"
---
# Centimeter (cm) to US Foot (ft-us) Conversion

The centimeter to US foot converter is a professional length unit conversion tool that helps you quickly and accurately convert between centimeters (cm) and US feet (ft-us). This tool is widely used in construction engineering, manufacturing, international trade and other fields, supporting high-precision calculations and real-time conversion.

---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../files';
const seoKey = ['unit converter','unit conversion','length unit converter','length unit conversion','dimension conversion','length unit conversion','length unit conversion table','centimeter conversion','centimeter and meter conversion','meter centimeter decimeter millimeter conversion','cm and m conversion','what is cm','centimeter unit','cm conversion','centimeter and meter conversion formula','centimeter inch','how many meters in one centimeter','what unit is cm','what does cm mean','centimeter and meter','dimension converter','measuring ruler','meter ruler','length converter','centimeter conversion','one centimeter','what unit is cm','length conversion','online ruler measurement','feet to centimeter conversion','inch centimeter','dimension converter','length','decimeter','dimension conversion','scale ruler','centimeter to meter conversion','how many millimeters in one centimeter','length unit','millimeter and centimeter','inch','feet and centimeter conversion','foot','how many centimeters in one meter','length conversion','cm','dimension','how many centimeters in one cm','feet conversion','cm','length unit conversion','dimension conversion','inch conversion','mm','centimeter to inch conversion']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title: 'Centimeter to US Foot Conversion',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 0.032808
    form.result = `${form.number}cm = ${convertedValue.toFixed(5)}ft-us`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="Centimeter (cm)">
    <n-input-number v-model:value="form.number" placeholder="Enter centimeters" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>Convert</n-button>
  </n-form-item>
</n-form>

<n-card 
  :title="form.title"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## Common Conversion Formulas

### Centimeter to US Foot Conversion
- **1 centimeter = 0.032808 US foot**
- **1 US foot = 30.48 centimeters**

### Other Common Length Unit Conversions
- **Centimeter to meter**: 1cm = 0.01m
- **Centimeter to inch**: 1cm = 0.393701in
- **Centimeter to millimeter**: 1cm = 10mm
- **US foot to meter**: 1ft-us = 0.3048m
- **US foot to inch**: 1ft-us = 12in

## Length Unit Conversion Table

| Centimeter(cm) | US Foot(ft-us) | Meter(m) | Inch(in) | Millimeter(mm) |
|----------------|----------------|----------|----------|----------------|
| 10 | 0.32808 | 0.1 | 3.93701 | 100 |
| 30.48 | 1.00000 | 0.3048 | 12.0000 | 304.8 |
| 50 | 1.64042 | 0.5 | 19.6850 | 500 |
| 100 | 3.28084 | 1.0 | 39.3701 | 1000 |
| 500 | 16.4042 | 5.0 | 196.850 | 5000 |

## Practical Applications

Centimeter (cm) and US foot (ft-us) are commonly used units for measuring everyday object dimensions and medium distances, which are very important in the following real-world scenarios:

- **Construction and Engineering**:
  - During construction, building material dimensions are usually marked in centimeters, but overall structural dimensions may be measured in US feet.
  - Example: A building wall thickness of 20cm equals 0.65616ft-us.

- **Manufacturing**:
  - Precision mechanical parts dimensions are marked in centimeters, but equipment installation space may be measured in US feet.
  - Example: A mechanical part length of 30cm equals 0.98424ft-us.

- **Furniture Manufacturing**:
  - Furniture design drawings commonly use centimeters for detailed dimensions, but may need to be expressed in US feet for export markets.
  - Example: A table length of 120cm is 3.9370ft-us.

- **Education and Experiments**:
  - Students use centimeter rulers for measurements in laboratories, but reports may need to be expressed in US feet.
  - Example: A student measures a book thickness of 3cm, which equals 0.098424ft-us.

## Formula

The formula for converting from **centimeter (cm)** to **US foot (ft-us)** is:
$$ ft-us = cm \times 0.032808 $$

### Examples
- 100cm = 3.28080ft-us
- 50cm = 1.64040ft-us
- 10cm = 0.32808ft-us

## Frequently Asked Questions (FAQ)

### 1. What is the difference between US foot and international foot?
US foot (ft-us) and international foot (ft) are slightly different. 1 US foot = 30.48006096 centimeters, while 1 international foot = 30.48 centimeters. In most daily applications, this difference can be ignored.

### 2. What is the conversion formula between centimeter and US foot?
The conversion formula from centimeter to US foot is: US foot = centimeter × 0.032808
The conversion formula from US foot to centimeter is: centimeter = US foot × 30.48

### 3. When is US foot used?
US foot is mainly used in the construction, engineering, and real estate industries in the United States, and is also commonly used for measuring human height and room dimensions.

### 4. How to quickly estimate centimeter to US foot conversion?
You can remember: approximately 30.48 centimeters equals 1 US foot. Therefore, dividing centimeters by 30 gives you the approximate number of feet.

### 5. How to convert between centimeter, meter, foot, and inch?
- 1 meter = 100 centimeters
- 1 US foot = 30.48 centimeters = 12 inches
- 1 inch = 2.54 centimeters
- 1 millimeter = 0.1 centimeters

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Length" :key="index">
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