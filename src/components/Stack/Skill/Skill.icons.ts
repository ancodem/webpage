import { styled } from '@mui/material'
import Cancel from '@mui/icons-material/Cancel'

const DeleteIcon = styled(Cancel)(({ theme }) => ({
  position: 'absolute',
  zIndex: '2',
  top: '-8px',
  right: '-9px',
  height: '16px',
  widht: '16px',
  color: theme.palette.hover.main,

  '&:hover': {
    cursor: 'pointer',
  },
}))
export default DeleteIcon
