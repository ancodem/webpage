import {
  NameSchemaType, TechnologyNameSchemaType, ExperienceSchemaType
} from 'validationSchemas/validation.types'

export interface FormValues {
  input: string
}

export interface InputProps {
  validationSchema:
  NameSchemaType | TechnologyNameSchemaType | ExperienceSchemaType
  action: (arg: any) => void
  handleToggleEditing: (arg: boolean) => void
  placeholder: string | number
  sx?: {
    [attr: string]: string
  }
}
