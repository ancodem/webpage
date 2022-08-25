import React, { useCallback, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Chip, Input } from '@mui/material'

import { InputField } from 'components'
import { technologyNameSchema } from 'validationSchemas'
import { useActions, useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { SkillBox } from './styles'
import Skill from './Skill'

const Skills: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userStack } = useAppSelector(state => state.main)
  const { addTechnology } = useActions()
  const [isInEditingMode, toggleEditingMode] = useState(false)

  // LOGIC ------------------------------------------------------------------>
  const handleAddTechnology = useCallback((arg: string) => {
    addTechnology(
      { id: Date.now(), technologyName: arg, yearsOfExperience: 0 }
    )
  }, [])

  const handleToggleEditing = useCallback(
    (arg: boolean) => toggleEditingMode(arg), []
  )

  // JSX -------------------------------------------------------------------->
  return (
    <SkillBox>
      {userStack.map((s: StackType) => /* STACK ==========================> */
        <Skill key={s.id} id={s.id} label={s.technologyName} />
      )}

      {isInEditingMode /* ADD BUTTON =====================================> */
        ? <InputField
          validationSchema={technologyNameSchema}
          action={handleAddTechnology}
          handleToggleEditing={handleToggleEditing}
          placeholder=''
        />
        : <Chip label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}

    </SkillBox>
  )
}

export default Skills
