<script setup>
import DefaultTheme from 'vitepress/theme'
import Breadcrumb from './Breadcrumb.vue';
import { NConfigProvider, darkTheme } from 'naive-ui'
import { inBrowser, useData } from "vitepress";
import Footer from './Footer.vue';
import { watch, ref } from 'vue';
const { isDark, page } = useData();

const { Layout } = DefaultTheme
const theme = ref(null)
watch(isDark, (dark) => {
  if (!inBrowser) return;
  theme.value = dark ? darkTheme : null;
});
</script>
<template>
  <NConfigProvider abstract inlineThemeDisabled :theme="theme">
    <Layout>
      <!-- 插槽1 -->
      <template #doc-after>
        <Footer />
      </template>
      <!-- 插槽2 -->
      <template #doc-before>
        <Breadcrumb />
      </template>
    </Layout>
  </NConfigProvider>
</template>