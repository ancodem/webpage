import { styled } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const ContentTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '14px',
  textAlign: 'left',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }

})) as typeof Typography

export const Section = styled(Box)(({ theme }) => ({
  justifSelf: 'flext-start',
  boxSsizing: 'border-box',
  flexDirection: 'column',
  display: 'inline-flex',
  minWidth: '250px',

  [theme.breakpoints.down('lg')]: {
    minWidth: '200px',
    flexWrap: 'wrap',
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }

})) as typeof Box

export const ContentSkeleton = styled(Skeleton)(() => ({
  minWidth: '250px'
}))
