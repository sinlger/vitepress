---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Speed/
      linkText: 速度单位换算
  - - link: /Speed/index
      linkText: 速度单位单位换算
head:
  - - meta
    - name: description
      content: 英尺每秒换算英里每小时工具，ft/s和mph换算公式详解。英尺每秒转英里每小时怎么算？ft/s to mph换算公式是什么？提供ft/s、mph、km/h、m/s等速度单位换算，支持美制速度单位转换。
  - - meta
    - name: keywords
      content: 速度单位换算, 英尺每秒换算英里每小时, ft/s换算mph, ft/s to mph, fps to mph, ft/sec to mph, 英尺每秒转英里每小时, 速度单位, 英尺每秒, 英里每小时, mph to ft/s, ft/s to km/h, m/s to ft/s, 速度换算, 速度单位转换, 美制速度单位
---
# 英尺每秒换算英里每小时 | ft/s和mph速度单位换算工具
---
<script setup>
import { onMounted, reactive, inject ,ref  } from 'vue'
import { NButton,NForm ,NFormItem,NInput,NInputNumber,NSelect,NCard,useMessage ,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Speed } from '../../files';
const convert = inject('convert')
const options =  [
  { "label": "英里每小时 (mph)", "value": "mph" },
  { "label": "英尺每秒 (ft/s)", "value": "ft/s" },
  { "label": "千米每小时 (km/h)", "value": "km/h" },
  { "label": "米每秒 (m/s)", "value": "m/s" },
  { "label": "节 (knot)", "value": "knot" },
  { "label": "英寸每小时 (in/h)", "value": "in/h" },
  { "label": "毫米每小时 (mm/h)", "value": "mm/h" }
];
const seoKey = ['速度单位换算','ft/s to mph','fps to mph','ft/sec to mph','英尺每秒换算英里每小时','ft/s换算mph','英尺每秒转英里每小时','美制速度单位','mph to ft/s','ft/s to km/h','m/s to ft/s']
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
  to:'mph',
  from:'ft/s',
  result:'',
  title:'英尺每秒换算英里每小时',
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


## 一、速度单位换算表（以 1 ft/s 为基准）

| 单位       | 符号   | 换算值      | 典型应用场景             |
|------------|--------|-------------|-------------------------|
| 英尺每秒   | ft/s   | 1           | 美国工程、流体力学（1 ft/s = 基准单位） |
| 英里每小时 | mph    | 0.681818    | 美国车速、交通标志（1 ft/s ≈ 0.682 mph） |
| 千米每小时 | km/h   | 1.09728     | 国际车速、天气预报（1 ft/s ≈ 1.097 km/h） |
| 米每秒     | m/s    | 0.3048      | 物理学、工程计算（1 ft/s = 0.3048 m/s） |
| 节        | knot   | 0.592484    | 航海、航空（1 ft/s ≈ 0.592 knot） |
| 英寸每小时 | in/h   | 43,200      | 地质沉降监测（1 ft/s = 43,200 in/h） |
| 毫米每小时 | mm/h   | 1,097,280   | 材料腐蚀速率、极慢速过程 |

注：换算公式示例 → ft/s 转 mph: ( mph = ft/s × 0.681818 ) ；mph 转 ft/s: ( ft/s = mph ÷ 0.681818 ) 。

## 二、ft/s和mph换算公式详解

### 英尺每秒和英里每小时怎么换算？

**基础换算公式：**
- **ft/s 转 mph：** mph = ft/s × 0.681818
- **mph 转 ft/s：** ft/s = mph ÷ 0.681818

**公式推导过程：**
1. 1 英里 = 5280 英尺（美制标准）
2. 1 小时 = 3600 秒
3. 1 ft/s = 1 × 3600 ÷ 5280 mph = 0.681818 mph

### 1英尺每秒等于多少英里每小时？

**精确答案：** 1 ft/s = 0.681818 mph

**常见速度换算示例：**
- 1 ft/s = 0.682 mph
- 5 ft/s = 3.409 mph
- 10 ft/s = 6.818 mph
- 20 ft/s = 13.636 mph
- 50 ft/s = 34.091 mph

### ft/s to mph 换算详解

**英尺每秒的速度定义：**
- **1 ft/s = 0.681818 mph**
- **工程应用：** 在美国工程计算中，流体速度常用ft/s表示
- **交通应用：** 美国交通中，车速标准单位是mph

### 快速心算技巧

**ft/s 转 mph 心算法：**
1. **精确计算：** ft/s × 0.681818 = mph
2. **近似计算：** ft/s × 0.68 ≈ mph（误差约0.3%）
3. **记忆点：** 10 ft/s ≈ 6.8 mph

**mph 转 ft/s 心算法：**
1. **精确计算：** mph ÷ 0.681818 = ft/s
2. **近似计算：** mph × 1.47 ≈ ft/s（快速估算）
3. **记忆点：** 7 mph ≈ 10 ft/s

## 三、英尺每秒单位科普：从工程到交通

### 英尺每秒的历史起源

**ft/s（feet per second）的由来：**
- **历史背景：** 英制单位系统的重要组成部分，起源于英国
- **工程应用：** 美国工程界广泛采用的速度单位
- **标准化：** 1959年国际英尺定义为0.3048米

### 为什么美国工程界常用ft/s？

**工程领域：**
- **流体力学：** 管道流速、泵送速度计算
- **建筑工程：** 风速分析、结构动力学
- **机械工程：** 传送带速度、机械运动分析

**交通应用：**
- **车速换算：** 美国工程师需要将ft/s转换为mph
- **美国标准：** 美国交通使用mph作为标准
- **安全分析：** 交通事故分析中的速度换算

### ft/s在现代的应用场景

**工业应用：**
- 生产线传送带速度
- 风机叶片尖端速度
- 液体输送管道流速

**交通工程：**
- 车辆碰撞试验速度
- 道路设计参考速度
- 交通流量分析

**科学测量：**
- 实验室流体测试
- 材料冲击试验
- 环境监测设备

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