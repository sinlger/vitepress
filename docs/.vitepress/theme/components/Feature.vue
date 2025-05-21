<template>
  <v-card class="mx-auto" max-width="344" :subtitle="subtitle" :title="title" :href="link" ></v-card>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  link: String,
  subtitle: String,
  title: String
})
</script>