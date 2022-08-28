import React from 'react'

import { QuoteContainer, Quote } from './BlockQuote.styles'

interface QuoteProps {
  children: React.ReactNode
}

export const BlockQuote: React.FC<QuoteProps> = ({ children }) => (
  <QuoteContainer>
    <Quote>
      {children}
    </Quote>
  </QuoteContainer>
)
