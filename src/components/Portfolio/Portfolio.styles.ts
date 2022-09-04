import { styled } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Link from '@mui/material/Link'

export const PortfolioList = styled(List)(() => ({
  width: '264px',
  padding: '0px',

})) as typeof List

export const PortfolioItem = styled(ListItem)(() => ({
  padding: '4px 0px',
  minHeight: '20px',
  maxWidth: '245px',
  display: 'flex',

  '&::before': {
    alignSelf: 'baseline',
    marginRight: '8px',
    marginTop: '0px',
    content: '"–"',
  },

}))

export const PortfolioLink = styled(Link)(() => ({
  width: 'inherit',

}))
