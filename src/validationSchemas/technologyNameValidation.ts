import * as yup from 'yup'

const technologyNameSchema = yup.object().shape({
  input: yup
    .string()
    .trim()
    .required('Field is empty')
    .max(15, 'Too long')
})

export type TechnologyNameSchemaType = typeof technologyNameSchema
export default technologyNameSchema
