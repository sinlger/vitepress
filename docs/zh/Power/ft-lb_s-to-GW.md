---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/ft-lb_s-to-GW
      linkText: 英尺磅每秒转吉瓦
head:
  - - meta
    - name: description
      content: "提供英尺・磅每秒 (ft-lb/s) 到吉瓦 (GW) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "英尺磅每秒转吉瓦,ft-lb/s到GW换算,功率单位换算公式,功率单位换算工具,超大规模能源与机械系统功率单位"
---
# 英尺・磅每秒 (ft-lb/s) 到吉瓦 (GW) 换算

这是关于 **英尺磅每秒转吉瓦** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英尺・磅每秒 (ft-lb/s)","value": "ft-lb/s" },
  { "label": "吉瓦 (GW)","value": "GW" }
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
  title:'英尺磅每秒转吉瓦',
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

1 吉瓦 (GW) ≈ 737,562,340 英尺・磅每秒 (ft-lb/s)

## 生活中的应用示例

- **核电站输出功率统计**：单机组容量可达 1 GW，即约 7.3756 亿 ft-lb/s。
- **大型光伏电站发电能力分析**：如 10 GW 光伏电站年发电量可满足 400 万户家庭用电。
- **跨国电网能耗调度**：用于将多个 GW 级发电站整合为 ft-lb/s 单位进行精细负载分配。

## 使用建议

- **跨标准能量系统管理**：适用于从国际单位（GW）到美制单位（ft-lb/s）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W 或兆瓦 MW），便于统一标准。

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