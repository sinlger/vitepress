---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/cm3-to-m3
      linkText: 立方厘米到立方米换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方厘米(cm³)与立方米(m³)单位换算工具�?立方厘米等于0.000001立方米�?
  - - meta
    - name: keywords
      content: 立方厘米,立方�?单位换算,cm³,m³
---

# 立方厘米(cm³) �?立方�?m³) 换算

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
  title:'立方厘米(cm³)到立方米(m³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} cm³ = ${convert(form.number).from('cm3').to('m3')} m³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�? path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方厘米数�? />
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
1 立方厘米(cm³) = 0.000001 立方�?m³)

### 换算原理
立方厘米(cm³)和立方米(m³)都是体积单位�?立方米等�?,000,000立方厘米�?

## 常见换算�?
| 立方厘米(cm³) | 立方�?m³) | 实物参�?                |
|--------------|-----------|--------------------------|
| 1,000,000    | 1         | 1立方米标准箱的体�?      |
| 500,000      | 0.5       | 中型家具的体�?          |
| 100,000      | 0.1       | 小型冰箱的体�?          |
| 10,000       | 0.01      | 微波炉的体积             |
| 1,000        | 0.001     | 鞋盒的体�?              |

## 应用场景
### 建筑领域
- 建筑材料用量计算
- 房间容积测量
- 建筑空间规划

### 物流运输
- 货物体积计算
- 集装箱容量规�?
- 运输空间优化

### 工业生产
- 产品体积测量
- 原材料用量计�?
- 包装设计

### 日常生活
- 家具尺寸测量
- 储物空间规划
- 家电体积比较

## 单位换算技�?
1. **快速心算法**�?
   - 立方厘米转立方米 �?数值除�?,000,000
   - 立方米转立方厘米 �?数值乘�?,000,000

2. **科学记数�?*�?
   - 1 cm³ = 1×10⁻⁶ m³
   - 1 m³ = 1×10�?cm³

3. **记忆口诀**�?
   "立方厘米转立方，百万分一记心�?

## 注意事项
- 大体积测量需使用专业工具
- 测量时考虑物体形状不规则�?
- 温度变化可能影响测量精度

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
