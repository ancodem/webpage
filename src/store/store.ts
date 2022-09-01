import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import mainReducer from 'store/reducers/mainReducer'
import { yandexMapApi } from 'services'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    [yandexMapApi.reducerPath]: yandexMapApi.reducer,
  },
  middleware: [thunk, yandexMapApi.middleware],
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
