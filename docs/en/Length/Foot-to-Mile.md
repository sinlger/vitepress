---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Length/index
      linkText: Length Conversion
  - - link: /Length/Foot-to-Mile
      linkText: Foot to Mile
head:
  - - meta
    - name: description
      content: Foot to Mile Converter — Convert foot (ft) to mile (mi) with precise formulas and tables. Suitable for mapping, navigation, and engineering measurements.
  - - meta
    - name: keywords
      content: foot to mile, ft to mi, length converter, unit conversion, imperial units, navigation, mapping, measurement conversion
---

# Foot (ft) to Mile (mi) Conversion

Easily convert feet to miles. 1 mile = 5280 feet. This page provides formulas, tables, and practical scenarios.

<script setup>
import { reactive } from 'vue'
import { NCard, NButton, NForm, NFormItem, NInputNumber, NGrid, NGi, NTag } from 'naive-ui'
import { Length } from '../files'
const seoKey = [
  'Unit converter','Unit conversion','Foot to mile','imperial units','navigation','mapping','measurement conversion','engineering'
]
const form = reactive({ title: 'Foot to Mile Conversion', value: 0, result: 0 })
const convertHandler = () => {
  if (!form.value) return (form.result = 'Please enter a valid number.')
  form.result = `${form.value} ft = ${(form.value / 5280).toFixed(6)} mi`
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
          SEO: Foot to mile keywords —
          <span v-for="(item, index) in seoKey" :key="index">{{ item }}, </span>
        </div>
      </template>
    </n-card>
  </n-gi>
  <n-gi>
    <n-grid cols="1 s:1 m:1 l:1 xl:2 2xl:2" x-gap="40">
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Common Conversion Formulas">
          <p>1 mi = 5280 ft</p>
          <p>1 ft = 0.000189394 mi</p>
          <p>Related conversions: foot to fathom, foot to nautical mile, foot to meter</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Basic Conversion Table">
          <p>1 ft = 0.000189 mi</p>
          <p>5280 ft = 1 mi</p>
          <p>10560 ft = 2 mi</p>
          <p>26400 ft = 5 mi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Practical Applications">
          <p>
            Foot is widely used in architecture and engineering, while mile is used in navigation and mapping for long-distance measurement. This conversion helps unify units across disciplines.
          </p>
          <p>
            • Navigation: Convert route distance (ft) to miles for map planning.
          </p>
          <p>
            • Civil engineering: Convert feet in drawings to miles for large-scale projects.
          </p>
          <p>
            • Sports: Convert track or hiking distances from feet to miles.
          </p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :bordered="false" :hoverable="true" title="Conversion Formula">
          <p>mi = ft ÷ 5280</p>
          <p>Example: 10560 ft = 10560 ÷ 5280 = 2 mi</p>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card :hoverable="true" :bordered="false" title="Frequently Asked Questions">
          <p>Q: What is a mile?</p>
          <p>A: An imperial unit commonly used for long-distance measurement. 1 mile ≈ 1.609344 km.</p>
          <p>Q: How to convert ft to mi?</p>
          <p>A: mi = ft ÷ 5280, or ft × 0.000189394.</p>
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