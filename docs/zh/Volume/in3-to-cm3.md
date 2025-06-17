---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Volume/index
      linkText: 体积单位换算
  - - link: /Volume/in3-to-cm3
      linkText: 立方英寸到立方厘米换算
head:
  - - meta
    - charset: utf-8
  - - meta
    - name: description
      content: 立方英寸(in³)与立方厘米(cm³)单位换算工具，1立方英寸等于16.387064立方厘米。
  - - meta
    - name: keywords
      content: 立方英寸,立方厘米,单位换算,in3,cm3
---

# 立方英寸(in³) 到 立方厘米(cm³) 换算

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
  title:'立方英寸(in³)到立方厘米(cm³)换算'
})

const convertHandler = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number} in³ = ${convert(form.number).from('in3').to('cm3')} cm³`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值" path="number">
    <n-input-number size="large" style="width:极值100%" :min="0" v-model:value="form.number" placeholder="请输入立方英寸数值" />
  </n-form-item>
  <n-form-item>
   极值 <n-button type="primary" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card embedded :bordered="false" hoverable>
  <div style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 换算公式
1 立方英寸(in³) = 16.387064 立方厘米(cm³)

### 换算原理
立方英寸(in³)和立方厘米(cm³)都是体积单位，1立方英寸等于16.387064立方厘米。

## 常见换算值
| 立方英寸(in³) | 立方厘米(cm³) | 实物参考                 |
|--------------|--------------|--------------------------|
| 1            | 16.387064    | 标准立方英寸容量          |
| 0.5          | 8.193532     | 半立方英寸容量            |
| 0.25         | 4.096766     | 四分之一立方英寸容量      |
| 2            | 32.774128    | 两立方英寸容量            |
| 3            | 49.161192    | 三立方英寸容量            |

## 应用场景
### 工程
- 机械零件体积计算
- 材料用量估算
- 容器容量测量

### 制造业
- 产品设计
- 模具制造
- 材料采购

### 日常生活
- DIY项目
- 家居装修
- 小型容器容量测量

## 单位换算技巧
1. **快速心算法**：
   - 立方英寸转立方厘米 → 数值乘以16.387
   - 立方厘米转立方英寸 → 数值除以16.387

2. **近似记忆**：
   - 1立方英寸 ≈ 16.4立方厘米
   - 1立方厘米 ≈ 0.061立方英寸

3. **记忆口诀**：
   "立方英寸转厘米，十六点四要记清"

## 注意事项
- 精确测量需使用标准量具
- 不同行业可能有不同的标准
- 温度变化会影响实际体积

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