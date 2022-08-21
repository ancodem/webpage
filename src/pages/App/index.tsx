import React from 'react'
import { Header, Portfolio, Experience } from 'components'
import { Box } from '@mui/material'

const App: React.FC = () => (
  <>
    <Header />

    <Box sx={{ padding: '56px 156px' }}>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <Portfolio />
        <Experience />
      </Box>
    </Box>
  </>
)

export default App
