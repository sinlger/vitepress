---
sidebar: false
aside: false
lastUpdated: false
breadcrumb: 
  - - link: /
      linkText: 首页
  - - link: /Voltage/index
      linkText: 电压换算
  - - link: /Voltage/index
      linkText: 电压单位换算
head:
  - - meta
    - name: description
      content: 电压单位换算工具 - 伏特(V)、毫伏(mV)、千伏(kV)之间的相互转换
  - - meta
    - name: keywords
      content: 电压换算,伏特换算,毫伏换算,千伏换算,V转mV,mV转kV,电压单位转换,伏特转换器,电压计算器,电压单位表,电压换算公式
---
# 时间单位换算
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Voltage } from '../../files';
const convert = inject('convert')
const options =  [
  { label: '伏特', value: 'V' },
  { label: '毫伏', value: 'mV' },
  { label: '千伏', value: 'kV' }
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
  title:'电压单位转换',
})
const convertHandler = (e) => {
   e.preventDefault;
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

### 一、单位定义与用途

  * V（Volt，伏特）

    * 是国际主单位，表示电势差或电压。
    * 常见场景：干电池（1.5V）、手机充电器（5V）、家用插座（220V/110V）。

  * mV（毫伏）

    * 1mV=0.001V（千分之一伏特）。
    * 用途：测量微弱电信号，如生物电（心电图）、传感器输出、音频设备信号。

  * kV（千伏）

    * 1kV=1000V（一千伏特）。
    * 用途：高压输电（如110kV、220kV电网）、工业设备绝缘测试。

### 二、单位换算关系

电压单位采用千进制转换，核心公式如下：

换算方向| 公式| 示例
---|---|---
kV→V| 1kV=1000V| 0.5kV=500V
V→mV| 1V=1000mV| 2V=2000mV
mV→μV（微伏）| 1mV=1000μV| 5mV=5000μV
逆向换算| | |
mV→V| 1mV=0.001V| 600mV=0.6V
V→kV| 1V=0.001kV| 800V=0.8kV
μV→mV| 1μV=0.001mV| 100μV=0.1mV

  * **快速记忆口诀** ：“kV到V加3零，V到mV加3零；逆向换算去3零，单位变化要记清。”

### 三、实际应用与注意事项

  * **安全电压分级（依据国际标准）**
    * ≤42V（安全电压，如手持工具）
    * 220V~380V（低压供电，家庭/工业）
    * ≥1000V（高压，需专业防护）

  * **工程中的特殊单位**
    * dBm（分贝毫瓦）：用于信号强度，与电压的转换需结合电阻（如50Ω系统），例如0dBm（1mW）在50Ω系统中≈224mV。

  * **常见误区纠正**
    * 错误：“1MV（兆伏）=0.001V”→正确：1MV=1,000,000V。
    * kV与kVA的区别：kV是电压单位，kVA是视在功率单位（kVA=kV×A）。


## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Voltage" :key="index">
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