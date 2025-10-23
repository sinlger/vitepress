---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/cm3-to-mm3
      linkText: 立方厘米到立方毫米换�?
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方厘米(cm³)与立方毫�?mm³)单位换算工具�?立方厘米等于1000立方毫米�?
  - - meta
    - name: keywords
      content: 立方厘米,立方毫米,单位换算,cm³,mm³
---

# 立方厘米(cm³) �?立方毫米(mm³) 换算

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
  title:'立方厘米(cm³)到立方毫�?mm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} cm³ = ${convert(form.number).from('cm3').to('mm3')} mm³`
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
1 立方厘米(cm³) = 1000 立方毫米(mm³)

### 换算原理
立方厘米(cm³)和立方毫�?mm³)都是体积单位，换算基于长度单位关系：
- 1 厘米(cm) = 10 毫米(mm)
- 因此 1 立方厘米 = 10³ 立方毫米 = 1000 立方毫米

## 常见换算�?
| 立方厘米(cm³) | 立方毫米(mm³) | 实物参�?                |
|--------------|--------------|--------------------------|
| 1            | 1000         | 标准骰子的体�?           |
| 0.5          | 500          | 小药丸的体积              |
| 2            | 2000         | 两颗骰子的体�?           |
| 5            | 5000         | 一茶匙液体的体�?         |
| 10           | 10000        | 一汤匙液体的体�?         |

## 应用场景
### 工业制�?
- 精密零件尺寸测量
- 3D打印材料用量计算
- 微型容器容积测量

### 科学研究  
- 实验室微量液体测�?
- 化学试剂配比
- 纳米材料体积测定

### 医疗领域
- 药物剂量精确计量
- 注射器容量测�?
- 微型医疗设备容积计算

### 日常生活
- 烹饪调料计量
- 化妆品用量计�?
- 手工DIY材料测量

## 单位换算技�?
1. **快速心算法**�?
   - 立方厘米转立方毫�?�?数值乘�?000
   - 立方毫米转立方厘�?�?数值除�?000

2. **科学记数�?*�?
   - 1 cm³ = 1×10³ mm³
   - 1 mm³ = 1×10⁻�?cm³

3. **记忆口诀**�?
   "立方厘米转毫米，乘以一千很容易"

## 注意事项
- 测量微小体积时需使用专业量具
- 高精度场景要考虑温度对体积的影响
- 实验室测量需注意液体表面张力影响

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
