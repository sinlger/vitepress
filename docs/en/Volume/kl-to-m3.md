---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/kl-to-m3
      linkText: 千升到立方米换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 千升(kl)与立方米(m³)单位换算工具�?千升等于1立方米�?
  - - meta
    - name: keywords
      content: 千升,立方�?单位换算,kl,m3
---

# 千升(kl) �?立方�?m³) 换算

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
  title:'千升(kl)到立方米(m³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} kl = ${convert(form.number).from('kl').to('m3')} m³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数�? path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number" placeholder="请输入千升数�? />
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
1 千升(kl) = 1 立方�?m³)

### 换算原理
千升(kl)和立方米(m³)是等价的体积单位�?千升等于1立方米�?

## 常见换算�?
| 千升(kl) | 立方�?m³) | 实物参�?                |
|---------|-----------|--------------------------|
| 1       | 1         | 标准浴缸的水�?           |
| 10      | 10        | 小型游泳池的水量          |
| 100     | 100       | 中型鱼缸的水�?           |
| 1,000   | 1,000     | 大型储水罐的容量          |
| 10,000  | 10,000    | 小型游泳池的水量          |

## 应用场景
### 建筑工程
- 混凝土用量计�?
- 土方工程体积测量
- 建筑材料体积估算

### 工业制�?
- 液体原料储存规划
- 容器容量设计
- 生产流程体积控制

### 日常生活
- 家居储水设备容量
- 鱼缸水体计算
- 游泳池水量估�?

## 单位换算技�?
1. **直接等价�?*�?
   - 千升转立方米 �?数值不�?
   - 立方米转千升 �?数值不�?

2. **记忆口诀**�?
   "千升立方等量换，数值不变最简�?

## 注意事项
- 测量时注意温度对水密度的影响
- 不规则容器需使用专业测量方法
- 精确计算需考虑容器壁厚�?

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
