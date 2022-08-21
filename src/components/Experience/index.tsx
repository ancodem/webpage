import React from 'react'
import { Link, List, ListItem, Typography } from '@mui/material'

import { StackType } from 'store/reducers/reducer.types'
import { useAppSelector } from 'hooks'

const Experience: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userStack } = useAppSelector(state => state.main)
  const sortedStack = [...userStack].sort(
    (s1, s2) => s2.yearsOfExperience - s1.yearsOfExperience
  )

  // JSX -------------------------------------------------------------------->
  return (
    <article>

      <Typography variant="h4">
        Experience
      </Typography>

      <List>
        {sortedStack.map((s: StackType) =>

          <ListItem key={s.id}>
            <Typography sx={{ fontWeight: '700' }}>
              {s.technologyName}
            </Typography>

            <Typography
              sx={{
                color: '#3483CC',
                textDecoration: 'underline dotted',
                marginLeft: '.5em',
                '&:hover': {
                  color: '#EB5757'
                }
              }}>
              {s.yearsOfExperience} years
            </Typography>
          </ListItem>

        )}
      </List>

    </article>
  )
}

export default Experience
