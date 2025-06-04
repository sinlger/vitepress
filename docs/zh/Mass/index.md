---
sidebar: false
aside: false
lastUpdated: false
---
# 重量单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage  } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
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
    <n-input-number size="large" style="width:100%" v-model:value="form.number"   placeholder="请输入要转化的数值" />
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
<n-card :title="form.title">
{{form.result}}
</n-card>

## 单位换算表格

| 单位符号 | 单位名称 | 换算关系（以千克 kg 为基准） |
|----------|----------|-----------------------------|
| mcg      | 微克     | 1 mcg = 0.000000001 kg (10⁻⁹ kg) |  
| mg       | 毫克     | 1 mg = 0.000001 kg (10⁻⁶ kg) |  
| g        | 克       | 1 g = 0.001 kg (10⁻³ kg) | 
| kg       | 千克     | 1 kg = 1 kg（基准单位） |
| oz       | 盎司     | 1 oz ≈ 0.0311035 kg |  
| lb       | 磅       | 1 lb ≈ 0.45359 kg |  
| mt       | 公吨     | 1 mt = 1000 kg |  
| st       | 短吨     | 1 st ≈ 907.1847 kg |  
| t        | 公吨     | 1 t = 1000 kg（与 mt 等价） | 

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