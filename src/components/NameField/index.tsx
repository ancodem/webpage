import React, { useState } from 'react'
import { useAppSelector, useActions } from 'hooks'
import { Box, Typography } from '@mui/material'
import { CorrectIcon, WrongIcon } from 'style/icons'

import { FormikProps, useFormik } from 'formik'
import { Name, NameInput, ErrorMessage } from './styles'
import nameSchema from './schema'

interface FormValues {
  input: string
}

const NameField: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userName } = useAppSelector(state => state.main)
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const { changeName } = useActions()

  // LOGIC ------------------------------------------------------------------>
  const {
    values, errors, touched, handleSubmit, handleChange, handleBlur
  }
    : FormikProps<FormValues> =
    useFormik<FormValues>({
      initialValues: {
        input: ''
      },
      validationSchema: nameSchema,
      // eslint-disable-next-line
      onSubmit: (values, actions) => {
        changeName(values.input)
        toggleEditingMode(false)
        actions.resetForm()
      }
    })

  // JSX -------------------------------------------------------------------->
  return (
    <article>

      {isInEditingMode
        ? <Box
          sx={{ position: 'relative' }}
          component="form"
          onSubmit={handleSubmit}>
          <NameInput
            id='input'
            autoFocus
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.input}
            placeholder={userName}
          />
          {errors.input && touched.input
            ? <WrongIcon /> : <CorrectIcon />}
          {errors.input && touched.input
            ? <ErrorMessage>{errors.input}</ErrorMessage>
            : null
          }
        </Box>
        : <Name onClick={() => toggleEditingMode(true)}>{userName}</Name>
      }

    </article>
  )
}
export default NameField
