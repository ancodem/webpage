import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType, StackType } from './reducer.types'

// INITIAL STATE ------------------------------------------------------------>
const initialState: StateType = {
  userName: 'John Smith',
  userStack: [
    { id: 0, technologyName: 'Ruby', yearsOfExperience: 2 },
    { id: 1, technologyName: 'PHP', yearsOfExperience: 6 },
    { id: 2, technologyName: 'Java Script', yearsOfExperience: 4.5 },
  ],
  userAvatar: 'https://resize-media.festival-cannes.com/fit-in/2560x1620/media_image/0001/48/c3c10a98dd47ddf0cba7be6850f0815dae7841a8.jpeg',
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
    }
  },
})
/* eslint-enable no-param-reassign */

// EXPORTS ------------------------------------------------------------------>
export const allActions = mainSlice.actions
export default mainSlice.reducer
