---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-to-Fathom
      linkText: Foot to Fathom
head:
  - - meta
    - name: description
      content: Foot to Fathom Converter — Convert foot (ft) to fathom with accurate formulas and tables. Useful in marine measurement and diving operations.
  - - meta
    - name: keywords
      content: foot to fathom, ft to fathom, length converter, unit conversion, marine units, diving, navigation, measurement conversion
---

# Foot (ft) to Fathom Conversion

Convert feet to fathoms quickly and accurately. 1 fathom = 6 feet. This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','Foot to fathom','marine units','diving','navigation','measurement conversion','engineering'
]
const form = reactive({ title: 'Foot to Fathom Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} ft = ${(form.value * 0.166667).toFixed(6)} fathom`
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
          SEO: Foot to fathom keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 ft = 0.166667 fathom</p>
          <p>1 fathom = 6 ft</p>
          <p>Related conversions: foot to mile, foot to nautical mile, foot to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft = 0.166667 fathom</p>
          <p>6 ft = 1 fathom</p>
          <p>12 ft = 2 fathoms</p>
          <p>30 ft = 5 fathoms</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Foot is commonly used for daily measurement and engineering drawings; fathom is used for depth and rope length in marine operations. This conversion helps when switching between land-based and maritime unit systems.
          </p>
          <p>
            • Diving: Convert pool or sea depth (ft) to operational range (fathom).
          </p>
          <p>
            • Marine engineering: Convert construction sizes (ft) to fathom-based depth planning.
          </p>
          <p>
            • Navigation: Convert measuring rope length (ft) to fathom for anchoring tasks.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>fathom = ft × 0.166667</p>
          <p>Example: 24 ft = 24 × 0.166667 = 4 fathoms</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is a fathom?</p>
          <p>A: A marine unit equal to 6 feet (≈1.8288 meters). Used for depth and rope length.</p>
          <p>Q: How to convert ft to fathom?</p>
          <p>A: fathom = ft × 0.166667. 6 ft = 1 fathom.</p>
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