import React from 'react'
import { Typography } from '@mui/material'

import { Section } from './ContentSection.style'
import { ContentProps } from './ContentSection.types'

export const ContentSection
  : React.FC<ContentProps> =
  ({ title, children, boxSX, titleSX }) => (
    <Section sx={{ ...boxSX }}>
      <Typography variant="h4" sx={{ ...titleSX }}>
        {title}
      </Typography>
      {children}
    </Section>
  )
