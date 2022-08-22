import styled from '@emotion/styled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Cancel from '@mui/icons-material/Cancel'

export const CheckIcon = styled(CheckCircleIcon)(() => ({
  color: '#33C127',
  position: 'absolute',
  right: '0.5em',
  top: '0.8em',
  height: '16px',
  widht: '16px',
}))

export const DeleteIcon = styled(Cancel)(() => ({
  height: '16px',
  widht: '16px',
}))
