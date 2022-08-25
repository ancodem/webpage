import React, { useMemo } from 'react'
import { List } from '@mui/material'

import { useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import ExperienceItem from './ExpItem'

export const Experience: React.FC = () => {
  const { userStack } = useAppSelector(state => state.main)

  const sortedStack = useMemo(() => [...userStack].sort(
    (s1, s2) => s2.yearsOfExperience - s1.yearsOfExperience
  ), [userStack])

  return (
    <List sx={{ padding: '0px' }}>
      {sortedStack.map((s: StackType) =>
        <ExperienceItem
          key={s.id}
          id={s.id}
          name={s.technologyName}
          years={s.yearsOfExperience}
        />

      )}
    </List>
  )
}
