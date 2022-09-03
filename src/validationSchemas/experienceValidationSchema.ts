import * as yup from 'yup'

const experienceSchema = yup.object().shape({
  input: yup
    .number()
    .typeError('Use numbers!')
    .required('Field is empty')
    .positive('Not allowed')
    .max(70, 'Too much')
    .min(0.1)
})

export type ExperienceSchemaType = typeof experienceSchema
export default experienceSchema
