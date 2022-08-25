import React, { useState } from 'react'
import SkillBadge from '@mui/material/Chip'

import { useActions } from 'hooks'
import { SkillContainer } from './Skill.styles'
import DeleteIcon from './Skill.icons'
import { SkillProps } from './Skill.types'


export const Skill: React.FC<SkillProps> = ({ label, id }) => {
  const { deleteTechnology } = useActions()
  const [isVisible, toggleVisible] = useState(false)

  const handleDelition
    : React.MouseEventHandler<SVGSVGElement> =
    () => deleteTechnology(id)

  const handleHover = (isHovering: boolean)
    : React.MouseEventHandler<HTMLElement> =>
    () => toggleVisible(isHovering)

  const handleVisibility = (isSeen: boolean)
    : React.MouseEventHandler<SVGSVGElement> =>
    () => toggleVisible(isSeen)

  return (
    <SkillContainer >

      <SkillBadge
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
    </SkillContainer>
  )
}
