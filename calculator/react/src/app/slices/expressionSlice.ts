import { createSlice } from '@reduxjs/toolkit'

type ExpressionState = {
  firstNumber: string
  sign: '/' | '*' | '-' | '+' | ''
  secondNumber: string
  solution: number
}

const initialState: ExpressionState = {
  firstNumber: '',
  sign: '',
  secondNumber: '',
  solution: 0
}

export const themeSlice = createSlice({
  name: 'expression',
  initialState,
  reducers: {}
})

// export const {} = themeSlice.actions

export default themeSlice.reducer
