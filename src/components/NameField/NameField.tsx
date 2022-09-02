import React, { useState, Suspense } from 'react'
import { Box } from '@mui/material'

import { useAppSelector, useActions } from 'hooks'
import { noSpecialSymbolsSchema } from 'validationSchemas'
import { Name } from './NameField.styles'

const InputField = React.lazy(() => import('components/InputField'))

export const NameField: React.FC = () => {
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const { userName } = useAppSelector(state => state.main)
  const { changeName } = useActions()

  return (
    <Box component="header">
      {isInEditingMode
        ? <Suspense fallback={<Name>{userName}</Name>}>
          <InputField
            handleToggleEditing={toggleEditingMode}
            validationSchema={noSpecialSymbolsSchema}
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
        </Suspense>
        : <Name onClick={() => toggleEditingMode(true)}>
          {userName}
        </Name>
      }
    </Box>
  )
}
