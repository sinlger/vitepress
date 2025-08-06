---
sidebar: false
aside: false
lastUpdated: false
breadcrumb:
  - - link: /
      linkText: 首页
  - - link: /Length/index
      linkText: 长度换算
  - - link: /Length/Kilometer-to-Yard
      linkText: 千米到码
head:
  - - meta
    - name: description
      content: "千米 (km) 到码 (yd) 的长度单位换算指南。了解如何通过公式 yd = km × 1093.6 换算为码。"
  - - meta
    - name: keywords
      content: "长度, 单位换算, 千米, 码, km, yd, 千米到码, 长度换算指南"
---
# 千米 (km) 到 码 (yd) 的换算
---
<script setup>
import { onMounted, reactive, inject, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NInputNumber, NSelect, NCard, useMessage,NGrid ,NGi } from 'naive-ui'
import { defineClientComponent } from 'vitepress'
import { Length } from '../../files';
const seoKey = ['单位转换器','单位换算','长度单位转换器','长度单位转换','尺寸换算','长度单位换算','长度单位换算表','一海里等于多少公里','一英里等于多少米','miles','海里和公里怎么换算','mile','一英里等于多少公里','英里和公里换算','米换算英尺','英尺单位','英制','英尺和英寸的换算','英尺英寸','英尺和米换算','ft单位','英尺 米','一米等于多少英尺','英尺厘米换算','英寸和英尺','ft to m','呎','英尺换算米','英尺转换','ft和m换算','六英尺','英尺和米','一英尺等于多少英寸','feet 多少米','米和英尺换算','feet是什么单位','英尺换算厘米','英制单位','英尺和英寸','英寸 厘米','一英尺','一英尺等于多少米','公尺','来源','ft是什么单位','一英尺等于多少厘米','英尺和厘米的换算','英里','foot','厘米和英寸换算','英尺和米的换算','英尺换算','ft','一英寸等于多少厘米','英寸换算','英寸和厘米的换算']
const convert = inject('convert')

const form = reactive({
  number: null,
  result: '',
  title:'千米到码换算',
})

const convertHandler = () => {
  if (form.number !== null && !isNaN(form.number)) {
    const convertedValue = parseFloat(form.number) * 1093.6
    form.result = `${form.number}km = ${convertedValue.toFixed(1)}yd`
  } else {
    form.result = '请输入有效的数值。'
  }
}
</script>

<n-form size="large" :model="form">
  <n-form-item label="千米 (km)">
    <n-input-number v-model:value="form.number" placeholder="输入千米" style="width: 100%" />
  </n-form-item>
  <n-form-item>
    <n-button type="info" @click="convertHandler" block>换算</n-button>
  </n-form-item>
</n-form>

<n-card  
  :title="form.title"
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

## 实际应用

千米 (km) 和码 (yd) 是测量宏观距离和中等距离时常用的单位，在以下真实场景中非常重要：

- **体育场地建设**：
  - 田径跑道的总长度通常以千米衡量，而足球场或网球场的尺寸则使用码标注。
  - 示例：某马拉松比赛的总长度为 42.195km，等于 46,147yd。

- **制造业**：
  - 大型设备运输距离常以千米计算，但安装空间可能使用码衡量。
  - 示例：某机械零件运输距离为 200km，等于 218,720yd。

- **建筑与工程**：
  - 地图上的长距离通常以千米表示，而在国际项目中可能需要将整体尺寸换算为码。
  - 示例：某桥梁护栏长度为 100km，即 109,360yd。

- **国际物流**：
  - 在跨国运输过程中，货物的运输路径常以千米标注，但仓储空间则使用码计算。
  - 示例：某精密仪器运输路径为 500km，仓储空间为 546,800yd。

## 公式

从 **千米 (km)** 换算到 **码 (yd)** 的公式为：
$$ yd = km \times 1093.6 $$

### 示例
- 1km = 1093.6yd
- 50km = 54,680yd
- 100km = 109,360yd

## 相关连接
<n-grid x-gap="12" :cols="2">
  <n-gi v-for="(file, index) in Length" :key="index">
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