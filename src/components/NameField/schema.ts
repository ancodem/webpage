import * as yup from 'yup'

const nameSchema = yup.object().shape({
  input: yup
    .string().trim()
    .required('Field is empty')
    .max(20, 'Too long')
    .matches(/^[aA-zZ\s]+$/, 'Not allowed')
})
export default nameSchema
