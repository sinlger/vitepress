---
sidebar: false
aside: false
lastUpdated: false

breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Temperature/index
      linkText: 温度换算
  - - link: /Temperature/Fahrenheit-to-Rankine
      linkText: 华氏度转兰金度

head:
  - - meta
    - name: description
      content: "华氏度 (°F) 换算到 兰金度 (R) 的在线工具。提供公式说明及示例，便于温度单位换算。"
  - - meta
    - name: keywords
      content: "华氏度, 兰金度, 温度换算, °F 到 K, 在线换算工具, 单位换算"
---
# 华氏度 (°F) 到 兰金度 (R) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Temperature } from '../../files';
const seoKey = ['华氏度转摄氏度公式', '摄氏度华氏度转换', '华氏摄氏度与摄氏度转换', '摄氏度转华氏度', '华氏温度', '温度转换', '华氏温度和摄氏温度换算', '温度换算', '华氏度和摄氏度的换算', '摄氏度和华氏度的换算', '华氏度转摄氏度', '摄氏度']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) + 459.67
    form.result = `${form.number}°F = ${convertedValue.toFixed(2)}R`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="华氏度 (°F)">
    <n-input-number v-model:value="form.number" placeholder="输入华氏度" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card
  title="华氏度转兰金度换算结果"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## 公式

从 **华氏度 (°F)** 换算到 **兰金度 (R)** 的公式为：
$$ R = °F + 459.67 $$

### 示例
- 32°F = 491.67R
- 77°F = 536.67R
- 212°F = 671.67R

## 相关链接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Temperature" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="info"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>