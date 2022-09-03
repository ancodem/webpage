import * as yup from 'yup'

const noSpecialSymbolsSchema = yup.object().shape({
  input: yup
    .string().trim()
    .matches(/^[aA-zZ\s]+$/, 'Not allowed')
    .required('Field is empty')
    .max(50, 'Too long')
})

export type NoSpecialSymbolsSchemaType = typeof noSpecialSymbolsSchema
export default noSpecialSymbolsSchema
