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
  const handleDelition: React.MouseEventHandler<SVGSVGElement> = () => {
    deleteTechnology(id)
  }

  // JSX -------------------------------------------------------------------->
  return (
    <article style={{ position: 'relative' }}>

      <Chip
        onMouseEnter={() => toggleVisible(true)}
        onMouseLeave={() => toggleVisible(false)}
        label={label}
      />
      {
        isVisible
          ? < DeleteIcon
            onMouseEnter={() => toggleVisible(true)}
            onMouseLeave={() => toggleVisible(false)}
            onClick={handleDelition}
          />
          : null
      }


    </article>
  )
}

export default Skill
