import { setup } from '@css-render/vue3-ssr'
import { NConfigProvider,darkTheme  } from 'naive-ui'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from "vitepress";
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import { defineComponent, h, inject } from 'vue'
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';
const { Layout } = DefaultTheme
const convert = configureMeasurements(allMeasures);
const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject('css-render-collect')
    return {
      style: collect()
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        default: () => [
          h(Layout, null, {
            default: this.$slots.default?.(),
            'doc-before': () => h(Breadcrumb),
            'doc-after': () => h(Footer),
          }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
        ]
      }
    )
  }
})

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: async ({ app }) => {
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    } else {
    }
    app.provide('convert', convert);
  }
}