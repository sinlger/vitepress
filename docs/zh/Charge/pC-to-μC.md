---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Charge/
      linkText: 电荷单位转换
  - - link: /Charge/pC-to-μC
      linkText: 皮库仑到微库仑换算
head:
  - - meta
    - name: description
      content: "电荷单位换算指南，涵盖皮库仑 (pC) 到 微库仑 (μC) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "电荷, 单位转换, 皮库仑, 微库仑, 换算公式, 单位换算指南"
---
# 皮库仑 (pC) 到 微库仑 (μC) 换算

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Charge } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "皮库仑 (pC)", "value": "pC" },
  { "label": "微库仑 (μC)", "value": "μC" }
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
| 皮库仑     | pC   | 1 pC = 0.001 μC                    | 10⁻¹² C     | 量子计算、单电子晶体管研究       |
| 微库仑     | μC   | 1 μC = 1,000 pC                   | 10⁻⁶ C      | 集成电路电荷传输、静电防护       |

注：换算关系基于国际单位制（SI）的十进制阶梯，1 库仑 = 1 安培・秒。

## 转换公式
$$ 1 \text{ pC} = 0.001 \text{ μC} $$
$$ 1 \text{ μC} = 1000 \text{ pC} $$

## 应用场景
- **精密电子** ：集成电路工作电流常以 μA 级别表示，对应电荷量为 μC 级别
- **传感器信号** ：某些电荷传感器输出信号在 μC 量级范围
- **静电测量** ：人体静电火花可达 100 μC 级别



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