import { Skeleton, styled, Box } from '@mui/material'

export const MapContainer = styled(Box)(({ theme }) => ({
  marginBottom: '30px',
  borderRadius: '6px',
  minWidth: '550px',
  height: '200px',

  [theme.breakpoints.down('lg')]: {
    minWidth: '424px',
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: '40px',
    marginTop: '20px',
    minWidth: '550px',
    height: '500px',
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: '280px',
    height: '400px',
  },

})) as typeof Box

export const MapSkeleton = styled(Skeleton)(() => ({
  borderRadius: '6px',
  height: '200px',
  width: '552px',
  padding: '0',

})) as typeof Skeleton
