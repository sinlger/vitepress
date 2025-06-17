---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位转换
  - - link: /Volume/m3-to-Gl
      linkText: 立方米到吉升转换
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方米(m³)与吉升(Gl)单位换算工具，1立方米等于0.000001吉升。
  - - meta
    - name: keywords
      content: 立方米,吉升,单位换算,m3,Gl
---

# 立方米(m³) 到 吉升(Gl) 转换

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
  title:'立方米(m³)到吉升(Gl)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} m³ = ${convert(form.number).from('m3').to('Gl')} Gl`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方米数值" />
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
1 立方米(m³) = 0.000001 吉升(Gl)

### 换算原理
立方米(m³)和吉升(Gl)都是体积单位，1立方米等于百万分之一吉升。

## 常见换算值
| 立方米(m³) | 吉升(Gl) | 实物参考                 |
|-----------|---------|--------------------------|
| 1         | 0.000001| 标准游泳池体积            |
| 0.5       | 0.0000005| 中型水箱体积              |
| 0.1       | 0.0000001| 小型水箱体积              |
| 0.01      | 0.00000001| 大型鱼缸体积              |
| 0.001     | 0.000000001| 中型鱼缸体积              |

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
   - 立方米转吉升 → 数值除以1,000,000
   - 吉升转立方米 → 数值乘以1,000,000

2. **科学记数法**：
   - 1 m³ = 1×10⁻⁶ Gl
   - 1 Gl = 1×10⁶ m³

3. **记忆口诀**：
   "立方米转吉升，除以百万要记清"

## 注意事项
- 精确测量需使用专业工具
- 考虑温度对体积的影响
- 不规则形状需使用积分计算

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