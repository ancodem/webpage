import React from 'react'
import { Box, Typography } from '@mui/material'

import { QuoteContainer, Quote } from './styles'

interface QuoteProps {
  children: React.ReactNode
}

const BlockQuote: React.FC<QuoteProps> = ({ children }) => (
  <QuoteContainer>
    <Quote>
      {children}
    </Quote>
  </QuoteContainer>
)

export default BlockQuote
