import React, { useState } from 'react'
import { Box } from '@mui/material'

import { useAppSelector, useActions } from 'hooks'
import { nameSchema } from 'validationSchemas'
import { InputField } from 'components'
import { Name } from './NameField.styles'

export const NameField: React.FC = () => {
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const { userName } = useAppSelector(state => state.main)
  const { changeName } = useActions()

  return (
    <Box component="header">
      {isInEditingMode
        ? <InputField
          handleToggleEditing={toggleEditingMode}
          validationSchema={nameSchema}
          placeholder={userName}
          action={changeName}
          sx={{
            lineHeight: '48px',
            fontWeight: '500',
            fontSize: '40px',
            height: '48px',
            width: '360px',
          }}
        />
        : <Name onClick={() => toggleEditingMode(true)}>
          {userName}
        </Name>
      }
    </Box>
  )
}
