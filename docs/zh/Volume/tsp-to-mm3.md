---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位转换
  - - link: /Volume/tsp-to-mm3
      linkText: 茶匙到立方毫米转换
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 茶匙(tsp)与立方毫米(mm³)单位换算工具，1茶匙等于4,928.92立方毫米。
  - - meta
    - name: keywords
      content: 茶匙,立方毫米,单位换算,tsp,mm3
---

# 茶匙(tsp) 到 立方毫米(mm³) 转换

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
  title:'茶匙(tsp)到立方毫米(mm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} tsp = ${convert(form.number).from('tsp').to('mm3')} mm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入茶匙数值" />
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
1 茶匙(tsp) = 4,928.92 立方毫米(mm³)

### 换算原理
茶匙(tsp)和立方毫米(mm³)都是体积单位，1茶匙等于约4929立方毫米。

## 常见换算值
| 茶匙(tsp) | 立方毫米(mm³) | 实物参考                 |
|-----------|-------------|--------------------------|
| 1         | 4,928.92    | 标准茶匙容量              |
| 0.5       | 2,464.46    | 半茶匙容量                |
| 0.25      | 1,232.23    | 四分之一茶匙容量          |
| 2         | 9,857.84    | 两茶匙容量                |
| 3         | 14,786.76   | 三茶匙容量                |

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
   - 茶匙转立方毫米 → 数值乘以4,928.92
   - 立方毫米转茶匙 → 数值除以4,928.92

2. **近似记忆**：
   - 1茶匙 ≈ 5,000立方毫米
   - 1立方毫米 ≈ 0.0002茶匙

3. **记忆口诀**：
   "茶匙转立方毫米，五千倍要记清"

## 注意事项
- 不同国家茶匙标准略有差异
- 精确测量需使用标准量具
- 液体表面张力影响测量精度

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