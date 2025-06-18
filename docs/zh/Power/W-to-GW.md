---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/W-to-GW
      linkText: 瓦特转吉瓦
head:
  - - meta
    - name: description
      content: "提供瓦特 (W) 到吉瓦 (GW) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "瓦特转吉瓦,W到GW换算,功率单位换算公式,功率单位换算工具,大型能源设施功率单位"
---
# 瓦特 (W) 到吉瓦 (GW) 换算

这是关于 **瓦特转吉瓦** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "瓦特 (W)","value": "W" },
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
  title:'瓦特转吉瓦',
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

1 吉瓦 (GW) = 1,000,000,000 瓦特 (W) = 1000 兆瓦 (MW)

## 生活中的应用示例

- **核电站输出功率**：例如，单机组容量可达 1 GW，即 10 亿瓦特。
- **大型光伏电站**：如 10 GW 电站年发电量可满足 400 万户家庭用电。
- **超大型工业基地能耗**：如钢铁厂或化工厂的总用电负荷可能达到数 GW。

## 使用建议

- **大型能源设施**：优先使用吉瓦 (GW)，例如核电站、大型太阳能电站等。
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