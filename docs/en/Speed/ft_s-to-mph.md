---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: Home
  - - link: /Speed/
      linkText: Speed Unit Conversion
  - - link: /Speed/index
      linkText: Speed Unit Conversion
head:
  - - meta
    - name: description
      content: Feet per second to miles per hour conversion tool, detailed explanation of ft/s and mph conversion formulas. How to convert feet per second to miles per hour? What is the ft/s to mph conversion formula? Provides conversion between speed units such as ft/s, mph, km/h, m/s, supporting US customary speed unit conversion.
  - - meta
    - name: keywords
      content: speed unit conversion, feet per second to miles per hour, ft/s to mph, fps to mph, ft/sec to mph, feet per second to miles per hour, speed units, feet per second, miles per hour, mph to ft/s, ft/s to km/h, m/s to ft/s, speed conversion, speed unit conversion, US customary speed units
---
# Feet per Second to Miles per Hour | ft/s and mph Speed Unit Conversion Tool
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Speed } from '../files';
const convert = inject('convert')
const options =  [
  { "label": "Miles per Hour (mph)", "value": "mph" },
  { "label": "Feet per Second (ft/s)", "value": "ft/s" },
  { "label": "Kilometers per Hour (km/h)", "value": "km/h" },
  { "label": "Meters per Second (m/s)", "value": "m/s" },
  { "label": "Knot (knot)", "value": "knot" },
  { "label": "Inches per Hour (in/h)", "value": "in/h" },
  { "label": "Millimeters per Hour (mm/h)", "value": "mm/h" }
];
const seoKey = ['Speed Unit Conversion','ft/s to mph','fps to mph','ft/sec to mph','feet per second to miles per hour','ft/s conversion to mph','feet per second to miles per hour','US customary speed units','mph to ft/s','ft/s to km/h','m/s to ft/s']
const formRef = ref(null);
const rules = {
  number:{
    required: true,
    type: 'number',
    trigger: "blur",
    message: 'Please enter a number'
  },
  to:{
    required: true,
    trigger: "select",
    message: 'Please select conversion unit'
  },
  from:{
    required: true,
    trigger: "select",
    message: 'Please select original unit'
  }
}
const form = reactive({
  number:null,
  to:'mph',
  from:'ft/s',
  result:'',
  title:'Feet per Second to Miles per Hour',
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
  <n-form-item label="Value"  path="number">
    <n-input-number size="large" style="width:100%" :min="0" v-model:value="form.number"   placeholder="Enter the value to convert" />
  </n-form-item>
  <n-form-item label="From" path="from">
    <n-select  size="large" :options="options" v-model:value="form.from" placeholder="Select original unit" />
  </n-form-item>
  <n-form-item label="To" path="to">
    <n-select  size="large" :options="options" v-model:value="form.to" placeholder="Select conversion unit" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" style="width:100%" @click="convertHandler">Convert</n-button>
  </n-form-item>
</n-form>
<n-card embedded :bordered="false" hoverable style="margin-top: 16px;">
  <template #header>
    <div style="text-align:center;font-size:16px;color:#666;">
      {{form.title}}
    </div>
  </template>
  <div style="text-align:center;font-size:20px;">
    <strong>{{form.result}}</strong>
  </div>
  <template #footer>
    <div style="text-align:center;font-size:12px;color:#999;">
      <span v-for="(keyword, index) in seoKey" :key="index">
        {{keyword}}<span v-if="index < seoKey.length - 1"> | </span>
      </span>
    </div>
  </template>
</n-card>


## I. Speed Unit Conversion Table (Based on 1 ft/s)

| Unit | Symbol | Conversion Value | Typical Application Scenarios |
|------|--------|------------------|------------------------------|
| Feet per second | ft/s | 1 | US engineering, fluid dynamics (1 ft/s = base unit) |
| Miles per hour | mph | 0.681818 | US vehicle speed, traffic signs (1 ft/s ≈ 0.682 mph) |
| Kilometers per hour | km/h | 1.09728 | International vehicle speed, weather forecasts (1 ft/s ≈ 1.097 km/h) |
| Meters per second | m/s | 0.3048 | Physics, engineering calculations (1 ft/s = 0.3048 m/s) |
| Knot | knot | 0.592484 | Maritime, aviation (1 ft/s ≈ 0.592 knot) |
| Inches per hour | in/h | 43,200 | Geological settlement monitoring (1 ft/s = 43,200 in/h) |
| Millimeters per hour | mm/h | 1,097,280 | Material corrosion rate, extremely slow processes |

Note: Conversion formula examples → ft/s to mph: (mph = ft/s × 0.681818); mph to ft/s: (ft/s = mph ÷ 0.681818).

## II. Detailed Conversion Formula between ft/s and mph

### How to Convert between Feet per Second and Miles per Hour?

**Basic Conversion Formulas:**
- **ft/s to mph:** mph = ft/s × 0.681818
- **mph to ft/s:** ft/s = mph ÷ 0.681818

**Formula Derivation Process:**
1. 1 mile = 5280 feet (US standard)
2. 1 hour = 3600 seconds
3. 1 ft/s = 1 × 3600 ÷ 5280 mph = 0.681818 mph

### How Many Miles per Hour is 1 Foot per Second?

**Precise Answer:** 1 ft/s = 0.681818 mph

**Common Speed Conversion Examples:**
- 1 ft/s = 0.682 mph
- 5 ft/s = 3.409 mph
- 10 ft/s = 6.818 mph
- 20 ft/s = 13.636 mph
- 50 ft/s = 34.091 mph

### ft/s to mph Conversion Explained

**Definition of Feet per Second Speed:**
- **1 ft/s = 0.681818 mph**
- **Engineering Application:** In US engineering calculations, fluid velocity is commonly expressed in ft/s
- **Traffic Application:** In US traffic, the standard unit for vehicle speed is mph

### Quick Mental Calculation Tips

**ft/s to mph Mental Calculation:**
1. **Precise Calculation:** ft/s × 0.681818 = mph
2. **Approximate Calculation:** ft/s × 0.68 ≈ mph (error about 0.3%)
3. **Memory Point:** 10 ft/s ≈ 6.8 mph

**mph to ft/s Mental Calculation:**
1. **Precise Calculation:** mph ÷ 0.681818 = ft/s
2. **Approximate Calculation:** mph × 1.47 ≈ ft/s (quick estimation)
3. **Memory Point:** 7 mph ≈ 10 ft/s

## III. Feet per Second Unit Overview: From Engineering to Traffic

### Historical Origin of Feet per Second

**Origin of ft/s (feet per second):**
- **Historical Background:** An important component of the Imperial unit system, originating in Britain
- **Engineering Application:** Widely used speed unit in the US engineering field
- **Standardization:** In 1959, the international foot was defined as 0.3048 meters

### Why is ft/s Commonly Used in US Engineering?

**Engineering Fields:**
- **Fluid Dynamics:** Pipe flow velocity, pumping speed calculations
- **Construction Engineering:** Wind speed analysis, structural dynamics
- **Mechanical Engineering:** Conveyor belt speed, mechanical motion analysis

**Traffic Applications:**
- **Speed Conversion:** US engineers need to convert ft/s to mph
- **US Standard:** mph is the standard for traffic in the US
- **Safety Analysis:** Speed conversion in traffic accident analysis

### Modern Application Scenarios of ft/s

**Industrial Applications:**
- Production line conveyor belt speed
- Fan blade tip speed
- Liquid transport pipeline flow velocity

**Traffic Engineering:**
- Vehicle collision test speed
- Road design reference speed
- Traffic flow analysis

**Scientific Measurement:**
- Laboratory fluid testing
- Material impact testing
- Environmental monitoring equipment

### 冷知识：ft/s在不同领域的速度

- **人类行走速度：** 约4-5 ft/s（约2.7-3.4 mph）
- **自行车骑行：** 约15-20 ft/s（约10.2-13.6 mph）
- **汽车市区行驶：** 约44 ft/s（约30 mph）
- **高速公路限速：** 约88 ft/s（约60 mph）

## 四、速度单位详解：ft/s、fps等缩写含义

### 常见速度单位缩写对照

| 英文缩写 | 英文全称 | 中文名称 | 换算关系（相对于1 ft/s） |
|----------|----------|----------|-------------------------|
| **ft/s** | feet per second | 英尺每秒 | 1 |
| **fps** | feet per second | 英尺每秒 | 1 |
| **ft/sec** | feet per second | 英尺每秒 | 1 |
| **mph** | miles per hour | 英里每小时 | 0.681818 |
| **km/h** | kilometers per hour | 千米每小时 | 1.09728 |
| **kph** | kilometers per hour | 千米每小时 | 1.09728 |
| **m/s** | meters per second | 米每秒 | 0.3048 |
| **knot** | knot | 节 | 0.592484 |

### ft/s的不同表示方法

**正式写法：**
- ft/s（最常用的标准写法）
- fps（工程领域常用简写）
- ft/sec（完整时间单位写法）

**注意事项：**
- ✅ 正确：ft/s, fps, ft/sec
- ❌ 错误：ft/second（混合简写和全写）
- ✅ 正确：feet per second（完整英文表达）
- ❌ 错误：foot per second（单复数错误）

### 速度单位使用场景

**工程计算：** ft/s, fps（美国工程）
**交通运输：** mph（美国标准）, km/h（国际标准）
**流体力学：** ft/s（美国标准）, m/s（国际标准）
**建筑工程：** ft/s（风速、流速）
**科学研究：** m/s（国际单位制标准）
**航海航空：** knot（国际标准）

### 重要提醒

**单位使用注意事项：**
1. **美国工程：** 广泛使用ft/s，特别是流体力学领域
2. **美国交通：** 优先使用mph（美国标准）
3. **科学研究：** 必须使用m/s（SI基本单位）
4. **跨国项目：** 需要明确单位制，避免换算错误

**换算精度要求：**
- **高精度计算：** 使用完整换算系数（0.681818）
- **工程估算：** 可使用近似值（0.68）
- **快速心算：** 记住关键换算点（10 ft/s ≈ 6.8 mph）

## 五、实际应用中的ft/s速度换算场景

### 流体工程
- **管道流速：** 给水管道流速5 ft/s = 3.409 mph
- **泵送系统：** 离心泵出口速度15 ft/s = 10.227 mph
- **通风系统：** 风管内风速8 ft/s = 5.455 mph

### 交通工程
- **车速分析：** 碰撞试验速度30 ft/s = 20.455 mph
- **道路设计：** 设计参考速度60 ft/s = 40.909 mph
- **交通流量：** 车流平均速度25 ft/s = 17.045 mph

### 机械设计
- **传送带速度：** 生产线传送带3 ft/s = 2.045 mph
- **旋转机械：** 叶轮叶片尖端速度100 ft/s = 68.182 mph
- **液压系统：** 液压缸活塞速度2 ft/s = 1.364 mph

### 环境监测
- **风速测量：** 环境监测站风速25 ft/s = 17.045 mph
- **水流监测：** 河流流速4 ft/s = 2.727 mph
- **空气质量：** 烟囱排放速度30 ft/s = 20.455 mph

## 六、常见问题 FAQ

### Q1: 1英尺每秒等于多少英里每小时？
**A1**: 1 ft/s = 0.681818 mph（精确值）。这是因为1英里 = 5280英尺，1小时 = 3600秒，所以1 ft/s = 3600 ÷ 5280 = 0.681818 mph。

### Q2: ft/s to mph怎么换算？
**A2**: ft/s转mph的换算方法：
- **公式：** mph = ft/s × 0.681818
- **示例：** 10 ft/s = 10 × 0.681818 = 6.818 mph
- **记忆技巧：** ft/s × 0.68 ≈ mph（近似值，误差约0.3%）

### Q3: mph转ft/s的公式是什么？
**A3**: mph转ft/s的公式是：ft/s = mph ÷ 0.681818。例如：30 mph = 30 ÷ 0.681818 ≈ 44.0 ft/s。

### Q4: 如何快速进行ft/s和mph换算？
**A4**: 快速换算技巧：
- **ft/s转mph：** ft/s × 0.68 ≈ mph（误差约0.3%）
- **mph转ft/s：** mph × 1.47 ≈ ft/s（快速估算）
- **记忆要点：** 10 ft/s ≈ 6.8 mph

### Q5: ft/s换算时需要注意什么？
**A5**: 注意事项包括：
- 确认使用的是美制英里（5280英尺）标准
- 区分ft/s和mph的应用场景
- 工程计算通常保留2-3位小数
- 注意单位一致性，避免混用不同单位制

### Q6: 为什么1 ft/s等于0.681818 mph？
**A6**: 因为：
- 1英里 = 5280英尺（美制标准定义）
- 1小时 = 3600秒
- 1 ft/s = 3600秒 ÷ 5280英尺 = 0.681818 mph

### Q7: fps和ft/s有什么区别？
**A7**: fps和ft/s的区别：
- **ft/s：** 标准的分数形式写法
- **fps：** feet per second的缩写形式
- **实质相同：** 两者表示完全相同的单位
- **使用场景：** ft/s更正式，fps在工程中常用

### Q8: 英尺每秒在哪些领域使用？
**A8**: ft/s的使用场景：
- **美国工程：** 流体力学、机械设计
- **建筑工程：** 风速分析、通风系统
- **工业应用：** 传送带速度、生产线
- **交通分析：** 车速换算、碰撞试验

### Q9: ft/s和mph哪个更常用？
**A9**: 使用场景对比：
- **ft/s：** 美国工程、流体力学、建筑工程
- **mph：** 美国交通标准、汽车工业、日常生活
- **选择建议：** 交通应用优先使用mph，美国工程可用ft/s

### Q10: 速度单位有哪些？
**A10**: 常见速度单位包括：
- **英尺每秒(ft/s)：** 美国工程常用，1 ft/s = 0.682 mph
- **英里每小时(mph)：** 美国交通标准
- **千米每小时(km/h)：** 国际交通标准
- **米每秒(m/s)：** 国际标准单位

### Q11: ft/s转km/h怎么算？
**A11**: ft/s转km/h的换算：
- **公式：** km/h = ft/s × 1.09728
- **示例：** 20 ft/s = 20 × 1.09728 ≈ 21.95 km/h
- **记忆技巧：** ft/s × 1.1 ≈ km/h

### Q12: 为什么美国交通要用mph而不用ft/s？
**A12**: 使用mph的原因：
- **实用便利：** mph数值适合日常车速表示
- **历史传统：** 美国交通法规基于mph制定
- **通用性：** 避免与工程单位混淆
- **安全标准：** 车速表和交通标志统一使用mph

### Q13: ft/s在工程中的典型应用？
**A13**: ft/s的工程应用：
- **流体力学：** 管道流速、泵送速度
- **建筑工程：** 风速分析、通风设计
- **机械工程：** 传送带速度、机械运动
- **环境工程：** 空气流速、水流监测
- **材料科学：** 冲击试验、变形速率

## 七、相关连接


<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Speed" :key="index">
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