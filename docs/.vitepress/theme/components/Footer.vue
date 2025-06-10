<template>
  <h1 style="font-size: 24px;font-weight: bold;"> 其他单位转换方法 </h1>
  <NConfigProvider  :theme="theme">
    <n-card :bordered="false">
      <n-grid x-gap="12" :cols="4">
        <n-gi v-for="(file, index) in footer[lang]" :key="index">
          <n-button text tag="a" :href="file.value" type="primary"> {{ file.label }} </n-button>
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
watch(isDark, (dark) => {
  if (!inBrowser) return;
  theme.value = dark ? darkTheme : null;
});
</script>