
import * as yup from 'yup'

const experienceSchema = yup.object().shape({
  input: yup
    .string().trim()
    .required('Field is empty')
    .max(20, 'Too long')
    .matches(/^[aA-zZ\s]+$/, 'Not allowed')
})

export type ExperienceSchemaType = typeof experienceSchema
export default experienceSchema
