import React, { useCallback, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { InputField } from 'components'

import { useActions, useAppSelector } from 'hooks'
import { noSpecialSymbolsSchema } from 'validationSchemas'

export const Location: React.FC = () => {
  const [isInEditingMode, toggleEditing] = useState(false)
  const { location } = useAppSelector(state => state.main)
  const { updateLocation } = useActions()
  const handleAction = useCallback(
    (input: string) => updateLocation(input)
    , [])

  const handleToggleEditing = useCallback((bool: boolean) => toggleEditing(bool), [])
  return (
    <Box>
      {isInEditingMode
        ? <InputField
          handleToggleEditing={handleToggleEditing}
          validationSchema={noSpecialSymbolsSchema}
          placeholder={location}
          action={handleAction}
        />
        : <Typography onClick={() => toggleEditing(true)}>
          {location}
        </Typography>

      }
    </Box>
  )
}
