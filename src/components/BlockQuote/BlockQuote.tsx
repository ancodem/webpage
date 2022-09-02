import React from 'react'

import { QuoteProps } from './BlockQuote.types'
import { QuoteContainer, Quote } from './BlockQuote.styles'

export const BlockQuote: React.FC<QuoteProps> = ({ children }) => (
  <QuoteContainer>
    <Quote>
      {children}
    </Quote>
  </QuoteContainer>
)
