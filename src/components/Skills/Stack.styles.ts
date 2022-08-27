import { List, styled } from '@mui/material'
import Add from '@mui/icons-material/Add'

export const StackContainer = styled(List)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  padding: '0px',
})) as typeof List

export const AddSkillButton = styled(Add)(() => ({
  height: '24px',
  width: '24px',
  backgroundColor: '#333333',
  color: 'white',
  borderRadius: '4px',

}))

