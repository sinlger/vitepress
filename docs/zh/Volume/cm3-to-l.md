---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位转换
  - - link: /Volume/cm3-to-l
      linkText: 立方厘米到升转换
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方厘米(cm³)与升(l)单位换算工具，1立方厘米等于0.001升。
  - - meta
    - name: keywords
      content: 立方厘米,升,单位换算,cm³,l
---

# 立方厘米(cm³) 到 升(l) 转换

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
  title:'立方厘米(cm³)到升(l)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} cm³ = ${convert(form.number).from('cm3').to('l')} l`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入立方厘米数值" />
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
1 立方厘米(cm³) = 0.001 升(l)

### 换算原理
立方厘米(cm³)和升(l)都是体积单位，1升等于1000立方厘米。

## 常见换算值
| 立方厘米(cm³) | 升(l) | 实物参考                 |
|--------------|-------|--------------------------|
| 1000         | 1     | 1升瓶装水的体积           |
| 500          | 0.5   | 标准矿泉水瓶体积          |
| 250          | 0.25  | 小杯饮料的体积            |
| 100          | 0.1   | 小药瓶的体积              |
| 50           | 0.05  | 小酒杯的体积              |

## 应用场景
### 实验室应用
- 化学试剂配比
- 标准溶液配制
- 实验液体体积测量

### 医疗领域
- 药物剂量测量
- 输液量计算
- 医疗液体体积测量

### 日常生活
- 饮料容量测量
- 烹饪调料计量
- 化妆品用量计算

### 工业制造
- 小型容器容积测量
- 液体产品容量计算
- 包装容量规划

## 单位换算技巧
1. **快速心算法**：
   - 立方厘米转升 → 数值除以1000
   - 升转立方厘米 → 数值乘以1000

2. **科学记数法**：
   - 1 cm³ = 1×10⁻³ l
   - 1 l = 1×10³ cm³

3. **记忆口诀**：
   "立方厘米转升算，除以一千很简单"

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