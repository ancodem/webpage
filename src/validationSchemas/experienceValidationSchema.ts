import * as yup from 'yup'

const experienceSchema = yup.object().shape({
  input: yup
    .number()
    .typeError('Use numbers!')
    .positive('Not allowed')
    .required('Field is empty')
    .min(0.1)
    .max(70, 'Too much')
})

export type ExperienceSchemaType = typeof experienceSchema
export default experienceSchema
