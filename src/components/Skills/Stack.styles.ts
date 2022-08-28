import { List, styled } from '@mui/material'
import Add from '@mui/icons-material/Add'

export const StackContainer = styled(List)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  padding: '0px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px auto',
    maxWidth: '70%',
  },

})) as typeof List

export const AddSkillButton = styled(Add)(() => ({
  height: '24px',
  width: '24px',
  backgroundColor: '#333333',
  color: 'white',
  borderRadius: '4px',

}))

