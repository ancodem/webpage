import React from 'react'
import { Typography } from '@mui/material'

import { Section } from './styles'

interface ContentProps {
  title: string
  children: React.ReactNode
  titleSX?: { [key: string]: string }
  boxSX?: { [key: string]: string }
}
const ContentSection
  : React.FC<ContentProps> =
  ({ title, children, boxSX, titleSX }) => (
    <Section component="section" sx={{ ...boxSX }}>
      <Typography variant="h4" sx={{ ...titleSX }}>
        {title}
      </Typography>
      {children}
    </Section>
  )

export default ContentSection


