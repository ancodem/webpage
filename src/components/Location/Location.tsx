import React, { useCallback, useState } from 'react'
import { Typography, Box } from '@mui/material'

import { useActions, useAppSelector } from 'hooks'
import { noSpecialSymbolsSchema } from 'validationSchemas'

const InputField = React.lazy(() => import('components/InputField'))

export const Location: React.FC = () => {
  const [isInEditingMode, toggleEditing] = useState(false)
  const { location } = useAppSelector(state => state.main)
  const { updateLocation } = useActions()
  const handleAction = useCallback(
    (input: string) => updateLocation(input)
    , [])

  const handleToggleEditing = useCallback((bool: boolean) => toggleEditing(bool), [])
  return (
    <Box
      component="address"
      sx={{fontStyle: 'normal'}}
    >
      {isInEditingMode
        ? <InputField
          handleToggleEditing={handleToggleEditing}
          validationSchema={noSpecialSymbolsSchema}
          placeholder={location}
          action={handleAction}
          sx={{ width: '360px', height: '24px' }}
        />
        : <Typography
          onClick={() => toggleEditing(true)}
          sx={{ fontSize: '16px' }}
        >
          {location}
        </Typography>
      }
    </Box>
  )
}
