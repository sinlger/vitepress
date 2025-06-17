---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位转换
  - - link: /Volume/ml-to-cm3
      linkText: 毫升到立方厘米转换
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 毫升(ml)与立方厘米(cm³)单位换算工具，1毫升等于1立方厘米。
  - - meta
    - name: keywords
      content: 毫升,立方厘米,单位换算,ml,cm³
---

# 毫升(ml) 到 立方厘米(cm³) 转换

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Volume } from '../../files';

const convert = inject('convert')
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur"
  }
}
const form = reactive({
  number:null,
  result:'',
  title:'毫升(ml)到立方厘米(cm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} ml = ${convert(form.number).from('ml').to('cm3')} cm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入毫升数值" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" style="width:100%" @click="convertHandler">转换</n-button>
  </n-form-item>
</n-form>
<n-card embedded :bordered="false" hoverable>
  <div style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 换算公式
1 毫升(ml) = 1 立方厘米(cm³)

### 换算原理
毫升(ml)和立方厘米(cm³)是等价的体积单位，1毫升等于1立方厘米。

## 常见换算值
| 毫升(ml) | 立方厘米(cm³) | 实物参考                 |
|---------|--------------|--------------------------|
| 1       | 1            | 标准骰子的体积            |
| 5       | 5            | 一茶匙液体的体积          |
| 10      | 10           | 一汤匙液体的体积          |
| 15      | 15           | 标准药瓶的体积            |
| 30      | 30           | 小酒杯的体积              |

## 应用场景
### 实验室应用
- 化学试剂配比
- 实验液体体积测量
- 标准溶液配制

### 医疗领域
- 药物剂量测量
- 注射器容量计算
- 医疗液体体积测量

### 日常生活
- 烹饪调料计量
- 饮料容量测量
- 化妆品用量计算

### 工业制造
- 小型容器容积测量
- 精密液体体积控制
- 微型产品容量计算

## 单位换算技巧
1. **直接等价**：
   - 毫升和立方厘米数值相同

2. **记忆口诀**：
   "毫升立方厘米，数值相同好记忆"

## 注意事项
- 测量时需使用标准量具
- 高精度测量需考虑温度影响
- 液体表面张力可能影响测量精度

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Volume" :key="index">
    <n-button
      text
      tag="a"
      :href="file.path"
      type="primary"
    >
      {{file.name}}
    </n-button>
  </n-gi>
</n-grid>