import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType, StackType } from './reducer.types'

// INITIAL STATE ------------------------------------------------------------>
const initialState: StateType = {
  userName: 'John Smith',
  userStack: [
    { id: 1, technologyName: 'PHP', yearsOfExperience: 6 },
    { id: 2, technologyName: 'Java Script', yearsOfExperience: 4.5 },
    { id: 0, technologyName: 'Ruby', yearsOfExperience: 2 },
  ],
  userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96LXw5kEw5KkdaXE5m-CbOopopUdVYD-9fA&usqp=CAU',
  location: 'Portland, Oregon',
}

// SLICE -------------------------------------------------------------------->
/* eslint-disable no-param-reassign */
const mainSlice = createSlice({
  name: 'webpage-slice',
  initialState,
  reducers: {

    changeName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },

    addTechnology: (state, action: PayloadAction<StackType>) => {
      state.userStack.push({ ...action.payload })
    },

    deleteTechnology: (state, action: PayloadAction<number>) => {
      const toBeDeleted = state.userStack.findIndex(
        s => s.id === action.payload
      )
      state.userStack.splice(toBeDeleted, 1)
    },

    updateExperience: (
      state, action: PayloadAction<{ expId: number, expInput: number }>) => {
      const toBeChanged = state.userStack.findIndex(
        s => s.id === action.payload.expId
      )
      state.userStack[toBeChanged].yearsOfExperience = action.payload.expInput
      state.userStack.sort((s1, s2) => s2.yearsOfExperience - s1.yearsOfExperience)
    },
    updateLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    }
  },
})
/* eslint-enable no-param-reassign */

// EXPORTS ------------------------------------------------------------------>
export const allActions = mainSlice.actions
export default mainSlice.reducer
