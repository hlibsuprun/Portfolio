import { createStore } from 'vuex'

import expression from '@/store/modules/expression'
import theme from '@/store/modules/theme'

export default createStore({
  modules: {
    expression,
    theme
  }
})
