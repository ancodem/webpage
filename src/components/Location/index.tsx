import { Typography } from '@mui/material'
import { useAppSelector } from 'hooks'
import React, { useState } from 'react'

const Location: React.FC = () => {
  const [isInEditingMode, toggleEditing] = useState('')
  const { location } = useAppSelector(state => state.main)
  return (
    <article>
      <Typography>
        {location}
      </Typography>
    </article>
  )
}

export default Location
