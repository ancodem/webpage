import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StateType {
  input: string
}

const initialState: StateType = {
  input: '',
}

const mainSlice = createSlice({
  name: 'webpage-slice',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    },
  },
})

export const allActions = mainSlice.actions
export default mainSlice.reducer
