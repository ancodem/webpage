import React, { lazy, Suspense, useCallback, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

import { technologyNameSchema } from 'validationSchemas'
import { useActions, useAppSelector } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { StackContainer } from './Stack.styles'
import Skill from './Skill'

const InputField = lazy(() => import('components/InputField'))
const SkillAddButton = lazy(() => import('@mui/material/Chip'))

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
        <Suspense fallback={<li>skill</li>}>
          <Skill key={s.id} id={s.id} label={s.technologyName} />
        </Suspense>
      )}

      {isInEditingMode
        ? <Suspense fallback={<li>loading...</li>}>
          <InputField
            validationSchema={technologyNameSchema}
            action={handleAddTechnology}
            handleToggleEditing={handleToggleEditing}
            placeholder=''
          />
        </Suspense>
        : <Suspense fallback={<li>loading...</li>}>
          <SkillAddButton label={<AddIcon />}
            onClick={() => toggleEditingMode(true)}
          />
        </Suspense>
      }
    </StackContainer>
  )
}
