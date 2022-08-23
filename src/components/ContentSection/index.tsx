import React from 'react'
import { Box, Typography } from '@mui/material'

interface ContentProps {
  title: string
  children: React.ReactNode
  titleSX?: { [key: string]: string }
  boxSX?: { [key: string]: string }
}
const ContentSection
  : React.FC<ContentProps> =
  ({ title, children, boxSX, titleSX }) => (
    <Box component="section" sx={{ ...boxSX }}>
      <Typography variant="h4" sx={{ ...titleSX }}>
        {title}
      </Typography>
      {children}
    </Box>
  )

export default ContentSection


