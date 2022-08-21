import React, { useState } from 'react'
import { Typography } from '@mui/material'

import { useAppSelector } from 'hooks'

const Location: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const [isInEditingMode, toggleEditing] = useState('')
  const { location } = useAppSelector(state => state.main)

  // JSX -------------------------------------------------------------------->
  return (
    <article>
      <Typography>
        {location}
      </Typography>
    </article>
  )
}

export default Location
