import React, { useMemo } from 'react'
import { List } from '@mui/material'

import { useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import ExpItem from './ExpItem'

const Experience: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userStack } = useAppSelector(state => state.main)

  // LOGIC ------------------------------------------------------------------>
  const sortedStack = useMemo(() => [...userStack].sort(
    (s1, s2) => s2.yearsOfExperience - s1.yearsOfExperience
  ), [userStack])


  // JSX -------------------------------------------------------------------->
  return (
    <List>
      {sortedStack.map((s: StackType) =>
        <ExpItem
          key={s.id}
          id={s.id}
          name={s.technologyName}
          years={s.yearsOfExperience}
        />

      )}
    </List>
  )
}

export default Experience
