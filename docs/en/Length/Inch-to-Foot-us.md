---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Inch-to-Foot-us
      linkText: Inch to US Foot
head:
  - - meta
    - name: description
      content: Inch to US Foot Converter — Convert inch (in) to US foot (ft US) with accurate formulas and tables. Suitable for engineering and construction.
  - - meta
    - name: keywords
      content: inch to US foot, in to ft US, US foot, inch to foot, imperial units, length conversion, unit converter, measurement
---

# Inch (in) to US Foot (ft US) Conversion

Convert inches to US feet quickly and accurately. 1 US foot = 12 inches. This page offers formulas, examples, tables, and FAQs to help you use inch-to-foot conversions in real scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','inch to US foot','in to ft US','imperial units','measurement','construction','engineering'
]
const form = reactive({ title: 'Inch to US Foot Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value && form.value !== 0) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} in = ${(form.value / 12).toFixed(6)} ft (US)`
}
</script>

<n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
  <n-gi>
    <n-card :hoverable="true" :bordered="false" size="huge" :title="form.title">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging" :style="{ maxWidth: '640px' }">
        <n-form-item label="Inch (in)">
          <n-input-number v-model:value="form.value" clearable placeholder="Enter inches" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="convertHandler">Convert</n-button>
        </n-form-item>
        <n-form-item label="Result">
          <n-tag type="success">{{ form.result }}</n-tag>
        </n-form-item>
      </n-form>
      <template #footer>
        <div style="display: inline-block">
          SEO: Inch to US foot keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 ft (US) = 12 in</p>
          <p>1 in = 0.083333 ft (US)</p>
          <p>Related: inch to foot, inch to yard, inch to mile</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>6 in = 0.5 ft (US)</p>
          <p>12 in = 1 ft (US)</p>
          <p>36 in = 3 ft (US)</p>
          <p>60 in = 5 ft (US)</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Inch and US foot are widely used in construction, furniture manufacturing, and interior design. Use this conversion to standardize measurements across teams.
          </p>
          <p>
            • Construction: Convert detailed component sizes from inches to feet for building plans.
          </p>
          <p>
            • Engineering: Convert machine part dimensions from in to ft (US).
          </p>
          <p>
            • Interior design: Convert furniture sizes from inches to US feet.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>ft (US) = in ÷ 12</p>
          <p>Example: 18 in = 18 ÷ 12 = 1.5 ft (US)</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is US foot?</p>
          <p>A: A foot defined for US survey measurements (exactly 1200/3937 meters, ≈0.3048006 m). For most everyday uses, foot and US foot are treated the same.
          </p>
          <p>Q: How to convert in to ft (US)?</p>
          <p>A: ft (US) = in ÷ 12.</p>
        </n-card>
      </n-gi>
    </n-grid>
  </n-gi>
</n-grid>

<n-grid cols="1 200:2 600:3 800:4 1200:5" x-gap="20" y-gap="20">
  <n-gi v-for="(item, index) in Length" :key="index">
    <n-card :title="item.title" :bordered="false" :hoverable="true">
      <ul style="padding-left: 20px">
        <li v-for="(list, key) in item.list" :key="key"><a :href="list.link">{{ list.title }}</a></li>
      </ul>
    </n-card>
  </n-gi>
</n-grid>