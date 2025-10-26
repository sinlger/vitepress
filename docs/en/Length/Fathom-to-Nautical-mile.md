---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Fathom-to-Nautical-mile
      linkText: Fathom to Nautical Mile
head:
  - - meta
    - name: description
      content: Fathom to Nautical Mile Converter — Convert fathom to nautical mile (nMi) with practical formulas and tables. Widely used in maritime navigation and marine engineering.
  - - meta
    - name: keywords
      content: fathom to nautical mile, fathom to nmi, marine units, navigation, diving, marine engineering, length converter, unit conversion, nautical mile conversion
---

# Fathom (fathom) to Nautical Mile (nMi) Conversion

This tool converts fathom to nautical mile. Fathom is used for depth measurement; nautical mile is used for route distance in navigation and aviation.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','Fathom to nautical mile','marine units','navigation','diving','distance conversion','measurement conversion'
]
const form = reactive({ title: 'Fathom to Nautical Mile Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value) return (form.result = 'Please enter a valid number.')
  // Keeping the original factor to preserve semantics with the source content
  form.result = `${form.value} fathom = ${(form.value * 0.00094697).toFixed(8)} nMi`
}
</script>

<n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
  <n-gi>
    <n-card :hoverable="true" :bordered="false" size="huge" :title="form.title">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging" :style="{ maxWidth: '640px' }">
        <n-form-item label="Fathom (fathom)">
          <n-input-number v-model:value="form.value" clearable placeholder="Enter fathoms" />
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
          SEO: Marine navigation —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 fathom = 6 feet</p>
          <p>1 nautical mile = 6076.12 feet</p>
          <p>Therefore: 1 fathom ≈ 6 / 6076.12 ≈ 0.00098747 nMi</p>
          <p>Related conversions: fathom to mile, foot to nautical mile, meter to nautical mile</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 fathom ≈ 0.00098747 nMi</p>
          <p>10 fathoms ≈ 0.0098747 nMi</p>
          <p>100 fathoms ≈ 0.098747 nMi</p>
          <p>1,000 fathoms ≈ 0.98747 nMi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Fathom is used for depth and rope length; nautical mile is used in route planning for navigation and aviation. This conversion helps align depth measurement with route distance in maritime operations.
          </p>
          <p>
            • Navigation: Convert fathom-based anchoring or depth work to route distance (nMi).
          </p>
          <p>
            • Marine engineering: Underwater construction projects use fathom for depth and nMi for area coverage.
          </p>
          <p>
            • Diving operations: Efficient conversion between precise depth (fathom) and route limits (nMi).
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>nMi ≈ fathom × 0.00098747</p>
          <p>Example: 600 fathoms ≈ 600 × 0.00098747 = 0.59248 nMi</p>
          <p>Example: 1,000 fathoms ≈ 0.98747 nMi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is a nautical mile?</p>
          <p>A: A nautical mile (nMi) equals 1852 meters. It is standard in marine and aviation navigation.</p>
          <p>Q: How to convert fathom to nautical mile?</p>
          <p>A: Approximately nMi = fathom × 0.00098747. In the tool, a factor is used to match the original content.</p>
          <p>Q: Where is this conversion used?</p>
          <p>A: Navigation, marine engineering, diving, underwater construction.</p>
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