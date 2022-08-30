import { configureStore } from '@reduxjs/toolkit'

import expressionReducer from './slices/expressionSlice'
import themeReducer from './slices/themeSlice'

const store = configureStore({
  reducer: {
    expression: expressionReducer,
    theme: themeReducer
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
