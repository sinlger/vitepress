---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /zh/Charge/
      linkText: 电荷单位转换
  - - link: /zh/Charge/nC-to-mC
      linkText: 纳库仑到毫库仑换算
head:
  - - meta
    - name: description
      content: "电荷单位换算指南，涵盖纳库仑 (nC) 到 毫库仑 (mC) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "电荷, 单位转换, 纳库仑, 毫库仑, 换算公式, 单位换算指南"
---
# 纳库仑 (nC) 到 毫库仑 (mC) 换算

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Charge } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "纳库仑 (nC)", "value": "nC" },
  { "label": "毫库仑 (mC)", "value": "mC" }
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
| 纳库仑     | nC   | 1 nC = 0.000001 mC                 | 10⁻⁹ C      | 纳米级半导体器件电荷测量         |
| 毫库仑     | mC   | 1 mC = 1,000,000 nC                | 10⁻³ C      | 小型电子元件充放电               |

注：换算关系基于国际单位制（SI）的十进制阶梯，1 库仑 = 1 安培・秒。

## 转换公式
$$ 1 \text{ nC} = 0.000001 \text{ mC} $$
$$ 1 \text{ mC} = 1,000,000 \text{ nC} $$

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