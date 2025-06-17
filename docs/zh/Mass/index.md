---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Mass/
      linkText: 质量换算
  - - link: /Mass/index
      linkText: 质量单位换算
head:
  - - meta
    - name: description
      content: "质量单位换算指南，涵盖克 (g)、千克 (kg)、吨 (t)、磅 (lb)、盎司 (oz) 的详细换算公式与说明。"
  - - meta
    - name: keywords
      content: "质量, 单位换算, 克, 千克, 吨, 磅, 盎司, 换算公式, 单位换算指南"
---
# 重量单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Mass } from '../../files';

const convert = inject('convert')
const options =  [
  { "label": "微克", "value": "mcg" },
  { "label": "毫克", "value": "mg" },
  { "label": "克", "value": "g" },
  { "label": "千克", "value": "kg" },
  { "label": "盎司", "value": "oz" },
  { "label": "磅", "value": "lb" },
  { "label": "公吨", "value": "mt" },
  { "label": "短吨", "value": "st" },
  { "label": "公吨", "value": "t" }
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
  title:'面积单位换算',
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

## 单位换算表格

| 单位符号 | 单位名称 | 英文名称          | 换算关系（以千克 kg 为基准）                 |
| ---- | ---- | ------------- | -------------------------------- |
| mcg  | 微克   | microgram     | 1 mcg = 0.000000001 kg (10⁻⁹ kg) |
| mg   | 毫克   | milligram     | 1 mg = 0.000001 kg (10⁻⁶ kg)     |
| g    | 克    | gram          | 1 g = 0.001 kg (10⁻³ kg)         |
| kg   | 千克   | kilogram      | 1 kg = 1 kg（基准单位）                |
| oz   | 盎司   | ounce         | 1 oz ≈ 0.0311035 kg              |
| lb   | 磅    | pound         | 1 lb ≈ 0.45359 kg                |
| mt   | 公吨   | metric ton    | 1 mt = 1000 kg                   |
| st   | 短吨   | short ton     | 1 st ≈ 907.1847 kg               |
| t    | 公吨   | tonne（metric） | 1 t = 1000 kg（与 mt 等价）           |


## 换算说明

### 单位关系

- **微克 (mcg) 与毫克 (mg)**：1 mg = 1000 mcg 
- **毫克 (mg) 与克 (g)**：1 g = 1000 mg 
- **公吨 (mt/t) 与千克 (kg)**：1 mt = 1 t = 1000 kg 
- **短吨 (st) 与磅 (lb)**：1 st = 2000 lb 

### 注意事项

- **mcg 与 mg**：药物或营养补充中需严格区分，避免混淆（如 1000 mcg = 1 mg）。
- **oz 类型**：表中盎司为金衡盎司（贵金属专用），常衡盎司 1 oz ≈ 0.02835 kg 。
- **吨的区别**：
  - 公吨 (mt/t)：国际通用，1000 kg；
  - 短吨 (st)：美制单位，约 907 kg；
  - 长吨 (lt)：英制单位，约 1016 kg。

## 相关连接
<n-grid x-gap="12" :cols="4">
  <n-gi v-for="(file, index) in Mass" :key="index">
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