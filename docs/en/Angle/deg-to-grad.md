---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /en/
      linkText: Home

  - - link: /en/Angle/index
      linkText: Angle Conversion
  - - link: /en/Angle/deg-to-grad
      linkText: Degrees (°) to Gradians (grad) Conversion
head:
  - - meta
    - name: description
      content: "Professional degrees (°) to gradians (grad) conversion tool supporting angle unit conversion and centesimal degree calculations. Ideal for engineering surveying, military navigation, European measurement systems with precise angle conversion formulas and practical guides."
  - - meta
    - name: keywords
      content: "angle conversion,degrees to gradians,angle unit conversion,centesimal degrees,gradian calculator,angle conversion,angle units,grad units,angle symbols,angle calculation,angle english"
---
# Degrees (°) to Gradians (grad) Conversion

Degrees to gradians conversion is an important transformation in angle measurement, widely used in engineering surveying, military navigation, European measurement systems, and scientific computing. This tool provides precise degrees to gradians conversion, supporting angle unit conversion and centesimal degree calculation needs.
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Angle } from '../../files';
const convert = inject('convert')
const seoKey = [
  'angle conversion', 'degree minute second', 'angle unit conversion', 'angle conversion degree minute second', 'gradians and degrees',
  'angle conversion', 'angle units', 'slope angle', 'gradian calculation', 'gradians and degrees',
  'degree units', 'angle degree minute second conversion', 'grad and ° conversion', 'angle units', 'angle minutes',
  'angle english', 'angle conversion', 'grad units', 'angle units', 'angle symbols',
  'angle calculation', 'angle conversion', 'angle units', 'centesimal degree calculator', 'angle conversion',
  'degrees', 'angle english', 'degree minute second', 'angle calculator', 'gradian to degree',
  'angle symbols', 'deg', 'degrees', 'grad', 'gradians', 'centesimal degrees'
]

const form = reactive({
  number: null,
  result: '',
  title: 'Degrees to Gradians Converter'
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 200 / 180
    form.result = `${form.number}° = ${convertedValue.toFixed(4)}grad`
  } else {
    form.result = 'Please enter a valid number.'
  }
}
</script>

<n-card :title="form.title" class="converter-card">
  <n-form size="large" :model="form">
    <n-form-item label="Degrees (°)">
      <n-input-number v-model:value="form.number" placeholder="Enter degrees" style="width: 100%" />
    </n-form-item>
    <n-form-item>
      <n-button type="info" @click="convertHandler" block>Convert</n-button>
    </n-form-item>
  </n-form>

  <n-card  embedded :bordered="false" hoverable>
    <div  style="text-align:center;font-size:20px;">
      <strong>{{form.result}}</strong>
    </div>
  </n-card>
  
  <template #footer>
    <div class="seo-keywords">
      <span v-for="(keyword, index) in seoKey" :key="index" class="keyword-tag">
        {{ keyword }}
      </span>
    </div>
  </template>
</n-card>

## Conversion Formula

The conversion formula from degrees to gradians is:

**Gradians = Degrees × (200/180) = Degrees × (10/9)**

Precise conversion coefficients:
- 1 degree = 10/9 gradians ≈ 1.1111 gradians
- 1 gradian = 9/10 degrees = 0.9 degrees

Because:
- One complete circle = 360 degrees = 400 gradians
- Right angle = 90 degrees = 100 gradians
- Therefore 1 degree = 400/360 gradians = 10/9 gradians

Mathematical expression:
$$ grad = ° \times \frac{200}{180} = ° \times \frac{10}{9} $$

## Degrees to Gradians Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely used in geometry, physics, and computer graphics. This article will introduce how to convert degrees (°) to gradians (grad) and provide some practical examples.

### Why Do We Need ° to grad Conversion?

Degrees and gradians are two commonly used angle units. Among them, gradians are more commonly used in engineering calculations because their decimal system simplifies slope calculations. Through precise conversion, we can ensure consistency and accuracy in calculations.

### ° to grad Conversion Method

The conversion formula from degrees to gradians is:

- **Formula:** `grad = ° × 200 ÷ 180`

## Practical Application Examples

### Common Degree Value Conversions
- 0 degrees = 0 gradians
- 9 degrees = 10 gradians
- 18 degrees = 20 gradians
- 30 degrees = 33.3333 gradians
- 45 degrees = 50 gradians
- 90 degrees = 100 gradians
- 135 degrees = 150 gradians
- 180 degrees = 200 gradians
- 270 degrees = 300 gradians
- 360 degrees = 400 gradians

### Typical Values in Engineering Surveying
- Building slope 1%: approximately 0.57 degrees = 0.64 gradians
- Road slope 5%: approximately 2.86 degrees = 3.18 gradians
- Roof slope 30 degrees: 30 degrees = 33.33 gradians
- Stair slope 35 degrees: 35 degrees = 38.89 gradians
- Mountain slope 45 degrees: 45 degrees = 50 gradians

## Practical Application Scenarios

### Engineering Surveying
- **Construction engineering**: Precise measurement of building slopes and angles
- **Road design**: Calculation of road gradients and turning angles
- **Hydraulic engineering**: Channel slope and water flow angle design
- **Bridge engineering**: Bridge angle design and construction control

### Military Navigation
- **Artillery aiming**: Precise calculation of artillery firing angles
- **Missile guidance**: Missile flight trajectory angle control
- **Radar systems**: Radar scanning angles and target positioning
- **Military maps**: Angle notation in military maps

### European Measurement Systems
- **Geodetic surveying**: Traditional angle measurement standards in European countries
- **Topographic surveying**: Angle representation in topographic map production
- **Engineering standards**: Angle specifications in European engineering standards
- **Scientific research**: Angle calculations in European research institutions

### Scientific Computing
- **Mathematical modeling**: Angle calculations in geometric models
- **Physics experiments**: Angle measurements in physics experiments
- **Computer graphics**: Angle conversions in 3D modeling
- **Mechanical design**: Angle specification representation for mechanical parts

## Frequently Asked Questions (FAQ)

### Q1: Are gradians (grad) and centesimal degrees the same concept?
A: Yes, gradians (grad) are also called centesimal degrees or new degrees, which is a decimal angle unit. A complete circle is divided into 400 gradians, with a right angle being 100 gradians, making calculations more convenient.

### Q2: Why use gradians instead of degrees?
A: The advantages of gradians include:
- Decimal system, making calculations simpler
- Right angle is exactly 100 gradians, easy to remember
- Provides more intuitive angle representation in engineering and military applications
- Traditional measurement standard in some European countries

### Q3: In which countries or regions are gradians commonly used?
A: Mainly used in the following regions:
- **European countries**: Traditional measurements in France, Germany, and other European countries
- **Military field**: Angle units in NATO military standards
- **Engineering surveying**: Some European engineering standards
- **Scientific research**: Some European research institutions

### Q4: How to quickly estimate degrees to gradians conversion?
A: Remember basic conversions:
- 90 degrees = 100 gradians (right angle)
- 180 degrees = 200 gradians (straight angle)
- 360 degrees = 400 gradians (full angle)
- 9 degrees = 10 gradians (basic ratio)
- For any degrees, multiply by 10/9

### Q5: Do gradians still have applications in modern engineering?
A: Yes, main applications include:
- **Military engineering**: Artillery aiming and missile guidance systems
- **Surveying instruments**: Some European-manufactured surveying equipment
- **Engineering software**: CAD software supporting multiple angle units
- **International standards**: Alternative units in some international engineering standards

### Q6: Comparison of gradians with other angle units?
A: Characteristics of various angle units:
- **Degrees**: Most commonly used, 360-degree system, easy to understand
- **Radians**: Most natural for mathematical calculations, 2π radian system
- **Gradians**: Decimal system, 400-gradian system, convenient for calculations
- **Arc minutes and seconds**: High-precision measurements, 60-base subdivision

### Summary

Mastering degrees to gradians conversion is an important skill for understanding different angle measurement systems. Gradians, as a decimal angle unit, have unique advantages in specific fields such as engineering surveying and military navigation. By understanding conversion principles and practical application scenarios, you can better use these angle units for professional calculations and measurements. We hope this guide provides valuable reference for you.

## Related Links
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Angle" :key="index">
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