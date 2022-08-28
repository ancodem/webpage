import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { store } from 'store/store'
import theme from 'style/theme'
import './index.css'

const App = lazy(() => import('pages/App'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
)
