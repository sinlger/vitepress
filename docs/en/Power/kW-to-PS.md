---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/kW-to-PS
      linkText: 千瓦转公制马�?
head:
  - - meta
    - name: description
      content: "专业的千�?kW)到公制马�?PS)功率单位换算工具，提供精确的kW转PS计算公式和实时换算功能。涵盖汽车发动机、农业机械、工业设备等应用场景，支持欧系设备功率计算、汽车工程设计、机械设备选型等专业需求�?
  - - meta
    - name: keywords
      content: "千瓦转公制马�?kW到PS换算,功率单位换算,PS是什么单�?千瓦单位,功率计算公式,公制马力,汽车发动机功�?农业机械功率,工业设备功率,欧系设备功率,汽车工程设计,机械设备选型"
---
# 千瓦 (kW) 到公制马�?(PS) 换算

千瓦(kW)到公制马�?PS)的功率单位换算是欧洲汽车工业和机械工程中的重要计算。本工具提供精确的kW转PS换算功能，支持汽车发动机功率标注、农业机械选型、欧系工业设备配置等专业应用。广泛用于汽车工程、农业机械、工业制造、能源设备等领域的功率计算和技术对接�?

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  '千瓦转公制马�?,
  'kW到PS换算',
  'PS是什么单�?,
  '千瓦单位',
  '功率计算公式',
  '公制马力',
  '汽车发动机功�?,
  '农业机械功率',
  '工业设备功率',
  '欧系设备功率',
  '汽车工程设计',
  '机械设备选型'
]
const convert = inject('convert')
const options =  [
  { "label": "千瓦 (kW)","value": "kW" },
  { "label": "公制马力 (PS)","value": "PS" }
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
  title:'千瓦转公制马�?,
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

<n-card
  title="千瓦(kW)到公制马�?PS)换算�?
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
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
  <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}�?/span>
    </div>
  </template>
</n-card>

## 换算公式

**基本换算关系�?*
- 1 公制马力 (PS) = 0.7355 千瓦 (kW)
- 1 千瓦 (kW) = 1.360 公制马力 (PS)
- 1 公制马力 (PS) = 735.5 瓦特 (W)

**计算公式�?*
- PS = kW × 1.360
- kW = PS × 0.7355

**常用数值对照表�?*
| 千瓦 (kW) | 公制马力 (PS) | 应用场景 |
|-----------|---------------|----------|
| 1 kW | 1.36 PS | 小型电机 |
| 10 kW | 13.6 PS | 家用发电�?|
| 50 kW | 68.0 PS | 小型拖拉�?|
| 100 kW | 136.0 PS | 中型汽车发动�?|
| 200 kW | 272.0 PS | 大型汽车发动�?|
| 500 kW | 680.0 PS | 大型农业机械 |

## 工程应用示例

### 汽车工程设计
- **欧系汽车发动�?*：大众TSI发动�?50 PS (110 kW)，用于欧洲市场技术规�?
- **豪华车动力系�?*：奔驰AMG发动�?30 PS (463 kW)，用于高性能车型设计
- **新能源汽�?*：保时捷Taycan电机625 PS (460 kW)，用于电动车功率标注

### 农业机械工程
- **拖拉机动力配�?*：约翰迪尔拖拉机180 PS (132 kW)，用于大型农场作�?
- **联合收割机设�?*：克拉斯收割�?50 PS (257 kW)，用于高效农业机�?
- **农用发电机组**：柴油发电机100 PS (74 kW)，用于农场备用电�?

### 工业设备工程
- **压缩机功率计�?*：阿特拉斯空压机250 PS (184 kW)，用于工业气源系�?
- **泵站设备设计**：格兰富水泵75 PS (55 kW)，用于工业供水系�?
- **风机设备选型**：西门子风机300 PS (221 kW)，用于通风系统设计

## 使用建议

### 工程设计规范
- **欧系设备选型**：进口德国、法国设备时使用PS单位，便于技术对接和规格匹配
- **汽车工程项目**：欧洲市场车型开发使用PS标注，中国市场可双单位标�?
- **农业机械标准**：欧洲农机制造商使用PS，国际贸易时需要kW换算

### 技术文档标�?
- **设备采购合同**：欧系设备采购合同中功率规格建议使用PS(kW)双标�?
- **技术规格书**：国际农机项目技术文档建议同时提供PS和kW数�?
- **认证测试报告**：欧盟CE认证使用kW，德国TÜV认证可使用PS

### 计算精度要求
- **精确计算**：保留小数点�?位，�?36.0 PS
- **工程估算**：可保留整数，如136 PS
- **功率匹配**：设备选型时建议预�?5-25%功率余量

## 常见问题 (FAQ)

**Q: PS是什么单位？**
A: PS是公制马�?Pferdestärke)的缩写，是功率单位，1 PS = 735.5瓦特，主要用于德国、法国等欧洲国家的汽车、农机、工业设备功率标注�?

**Q: 1千瓦等于多少公制马力�?*
A: 1千瓦(kW) = 1.360公制马力(PS)，这是国际单位制与欧洲公制单位间的标准换算关系�?

**Q: PS和hp有什么区别？**
A: PS是公制马�?1 PS = 735.5W)，hp是英制马�?1 hp = 745.7W)，PS比hp小约1.4%，欧洲用PS，美国用hp�?

**Q: 为什么欧洲汽车用PS�?*
A: 欧洲传统使用公制单位系统，汽车发动机功率习惯用PS标注，便于消费者理解和技术规范统一�?

**Q: 农业机械为什么用PS�?*
A: 欧洲农机制造商如约翰迪尔、克拉斯等使用PS标注拖拉机功率，已成为国际农机行业惯例�?

**Q: 设备选型时如何换算？**
A: 欧系设备规格书用PS，选型时需换算为kW对比，建议预�?5-25%功率余量确保设备可靠运行�?

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
