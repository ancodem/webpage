import React from 'react'
import { Link, List, ListItem, Typography } from '@mui/material'
import { StackType } from 'store/reducers/reducer.types'
import { useAppSelector } from 'hooks'

const Experience: React.FC = () => {
  const { userStack } = useAppSelector(state => state.main)
  return (
    <article>
      <Typography variant="h4">
        Experience
      </Typography>
      <List>
        {userStack.map((s: StackType) =>
          <ListItem key={s.id}>
            <Typography sx={{ fontWeight: '700' }}>
              {s.technologyName}
            </Typography>
            <Link>
              {s.yearsOfExperience} years
            </Link>
          </ListItem>
        )}
      </List>
    </article>
  )
}

export default Experience
