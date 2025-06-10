import { setup } from '@css-render/vue3-ssr'
import { NConfigProvider,darkTheme  } from 'naive-ui'
import { useRoute } from 'vitepress'
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
const convert = configureMeasurements(allMeasures);
// const CssRenderStyle = defineComponent({
//   setup() {
//     const collect = inject('css-render-collect')
//     return {
//       style: collect()
//     }
//   },
//   render() {
//     return h('css-render-style', {
//       innerHTML: this.style
//     })
//   }
// })

// const VitepressPath = defineComponent({
//   setup() {
//     const route = useRoute()
//     return () => {
//       return h('vitepress-path', null, [route.path])
//     }
//   }
// })

// const NaiveUIProvider = defineComponent({
//   render() {
//     return h(
//       NConfigProvider,
//       { abstract: true, inlineThemeDisabled: true },
//       {
//         default: () => [
//           h(Layout, null, {
//             default: this.$slots.default?.(),
//             'doc-before': () => h(Breadcrumb),
//             'doc-after': () => h(Footer),
//           })
//         ]
//       }
//     )
//   }
// })

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp: async ({ app }) => {
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
    app.provide('convert', convert);
  }
}