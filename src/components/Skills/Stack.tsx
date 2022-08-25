import React, { useCallback, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import SkillAddButton from '@mui/material/Chip'

import { InputField } from 'components'
import { technologyNameSchema } from 'validationSchemas'
import { useActions, useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { StackContainer } from './Stack.styles'
import Skill from './Skill'

export const Stack: React.FC = () => {
  const { userStack } = useAppSelector(state => state.main)
  const { addTechnology } = useActions()
  const [isInEditingMode, toggleEditingMode] = useState(false)

  const handleAddTechnology = useCallback((arg: string) => {
    addTechnology(
      { id: Date.now(), technologyName: arg, yearsOfExperience: 0 }
    )
  }, [])

  const handleToggleEditing = useCallback(
    (arg: boolean) => toggleEditingMode(arg), []
  )

  return (
    <StackContainer>
      {userStack.map((s: StackType) => /* STACK ==========================> */
        <Skill key={s.id} id={s.id} label={s.technologyName} />
      )}

      {isInEditingMode
        ? <InputField
          validationSchema={technologyNameSchema}
          action={handleAddTechnology}
          handleToggleEditing={handleToggleEditing}
          placeholder=''
        />
        : <SkillAddButton label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}

    </StackContainer>
  )
}
