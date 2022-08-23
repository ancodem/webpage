import { styled, Typography, Input } from '@mui/material'

export const YearsOfExperience = styled(Typography)(({ theme }) => ({
  color: theme.palette.link.main,
  textDecoration: 'underline dotted',
  marginLeft: '.5em',
  '&:hover': {
    color: theme.palette.hover.main,
  },
})) as typeof Typography

export const TechnologyName = styled(Typography)(() => ({
  fontWeight: '700',
})) as typeof Typography

export const EpxerienceInput = styled(Input)(() => ({
  marginLeft: '.5em',
  lineHeight: '20px',
  fontSize: '16px',
}))

export const ExperienceItem = styled(Input)(() => ({
  lineHeight: '20px',
  fontSize: '16px',
}))
