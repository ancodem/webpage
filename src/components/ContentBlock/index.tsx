import React from 'react'
import { Box, Typography } from '@mui/material'

interface ContentProps {
  title: string
  children: React.ReactNode
}
const ContentSection: React.FC<ContentProps> = ({ title, children }) => (
  <Box component="section">
    <Typography variant="h4">
      {title}
    </Typography>
    {children}
  </Box>
)

export default ContentSection


