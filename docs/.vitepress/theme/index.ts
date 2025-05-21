import DefaultTheme from 'vitepress/theme'
import vuetify from './vuetify'
import Feature from './components/Feature.vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('Feature' , Feature)
  }
  // ...DefaultTheme, //或者这样写也可
}