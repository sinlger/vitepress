---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-us-to-Nautical-mile
      linkText: US Foot to Nautical Mile
head:
  - - meta
    - name: description
      content: US Foot to Nautical Mile Converter — Convert US foot (ft US) to nautical mile (nmi) with accurate formulas and tables. Useful in maritime navigation and aviation.
  - - meta
    - name: keywords
      content: us foot to nautical mile, foot-us to nmi, ft us to nmi, survey foot, length converter, unit conversion, maritime units, navigation, aviation
---

# US Foot (ft US) to Nautical Mile (nmi) Conversion

Convert US feet to nautical miles quickly and accurately. 1 nautical mile = 1852 meters; 1 ft US = 1200/3937 meters. This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','US foot to nautical mile','maritime units','navigation','aviation','measurement conversion'
]
const form = reactive({ title: 'US Foot to Nautical Mile Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value && form.value !== 0) return (form.result = 'Please enter a valid number.')
  const factor = 0.3048006096 / 1852
  form.result = `${form.value} ft US = ${(form.value * factor).toFixed(9)} nmi`
}
</script>

<n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
  <n-gi>
    <n-card :hoverable="true" :bordered="false" size="huge" :title="form.title">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging" :style="{ maxWidth: '640px' }">
        <n-form-item label="US Foot (ft US)">
          <n-input-number v-model:value="form.value" clearable placeholder="Enter US feet" />
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
          SEO: US foot to nautical mile keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 nmi = 1852 m (exact, international)</p>
          <p>1 ft US = 1200/3937 m ≈ 0.3048006096 m</p>
          <p>1 ft US ≈ 0.000164579 nmi</p>
          <p>Related conversions: foot-us to mile, foot-us to fathom, foot-us to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft US ≈ 0.000164579 nmi</p>
          <p>≈ 6076.114 ft US = 1 nmi</p>
          <p>≈ 12152.228 ft US = 2 nmi</p>
          <p>≈ 30380.57 ft US = 5 nmi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Nautical miles are commonly used in maritime and aviation navigation for long-distance measurement; US feet are used for elevation, runway length, and survey dimensions. This conversion helps bridge daily survey measurements and professional navigation units.
          </p>
          <p>
            • Aviation: Convert altitude changes (ft US) to route planning in nautical miles.
          </p>
            <p>
            • Maritime: Convert port construction measurements (ft US) to nautical miles for route planning.
          </p>
          <p>
            • Navigation: Convert radar range or sight distance from US feet to nautical miles.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>nmi = ft US × (0.3048006096 ÷ 1852)</p>
          <p>Example: 12152.228 ft US ≈ 12152.228 × (0.3048006096 ÷ 1852) ≈ 2 nmi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is a nautical mile?</p>
          <p>A: A unit used in navigation, defined as exactly 1852 meters.</p>
          <p>Q: Why use US foot here?</p>
          <p>A: US foot is a legacy survey unit (exactly 1200/3937 m). Using the meter definition keeps conversions consistent across systems.</p>
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