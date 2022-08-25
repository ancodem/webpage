import { styled, Typography, ListItem } from '@mui/material'

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

export const Item = styled(ListItem)(() => ({
  margin: '4px auto',
  padding: '0px',
  lineHeight: '20px',
  fontSize: '16px',
  '&::before': {
    content: '"–"',
    marginRight: '8px',
  }

}))
