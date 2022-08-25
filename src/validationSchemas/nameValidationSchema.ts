import * as yup from 'yup'

const nameSchema = yup.object().shape({
  input: yup
    .string().trim()
    .required('Field is empty')
    .max(50, 'Too long')
    .matches(/^[aA-zZ\s]+$/, 'Not allowed')
})

export type NameSchemaType = typeof nameSchema
export default nameSchema
