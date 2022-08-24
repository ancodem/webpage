import React, { useState } from 'react'
import { Chip } from '@mui/material'

import { useActions } from 'hooks'
import DeleteIcon from './icons'

interface SkillProps {
  label: string
  id: number
}

const Skill: React.FC<SkillProps> = ({ label, id }) => {
  // STATE ------------------------------------------------------------------>
  const { deleteTechnology } = useActions()
  const [isVisible, toggleVisible] = useState(false)

  // LOGIC ------------------------------------------------------------------>
  const handleDelition
    : React.MouseEventHandler<SVGSVGElement> =
    () => deleteTechnology(id)


  const handleHover = (isHovering: boolean)
    : React.MouseEventHandler<HTMLElement> =>
    () => toggleVisible(isHovering)

  const handleVisibility = (isSeen: boolean)
    : React.MouseEventHandler<SVGSVGElement> =>
    () => toggleVisible(isSeen)

  // JSX -------------------------------------------------------------------->
  return (
    <article style={{ position: 'relative' }}>

      <Chip
        onMouseEnter={handleHover(true)}
        onMouseLeave={handleHover(false)}
        label={label}
      />
      {
        isVisible
          ? < DeleteIcon
            onMouseEnter={handleVisibility(true)}
            onMouseLeave={handleVisibility(false)}
            onClick={handleDelition}
          />
          : null
      }


    </article>
  )
}

export default Skill
