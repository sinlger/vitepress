---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/
      linkText: 功率转换
  - - link: /Power/GW-to-W
      linkText: 吉瓦转瓦特
head:
  - - meta
    - name: description
      content: "提供吉瓦 (GW) 到瓦特 (W) 的单位换算公式及实际应用场景。"
  - - meta
    - name: keywords
      content: "吉瓦转瓦特, GW到W换算, 功率单位转换公式, 功率单位换算工具, 国家级能源设施功率单位"
---
# 吉瓦 (GW) 到瓦特 (W) 换算

这是关于 **吉瓦转瓦特** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "吉瓦 (GW)", "value": "GW" },
  { "label": "瓦特 (W)", "value": "W" }
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
  title:'吉瓦转瓦特',
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

1 吉瓦 (GW) = 1,000,000,000 瓦特 (W)

## 生活中的应用示例

- **核电站单机组输出功率**：如 1 GW 核电机组，即 10 亿瓦特。
- **大型光伏电站发电能力**：10 GW 光伏电站年发电量可满足 400 万户家庭用电。
- **超大规模工业基地能耗统计**：用于分析国家级电力系统中单个 GW 单位对 W 层级设备的影响。

## 使用建议

- **国家级能源设施管理**：适用于从核能系统到配电终端的能量转换计算。
- **科学计算**：使用国际单位制（瓦特 W），便于统一标准。

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