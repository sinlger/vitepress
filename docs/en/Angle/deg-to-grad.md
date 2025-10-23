---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home

  - - link: /Angle/index
      linkText: Angle Conversion
  - - link: /Angle/deg-to-grad
      linkText: Degrees (°) to Gradians (grad) Conversion
head:
  - - meta
    - name: description
      content: "Professional degrees (°) to gradians (grad) conversion tool, supporting angle unit conversion and centesimal degree calculations. Suitable for engineering surveying, military navigation, European measurement systems and other scenarios, providing precise angle conversion formulas and practical guides."
  - - meta
    - name: keywords
      content: "angle conversion, degrees to gradians, angle unit conversion, centesimal degree, gradian calculator, radians to degrees, angle conversion, angle units, grad units, angle symbols, angle calculation, angle English"
---
# Degrees (°) to Gradians (grad) Conversion

Degrees to gradians conversion is an important transformation in angle measurement, widely used in engineering surveying, military navigation, European measurement systems, and scientific computing. This tool provides precise degrees to gradians conversion, supporting angle unit conversion and centesimal degree calculation needs.
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Angle } from '../files';
const convert = inject('convert')
const seoKey = [
  'angle conversion', 'degree minute second', 'angle unit conversion', 'degree minute second conversion', 'gradians and degrees',
  'angle conversion', 'angle units', 'gradient angle', 'radian calculation', 'radian and angle',
  'degree units', 'degree minute second conversion', 'rad and ° conversion', 'angle units', 'arcminute',
  'angle English', 'angle conversion', 'grad units', 'angle units', 'angle symbols',
  'angle calculation', 'angle conversion', 'angle units', 'centesimal degree calculator', 'angle conversion',
  'degrees', 'angle English', 'degree minute second', 'angle calculator', 'radian to degree',
  'angle symbols', 'deg', 'degree', 'grad', 'gradians', 'centesimal degree'
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
</n-card>

## Conversion Formula

The conversion formula from degrees to gradians is:

**Gradians = Degrees × (200/180) = Degrees × (10/9)**

Precise conversion factors:
- 1 degree = 10/9 gradians ≈ 1.1111 gradians
- 1 gradian = 9/10 degrees = 0.9 degrees

Because:
- A complete circle = 360 degrees = 400 gradians
- A right angle = 90 degrees = 100 gradians
- Therefore 1 degree = 400/360 gradians = 10/9 gradians

Mathematical expression:
$$ grad = deg \times \frac{10}{9} $$

## Degrees to Gradians Conversion Guide

Angle measurement is one of the fundamental concepts in mathematics and engineering, especially widely applied in geometry, physics, and computer graphics. This article will introduce how to convert degrees (°) to gradians (grad) and provide some practical examples.

### Why is ° to grad conversion needed?

Degrees and gradians are two commonly used angle units. Among them, gradians are more commonly used in engineering calculations because their decimal system simplifies slope calculations. Through precise conversion, calculation consistency and accuracy can be ensured.

### ° to grad conversion method

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
- **Building Engineering**: Precise measurement of building slopes and angles
- **Road Design**: Calculation of road slopes and turning angles
- **Water Conservancy Engineering**: Channel slope and water flow angle design
- **Bridge Engineering**: Bridge angle design and construction control

### Military Navigation
- **Artillery Aiming**: Precise calculation of artillery firing angles
- **Missile Guidance**: Missile flight trajectory angle control
- **Radar Systems**: Radar scanning angles and target positioning
- **Military Maps**: Angle annotation in military maps

### European Measurement Systems
- **Geodetic Surveying**: Traditional angle measurement standards in European countries
- **Topographic Surveying**: Angle representation in topographic map creation
- **Engineering Standards**: Angle specifications in European engineering standards
- **Scientific Research**: Angle calculations in European research institutions

### Scientific Computing
- **Mathematical Modeling**: Angle calculations in geometric models
- **Physics Experiments**: Angle measurements in physics experiments
- **Computer Graphics**: Angle conversions in 3D modeling
- **Mechanical Design**: Representation of mechanical component angle specifications

## Frequently Asked Questions (FAQ)

### Q1: Are gradians (grad) and centesimal degrees the same concept?
A: Yes, gradians (grad) are also called centesimal degrees or new degrees, which is a decimal angle unit. A complete circle is divided into 400 gradians, with a right angle being 100 gradians, making calculations more convenient.

### Q2: Why use gradians instead of degrees?
A: The advantages of gradians include:
- Decimal system, making calculations more convenient
- A right angle is exactly 100 gradians, easy to remember
- Provides more intuitive angle representation in engineering and military applications
- Traditional measurement standard in some European countries

### Q3: In which countries or regions are gradians commonly used?
A: Mainly used in the following regions:
- **European countries**: Traditional measurements in France, Germany and other European countries
- **Military field**: Angle units in NATO military standards
- **Engineering surveying**: Some European engineering standards
- **Scientific research**: Some European research institutions

### Q4: How to quickly estimate degrees to gradians conversion?
A: Remember basic conversions:
- 90 degrees = 100 gradians (right angle)
- 180 degrees = 200 gradians (straight angle)
- 360 degrees = 400 gradians (full angle)
- 9 degrees = 10 gradians (basic ratio)
- For any degree value, multiply by 10/9

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
- **Arcminutes and arcseconds**: High-precision measurements, base-60 subdivisions

### Summary

Mastering degrees to gradians conversion is an important skill for understanding different angle measurement systems. Gradians, as a decimal angle unit, have unique advantages in engineering surveying, military navigation and other specific fields. By understanding conversion principles and practical application scenarios, these angle units can be better utilized for professional calculations and measurements. We hope this guide provides valuable reference for you.

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