import React from 'react'
import { List } from '@mui/material'

import { StackType } from 'store/reducers/reducer.types'
import { useAppSelector } from 'hooks'
import ExperienceItem from './ExpItem'

export const Experience: React.FC = () => {
  const { userStack } = useAppSelector(state => state.main)

  return (
    <List sx={{ padding: '0px' }}>
      {userStack.map((s: StackType) =>
        <ExperienceItem
          years={s.yearsOfExperience}
          name={s.technologyName}
          key={s.id}
          id={s.id}
        />

      )}
    </List>
  )
}
