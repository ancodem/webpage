import { configureStore } from '@reduxjs/toolkit'
import mainReducer from 'store/reducers/mainReducer'
import thunk from 'redux-thunk'

// STORE -------------------------------------------------------------------->
export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: [thunk],
})

// REDUX TYPES -------------------------------------------------------------->
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
