import { styled } from '@mui/material'
import Add from '@mui/icons-material/Add'
import List from '@mui/material/List'

export const StackContainer = styled(List)(({ theme }) => ({
  flexWrap: 'wrap',
  display: 'flex',
  padding: '0px',
  gap: '8px',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px auto',
    maxWidth: '70%',
  },

})) as typeof List

export const AddSkillButton = styled(Add)(() => ({
  backgroundColor: '#333333',
  borderRadius: '4px',
  color: 'white',
  height: '24px',
  width: '24px',

}))

