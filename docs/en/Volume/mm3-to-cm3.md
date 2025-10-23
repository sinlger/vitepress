---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/mm3-to-cm3
      linkText: 立方毫米到立方厘米换�?
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方毫米(mm³)与立方厘�?cm³)单位换算工具�?立方毫米等于0.001立方厘米�?
  - - meta
    - name: keywords
      content: 立方毫米,立方厘米,单位换算,mm³,cm³
---

# 立方毫米(mm³) �?立方厘米(cm³) 换算

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
  title:'立方毫米(mm³)到立方厘�?cm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} mm³ = ${convert(form.number).from('mm3').to('cm3')} cm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�? path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方毫米数�? />
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
1 立方毫米(mm³) = 0.001 立方厘米(cm³)

### 换算原理
立方毫米(mm³)和立方厘�?cm³)都是体积单位，属于国际单位制中的衍生单位。换算基于长度单位关系：
- 1 厘米(cm) = 10 毫米(mm)
- 因此 1 立方厘米 = 10³ 立方毫米 = 1000 立方毫米

## 常见换算�?
| 立方毫米(mm³) | 立方厘米(cm³) | 实物参�?                |
|--------------|--------------|--------------------------|
| 1            | 0.001        | 一粒细沙的体积            |
| 10           | 0.01         | 小水滴的体积              |
| 100          | 0.1          | 一颗小药丸的体�?         |
| 1000         | 1            | 标准骰子的体�?           |
| 10000        | 10           | 方糖的体�?              |

## 应用场景
### 工业制�?
- 精密零件尺寸测量（如电子元件、钟表零件）
- 3D打印材料用量计算
- 模具容积精确控制

### 科学研究  
- 实验室微量试剂配�?
- 细胞培养体积计算
- 纳米材料体积测定

### 医疗领域
- 药物剂量精确计量
- 医学影像三维重建
- 微型植入物体积测�?

### 日常生活
- 珠宝首饰体积估算
- 烹饪调料微量计量
- 手工DIY材料计算

## 单位换算技�?
1. **快速心算法**�?
   - 立方毫米转立方厘�?�?数值除�?000
   - 立方厘米转立方毫�?�?数值乘�?000

2. **科学记数�?*�?
   - 1 mm³ = 1×10⁻�?cm³
   - 1 cm³ = 1×10³ mm³

3. **记忆口诀**�?
   "立方毫米小又精，千分之一厘米�?

## 注意事项
- 测量微小体积时需使用专业量具（如微量移液器）
- 高精度场景要考虑温度对体积的影响
- 工业图纸需明确标注单位制（公制/英制�?

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
