import React from 'react'
import { Link, List, ListItem, Typography } from '@mui/material'

const sampleWorks: Array<{ id: number, title: string }> = [
  { id: 0, title: 'Bootstrap 4 Material Design (Sample Link)' },
  { id: 1, title: 'Modern JavaScript stack' },
  { id: 2, title: 'Datepicker for twitter bootstrap' },
  { id: 3, title: 'Fast and reliable Bootstrap widgets in Angular ' },
]

const Portfolio: React.FC = () => (
  <article>

    <Typography variant='h4'>Portfolio</Typography>

    <List>
      {sampleWorks.map(work =>

        <ListItem key={work.id}>
          <Link href={work.title}>{work.title}</Link>
        </ListItem>)}

    </List>

  </article>
)
export default Portfolio
