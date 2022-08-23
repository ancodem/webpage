import { styled, Skeleton } from '@mui/material'

// eslint-disable-next-line
export const MapSkeleton = styled(Skeleton)(() => ({
  borderRadius: '6px',
  height: '200px',
  width: '552px',
  padding: '0',
})) as typeof Skeleton
