import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './slices/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
