---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/W-to-Btu_s
      linkText: 瓦特转英热单位每�?
head:
  - - meta
    - name: description
      content: "提供瓦特 (W) 到英热单位每�?(Btu/s) 的单位换算公式及实际应用场景�?
  - - meta
    - name: keywords
      content: "瓦特转英热单位每�?W到Btu/s换算,功率单位换算公式,功率单位换算工具,制冷行业功率单位"
---
# 瓦特 (W) 到英热单位每�?(Btu/s) 换算

这是关于 **瓦特转英热单位每�?* 的详细介绍，并提供一个实用的 **功率单位换算工具**�?

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const convert = inject('convert')
const options =  [
  { "label": "瓦特 (W)","value": "W" },
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur",
    message: '请输入数�?
  },
  to:{
    required: true,
    trigger: "select",
    message: '请选择转换单位'
  },
  from:{
    required: true,
    trigger: "select",
    message: '请选择原始单位'
  }
}
const form = reactive({
  number:null,
  to:'',
  from:'',
  result:'',
  title:'瓦特转英热单位每�?,
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
  <n-form-item label="数�?  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="请输入要换算的数�? />
  </n-form-item>
  <n-form-item label="�? path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="请选择原始单位" />
  </n-form-item>
  <n-form-item label="�? path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="请选择换算单位" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 换算公式

1 英热单位每秒 (Btu/s) �?1055 瓦特 (W)

## 生活中的应用示例

- **空调制冷量标�?*：家用空调常�?Btu/h 表示制冷能力，如 12,000 Btu/h �?3.517 kW�?
- **工业加热设备功率**：如蒸汽锅炉的输出功率常�?Btu/s �?Btu/h 标注�?
- **暖通空调系统设�?*：工程师使用 Btu/s 来计算建筑供暖和制冷需求�?

## 使用建议

- **制冷与暖通行�?*：优先使用英热单�?(Btu/s)，便于工程计算与匹配设备参数�?
- **科学计算**：使用国际单位制（瓦�?W），便于统一标准�?

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file,index) in Power" :key="index">
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
