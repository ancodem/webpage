import React from 'react'
import { useFormik, FormikProps } from 'formik'

import {
  NameSchemaType, TechnologyNameSchemaType, ExperienceSchemaType
} from 'validationSchemas/validation.types'
import {
  CorrectIcon, WrongIcon, InputContainer, InputArea
} from './styles'

interface FormValues {
  input: string
}

interface InputProps {
  validationSchema:
  NameSchemaType | TechnologyNameSchemaType | ExperienceSchemaType
  action: (arg: any) => void
  handleToggleEditing: (arg: boolean) => void
  placeholder: string | number
  sx?: {
    [attr: string]: string
  }
}

const InputField: React.FC<InputProps> = (
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
    </InputContainer>

  )

}
export default InputField
