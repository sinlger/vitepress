---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/ft-lb_s-to-Btu_s
      linkText: 英尺磅每秒转英热单位每秒
head:
  - - meta
    - name: description
      content: 提供英尺・磅每秒 (ft-lb/s) 到英热单位每秒 (Btu/s) 的单位换算公式及实际应用场景。
  - - meta
    - name: keywords
      content: 英尺磅每秒转英热单位每秒,ft-lb/s到Btu/s换算,功率单位换算公式,功率单位换算工具,暖通与机械工程功率单位
---
# 英尺・磅每秒 (ft-lb/s) 到英热单位每秒 (Btu/s) 换算

这是关于 **英尺磅每秒转英热单位每秒** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英尺・磅每秒 (ft-lb/s)","value": "ft-lb/s" },
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" }
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
  title:'英尺磅每秒转英热单位每秒',
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
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
</n-card>

## 换算公式

1 英热单位每秒 (Btu/s) ≈ 778.17 英尺・磅每秒 (ft-lb/s)

## 生活中的应用示例

- **美系暖通设备功率标注**：如冷水机组以 Btu/s 表示制冷能力，而北美标准常用 ft-lb/s 进行本地化标注。
- **工业加热设备功率匹配**：用于将国际标准 Btu/s 设备功率换算为美制 ft-lb/s 进行选型。
- **跨国项目设备选型**：在进口美系压缩机或泵时，需进行 ft-lb/s 与 Btu/s 的互换计算。

## 使用建议

- **跨标准工程设计**：适用于从国际单位（Btu/s）到美制单位（ft-lb/s）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W 或千瓦 kW），便于统一标准。

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