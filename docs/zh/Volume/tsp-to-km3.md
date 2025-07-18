---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/tsp-to-km3
      linkText: 茶匙到立方公里换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 茶匙(tsp)与立方公里(km³)单位换算工具，1茶匙等于0.00000000000492892立方公里。
  - - meta
    - name: keywords
      content: 茶匙,立方公里,单位换算,tsp,km3
---

# 茶匙(tsp) 到 立方公里(km³) 换算

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
  title:'茶匙(tsp)到立方公里(km³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} tsp = ${convert(form.number).from('tsp').to('km3')} km³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入茶匙数值" />
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
1 茶匙(tsp) = 0.00000000000492892 立方公里(km³)

### 换算原理
茶匙(tsp)和立方公里(km³)都是体积单位，1茶匙等于约0.00000000000493立方公里。

## 常见换算值
| 茶匙(tsp) | 立方公里(km³) | 实物参考                 |
|-----------|-------------|--------------------------|
| 1         | 0.00000000000492892 | 标准茶匙容量              |
| 0.5       | 0.00000000000246446 | 半茶匙容量                |
| 0.25      | 0.00000000000123223 | 四分之一茶匙容量          |
| 2         | 0.00000000000985784 | 两茶匙容量                |
| 3         | 0.00000000001478676 | 三茶匙容量                |

## 应用场景
### 烹饪
- 精确测量小份量液体
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

## 单位换算技巧
1. **快速心算法**：
   - 茶匙转立方公里 → 数值乘以0.00000000000493
   - 立方公里转茶匙 → 数值除以0.00000000000493

2. **科学记数法**：
   - 1 tsp = 4.92892×10⁻¹² km³
   - 1 km³ = 202,884,136,000 tsp

3. **记忆口诀**：
   "茶匙转立方公里，万亿分之五要记清"

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