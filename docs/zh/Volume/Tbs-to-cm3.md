---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位转换
  - - link: /Volume/Tbs-to-cm3
      linkText: 汤匙到立方厘米转换
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 汤匙(Tbs)与立方厘米(cm³)单位换算工具，1汤匙等于14.78676立方厘米。
  - - meta
    - name: keywords
      content: 汤匙,立方厘米,单位换算,Tbs,cm3
---

# 汤匙(Tbs) 到 立方厘米(cm³) 转换

<script setup>
import { onMounted, reactive, inject ,ref  } from '极值vue'
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
  title:'汤匙(Tbs)到立方厘米(cm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} Tbs = ${convert(form.number).from('Tbs').to('cm3')} cm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入汤匙数值" />
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
1 汤匙(Tbs) = 14.78676 立方厘米(cm³)

### 换算原理
汤匙(Tbs)和立方厘米(cm³)都是体积单位，1汤匙等于约14.79立方厘米。

## 常见换算值
| 汤匙(Tbs) | 立方厘米(cm³) | 实物参考                 |
|-----------|-------------|--------------------------|
| 1         | 14.78676    | 标准汤匙容量              |
| 0.5       | 7.39338     | 半汤匙容量                |
| 0.25      | 3.69669     | 四分之一汤匙容量          |
| 2         | 29.57352    | 两汤匙容量                |
| 3         | 44.36028    | 三汤匙容量                |

## 应用场景
### 烹饪
- 精确测量液体配料
- 食谱配方换算
- 厨房计量工具校准

### 医药
- 药品剂量测量
- 实验室液体测量
- 医疗器具校准

### 日常生活
- 饮料调配
- 手工制作
- 小型容器容量测量

## 单位换算技巧
1. **快速心算法**：
   - 汤匙转立方厘米 → 数值乘以14.79
   - 立方厘米转汤匙 → 数值除以14.79

2. **近似记忆**：
   - 1汤匙 ≈ 15立方厘米
   - 1立方厘米 ≈ 0.067汤匙

3. **记忆口诀**：
   "汤匙转立方厘米，十五倍要记清"

## 注意事项
- 不同国家汤匙标准略有差异
- 精确测量需使用标准量具
- 液体表面张力影响测量精度

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index极值) in Volume" :key="index">
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