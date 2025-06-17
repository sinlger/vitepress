---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Charge/
      linkText: 电荷单位换算
  - - link: /Charge/pC-to-mC
      linkText: 皮库仑到毫库仑换算
head:
  - - meta
    - name: description
      content: "电荷单位换算指南，涵盖皮库仑 (pC) 到 毫库仑 (mC) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "电荷, 单位换算, 皮库仑, 毫库仑, 换算公式, 单位换算指南"
---
# 皮库仑 (pC) 到 毫库仑 (mC) 换算

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Charge } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "皮库仑 (pC)", "value": "pC" },
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
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要换算的数值" />
  </n-form-item>
  <n-form-item label="从" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="到" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择换算单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="primary" style="width:100%" @click="convertHandler">换算</n-button>
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
| 皮库仑     | pC   | 1 pC = 0.000000001 mC            | 10⁻¹² C     | 量子计算、单电子晶体管研究       |
| 毫库仑     | mC   | 1 mC = 1,000,000,000 pC         | 10⁻³ C      | 小型电子元件充放电               |

注：换算关系基于国际单位制（SI）的十进制阶梯，1 库仑 = 1 安培・秒。

## 换算公式
$$ 1 \text{ pC} = 0.000000001 \text{ mC} $$
$$ 1 \text{ mC} = 1,000,000,000 \text{ pC} $$

## 应用场景
- **医疗领域** ：除颤器脉冲约 200 mC 电荷（即 2×10¹¹ pC）
- **半导体制造** ：光刻机静电控制需监测 0.1 pC 级残余电荷
- **量子计算** ：超导量子比特操作涉及 10⁻¹² C 级电荷调控



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