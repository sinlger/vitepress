<template>
  <n-card title="其他单位转换方法">
    <n-grid x-gap="12" :cols="4">
      <n-gi v-for="(file, index) in footer[lang]" :key="index">
        <n-button text tag="a" :href="file.value" type="primary"> {{ file.label }} </n-button>
      </n-gi>
    </n-grid>
  </n-card>
</template>
<script setup lang="ts">
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage, NGrid, NGi } from 'naive-ui'
import { footer } from "./local";
import { useData } from "vitepress";
const { page, lang, site } = useData();
</script>