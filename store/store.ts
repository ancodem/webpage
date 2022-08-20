import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from 'redux/mainReducer'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    main: contactsReducer
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
