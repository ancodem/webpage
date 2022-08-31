import * as yup from 'yup'

const noSpecialSymbolsSchema = yup.object().shape({
  input: yup
    .string().trim()
    .required('Field is empty')
    .max(50, 'Too long')
    .matches(/^[aA-zZ\s]+$/, 'Not allowed')
})

export type NoSpecialSymbolsSchemaType = typeof noSpecialSymbolsSchema
export default noSpecialSymbolsSchema
