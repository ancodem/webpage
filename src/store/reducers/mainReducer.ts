import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from './reducer.types'

// INITIAL STATE ------------------------------------------------------------>
const initialState: StateType = {
  input: '',
}

// SLICE -------------------------------------------------------------------->
/* eslint-disable no-param-reassign */
const mainSlice = createSlice({
  name: 'webpage-slice',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    },
  },
})
/* eslint-enable no-param-reassign */

// EXPORTS ------------------------------------------------------------------>
export const allActions = mainSlice.actions
export default mainSlice.reducer
