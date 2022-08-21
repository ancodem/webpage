import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useActions, useAppSelector } from 'hooks'
import { InputField } from 'style/reusableSC'
import { StackType } from 'store/reducers/reducer.types'
import { Skill, SkillBox } from './styles'

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

  return (
    <SkillBox>
      {userStack.map((s: StackType) =>
        <Skill key={s.id} label={s.technologyName} />
      )}
      {isInEditingMode
        ? <InputField
          autoFocus
          onKeyDown={handleSubmit}
          onChange={(e) => updateInput(e.target.value)}
          value={input}
          placeholder='skill'
        />
        : <Skill label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}
    </SkillBox>
  )
}

export default Skills
