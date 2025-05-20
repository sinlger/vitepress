import DefaultTheme from 'vitepress/theme'
import vuetify from './vuetify'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
  }
  // ...DefaultTheme, //或者这样写也可
}