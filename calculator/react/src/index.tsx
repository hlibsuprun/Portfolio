import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import App from './App'
import store, { AppDispatch, RootState } from './app/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
