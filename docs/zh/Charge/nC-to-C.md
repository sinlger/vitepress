---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Charge/
      linkText: 电荷单位转换
  - - link: /Charge/nC-to-C
      linkText: 纳库仑到库仑换算
head:
  - - meta
    - name: description
      content: "电荷单位换算指南，涵盖纳库仑 (nC) 到 库仑 (C) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "电荷, 单位转换, 纳库仑, 库仑, 换算公式, 单位换算指南"
---
# 纳库仑 (nC) 到 库仑 (C) 换算

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Charge } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "纳库仑 (nC)", "value": "nC" },
  { "label": "库仑 (C)", "value": "c" }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur"
  },
  to:{
    required: true,
    trigger: "select"
  },
  from:{
    required: true,
    trigger: "select"
  }
}
const form = reactive({
  number:null,
  to:'',
  from:'',
  result:'',
  title:'电荷单位换算',
})
const convertHandler = (e) => {
   e.preventDefault();
  formRef.value?.validate((errors)=>{
    if (!errors) {
      form.result = `${form.number}${form.from} = ${convert(form.number).from(form.from).to(form.to)}${form.to}`
    }
  })
}
</script>

<n-form size="large" :model="form" ref='formRef' :rules="rules">
  <n-form-item label="数值"  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要转换的数值" />
  </n-form-item>
  <n-form-item label="从" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="到" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择转换单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" style="width:100%" @click="convertHandler">转换</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>


## 换算表
| 单位名称   | 符号 | 换算关系                             | 科学计数法  | 典型应用场景                     |
|------------|------|--------------------------------------|-------------|----------------------------------|
| 纳库仑     | nC   | 1 nC = 0.000000001 C                | 10⁻⁹ C      | 纳米级半导体器件电荷测量         |
| 库仑       | C    | 1 C                                  | 10⁰ C       | 电容器标称容量、雷电电荷量       |

注：换算关系基于国际单位制（SI）的十进制阶梯，1 库仑 = 1 安培・秒。

## 转换公式
$$ 1 \text{ nC} = 0.000000001 \text{ C} $$
$$ 1 \text{ C} = 1,000,000,000 \text{ nC} $$

## 应用场景
- **纳米科技** ：单层石墨烯存储电荷约 0.1 nC/cm²
- **高精度测量** ：静电控制在精密制造中的应用
- **科学研究** ：粒子加速器中微小电荷的测量



## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file, index) in Charge" :key="index">
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