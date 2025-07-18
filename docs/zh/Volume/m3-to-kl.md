---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/m3-to-kl
      linkText: 立方米到千升换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方米(m³)与千升(kl)单位换算工具，1立方米等于1千升。
  - - meta
    - name: keywords
      content: 立方米,千升,单位换算,m3,kl
---

# 立方米(m³) 到 千升(kl) 换算

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
  title:'立方米(m³)到千升(kl)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} m³ = ${convert(form.number).from('m3').to('kl')} kl`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方米数值" />
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
1 立方米(m³) = 1 千升(kl)

### 换算原理
立方米(m³)和千升(kl)都是体积单位，1立方米等于1千升。

## 常见换算值
| 立方米(m³) | 千升(kl) | 实物参考                 |
|-----------|---------|--------------------------|
| 1         | 1       | 标准游泳池体积            |
| 0.5       | 0.5     | 中型水箱体积              |
| 0.1       | 0.1     | 小型水箱体积              |
| 0.01      | 0.01    | 大型鱼缸体积              |
| 0.001     | 0.001   | 中型鱼缸体积              |

## 应用场景
### 建筑工程
- 混凝土用量计算
- 建筑材料体积测量
- 空间容积规划

### 工业制造
- 容器容量设计
- 液体存储计算
- 产品包装规划

### 科学研究
- 实验室容器容量
- 液体体积测量
- 仪器校准

## 单位换算技巧
1. **快速心算法**：
   - 立方米转千升 → 数值不变
   - 千升转立方米 → 数值不变

2. **科学记数法**：
   - 1 m³ = 1 kl
   - 1 kl = 1 m³

3. **记忆口诀**：
   "立方米转千升，数值不变要记清"

## 注意事项
- 精确测量需使用专业工具
- 考虑温度对体积的影响
- 不规则形状需使用积分计算

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