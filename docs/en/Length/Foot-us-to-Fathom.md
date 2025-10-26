---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-us-to-Fathom
      linkText: US Foot to Fathom
head:
  - - meta
    - name: description
      content: US Foot to Fathom Converter — Convert US foot (ft US) to fathom with accurate formulas and tables. Useful in surveying, marine measurement, and diving operations.
  - - meta
    - name: keywords
      content: us foot to fathom, foot-us to fathom, ft us to fathom, survey foot, length converter, unit conversion, marine units, diving, navigation
---

# US Foot (ft US) to Fathom Conversion

Convert US feet to fathoms quickly and accurately. 1 fathom = 6 feet. This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','US foot','Survey foot','Foot-us to fathom','marine units','diving','navigation','measurement conversion'
]
const form = reactive({ title: 'US Foot to Fathom Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value && form.value !== 0) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} ft US = ${(form.value * 0.166667).toFixed(6)} fathom`
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
          SEO: US foot to fathom keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 fathom = 6 ft (US or international)</p>
          <p>1 ft US = 0.166667 fathom</p>
          <p>Related conversions: foot-us to mile, foot-us to nautical mile, foot-us to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft US = 0.166667 fathom</p>
          <p>6 ft US = 1 fathom</p>
          <p>12 ft US = 2 fathoms</p>
          <p>30 ft US = 5 fathoms</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            US foot (survey foot) is used in land surveying and legacy engineering drawings; fathom is used for water depth and rope length in maritime operations. This conversion helps when switching between land-based survey units and maritime units.
          </p>
          <p>
            • Diving: Convert depth (ft US) to operational range (fathom).
          </p>
          <p>
            • Marine engineering: Convert construction sizes (ft US) to fathom-based depth planning.
          </p>
          <p>
            • Navigation: Convert measuring rope length (ft US) to fathom for anchoring tasks.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>fathom = ft US × 0.166667</p>
          <p>Example: 24 ft US = 24 × 0.166667 = 4 fathoms</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is the US foot (survey foot)?</p>
          <p>A: A legacy unit used in surveying: 1 ft US = 1200/3937 meters (≈0.3048006096 m). The ratio to fathom (×1/6) is the same as the international foot.</p>
          <p>Q: How to convert ft US to fathom?</p>
          <p>A: fathom = ft US × 0.166667. 6 ft US = 1 fathom.</p>
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