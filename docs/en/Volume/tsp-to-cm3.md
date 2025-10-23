---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/tsp-to-cm3
      linkText: 茶匙到立方厘米换�?
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 茶匙(tsp)与立方厘�?cm³)单位换算工具�?茶匙等于4.92892立方厘米�?
  - - meta
    - name: keywords
      content: 茶匙,立方厘米,单位换算,tsp,cm3
---

# 茶匙(tsp) �?立方厘米(cm³) 换算

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Volume } from '../files';

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
  title:'茶匙(tsp)到立方厘�?cm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} tsp = ${convert(form.number).from('tsp').to('cm3')} cm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�? path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入茶匙数�? />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card embedded :bordered="false" hoverable>
  <div style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 换算公式
1 茶匙(tsp) = 4.92892 立方厘米(cm³)

### 换算原理
茶匙(tsp)和立方厘�?cm³)都是体积单位�?茶匙等于�?.93立方厘米�?

## 常见换算�?
| 茶匙(tsp) | 立方厘米(cm³) | 实物参�?                |
|-----------|-------------|--------------------------|
| 1         | 4.92892     | 标准茶匙容量              |
| 0.5       | 2.46446     | 半茶匙容�?               |
| 0.25      | 1.23223     | 四分之一茶匙容量          |
| 2         | 9.85784     | 两茶匙容�?               |
| 3         | 14.78676    | 三茶匙容�?               |

## 应用场景
### 烹饪
- 精确测量小份量液�?
- 食谱配方换算
- 厨房计量工具校准

### 医药
- 药品剂量测量
- 实验室小容量液体测量
- 医疗器具校准

### 日常生活
- 饮料调配
- 手工制作
- 小型容器容量测量

## 单位换算技�?
1. **快速心算法**�?
   - 茶匙转立方厘�?�?数值乘�?.93
   - 立方厘米转茶�?�?数值除�?.93

2. **近似记忆**�?
   - 1茶匙 �?5立方厘米
   - 1立方厘米 �?0.2茶匙

3. **记忆口诀**�?
   "茶匙转立方厘米，五倍关系要记清"

## 注意事项
- 不同国家茶匙标准略有差异
- 精确测量需使用标准量具
- 液体表面张力影响测量精度

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Volume" :key="index">
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
