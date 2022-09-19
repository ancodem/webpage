import React from 'react'
import { useFormik, FormikProps } from 'formik'

import { InputProps, FormValues } from './InputField.types'
import {
  CorrectIcon, WrongIcon, InputContainer, InputArea, WarningMessage
} from './InputField.styles'

export const InputField: React.FC<InputProps> = (
  { validationSchema, handleToggleEditing, action, placeholder, sx }
) => {

  const {
    values, errors, touched, handleSubmit, handleChange, handleBlur
  }
    : FormikProps<FormValues> =
    useFormik<FormValues>({
      initialValues: {
        input: ''
      },
      validationSchema,
      // eslint-disable-next-line
      onSubmit: (values, actions) => {
        action(values.input)
        handleToggleEditing(false)
        actions.resetForm()
      }
    })

  return (
    <InputContainer
      role='form'
      component="form"
      onSubmit={handleSubmit}>
      <InputArea
        id='input'
        autoFocus
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.input}
        placeholder={String(placeholder)}
        sx={{ ...sx }}
      />
      {errors.input && touched.input
        ? <WrongIcon /> : <CorrectIcon />}
      <WarningMessage>
        {errors.input && touched.input
          ? errors.input : null}
      </WarningMessage>
    </InputContainer>

  )

}
