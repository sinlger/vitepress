---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率转换
  - - link: /Power/Btu_s-to-ft-lb_s
      linkText: 英热单位每秒转英尺磅每秒
head:
  - - meta
    - name: description
      content: "提供英热单位每秒 (Btu/s) 到英尺・磅每秒 (ft-lb/s) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "英热单位每秒转英尺磅每秒,Btu/s到ft-lb/s换算,功率单位转换公式,功率单位换算工具,暖通与机械工程功率单位"
---
# 英热单位每秒 (Btu/s) 到英尺・磅每秒 (ft-lb/s) 换算

这是关于 **英热单位每秒转英尺磅每秒** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" },
  { "label": "英尺・磅每秒 (ft-lb/s)","value": "ft-lb/s" }
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
  title:'英热单位每秒转英尺磅每秒',
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

## 换算公式

1 英热单位每秒 (Btu/s) ≈ 778.17 英尺・磅每秒 (ft-lb/s)

## 生活中的应用示例

- **小型发动机扭矩输出评估**：如割草机引擎功率约为 5–10 ft-lb/s，对应约 6.78–13.56 W 或 0.0092–0.0184 PS。
- **美制机械系统功率匹配**：用于将暖通设备以 Btu/s 表示的功率转换为 ft-lb/s 进行北美市场设备选型。
- **农业与工程机械动力对比**：在设计液压泵或空气压缩机时，需进行 Btu/s 与 ft-lb/s 的互换计算。

## 使用建议

- **跨标准机械系统分析**：适用于从北美标准（Btu/s）到美制单位（ft-lb/s）的能量转换计算。
- **科学计算**：使用国际单位制（瓦特 W 或千瓦 kW），便于统一标准。

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file,index) in Power" :key="index">
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