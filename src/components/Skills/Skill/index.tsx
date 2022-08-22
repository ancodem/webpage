import { Chip } from '@mui/material'
import { useActions } from 'hooks'
import React from 'react'

interface SkillProps {
  label: string
  id: number
}

const Skill: React.FC<SkillProps> = ({ label, id }) => {
  const { deleteTechnology } = useActions()

  const handleDelition: React.MouseEventHandler<HTMLDivElement> = () => {
    deleteTechnology(id)
  }

  return (
    <article>
      <Chip label={label} onClick={handleDelition} />
    </article>
  )
}

export default Skill
