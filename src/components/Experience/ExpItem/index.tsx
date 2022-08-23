import React, { useState } from 'react'
import { ListItem } from '@mui/material'

import { useActions } from 'hooks'
import {
  TechnologyName, YearsOfExperience, EpxerienceInput
} from './styles'

interface ExperienceProps {
  id: number
  name: string
  years: number
}

const ExpItem: React.FC<ExperienceProps> =
  ({ id, name, years }) => {

    // STATE ---------------------------------------------------------------->
    const [isInEditingMode, toggleEditingMode] = useState(false)
    const [input, updateInput] = useState(0)
    const { updateExperience } = useActions()

    // LOGIC ---------------------------------------------------------------->
    const handleToggleEditingMode = (isEditing: boolean)
      : React.MouseEventHandler<HTMLElement> =>
      () => toggleEditingMode(isEditing)

    const handleInputUpdate
      : React.ChangeEventHandler<HTMLInputElement> =
      (e) => updateInput(+e.target.value)

    const handleSubmit = (expId: number, expInput: number)
      : React.KeyboardEventHandler<HTMLInputElement> =>
      (e) => {
        if (e.keyCode === 13) {
          updateExperience({ expId, expInput })
          updateInput(0)
          toggleEditingMode(false)
        }
      }

    // JSX ------------------------------------------------------------------>
    return (
      <ListItem>

        <TechnologyName>
          {name}
        </TechnologyName>

        {
          isInEditingMode
            ? <EpxerienceInput
              error={Number.isNaN(input)}
              autoFocus
              onKeyDown={handleSubmit(id, input)}
              onChange={handleInputUpdate}
              value={input}
              placeholder='experience'
            />
            : <YearsOfExperience
              onClick={handleToggleEditingMode(true)}
            >
              {years} years
            </YearsOfExperience>
        }
      </ListItem>
    )
  }

export default ExpItem
