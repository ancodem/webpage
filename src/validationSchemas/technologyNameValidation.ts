import * as yup from 'yup'

const technologyNameSchema = yup.object().shape({
  input: yup
    .string()
    .required('Field is empty')
    .max(15, 'Too long')
    .trim()
})

export type TechnologyNameSchemaType = typeof technologyNameSchema
export default technologyNameSchema
