---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-us-to-Mile
      linkText: US Foot to Mile
head:
  - - meta
    - name: description
      content: US Foot to Mile Converter — Convert US foot (ft US) to mile (mi) with precise formulas and tables. Suitable for mapping, navigation, and engineering measurements.
  - - meta
    - name: keywords
      content: us foot to mile, foot-us to mile, ft us to mi, survey foot, length converter, unit conversion, imperial units, navigation, mapping
---

# US Foot (ft US) to Mile (mi) Conversion

Easily convert US feet to miles. 1 mile = 5280 feet (US survey mile uses 5280 US feet). This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','US foot to mile','survey foot','navigation','mapping','measurement conversion','engineering'
]
const form = reactive({ title: 'US Foot to Mile Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value && form.value !== 0) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} ft US = ${(form.value / 5280).toFixed(6)} mi`
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
          SEO: US foot to mile keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 mi = 5280 ft (US or international)</p>
          <p>1 ft US = 0.000189394 mi</p>
          <p>Related conversions: foot-us to fathom, foot-us to nautical mile, foot-us to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft US = 0.000189 mi</p>
          <p>5280 ft US = 1 mi</p>
          <p>10560 ft US = 2 mi</p>
          <p>26400 ft US = 5 mi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            US foot (survey foot) is widely used in land surveying and legacy engineering; mile is used for long-distance measurement in navigation and mapping. This conversion helps unify units across disciplines.
          </p>
          <p>
            • Navigation: Convert route distance (ft US) to miles for map planning.
          </p>
          <p>
            • Civil engineering: Convert US feet in drawings to miles for large-scale projects.
          </p>
          <p>
            • Sports: Convert track or hiking distances from US feet to miles.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>mi = ft US ÷ 5280</p>
          <p>Example: 10560 ft US = 10560 ÷ 5280 = 2 mi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is the US foot (survey foot)?</p>
          <p>A: 1 ft US = 1200/3937 meters (≈0.3048006096 m). The ratio to mile (5280 feet per mile) is the same; the meter value differs slightly from the international foot.</p>
          <p>Q: How to convert ft US to mi?</p>
          <p>A: mi = ft US ÷ 5280, or ft US × 0.000189394.</p>
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