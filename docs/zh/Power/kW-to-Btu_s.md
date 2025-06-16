---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/
      linkText: 功率转换
  - - link: /Power/kW-to-Btu_s
      linkText: 千瓦转英热单位每秒
head:
  - - meta
    - name: description
      content: "提供千瓦 (kW) 到英热单位每秒 (Btu/s) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "千瓦转英热单位每秒, kW到Btu/s换算, 功率单位转换公式, 功率单位换算工具, 制冷与暖通行业单位"
---
# 千瓦 (kW) 到英热单位每秒 (Btu/s) 换算

这是关于 **千瓦转英热单位每秒** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "千瓦 (kW)", "value": "kW" },
  { "label": "英热单位每秒 (Btu/s)", "value": "Btu/s" }
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
  title:'千瓦转英热单位每秒',
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

1 英热单位每秒 (Btu/s) ≈ 1.055 千瓦 (kW)

## 生活中的应用示例

- **空调制冷量标注**：家用空调常用 Btu/h 表示制冷能力，如 12,000 Btu/h ≈ 3.517 kW。
- **工业加热设备功率匹配**：用于将美标 Btu/s 设备功率转换为国际标准 kW 进行选型。
- **暖通系统设计**：工程师在跨国项目中需进行 kW 与 Btu/s 的互换计算。

## 使用建议

- **跨标准工程设计**：适用于从欧洲 kW 标准到北美 Btu/s 标准的功率转换。
- **科学计算**：使用国际单位制（瓦特 W 或千瓦 kW），便于统一标准。

## 相关连接
<n-grid x-gap="12" :cols="3">
  <n-gi v-for="(file, index) in Power" :key="index">
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