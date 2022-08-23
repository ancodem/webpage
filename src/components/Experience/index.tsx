import React, { useState, useMemo } from 'react'
import { Box, List, Input, ListItem, Typography } from '@mui/material'

import { StackType } from 'store/reducers/reducer.types'
import { useActions, useAppSelector } from 'hooks'
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
    <Box sx={{ minWidth: '300px' }}>

      <Typography variant="h4">
        Experience
      </Typography>

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

    </Box>
  )
}

export default Experience
