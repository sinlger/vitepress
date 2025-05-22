import DefaultTheme from 'vitepress/theme'
import vuetify from './vuetify'
import layout from './layout.vue'
import Feature from './components/Feature.vue'
export default {
  extends: DefaultTheme,
  Layout: layout,
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('Feature' , Feature)
  }
  // ...DefaultTheme, //或者这样写也可
}