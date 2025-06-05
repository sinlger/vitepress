---
sidebar: false
aside: false
lastUpdated: false
---
# 面积单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
const convert = inject('convert')
const options =  [
  { "label": "平方毫米", "value": "mm2" },
  { "label": "平方厘米", "value": "cm2" },
  { "label": "平方米", "value": "m2" },
  { "label": "公顷", "value": "ha" },
  { "label": "平方千米", "value": "km2" },
  { "label": "平方英寸", "value": "in2" },
  { "label": "平方英尺", "value": "ft2" },
  { "label": "英亩", "value": "ac" },
  { "label": "平方英里", "value": "mi2" }
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


这些单位分别是：
- `mm2`：平方毫米
- `cm2`：平方厘米
- `m2`：平方米
- `ha`：公顷
- `km2`：平方千米
- `in2`：平方英寸
- `ft2`：平方英尺
- `ac`：英亩
- `mi2`：平方英里

## 面积单位换算表

| 单位名称 | 符号  | 英文名称              | 换算公式（以 m² 为基准）        |
| ---- | --- | ----------------- | --------------------- |
| 平方毫米 | mm² | square millimeter | 1 mm² = 0.000001 m²   |
| 平方厘米 | cm² | square centimeter | 1 cm² = 0.0001 m²     |
| 平方米  | m²  | square meter      | 1 m² = 1 m²           |
| 公顷   | ha  | hectare           | 1 ha = 10,000 m²      |
| 平方千米 | km² | square kilometer  | 1 km² = 1,000,000 m²  |
| 平方英寸 | in² | square inch       | 1 in² ≈ 0.00064516 m² |
| 平方英尺 | ft² | square foot       | 1 ft² ≈ 0.092903 m²   |
| 英亩   | ac  | acre              | 1 ac = 4,047 m²       |
| 平方英里 | mi² | square mile       | 1 mi² = 2,590,000 m²  |


## 补充说明

### 基准单位选择

- 平方米（`m²`）是国际单位制（SI）中的标准面积单位，因此所有换算公式均以 `m²` 为基准，便于统一计算。

### 公式精确性

- 平方英寸（`in²`）和平方英尺（`ft²`）值的精确计算（例如，`1 in² = 0.0006451606243503233 m²`，简化为 `0.00064516 m²`）。
- 英亩（`ac`）和平方英里（`mi²`）（例如，`1 mi² = 2.590 km²`，或 `1 km² = 1,000,000 m²` ）。

### 常用单位间直接换算

如果需要快速参考常见单位对（如公顷到平方千米），以下是额外公式（基于表格推导）：

- 1 ha = 0.01 km²
- 1 ac ≈ 0.4047 ha
- 1 mi² ≈ 640 ac
