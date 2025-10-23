---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/W-to-ft-lb_s
      linkText: 瓦特转英尺磅每秒
head:
  - - meta
    - name: description
      content: "提供瓦特 (W) 到英尺・磅每�?(ft-lb/s) 的单位换算公式及实际应用场景�?
  - - meta
    - name: keywords
      content: "瓦特转英尺磅每秒,W到ft-lb/s换算,功率单位换算公式,功率单位换算工具,机械工程功率单位"
---
# 瓦特 (W) 到英尺・磅每�?(ft-lb/s) 换算

这是关于 **瓦特转英尺磅每秒** 的详细介绍，并提供一个实用的 **功率单位换算工具**�?

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const convert = inject('convert')
const options =  [
  { "label": "瓦特 (W)","value": "W" },
  { "label": "英尺・磅每秒 (ft-lb/s)","value": "ft-lb/s" }
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
  title:'瓦特转英尺磅每秒',
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

1 英尺・磅每秒 (ft-lb/s) �?1.356 瓦特 (W)

## 生活中的应用示例

- **小型发动机扭矩输出测�?*：如割草机引擎功率约�?5�?0 ft-lb/s�?
- **机械传动系统效率测试**：通过测量输入和输出功率评估传动系统的能量损耗�?
- **农业与工业设备动力传�?*：用于计算机械设备的实际输出功率�?

## 使用建议

- **机械工程领域**：优先使用英尺・磅每�?(ft-lb/s)，特别是在美制单位体系中�?
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
