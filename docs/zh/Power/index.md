---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/index
      linkText: 功率单位换算
head:
  - - meta
    - name: description
      content: 提供详细的功率单位换算表及生活应用场景，涵盖瓦特 (W)、毫瓦 (mW)、千瓦 (kW)、兆瓦 (MW)、吉瓦 (GW)、公制马力 (PS)、英热单位/秒 (Btu/s)、英尺・磅/秒 (ft-lb/s) 和英制马力 (hp) 的换算公式与实际应用。
  - - meta
    - name: keywords
      content: 功率单位换算,瓦特,毫瓦,千瓦,兆瓦,吉瓦,公制马力,英热单位每秒,英尺磅每秒,英制马力
---
# 功率单位换算
---
<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "瓦特 (W)","value": "W" },
  { "label": "毫瓦 (mW)","value": "mW" },
  { "label": "千瓦 (kW)","value": "kW" },
  { "label": "兆瓦 (MW)","value": "MW" },
  { "label": "吉瓦 (GW)","value": "GW" },
  { "label": "公制马力 (PS)","value": "PS" },
  { "label": "英热单位/秒 (Btu/s)","value": "Btu/s" },
  { "label": "英尺・磅/秒 (ft-lb/s)","value": "ft-lb/s" },
  { "label": "英制马力 (hp)","value": "hp" }
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
  title:'面积单位换算',
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
    <n-button type="primary" style="width:100%" @click="convertHandler">换算</n-button>
  </n-form-item>
</n-form>
<n-card  embedded :bordered="false" hoverable>
  <div  style="text-align:center">
    <h1>{{form.result}}</h1>
  </div>
</n-card>

## 功率单位换算公式表

单位 | 名称 | 定义 | 换算公式（以 W 为基准）
---|---|---|---
W | 瓦特 | 国际单位制基本单位，1 瓦特等于 1 焦耳 / 秒 | 1 W = 1 W
mW | 毫瓦 | 1 毫瓦 = 0.001 瓦特 | 1 W = 1000 mW
kW | 千瓦 | 1 千瓦 = 1000 瓦特 | 1 kW = 1000 W
MW | 兆瓦 | 1 兆瓦 = 1000 千瓦 = 1,000,000 瓦特 | 1 MW = 1000 kW = 10⁶ W
GW | 吉瓦 | 1 吉瓦 = 1000 兆瓦 = 10⁹ 瓦特 | 1 GW = 1000 MW = 10⁹ W
PS | 公制马力 | 1 公制马力 = 735.5 瓦特 | 1 PS = 735.5 W
Btu/s | 英热单位 / 秒 | 1 Btu/s ≈ 1055 瓦特 | 1 Btu/s ≈ 1055 W
ft-lb/s | 英尺・磅 / 秒 | 1 ft-lb/s ≈ 1.356 瓦特 | 1 ft-lb/s ≈ 1.356 W
hp | 英制马力 | 1 英制马力 = 745.7 瓦特 | 1 hp = 745.7 W

**换算关系链**：
* 1 GW = 1000 MW = 10⁶ kW = 10⁹ W
* 1 PS = 735.5 W 
* 1 hp = 745.7 W 
* 1 Btu/s = 1055 W 
* 1 ft-lb/s = 1.356 W 

## 生活应用场景

### 电子设备（W、mW）

  * **手机待机功率** ：约 0.1W 。
  * **蓝牙耳机发射功率** ：约 1–10mW 。
  * **传感器功耗** ：温湿度计工作功耗约 0.5mW。

### 家用电器（kW）

  * **空调制冷功率** ：1 匹空调制冷功率 ≈ 0.735kW 。
  * **电热水壶功率** ：约 1.5–2kW 。

### 电动汽车（kW）

  * **家用充电桩功率** ：7–22kW。

### 能源领域（MW、GW）

  * **核电站单机组容量** ：≈ 1,000MW（1GW）。
  * **三峡电站总装机容量** ：22.5GW 。
  * **光伏发电** ：10GW 电站年发电量可满足 400 万户家庭用电 。

### 汽车引擎（PS、hp）

  * **家用车功率** ：常标 PS（如 150PS）。
  * **美系车功率** ：多用 hp（如 200hp）。
  * **机械工具功率** ：农用拖拉机功率约 50–100hp。

### 空调制冷（Btu/s）

  * **冷吨与功率换算** ：1 冷吨 ≈ 3.517kW ≈ 12,000 Btu/h，家用空调常用 Btu/h 标注制冷量 。

### 机械工程（ft-lb/s）

  * **小型发动机扭矩输出测量** ：如割草机引擎功率 ≈ 5–10 ft-lb/s。

## 单位使用建议

  * **科学计算** ：优先使用国际单位制（W/kW/MW）。
  * **工程实践** ：
    * **能源领域** ：用 MW/GW 。
    * **机械动力** ：用 PS/hp 。
    * **制冷行业** ：用 Btu/h（需注意 1Btu/s=3,600Btu/h）。

  * **通信领域** ：无线信号功率常用 dBm（如 Wi-Fi 发射功率 ≈ 15–20dBm ≈ 32–100mW）。
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