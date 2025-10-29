<template>
  <h1 style="font-size: 24px;font-weight: bold;"> {{lang==='en'?'Other Unit Conversion Methods':'其他单位换算方法'}} </h1>
  <NConfigProvider  :theme="theme">
    <n-card :bordered="false">
      <n-grid x-gap="12" cols="2 s:2 m:3 l:3 xl:4 2xl:5" responsive="screen">
        <n-gi v-for="(file, index) in footer[lang]" :key="index">
          <n-button text tag="a" :href="file.value" type="info"> {{ file.label }} </n-button>
        </n-gi>
      </n-grid>
    </n-card>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { NButton, NConfigProvider, darkTheme, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage, NGrid, NGi } from 'naive-ui'
import { footer } from "./local";
import { useData, inBrowser } from "vitepress";
import { watch, ref } from 'vue';
const { page, lang, site, isDark } = useData();
const theme = ref(null)
console.log(lang)
watch(isDark, (dark) => {
  if (!inBrowser) return;
  theme.value = dark ? darkTheme : null;
});
</script>