---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/Tbs-to-kl
      linkText: 汤匙到千升换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 汤匙(Tbs)与千升(kl)单位换算工具，1汤匙等于0.00001478676千升。
  - - meta
    - name: keywords
      content: 汤匙,千升,单位换算,Tbs,kl
---

# 汤匙(Tbs) 到 千升(kl) 换算

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
  title:'汤匙(Tbs)到千升(kl)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} Tbs = ${convert(form.number).from('Tbs').to('kl')} kl`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入汤匙数值" />
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
1 汤匙(Tbs) = 0.00001478676 千升(kl)

### 换算原理
汤匙(Tbs)和千升(kl)都是体积单位，1汤匙等于约0.0000148千升。

## 常见换算值
| 汤匙(Tbs) | 千升(kl)    | 实物参考                 |
|-----------|------------|--------------------------|
| 1         | 0.000014786| 标准汤匙容量              |
| 0.5       | 0.000007393| 半汤匙容量                |
| 0.25      | 0.000003696| 四分之一汤匙容量          |
| 2         | 0.000029573| 两汤匙容量                |
| 3         | 0.000044360| 三汤匙容量                |

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
   - 汤匙转千升 → 数值乘以0.0000148
   - 千升转汤匙 → 数值除以0.0000148

2. **近似记忆**：
   - 1汤匙 ≈ 0.000015千升
   - 1千升 ≈ 67,628汤匙

3. **记忆口诀**：
   "汤匙转千升，百万分之一五要记清"

## 注意事项
- 不同国家汤匙标准略有差异
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