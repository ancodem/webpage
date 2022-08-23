import React from 'react'
import { Box, Typography } from '@mui/material'

import { QuoteContainer, Quote } from './styles'

interface QuoteProps {
  children: React.ReactNode
}

const BlockQuote: React.FC<QuoteProps> = ({ children }) => (
  <Box
    component="blockquote"
    sx={{
      width: '350px',
      padding: '0px',
      display: 'flex',
      textAlign: 'center',
    }}>
    <QuoteContainer>
      <Quote>
        {children}
      </Quote>
    </QuoteContainer>
  </Box>
)

export default BlockQuote
