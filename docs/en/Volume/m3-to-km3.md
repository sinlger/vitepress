---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/m3-to-km3
      linkText: 立方米到立方公里换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方�?m³)与立方公�?km³)单位换算工具�?立方米等�?.000000001立方公里�?
  - - meta
    - name: keywords
      content: 立方�?立方公里,单位换算,m3,km3
---

# 立方�?m³) �?立方公里(km³) 换算

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
  title:'立方�?m³)到立方公�?km³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} m³ = ${convert(form.number).from('m3').to('km3')} km³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�? path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方米数�? />
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
1 立方�?m³) = 0.000000001 立方公里(km³)

### 换算原理
立方�?m³)和立方公�?km³)都是体积单位�?立方米等于十亿分之一立方公里�?

## 常见换算�?
| 立方�?m³) | 立方公里(km³) | 实物参�?                |
|-----------|-------------|--------------------------|
| 1         | 0.000000001 | 标准游泳池体�?           |
| 0.5       | 0.0000000005| 中型水箱体积              |
| 0.1       | 0.0000000001| 小型水箱体积              |
| 0.01      | 0.00000000001| 大型鱼缸体积              |
| 0.001     | 0.000000000001| 中型鱼缸体积              |

## 应用场景
### 地球科学
- 海洋水体总量计算
- 冰川体积测量
- 大气水汽含量估算

### 天文领域
- 行星水体储量评估
- 彗星冰核体积计算
- 星际云团物质总量

### 超大规模工程
- 全球水资源统�?
- 跨大陆调水工�?
- 超大型水库设�?

## 单位换算技�?
1. **快速心算法**�?
   - 立方米转立方公里 �?数值除�?,000,000,000
   - 立方公里转立方米 �?数值乘�?,000,000,000

2. **科学记数�?*�?
   - 1 m³ = 1×10⁻⁹ km³
   - 1 km³ = 1×10�?m³

3. **记忆口诀**�?
   "立方米转立方公里，除以十亿要记清"

## 注意事项
- 精确测量需使用卫星遥感技�?
- 地球曲率影响大范围体积计�?
- 精确测量需考虑地形变化

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
