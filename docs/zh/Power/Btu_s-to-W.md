---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/Btu_s-to-W
      linkText: 英热单位每秒转瓦特
head:
  - - meta
    - name: description
      content: "提供英热单位每秒 (Btu/s) 到瓦特 (W) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "英热单位每秒转瓦特,Btu/s到W换算,功率单位换算公式,功率单位换算工具,暖通与制冷行业功率单位"
---
# 英热单位每秒 (Btu/s) 到瓦特 (W) 换算

这是关于 **英热单位每秒转瓦特** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" },
  { "label": "瓦特 (W)","value": "W" }
];
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur",
    message: '请输入数字'
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
  title:'英热单位每秒转瓦特',
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
    <n-button type="info" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 换算公式

1 英热单位每秒 (Btu/s) ≈ 1.055 千瓦 (kW) = 1055 瓦特 (W)

## 生活中的应用示例

- **空调制冷量标注**：家用空调常用 Btu/h 表示制冷能力，如 12,000 Btu/h ≈ 3.517 kW ≈ 1055 W。
- **工业加热设备功率匹配**：用于将美标 Btu/s 设备功率换算为国际标准 W 进行选型。
- **暖通系统设计**：工程师在跨国项目中需进行 Btu/s 与 W 的互换计算。

## 使用建议

- **跨标准工程设计**：适用于从北美标准（Btu/s）到国际标准（W）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W），便于统一标准。

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