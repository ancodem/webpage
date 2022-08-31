import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'

import { useAppSelector } from 'hooks'

export const Location: React.FC = () => {
  const [isInEditingMode, toggleEditing] = useState('')
  const { location } = useAppSelector(state => state.main)

  return (
    <Box>
      <Typography>
        {location}
      </Typography>
    </Box>
  )
}
