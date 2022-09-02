import { Skeleton, styled, Box } from '@mui/material'

export const MapContainer = styled(Box)(({ theme }) => ({
  minWidth: '550px',
  height: '200px',
  marginBottom: '30px',
  borderRadius: '6px',
  [theme.breakpoints.down('lg')]: {
    minWidth: '424px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
    minWidth: '550px',
    height: '500px',
    marginBottom: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '280px',
    height: '400px',
  },
}))

export const MapSkeleton = styled(Skeleton)(() => ({
  borderRadius: '6px',
  height: '200px',
  width: '552px',
  padding: '0',
})) as typeof Skeleton
