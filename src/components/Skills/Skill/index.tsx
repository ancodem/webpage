import React, { useState } from 'react'
import { Chip } from '@mui/material'

import { useActions } from 'hooks'
import { DeleteIcon } from 'style/icons'

interface SkillProps {
  label: string
  id: number
}

const Skill: React.FC<SkillProps> = ({ label, id }) => {
  // STATE ------------------------------------------------------------------>
  const { deleteTechnology } = useActions()
  const [isVisible, toggleVisible] = useState(false)

  // LOGIC ------------------------------------------------------------------>
  const handleDelition: React.MouseEventHandler<HTMLDivElement> = () => {
    deleteTechnology(id)
  }

  // JSX -------------------------------------------------------------------->
  return (
    <article>

      <Chip
        onMouseEnter={() => toggleVisible(true)}
        onMouseLeave={() => toggleVisible(false)}
        label={label}
        onClick={handleDelition}
      />
      {
        isVisible
          ? < DeleteIcon />
          : null
      }


    </article>
  )
}

export default Skill