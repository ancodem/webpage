import React from 'react'
import { Box, Typography } from '@mui/material'

import { QuoteContainer, Quote } from './styles'

interface QuoteProps {
  title: string
  quote: string
}

const BlockQuote: React.FC<QuoteProps> = ({ title, quote }) => (
  <Box
    sx={{
      width: '350px',
      padding: '0px',
      display: 'flex',
      textAlign: 'center',
    }}>
    <div>
      <Typography variant="h4" sx={{ mb: '40px' }}>
        {title}
      </Typography>
      <QuoteContainer>
        <Quote>
          {quote}
        </Quote>
      </QuoteContainer>
    </div>
  </Box>
)

export default BlockQuote
