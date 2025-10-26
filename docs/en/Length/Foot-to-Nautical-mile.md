---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-to-Nautical-mile
      linkText: Foot to Nautical Mile
head:
  - - meta
    - name: description
      content: Foot to Nautical Mile Converter — Convert foot (ft) to nautical mile (nmi) with accurate formulas and tables. Useful in maritime navigation and aviation.
  - - meta
    - name: keywords
      content: foot to nautical mile, ft to nmi, length converter, unit conversion, maritime units, navigation, aviation, measurement conversion
---

# Foot (ft) to Nautical Mile (nmi) Conversion

Convert feet to nautical miles quickly and accurately. 1 nautical mile = 6076.11549 feet (international definition). This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','Foot to nautical mile','maritime units','navigation','aviation','measurement conversion'
]
const form = reactive({ title: 'Foot to Nautical Mile Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} ft = ${(form.value / 6076.11549).toFixed(6)} nmi`
}
</script>

<n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
  <n-gi>
    <n-card :hoverable="true" :bordered="false" size="huge" :title="form.title">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging" :style="{ maxWidth: '640px' }">
        <n-form-item label="Foot (ft)">
          <n-input-number v-model:value="form.value" clearable placeholder="Enter feet" />
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
          SEO: Foot to nautical mile keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 nmi = 6076.11549 ft</p>
          <p>1 ft ≈ 0.000164579 nmi</p>
          <p>Related conversions: foot to mile, foot to fathom, foot to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft ≈ 0.000165 nmi</p>
          <p>6076.11549 ft = 1 nmi</p>
          <p>12152.23098 ft = 2 nmi</p>
          <p>30380.57745 ft = 5 nmi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Nautical miles are commonly used in maritime and aviation navigation for long-distance measurement; feet are used for elevation, runway length, and engineering dimensions. This conversion helps bridge daily measurements and professional navigation units.
          </p>
          <p>
            • Aviation: Convert altitude changes (ft) to route planning in nautical miles.
          </p>
          <p>
            • Maritime: Convert port construction measurements (ft) to nautical miles for route planning.
          </p>
          <p>
            • Navigation: Convert radar range or sight distance from feet to nautical miles.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>nmi = ft ÷ 6076.11549</p>
          <p>Example: 12152.23098 ft = 12152.23098 ÷ 6076.11549 = 2 nmi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is a nautical mile?</p>
          <p>A: A unit used in navigation, defined as exactly 1852 meters. Internationally, 1 nmi ≈ 6076.11549 ft.</p>
          <p>Q: How to convert ft to nmi?</p>
          <p>A: nmi = ft ÷ 6076.11549. This is the standard international conversion.</p>
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