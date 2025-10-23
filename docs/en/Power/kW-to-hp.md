---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/kW-to-hp
      linkText: 千瓦转英制马�?
head:
  - - meta
    - name: description
      content: "专业的千�?kW)到英制马�?hp)功率单位换算工具，提供精确的kW转hp计算公式和实时换算功能。涵盖汽车发动机、船舶动力、工业机械等应用场景，支持美系设备功率计算、国际贸易技术对接、机械设备选型等专业需求�?
  - - meta
    - name: keywords
      content: "千瓦转英制马�?kW到hp换算,功率单位换算,hp是什么单�?千瓦单位,功率计算公式,英制马力,汽车发动机功�?船舶动力,工业机械功率,美系设备功率,机械设备选型,国际贸易技�?
---
# 千瓦 (kW) 到英制马�?(hp) 换算

千瓦(kW)到英制马�?hp)的功率单位换算是国际贸易和跨标准工程应用中的重要计算。本工具提供精确的kW转hp换算功能，支持汽车发动机功率对比、船舶动力系统设计、美系工业设备选型等专业应用。广泛用于汽车工程、船舶制造、工业机械、石油化工等领域的功率计算和技术对接�?

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  '千瓦转英制马�?,
  'kW到hp换算',
  'hp是什么单�?,
  '千瓦单位',
  '功率计算公式',
  '英制马力',
  '汽车发动机功�?,
  '船舶动力',
  '工业机械功率',
  '美系设备功率',
  '机械设备选型',
  '国际贸易技�?
]
const convert = inject('convert')
const options =  [
  { "label": "千瓦 (kW)","value": "kW" },
  { "label": "英制马力 (hp)","value": "hp" }
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
  title:'千瓦转英制马�?,
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
  title="千瓦(kW)到英制马�?hp)换算�?
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
- 1 英制马力 (hp) = 0.7457 千瓦 (kW)
- 1 千瓦 (kW) = 1.341 英制马力 (hp)
- 1 英制马力 (hp) = 745.7 瓦特 (W)

**计算公式�?*
- hp = kW × 1.341
- kW = hp × 0.7457

**常用数值对照表�?*
| 千瓦 (kW) | 英制马力 (hp) | 应用场景 |
|-----------|---------------|----------|
| 1 kW | 1.34 hp | 小型电机 |
| 10 kW | 13.4 hp | 家用发电�?|
| 50 kW | 67.1 hp | 小型船舶发动�?|
| 100 kW | 134.1 hp | 中型工业设备 |
| 200 kW | 268.2 hp | 汽车发动�?|
| 500 kW | 670.5 hp | 大型船舶发动�?|

## 工程应用示例

### 汽车工程设计
- **发动机功率标�?*：美系汽车发动机300 hp (224 kW)，用于北美市场技术规�?
- **电动汽车功率对比**：特斯拉Model S 670 hp (500 kW)，用于国际市场功率对�?
- **混合动力系统**：丰田普锐斯电机80 hp (60 kW)，用于混动系统功率计�?

### 船舶动力工程
- **游艇发动机选型**�?0英尺游艇主机400 hp (298 kW)，用于船舶动力匹�?
- **商用船舶设计**：集装箱船主�?0000 hp (14914 kW)，用于大型船舶设�?
- **渔船动力配置**：近海渔船柴油机150 hp (112 kW)，用于渔业装备选型

### 工业机械工程
- **压缩机功率计�?*：螺杆式空压�?00 hp (149 kW)，用于工厂设备选型
- **泵站设备设计**：离心泵电机100 hp (75 kW)，用于水处理系统设计
- **发电机组配置**：柴油发电机500 hp (373 kW)，用于备用电源系统设�?

## 使用建议

### 工程设计规范
- **美系设备选型**：进口美国设备时使用hp单位，便于技术对接和规格匹配
- **汽车工程项目**：北美市场车型开发使用hp标注，欧洲市场使用kW标注
- **船舶设计标准**：美国船级社(ABS)认证使用hp，国际海事组�?IMO)使用kW

### 技术文档标�?
- **国际贸易合同**：设备采购合同中功率规格需要双单位标注(kW/hp)
- **技术规格书**：跨国项目技术文档建议同时提供kW和hp数�?
- **认证测试报告**：美国EPA认证使用hp，欧盟CE认证使用kW

### 计算精度要求
- **精确计算**：保留小数点�?位，�?34.10 hp
- **工程估算**：可保留整数，如134 hp
- **安全系数**：设备选型时建议预�?0-20%功率余量

## 常见问题 (FAQ)

**Q: hp是什么单位？**
A: hp是英制马�?Horsepower)的缩写，是功率单位，1 hp = 745.7瓦特，主要用于美国、英国等国家的汽车、船舶、工业设备功率标注�?

**Q: 1千瓦等于多少英制马力�?*
A: 1千瓦(kW) = 1.341英制马力(hp)，这是国际单位制与英制单位间的标准换算关系�?

**Q: 汽车发动机功率为什么用hp�?*
A: 北美汽车市场传统使用英制单位，发动机功率习惯用hp标注，便于消费者理解和市场推广�?

**Q: hp和PS有什么区别？**
A: hp是英制马�?1 hp = 745.7W)，PS是公制马�?1 PS = 735.5W)，hp比PS略大�?.4%�?

**Q: 船舶发动机功率用什么单位？**
A: 美国船舶使用hp，欧洲船舶使用kW，国际海事组�?IMO)标准使用kW，具体看船舶注册地和认证标准�?

**Q: 工业设备选型时如何换算？**
A: 美系设备规格书用hp，选型时需换算为kW对比，建议预�?0-20%功率余量确保设备可靠运行�?

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
