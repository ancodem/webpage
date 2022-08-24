import React, { useState } from 'react'
import { useAppSelector, useActions } from 'hooks'
import { Box, Typography } from '@mui/material'
import { FormikProps, useFormik } from 'formik'

import { InputField } from 'components'
import { CorrectIcon, WrongIcon } from 'style/icons'
import { nameSchema } from 'validationSchemas'
import { Name, NameInput, ErrorMessage } from './styles'

interface FormValues {
  input: string
}

const NameField: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userName } = useAppSelector(state => state.main)
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const { changeName } = useActions()

  // LOGIC ------------------------------------------------------------------>
  // JSX -------------------------------------------------------------------->
  return (
    <article>

      {isInEditingMode
        ? <InputField
          validationSchema={nameSchema}
          action={changeName}
          handleToggleEditing={toggleEditingMode}
          placeholder={userName}
          sx={{
            fontWeight: '500',
            lineHeight: '48px',
            height: '48px',
            fontSize: '40px',
            width: '360px',
          }}
        />

        : <Name onClick={() => toggleEditingMode(true)}>{userName}</Name>
      }

    </article>
  )
}
export default NameField
