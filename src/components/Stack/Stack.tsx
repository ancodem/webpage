import React, { Suspense, lazy, useCallback, useState } from 'react'

import { technologyNameSchema } from 'validationSchemas'
import { StackType } from 'store/reducers/reducer.types'
import { useActions, useAppSelector } from 'hooks'
import {
  AddSkillButton, StackContainer
} from './Stack.styles'
import Skill from './Skill'

const InputField = lazy(() => import('components/InputField'))

export const Stack: React.FC = () => {
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const { userStack } = useAppSelector(state => state.main)
  const { addTechnology } = useActions()

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
        ? <Suspense fallback={<AddSkillButton />}>
          <InputField
            validationSchema={technologyNameSchema}
            action={handleAddTechnology}
            handleToggleEditing={handleToggleEditing}
            placeholder=''
            sx={{ height: '24px' }}
          />
        </Suspense>
        : <AddSkillButton
          sx={{ cursor: 'pointer' }}
          onClick={() => toggleEditingMode(true)}
        />
      }
    </StackContainer>
  )
}
