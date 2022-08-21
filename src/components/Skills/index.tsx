import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Chip, Input } from '@mui/material'
import { useActions, useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { SkillBox } from './styles'

const Skills: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userStack } = useAppSelector(state => state.main)
  const { addTechnology } = useActions()
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const [input, updateInput] = useState('')

  // LOGIC ------------------------------------------------------------------>
  const handleSubmit: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13) {
      addTechnology({
        id: Date.now(),
        technologyName: e.currentTarget.value,
        yearsOfExperience: 0,
      })
      updateInput('')
      toggleEditingMode(false)
    }
  }

  // JSX -------------------------------------------------------------------->
  return (
    <SkillBox>
      {userStack.map((s: StackType) =>
        <Chip key={s.id} label={s.technologyName} /> /* STACK ============> */
      )}

      {isInEditingMode /* ADD BUTTON =====================================> */
        ? <Input
          autoFocus
          onKeyDown={handleSubmit}
          onChange={(e) => updateInput(e.target.value)}
          value={input}
          placeholder='skill'
        />
        : <Chip label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}

    </SkillBox>
  )
}

export default Skills
