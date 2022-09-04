import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'

export const YearsOfExperience = styled(Typography)(({ theme }) => ({
  textDecoration: 'underline dotted',
  color: theme.palette.link.main,
  marginLeft: '.5em',

  '&:hover': {
    color: theme.palette.hover.main,
  },

})) as typeof Typography

export const TechnologyName = styled(Typography)(() => ({
  fontWeight: '700',
  fontSize: '16px',

})) as typeof Typography

export const Item = styled(ListItem)(() => ({
  margin: '4px auto',
  lineHeight: '20px',
  fontSize: '16px',
  padding: '0px',

  '&::before': {
    marginRight: '8px',
    content: '"–"',
  }

})) 
