---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Power/index
      linkText: 功率换算
  - - link: /Power/Btu_s-to-PS
      linkText: 英热单位每秒转公制马力
head:
  - - meta
    - name: description
      content: "专业的英热单位每秒(Btu/s)到公制马力(PS)功率单位换算工具。提供精确的PS马力换算公式和计算方法。适用于欧系汽车、摩托车、船舶、工业设备等领域的功率计算，支持公制马力单位系统换算需求。"
  - - meta
    - name: keywords
      content: "英热单位每秒转公制马力,Btu/s到PS换算,功率单位换算公式,功率单位换算工具,暖通与欧系汽车工程功率单位,ps是什么单位,公制马力,PS马力,欧系汽车马力,摩托车马力,船舶马力,工业设备马力,德系汽车马力,欧洲汽车标准,公制功率单位,汽车发动机PS,摩托车发动机PS,柴油发动机PS,汽油发动机PS,涡轮增压PS,自然吸气PS,马力功率换算,发动机性能PS,动力输出PS,扭矩马力PS,机械马力PS,液压马力PS,电动马力PS,马力测试标准,欧标马力单位"
---
# 英热单位每秒 (Btu/s) 到公制马力 (PS) 换算

这是关于 **英热单位每秒转公制马力** 的详细介绍，并提供一个实用的 **功率单位换算工具**。

<script setup>
import { onMounted,reactive,inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Power } from '../files';
const seoKey = [
  '英热单位每秒转公制马力',
  'Btu/s到PS换算',
  '功率单位换算公式',
  '功率单位换算工具',
  'PS马力换算计算器',
  'ps是什么单位',
  '公制马力换算',
  '欧洲汽车功率',
  '德国汽车马力',
  '欧系车功率',
  '摩托车功率',
  '欧洲摩托车马力',
  '工业设备PS',
  '机械设备公制马力',
  '欧标功率单位',
  '国际马力标准',
  '汽车发动机PS',
  '柴油发动机公制马力',
  '汽油发动机PS',
  '涡轮增压PS',
  '电动机公制马力',
  '船舶发动机PS',
  '农机设备马力',
  '工程机械PS',
  '泵类设备公制马力',
  '压缩机PS功率',
  '发电机组PS',
  '欧洲标准功率',
  '公制功率换算'
]
const convert = inject('convert')
const options =  [
  { "label": "英热单位每秒 (Btu/s)","value": "Btu/s" },
  { "label": "公制马力 (PS)","value": "PS" }
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
  title:'英热单位每秒转公制马力',
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
<n-card  
  title="功率单位换算"
  :segmented="{
    content: true,
    footer: 'soft',
  }"
>
  <div  style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
    <template #footer>
    <div>
      <span v-for="item of seoKey">{{item}}，</span>
    </div>
  </template>
</n-card>

## 换算公式

1 公制马力 (PS) ≈ 0.7355 千瓦 (kW) ≈ 0.6963 英热单位每秒 (Btu/s)

## 生活中的应用示例

- **暖通设备功率匹配**：用于将美标 Btu/s 设备功率换算为欧洲常用 PS 进行本地化选型。
- **工业机械动力系统对比**：在进口美系压缩机或泵时，需进行 Btu/s 与 PS 的互换计算。
- **跨国项目设备选型**：如冷水机组以 Btu/s 标注，而欧洲标准常使用 PS。

## 使用建议

- **跨标准机械设备选型**：适用于从北美单位（Btu/s）到欧洲单位（PS）的能量换算计算。
- **科学计算**：使用国际单位制（瓦特 W 或千瓦 kW），便于统一标准。

## 功率单位在欧洲汽车与工业设备中的应用场景

了解Btu/s和PS在欧洲标准设备中的实际应用有助于更好地理解公制马力换算的重要性：

### 欧洲汽车工业

**公制马力(PS)在欧洲汽车中的应用：**
  * **德系豪华车**：奔驰、宝马、奥迪发动机功率通常标注为150-600PS
  * **欧洲跑车**：保时捷、法拉利、兰博基尼等超跑功率可达500-1000PS
  * **欧系家用车**：大众、标致、雷诺等品牌发动机功率为80-300PS
  * **欧洲商用车**：奔驰、沃尔沃、斯堪尼亚卡车发动机功率为300-700PS

### 摩托车与两轮车

**欧洲摩托车的功率标准：**
  * **大排量摩托车**：宝马、杜卡迪、KTM等品牌功率为100-200PS
  * **中排量街车**：欧洲600-800cc摩托车功率通常为80-120PS
  * **踏板摩托车**：欧洲大踏板功率为15-60PS，城市通勤车为5-20PS
  * **电动摩托车**：欧洲电动摩托车功率为20-150PS，高端产品可达200PS

### 工业与农业机械

**欧洲工业设备的PS标准：**
  * **农业拖拉机**：欧洲农机品牌如芬特、道依茨功率为50-500PS
  * **工程机械**：利勃海尔、沃尔沃建机等设备功率为100-800PS
  * **船舶发动机**：欧洲船用柴油机功率从几十PS到数万PS
  * **发电设备**：欧洲柴油发电机组功率为20-5000PS

### 工业泵类与压缩机

**欧洲工业设备的功率配置：**
  * **工业水泵**：欧洲品牌离心泵功率为5-1000PS
  * **空气压缩机**：欧洲螺杆压缩机功率为10-500PS
  * **风机设备**：欧洲工业风机功率为10-2000PS
  * **液压设备**：欧洲液压站功率为5-300PS

## 常见问题解答 (FAQ)

### 基础概念问题

**Q: PS是什么单位？**
A: PS是公制马力(Pferdestärke)的缩写，是功率单位。1PS≈735.5瓦特，主要在欧洲使用，与英制马力(hp)略有不同。

**Q: Btu/s是什么单位？**
A: Btu/s是英热单位每秒的缩写，表示每秒钟产生或消耗的热能。1 Btu/s ≈ 1.434 PS，常用于暖通空调系统。

**Q: 英热单位每秒转公制马力的换算公式是什么？**
A: 1 PS ≈ 0.6971 Btu/s。换算公式：PS = Btu/s ÷ 0.6971

### 汽车功率问题

**Q: PS和hp有什么区别？**
A: PS是公制马力，hp是英制马力。1PS≈0.9863hp。欧洲车型通常用PS标注，美系车用hp，差异约1.4%。

**Q: 为什么欧洲汽车喜欢用PS而不是kW？**
A: 虽然kW是国际标准，但PS在欧洲汽车工业有悠久历史，消费者更熟悉。现在很多车型会同时标注PS和kW。

**Q: 如何比较不同标准的汽车功率？**
A: 统一换算为同一单位进行比较。例如：200PS≈197hp≈147kW。注意测试标准也可能不同。

### 工业设备问题

**Q: 欧洲工业设备为什么使用PS标注功率？**
A: 欧洲工业传统使用公制单位，PS是公制马力，与欧洲的度量衡体系一致，便于工程师理解和计算。

**Q: 如何选择合适PS功率的工业设备？**
A: 根据实际工况计算所需功率，选择比计算值大20-30%的设备。注意区分额定功率和最大功率。

**Q: 农业机械的PS功率如何影响作业效率？**
A: 功率越大，牵引力和作业速度越高，但也要考虑燃油经济性和作业精度。合适的功率匹配最重要。

### 换算计算问题

**Q: 如何将暖通系统的Btu/s换算为欧洲设备的PS？**
A: 使用换算公式：PS = Btu/s ÷ 0.6971。这个换算帮助选择合适的欧洲品牌设备。

**Q: PS、kW、hp之间如何快速换算？**
A: 记住关键比例：1PS≈0.735kW≈0.986hp。或使用在线换算工具进行精确计算。

**Q: 电机功率标注PS和kW有什么实际意义？**
A: PS更直观易懂，kW便于电力计算。现代设备通常同时标注两种单位，满足不同用户需求。

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